# RCForm 表单组件

由输入框、日期选择器、多单号输入、弹窗选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

## 基础用法

由输入框、日期选择器、多单号输入、弹窗选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。
::: demo `v-model`绑定表单的值，`formList`为表单枚举项，`rowNumber`为每行表单项数量，`staticData`静态枚举,**注意**格式参考例子，`labelWidth`为 label 宽度，`formRules`为校验规则，`titleType`为标题类型。

```vue
<template>
  <div>
    <div class="rc_form_box">
      <RCForm
        ref="rcFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          formRules: rules,
          rowNumber: 2,
          titleType: 'detail',
        }"
        v-model="form"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      >
        <template v-slot:otherMessage>
          <div class="btn_tools">
            <Button type="plain" @click="resetForm">重置</Button>
            <Button class="mrgl_10" @click="logForm">提交</Button>
          </div>
        </template>
      </RCForm>
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
      rcFormRef: ref(null),
      visible: false,
      formList: [
        {
          key: "baseMessage",
          type: "br",
          contant: "基本信息",
          isShow: true,
        },
        {
          key: "input",
          label: "输入框",
          isShow: true,
        },
        {
          key: "radioSelect",
          label: "下拉单选",
          type: "select",
          isShow: true,
          options: [
            { value: "1", label: "选择1" },
            { value: "2", label: "选择2" },
          ],
        },
        {
          key: "selectWith",
          label: "下拉单选value+label",
          type: "selectWith",
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
          key: "dateSelect",
          label: "日期选择器",
          type: "dateSelect",
          isShow: true,
        },
        {
          key: "dateTimeSelect",
          label: "日期时间选择器",
          type: "dateSelect",
          selectTime: true,
          isShow: true,
        },
        {
          key: "date",
          label: "日期选择",
          type: "date",
          isShow: true,
        },
        {
          key: "daterange",
          label: "日期范围选择",
          type: "daterange",
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
        {
          key: "remark",
          label: "备注",
          isShow: true,
          type: "remark",
          span: 24,
        },
        {
          key: "otherMessage",
          type: "br",
          slotName: "otherMessage",
          isShow: true,
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
    const logForm = () => {
      state.rcFormRef
        .submit()
        .then((res: any) => {
          console.log(res);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    const resetForm = () => {
      state.form = {};
    };
    return {
      ...toRefs(state),
      onDialogShow,
      onSearchClear,
      custDialog,
      fetchUrl,
      logForm,
      resetForm,
    };
  },
});
</script>
```

:::

## 通过接口获取表单数据

通过fetchUrl获取表单数据
::: demo `fetchUrl`获取表单数据接口，`params`接口请求参数，`renderFunc`返回值处理。

```vue
<template>
  <div>
    <div class="rc_form_box">
      <RCForm
        ref="rcFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          formRules: rules,
          rowNumber: 2,
          titleType: 'detail',
          fetchUrl: fetchApi,
          params: { input: '输入框' },
          renderFunc,
        }"
        v-model="form"
      >
        <template v-slot:otherMessage>
          <div class="btn_tools">
            <Button type="plain" @click="resetForm">重置</Button>
            <Button class="mrgl_10" @click="logForm">提交</Button>
          </div>
        </template>
      </RCForm>
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
    const fetchApi = (params: any) => {
      return new Promise((resolve, reject) => {
        resolve({
          input: '输入框',
          radioSelect: '1',
          selectWith: 'code1',
        });
      });
    }
    let id = 0;
    const state = reactive<any>({
      rcFormRef: ref(null),
      visible: false,
      formList: [
        {
          key: "baseMessage",
          type: "br",
          contant: "基本信息",
          isShow: true,
        },
        {
          key: "input",
          label: "输入框",
          isShow: true,
        },
        {
          key: "radioSelect",
          label: "下拉单选",
          type: "select",
          isShow: true,
          options: [
            { value: "1", label: "选择1" },
            { value: "2", label: "选择2" },
          ],
        },
        {
          key: "selectWith",
          label: "下拉单选value+label",
          type: "selectWith",
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
          key: "dateSelect",
          label: "日期选择器",
          type: "dateSelect",
          isShow: true,
        },
        {
          key: "dateTimeSelect",
          label: "日期时间选择器",
          type: "dateSelect",
          selectTime: true,
          isShow: true,
        },
        {
          key: "date",
          label: "日期选择",
          type: "date",
          isShow: true,
        },
        {
          key: "daterange",
          label: "日期范围选择",
          type: "daterange",
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
        {
          key: "remark",
          label: "备注",
          isShow: true,
          type: "remark",
          span: 24,
        },
        {
          key: "otherMessage",
          type: "br",
          slotName: "otherMessage",
          isShow: true,
        },
      ],
      staticData: {
        selectWith: mockData(10),
      },
      rules: {
        input: [{ required: true, message: "请填写输入框", trigger: "blur" }],
      },
      form: {},
    });
    const logForm = () => {
      state.rcFormRef
        .submit()
        .then((res: any) => {
          console.log(res);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    const resetForm = () => {
      state.form = {};
    };
    const renderFunc = (res: any) => {
      return { ...res, remark: '备注信息' }
    }
    return {
      ...toRefs(state),
      fetchUrl,
      logForm,
      resetForm,
      fetchApi,
      renderFunc,
    };
  },
});
</script>
```

:::

## 文本形式的Form

用于详情下显示text文本的情况
::: demo `formList`配置项配置对应的text类型。

