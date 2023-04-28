# BasicSelectModal 弹窗选择器
通过弹窗选择器选择数据，并可在弹窗中回显选中数据。支持排除功能。
## 基础用法
用于选择弹窗数据，并可设置排除项。
::: demo `BasicSelectModal`组件中`v-model`绑定的是输入框回显的值，`v-model:ruleModel`绑定的是排除项的值，通过`initItem`的属性`ruleOutKey`设置排除项的key， `key`设置输入框的key。`onDialogShow`设置弹窗的配置项,显示弹窗，`onSearchClear`输入框清空回调。`Selection`组件中 `v-model`绑定的是弹窗的显示或隐藏，`selectKey`为所选数据给对应的key,`showFormList`和`showTableList`分别设置弹窗的搜索条件和列表字段，`isRadio`是否单选，`checkTable`回传选中的list，`rowKey`列表key值，`fetchUrl`请求url,`initValue`初始参数,重置后清空,`defaultValue`默认参数,重置后回填,`initialDataSource`表格初始值,`staticData`下拉选择框静态数据,`renderFunc`请求结果的处理函数,`custDialog` 弹窗确认时回调。

```vue 
<template>
  <div>
    <div class="basic_select_modal_box">
      <BasicSelectModal
        v-model="form['basicSelectModal_1']"
        :ruleModel="form['basicSelectModalRuleOutKey_1']"
        :initItem="{ ruleOutKey: 'basicSelectModalRuleOutKey_1', key: 'basicSelectModal_1' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <BasicSelectModal
        v-model="form['basicSelectModal_2']"
        :initItem="{ key: 'basicSelectModal_2' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <BasicSelectModal
        v-model="form['basicSelectModal_3']"
        :initItem="{ key: 'basicSelectModal_3' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <BasicSelectModal
        v-model="form['basicSelectModal_4']"
        :initItem="{ key: 'basicSelectModal_4' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <BasicSelectModal
        v-model="form['basicSelectModal_5']"
        :initItem="{ key: 'basicSelectModal_5' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <BasicSelectModal
        v-model="form['basicSelectModal_6']"
        :initItem="{ key: 'basicSelectModal_6' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
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
const { reactive, defineComponent, toRefs } = Vue
export default defineComponent({
  setup() {
    const state = reactive<any>({
      form: {},
      visible: false,
      staticData: {
        name: [
          { label: "名称1", value: '名称1' },
          { label: "名称2", value: '名称2' },
        ]
      },
      searchData: {},
      setFormValue: {
        "basicSelectModal_1": { "basicSelectModal_1": 'name', "basicSelectModalId_1": 'id' },
        'basicSelectModalRuleOutKey_1': { 'basicSelectModalRuleOutKey_1': 'id', },
        'basicSelectModal_3': { 'basicSelectModal_3': 'name' },
        'basicSelectModal_4': { 'basicSelectModal_4': 'name' },
        'basicSelectModal_5': { 'basicSelectModal_5': 'name' },
        'basicSelectModal_6': { 'basicSelectModal_6': 'name' },
      }
    });
    const mockData = (count = 20, startCount = 1) => {
      let data = []
      for(let i = startCount; i <= count; i++) {
        data.push({ id: i, name: `名称${i}`, code: `code${i}` })
      }
      return data
    }
    const fetchUrl = (params: any) => {
      return new Promise((resolve, reject) => {
        resolve({
          data: mockData(params.currentPage * params.pageSize, (params.currentPage - 1) * params.pageSize + 1),
          count: 45,
        });
      });
    };
    const renderFunc = (res: any) => {
      return { ...res, data: res.data?.map(item => ({ ...item, other:'renderFunc后的列' })) }
    }
    const onDialogShow = (key: string) => {
      switch (key) {
        case "basicSelectModal_1": 
        case "basicSelectModalRuleOutKey_1": 
        case "basicSelectModal_2": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl: fetchUrl,
          };
          state.visible = true;
          break;
        }
        case "basicSelectModal_3": {
          state.searchData = {
            title: "单选弹窗选择器",
            selectKey: key,
            isRadio: true,
            fetchUrl: fetchUrl,
          };
          state.visible = true;
          break;
        }
        case "basicSelectModal_4": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            initialDataSource: mockData(15),
            showFormList: {
              code: { key: "code", label: "编码", isShow: true, type: "input" },
              name: { key: "name", label: "名称", isShow: true, type: "select", multiple: true },
            },
            showTableList: {
              id: { key: "id", label: "id", isShow: true },
              code: { key: "code", label: "编码", isShow: true },
              name: { key: "name", label: "名称", isShow: true },
            },
          };
          state.visible = true;
          break;
        }
        case "basicSelectModal_5": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            initialDataSource: mockData(15),
            initValue: { name: '名称10' },
            defaultValue: { code: 'code10' },
          };
          state.visible = true;
          break;
        }
        case "basicSelectModal_6": {
          state.searchData = {
            title: "多选弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl: fetchUrl,
            renderFunc: renderFunc,
            showTableList: {
              code: { key: "code", label: "编码", isShow: true },
              name: { key: "name", label: "名称", isShow: true },
              id: { key: "other", label: "other列", isShow: true },
            },
          };
          state.visible = true;
          break;
        }
        default:
          break;
      }
      
      state.searchData = {
        ...state.searchData,
        checkTable:
          state.form?.checkTable?.[key] || [],
      };
    };
    const filterCheckTableList = (
      list: any,
      catchValue: any
    ) => {
      return (
        list?.map((item: any) => {
          let Obj = {};
          catchValue?.forEach((itm: any) => {
            Obj[itm] = item[itm] || '';
          });
          return Obj;
        }) || []
      );
    };
    const custDialog = (data: any, key = "") => {
      const { list, type } = data;
      let dialogKey = key == "" ? type : key;
      let catchValue = ["id", "code", "name"]
      let operaData = {};
      Object.keys(state.setFormValue[dialogKey])?.map(item => {
        operaData[item] = list.map((itm: any) => itm[state.setFormValue[dialogKey][item]])
      })
      state.form = {
        ...state.form,
        checkTable: {
          ...state.form?.checkTable,
          [dialogKey]: filterCheckTableList(list, catchValue),
        },
        ...operaData,
      }
    };
    const onSearchClear = (arg: any, key: any) => {
      let operaData = {};
      Object.keys(state.setFormValue[key])?.map(item => {
        operaData[item] = null
      })
      state.form = {
        ...state.form,
        checkTable: {
          ...state.form?.checkTable,
          [key]: [],
        },
        ...operaData,
      }
    };
    return {
      ...toRefs(state),
      onDialogShow,
      custDialog,
      onSearchClear,
    };
  },
});
</script>
```
:::
## BasicSelectModal Attributes
|  参数   | 说明  | 类型 | 可选值 | 默认值 |
| :---  | :---  | :--- | :--- | :--- |
|  v-model |  绑定值 | string | - | - |
|  :ruleModel | 绑定的是排除项的值  | string | - | - |
|  placeholder |  占位符 | string | - | - |
|  disabled | 是否禁用  | boolean | - | false |
|  initItem | 组件配置config,参考下表  | Object | - | - |

