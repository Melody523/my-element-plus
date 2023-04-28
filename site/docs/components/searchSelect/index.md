# SearchSelect 模糊下拉弹窗选择器

可模糊下拉搜索选择数据，亦可通过弹窗选择器选择数据，并可在弹窗中回显选中数据。支持排除功能。

## 基础用法

可模糊下拉搜索选择数据，亦可通过弹窗选择器选择数据，并可在弹窗中回显选中数据。支持排除功能。
::: demo `SearchSelect`组件中`v-model`绑定的是输入框回显的值，`v-model:ruleModel`绑定的是排除项的值，通过`initItem`的属性`ruleOutKey`设置排除项的 key， `key`设置输入框的 key。`searchBy`基于什么 key 进行筛选 同时作为 label 值，亦可通过`labelFormat`自定义 label 值,`initialDataSource`表格初始值，`renderFunc`请求结果的处理函数,`dealFetchFunc`请求前的 form 处理函数,`initMultiple`是否启用多选,`catchValue`简化数据项,`checkTable`回传选中的 list,`catchValueAll`是否返回所有数据不做过滤,`fetchUrl`请求 url,`pagination`翻页 params,`onDialogShow`设置弹窗的配置项,显示弹窗，`onSearchClear`输入框清空回调,`custDialog` 下拉选中时回调。

```vue
<template>
  <div>
    <div class="search_select_box">
      <SearchSelect
        v-model="form['searchSelect_1']"
        :ruleModel="form['searchSelectRuleOutKey_1']"
        :initItem="{
          ruleOutKey: 'searchSelectRuleOutKey_1',
          key: 'searchSelect_1',
          useCheckTable: true,
        }"
        :checkTable="form?.['checkTable']?.['searchSelect_1']"
        v-bind="{ fetchUrl, initMultiple: true, searchBy: 'name' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      />
      <SearchSelect
        v-model="form['searchSelect_2']"
        :initItem="{ key: 'searchSelect_2', useCheckTable: true }"
        :checkTable="form?.['checkTable']?.['searchSelect_2']"
        v-bind="{ fetchUrl, initMultiple: true, searchBy: 'name' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      />
      <SearchSelect
        v-model="form['searchSelect_3']"
        :initItem="{ key: 'searchSelect_3', useCheckTable: true }"
        :checkTable="form?.['checkTable']?.['searchSelect_3']"
        v-bind="{
          fetchUrl,
          initMultiple: false,
          searchBy: 'name',
          labelFormat: ['code', 'name'],
        }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      />
      <SearchSelect
        v-model="form['searchSelect_4']"
        :initItem="{ key: 'searchSelect_4', useCheckTable: true }"
        :checkTable="form?.['checkTable']?.['searchSelect_4']"
        v-bind="{
          fetchUrl,
          initMultiple: true,
          searchBy: 'name',
          labelFormat: ['name', 'other'],
          catchValueAll: true,
          renderFunc,
        }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      />
      <SearchSelect
        v-model="form['searchSelect_5']"
        :initItem="{ key: 'searchSelect_5', useCheckTable: true }"
        :checkTable="form?.['checkTable']?.['searchSelect_5']"
        v-bind="{
          initialDataSource: mockData(15),
          initMultiple: true,
          searchBy: 'name',
          catchValueAll: true,
        }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      />
    </div>
    <Selection
      ref="selectionRef"
      v-model="visible"
      @cust-handle="custDialog"
      v-bind="{ ...searchData, staticData }"
    />
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      form: {},
      visible: false,
      staticData: {
        name: [
          { label: "名称1", value: "名称1" },
          { label: "名称2", value: "名称2" },
        ],
      },
      searchData: {},
      setFormValue: {
        searchSelect_1: { searchSelect_1: "name", searchSelectId_1: "id" },
        searchSelectRuleOutKey_1: { searchSelectRuleOutKey_1: "id" },
        searchSelect_2: { searchSelect_2: "name" },
        searchSelect_3: { searchSelect_3: "name" },
        searchSelect_4: { searchSelect_4: "name" },
        searchSelect_5: { searchSelect_5: "name" },
      },
    });
    const mockData = (count = 20, startCount = 1) => {
      let data = [];
      for (let i = startCount; i <= count; i++) {
        data.push({ id: i, name: `名称${i}`, code: `code${i}` });
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
    const renderFunc = (res: any) => {
      return {
        ...res,
        data: res.data?.map((item) => ({ ...item, other: "renderFunc后的列" })),
      };
    };
    const onDialogShow = (key: string) => {
      switch (key) {
        case "searchSelect_1":
        case "searchSelect_2":
        case "searchSelectRuleOutKey_1": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl,
          };
          state.visible = true;
          break;
        }
        case "searchSelect_3": {
          state.searchData = {
            title: "单选弹窗选择器",
            selectKey: key,
            isRadio: true,
            fetchUrl,
          };
          state.visible = true;
          break;
        }
        case "searchSelect_4": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl,
            renderFunc,
            showTableList: {
              code: { key: "code", label: "编码", isShow: true },
              name: { key: "name", label: "名称", isShow: true },
              id: { key: "other", label: "other列", isShow: true },
            },
          };
          state.visible = true;
          break;
        }
        case "searchSelect_5": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            initialDataSource: mockData(15),
          };
          state.visible = true;
          break;
        }
        default:
          break;
      }
      state.searchData = {
        ...state.searchData,
        checkTable: state.form?.checkTable?.[key] || [],
      };
    };
    const filterCheckTableList = (list: any, catchValue: any) => {
      return (
        list?.map((item: any) => {
          let Obj = {};
          catchValue?.forEach((itm: any) => {
            Obj[itm] = item[itm] || "";
          });
          return Obj;
        }) || []
      );
    };
    const custDialog = (data: any, key = "") => {
      const { list, type } = data;
      let dialogKey = key == "" ? type : key;
      let catchValue = ["id", "code", "name", "other"];
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
          [dialogKey]: filterCheckTableList(list, catchValue),
        },
        ...operaData,
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
    return {
      ...toRefs(state),
      onDialogShow,
      custDialog,
      onSearchClear,
      fetchUrl,
      renderFunc,
      mockData,
    };
  },
});
</script>
```