```vue
<template>
  <div>
    <div class="rc_form_box">
      <RCForm
        ref="rcFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          rowNumber: 2,
          titleType: 'detail',
          fetchUrl: fetchApi,
          params: { input: '输入框' },
          renderFunc,
        }"
        v-model="form"
      >
      </RCForm>
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
    const fetchApi = (params: any) => {
      return new Promise((resolve, reject) => {
        resolve({
          text: '普通文本Text',
          textDate: '2023-04-27 16:55:59',
          textJoin1: ['名称1', '名称2'],
          textJoin2: ['名称1', '名称2'],
          textJoin3: ['名称1', '名称2'],
          textWith: 'code1',
          textFormat: '111',
          selectText: 'code2',
        });
      });
    }
    let id = 0;
    const state = reactive<any>({
      rcFormRef: ref(null),
      visible: false,
      formList: [
        {
          key: "baseMessage",
          type: "br",
          contant: "基本信息",
          isShow: true,
        },
        {
          key: "text",
          label: "普通文本",
          isShow: true,
          type: 'text',
        },
        {
          key: "textDate",
          label: "日期文本",
          isShow: true,
          type: 'textDate',
        },
        {
          key: "textJoin1",
          label: "默认数组拼接文本",
          isShow: true,
          type: 'textJoin',
        },
        {
          key: "textJoin2",
          label: "/数组拼接文本",
          isShow: true,
          type: 'textJoin',
          joinStr: '/'
        },
        {
          key: "textJoin3",
          label: "-数组拼接文本",
          isShow: true,
          type: 'textJoin',
          joinStr: '-'
        },
        {
          key: "selectText",
          label: "select文本",
          isShow: true,
          type: 'text',
        },
        {
          key: "selectText",
          selectKey: 'textWith',
          label: "select文本",
          isShow: true,
          type: 'text',
        },
        {
          key: "textWith",
          label: "label+name文本",
          isShow: true,
          type: 'textWith',
        },
        {
          key: "textFormat",
          label: "textFormat文本",
          isShow: true,
          type: 'text',
          textFormat: (target: any, item: any) => {
            return target + 'textFormat'
          }
        },
      ],
      staticData: {
        textWith: mockData(10),
        selectText: mockData(10),
      },
      form: {},
    });
    return {
      ...toRefs(state),
      fetchUrl,
      fetchApi,
    };
  },
});
</script>
```

:::

## RCForm Attributes

|  参数   | 说明  | 类型 | 可选值 | 默认值 |
| :---  | :---  | :--- | :--- | :--- |
|  v-model |  绑定表单的值 | object | - | {} |
|  formList | 表单枚举项  | array | - | [] |
|  rowNumber |  每行表单项数量 | number | - | 3 |
|  staticData |  静态枚举 | object | - | {} |
|  labelWidth | label 宽度  | string | - | 100px |
|  formRules | 校验规则  | Object | - | {} |
|  titleType | 标题类型  | string | - | - |
|  fetchUrl | 获取表单数据接口  | function | - | - |
|  params | 接口请求参数  | function | - | - |
|  titleType | 标题类型  | object | - | {} |
|  renderFunc | 返回值处理  | function | - | - |

## RCForm Events

| 事件名称      | 说明                      | 回调参数                        |
| :------------ | :------------------------ | :------------------------------ |
| onDialogShow  | 设置弹窗的配置项,显示弹窗 | key 弹窗 key  row                   |
| onSearchClear | 点击清空 icon 时回调      | arg, key, callback 对应上表的值 |
| custDialog    | 弹窗选择器选中值改变时回调          | list 选择的 list, key           |
| inputEnter | 键盘 enter 键回调 | function | -      | -      |

## formList 配置规则
涉及`initItem`和`modelProps`的组件宿舍都直接和key写在同级。
- `key`: 表单项对应的key
- `label`: 表单项对应的label
- `isShow`: 表单项是否显示
- `ruleDisabled`：校验规则是否禁用
- `disabled`：是否禁用
- `disabledFun`：禁用处理方法
- `changeCallBack`：改变值回调函数
- `placeholder`： 占位符
- `type`: 表单项类型
  - `br`: 换行标志，当`titleType`为`detail`时匹配对应的标题样式。亦可设置插槽`slotName`来回显插槽内容,比如操作列按钮通过插槽传入。设置`contant`会显示`contant`内容，可通过修改类名`slot-content`修改样式。
  - `text`,`textDate`,`textJoin`,`textWith`：显示文本内容，通过不同类型处理。`joinStr`属性为拼接字符串，`textFormat`来自定义拼接文本，`selectKey`为匹配的枚举项，不填默认为key。
  - `modalTextarea`：多单号查询，参数和多单号查询组件属性一样。
  - `select`、`selectWith`：`multiple`是否多选，`tags`tag数，默认1，其他折叠，`noClearable`非清空属性，`options`设置对应枚举，没设置则取`staticData`的静态枚举，如果设置`selectKey`,则取`selectKey`对应的枚举，否则取`key`的枚举。`selectWith`包括`value`和`label`。
  - `date`, `daterange`, `datetime`, `datetimerange`,`year`:时间选择器。`disabledDate`禁用日期。
  - `digitalRange`：数字区间组件属性一样。
  - `dateSelect`：日期选择器组件属性一样。
  - `search`：弹窗选择器组件属性一样。
  - `searchSelect`：模糊下拉弹窗选择器组件属性一样。
  - `cascader`: 级联选择器，`cascaderProps`配置对应级联选择器`props`.
  - `radio`：单选。
  - `inputNumber`：数字输入框，`min`配置最小值，`max`配置最大值。
  - `remark`, `textarea`, `input`: `maxlength`最大长度。