## BasicSelectModal initItem
|  参数   | 说明  | 类型 | 可选值 | 默认值 |
| :---  | :---  | :--- | :--- | :--- |
| key  | 绑定值的key  | string | - | - |
| ruleOutKey  | 排除项的key  | string | - | - |
| clearData  |  需要清空的数据 | {} | - | - |
| callback  |  清空数据时的回调 | function | - | - |

## BasicSelectModal Events
|  事件名称  | 说明  | 回调参数 |
| :---  | :---  | :--- |
|  onDialogShow | 设置弹窗的配置项,显示弹窗  | key 弹窗key |
|  onSearchClear | 点击清空icon时回调  | arg, key, callback 对应上表的值 |

## Selection Attributes
|  参数   | 说明  | 类型 | 可选值 | 默认值 |
| :---  | :---  | :--- | :--- | :--- |
|  v-model |  绑定的是弹窗的显示或隐藏 | boolean | - | false |
|  selectKey | 所选数据给对应的key  | string | - | - |
|  title | 弹窗标题  | string | - | - |
|  showFormList | 设置弹窗的搜索条件  | object | - | { code: { key: "code", label: "编码", isShow: true, type: "input" }, name: { key: "name", label: "名称", isShow: true, type: "input" }, } |
|  showTableList |  显示的table字段 | object | - | { code: { key: "code", label: "编码", isShow: true }, name: { key: "name", label: "名称", isShow: true }, } |
|  isRadio | 是否单选  | boolean | - | true |
|  checkTable |  回传选中的list | array | - | - |
|  rowKey |  table唯一key | string | - | id |
|  confirmClose | 点击确认后是否关闭弹窗  | boolean | - | true |
|  fetchUrl | 请求Url  | function | - | - |
|  renderFunc | 请求结果的处理函数  | function | - | - |
|  dealFetchFunc | 请求前的form处理函数  | function | - | - |
|  initValue | 初始参数,重置后清空  | object | - | - |
|  defaultValue | 默认参数,重置后回填  | object | - | - |
|  hasPagination | 是否有翻页  | boolean | - | - |
|  initialDataSource |  表格初始值 | array | - | - |
|  staticData |  下拉选择框静态数据 | object | - | - |

## Selection Events
|  事件名称  | 说明  | 回调参数 |
| :---  | :---  | :--- |
|  custHandle | 弹窗确认时回调  | visible,list,type弹窗显示情况,选择的list,上表对应的key |