:::

## SearchSelect Attributes

| 参数              | 说明                                                                | 类型           | 可选值 | 默认值                       |
| :---------------- | :------------------------------------------------------------------ | :------------- | :----- | :--------------------------- |
| v-model           | 绑定值                                                              | string         | -      | -                            |
| :ruleModel        | 绑定的是排除项的值                                                  | string         | -      | -                            |
| disabled          | 是否禁用                                                            | boolean        | -      | false                        |
| rowKey            | table 唯一 key                                                      | string         | -      | id                           |
| initMultiple      | 是否启用多选                                                        | boolean        | -      | true                         |
| searchBy          | 外部下拉基于什么 key 进行筛选 labelFormat 没配置下同时作为 label 值 | string         | -      | true                         |
| labelFormat       | 回传选中的 list                                                     | array          | -      | -                            |
| checkTable        | 自定义 label 值                                                     | array/function | -      | -                            |
| catchValueAll     | 是否返回所有数据，不做过滤                                          | boolean        | -      | false                        |
| fetchUrl          | 请求 Url                                                            | function       | -      | -                            |
| renderFunc        | 请求结果的处理函数                                                  | function       | -      | -                            |
| dealFetchFunc     | 请求前的 form 处理函数                                              | function       | -      | -                            |
| params            | 请求 params                                                         | object         | -      | -                            |
| initialDataSource | 表格初始值                                                          | array          | -      | -                            |
| pagination        | 翻页 params                                                         | object         | -      | currentPage: 1, pageSize: 15 |
| initItem          | 组件配置 config,参考下表                                            | Object         | -      | -                            |

## SearchSelect initItem

| 参数        | 说明             | 类型     | 可选值 | 默认值 |
| :---------- | :--------------- | :------- | :----- | :----- |
| key         | 绑定值的 key     | string   | -      | -      |
| ruleOutKey  | 排除项的 key     | string   | -      | -      |
| placeholder | 占位符           | string   | -      | -      |
| clearData   | 需要清空的数据   | {}       | -      | -      |
| callback    | 清空数据时的回调 | function | -      | -      |

## SearchSelect Events

| 事件名称      | 说明                      | 回调参数                        |
| :------------ | :------------------------ | :------------------------------ |
| onDialogShow  | 设置弹窗的配置项,显示弹窗 | key 弹窗 key                    |
| onSearchClear | 点击清空 icon 时回调      | arg, key, callback 对应上表的值 |
| custHandle    | 选中值改变时回调          | list 选择的 list, key           |
| change        | 值改变时回调              | 选中值                          |

## Selection Attributes

| 参数              | 说明                     | 类型     | 可选值 | 默认值                                                                                                                                    |
| :---------------- | :----------------------- | :------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| v-model           | 绑定的是弹窗的显示或隐藏 | boolean  | -      | false                                                                                                                                     |
| selectKey         | 所选数据给对应的 key     | string   | -      | -                                                                                                                                         |
| title             | 弹窗标题                 | string   | -      | -                                                                                                                                         |
| showFormList      | 设置弹窗的搜索条件       | object   | -      | { code: { key: "code", label: "编码", isShow: true, type: "input" }, name: { key: "name", label: "名称", isShow: true, type: "input" }, } |
| showTableList     | 显示的 table 字段        | object   | -      | { code: { key: "code", label: "编码", isShow: true }, name: { key: "name", label: "名称", isShow: true }, }                               |
| isRadio           | 是否单选                 | boolean  | -      | true                                                                                                                                      |
| checkTable        | 回传选中的 list          | array    | -      | -                                                                                                                                         |
| rowKey            | table 唯一 key           | string   | -      | id                                                                                                                                        |
| confirmClose      | 点击确认后是否关闭弹窗   | boolean  | -      | true                                                                                                                                      |
| fetchUrl          | 请求 Url                 | function | -      | -                                                                                                                                         |
| renderFunc        | 请求结果的处理函数       | function | -      | -                                                                                                                                         |
| dealFetchFunc     | 请求前的 form 处理函数   | function | -      | -                                                                                                                                         |
| initValue         | 初始参数,重置后清空      | object   | -      | -                                                                                                                                         |
| defaultValue      | 默认参数,重置后回填      | object   | -      | -                                                                                                                                         |
| hasPagination     | 是否有翻页               | boolean  | -      | -                                                                                                                                         |
| initialDataSource | 表格初始值               | array    | -      | -                                                                                                                                         |
| staticData        | 下拉选择框静态数据       | object   | -      | -                                                                                                                                         |

## Selection Events

| 事件名称   | 说明           | 回调参数                                                  |
| :--------- | :------------- | :-------------------------------------------------------- |
| custHandle | 弹窗确认时回调 | visible,list,type 弹窗显示情况,选择的 list,上表对应的 key |
