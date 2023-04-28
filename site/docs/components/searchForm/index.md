# SearchForm 搜索表单组件

结合 RCForm 表单组件 添加搜索和重置按钮。

## 基础用法
::: demo 传参`RCform`组件的基础上增加属性和方法。`toolsListDisabled`为操作按钮是否禁用。`show` 默认展开所有表单项，`keepShow` 默认点击搜索后不会自动收起表单项，`maxHeight` 表单容器超过最大高度后滚动显示,默认400。

```vue
<template>
  <div>
    <div class="rc_form_box">
      <SearchForm
        ref="searchFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          rowNumber: 2,
          show: true,
          keepShow: true,
          toolsListDisabled: false,
        }"
        v-model="form"
        @onSearchSubmit="onSearchSubmit"
        @onDialogShow="onDialogShow"
      />
      <Selection
        ref="selectionRef"
        v-model="visible"
        @cust-handle="custDialog"
        v-bind="{ ...searchData, staticData }"
      />
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs, ref } = Vue;
export default defineComponent({
  setup() {
    const mockData = (count = 20, startCount = 1) => {
      let data = [];
      for (let i = startCount; i <= count; i++) {
        data.push({
          id: i,
          name: `名称${i}`,
          code: `code${i}`,
          label: `名称${i}`,
          value: `code${i}`,
        });
      }
      return data;
    };
    const fetchUrl = (params: any) => {
      return new Promise((resolve, reject) => {
        resolve({
          data: mockData(
            params.currentPage * params.pageSize,
            (params.currentPage - 1) * params.pageSize + 1
          ),
          count: 45,
        });
      });
    };
    let id = 0;
    const state = reactive<any>({
      searchFormRef: ref(null),
      visible: false,
      formList: [
        {
          key: "input",
          label: "输入框",
          isShow: true,
        },
        {
          key: "multipleSelect",
          selectKey: "selectWith",
          label: "下拉多选",
          type: "select",
          isShow: true,
          multiple: true,
        },
        {
          key: "digitalRange",
          label: "区间输入",
          type: "digitalRange",
          isShow: true,
        },
        {
          key: "datetime",
          label: "日期时间选择",
          type: "datetime",
          isShow: true,
        },
        {
          key: "datetimerange",
          label: "日期时间范围选择",
          type: "datetimerange",
          isShow: true,
        },
        {
          key: "year",
          label: "年份选择",
          isShow: true,
          type: "year",
          disabledDate: (time: any) => {
            return time.getTime() <= Date.now();
          },
        },
        {
          key: "cascader",
          label: "级联选择器",
          isShow: true,
          type: "cascader",
          cascaderProps: {
            lazy: true,
            lazyLoad(node: any, resolve: any) {
              const { level } = node;
              setTimeout(() => {
                const nodes = Array.from({ length: level + 1 }).map((item) => ({
                  value: ++id,
                  label: `选项${id}`,
                  leaf: level >= 2,
                }));
                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                resolve(nodes);
              }, 1000);
            },
          },
        },
        {
          key: "searchNumberList",
          label: "多单号查询",
          type: "modalTextarea",
          isShow: true,
        },
        {
          key: "searchNumberListOut",
          label: "多单号查询+排除",
          type: "modalTextarea",
          isShow: true,
          ruleOutKey: "searchNumberOutKey", // 排除功能所需要的key
          ruleTitle: "排除单号",
        },
        {
          key: "search",
          label: "单选弹窗选择器+排除",
          type: "search",
          isShow: true,
          ruleOutKey: "searchOut",
          fetchUrl,
          initMultiple: false,
        },
        {
          key: "search2",
          label: "多选弹窗选择器+排除",
          type: "search",
          isShow: true,
          ruleOutKey: "searchOut2",
          fetchUrl,
          initMultiple: true,
        },
        {
          key: "selectSearch1",
          label: "模糊下拉选择器+排除",
          type: "searchSelect",
          searchBy: "name",
          fetchUrl,
          rowKey: "code",
          initMultiple: true,
          catchValueAll: true,
          ruleOutKey: "selectSearchOut1",
          isShow: true,
          useCheckTable: true,
        },
        {
          key: "selectSearch2",
          label: "模糊下拉选择器单选",
          type: "searchSelect",
          searchBy: "name",
          fetchUrl,
          rowKey: "code",
          initMultiple: false,
          labelFormat: ["code", "name"],
          catchValueAll: true,
          isShow: true,
          useCheckTable: true,
        },
        {
          key: "selectSearch3",
          label: "模糊下拉选择器",
          type: "searchSelect",
          searchBy: "name",
          rowKey: "code",
          initMultiple: true,
          disabled: false,
          catchValueAll: true,
          isShow: true,
          initialDataSource: mockData(15),
          ruleOutKey: "selectSearchOut3",
          useCheckTable: true,
        },
        {
          key: "radio",
          label: "单选",
          isShow: true,
          type: "radio",
          options: [
            { value: 0, name: "否" },
            { value: 1, name: "是" },
          ],
        },
        {
          key: "inputNumber",
          label: "输入数字",
          isShow: true,
          type: "inputNumber",
        },
      ],
      staticData: {
        selectWith: mockData(10),
      },
      rules: {
        input: [{ required: true, message: "请填写输入框", trigger: "blur" }],
      },
      form: {},
      searchData: {},
      setFormValue: {
        search: { search: "name", searchId: "id" },
        searchOut: { searchOut: "id" },
        search2: { search2: "name" },
        searchOut2: { searchOut2: "id" },
        selectSearch1: { selectSearch1: "name" },
        selectSearchOut1: { selectSearchOut1: "id" },
        selectSearch2: { selectSearch2: "name" },
        selectSearchOut2: { selectSearchOut2: "id" },
        selectSearch3: { selectSearch3: "name" },
        selectSearchOut3: { selectSearchOut3: "id" },
      },
    });
    const onDialogShow = (key: string, item: any) => {
      if (!key) return;
      state.searchData = {
        title: "弹窗选择器",
        selectKey: key,
        isRadio: !item.initMultiple,
        fetchUrl: item.fetchUrl,
        initialDataSource: item.initialDataSource,
      };
      state.visible = true;
      state.searchData = {
        ...state.searchData,
        checkTable: state.form?.checkTable?.[key] || [],
      };
    };
    const onSearchClear = (arg: any, key: any) => {
      let operaData = {};
      Object.keys(state.setFormValue[key])?.map((item) => {
        operaData[item] = null;
      });
      state.form = {
        ...state.form,
        checkTable: {
          ...state.form?.checkTable,
          [key]: [],
        },
        ...operaData,
      };
    };
    const custDialog = (data: any, key = "") => {
      const { list, type } = data;
      let dialogKey = key == "" ? type : key;
      let operaData = {};
      Object.keys(state.setFormValue[dialogKey])?.map((item) => {
        operaData[item] = list.map(
          (itm: any) => itm[state.setFormValue[dialogKey][item]]
        );
      });
      state.form = {
        ...state.form,
        checkTable: {
          ...state.form?.checkTable,
          [dialogKey]: list,
        },
        ...operaData,
      };
    };
    const onSearchSubmit = (res: any) => {
			console.log(res);
		}
    const resetForm = () => {
      state.form = {};
    };
    return {
      ...toRefs(state),
      onDialogShow,
      onSearchClear,
      custDialog,
      fetchUrl,
      onSearchSubmit,
      resetForm,
    };
  },
});
</script>
```

:::

## SearchForm Attributes
**注意** 除以下属性外还包含RCform属性
|  参数   | 说明  | 类型 | 可选值 | 默认值 |
| :---  | :---  | :--- | :--- | :--- |
|  v-model |  绑定表单的值 | object | - | {} |
|  toolsListDisabled | 操作按钮是否禁用  | boolean | - | false |
|  show |  是否展开所有表单项 | boolean | - | true |
|  keepShow |  点击搜索后是否自动收起表单项 | boolean | - | true |
|  maxHeight | 表单容器超过最大高度后滚动显示  | string | - | 400 |

## SearchForm Events

| 事件名称      | 说明                      | 回调参数                        |
| :------------ | :------------------------ | :------------------------------ |
| onDialogShow  | 设置弹窗的配置项,显示弹窗 | key 弹窗 key  row                   |
| onSearchSubmit | 点击搜索时回调      | res 表单结果 |
| custDialog    | 弹窗选择器选中值改变时回调          | list 选择的 list, key           |
| onReset | 点击重置时回调 | function | -      | -      |