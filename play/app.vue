<template>
  <div>
    <el-config-provider :locale="locale">
      <SearchForm
        ref="SearchFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          hasSetting: true,
          show: true,
        }"
        v-model="form"
        @onSearchSubmit="onSearchSubmit"
        @onDialogShow="onDialogShow"
      />
      <RCForm
        ref="rcFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '140px',
          formRules: rules,
        }"
        v-model="form"
      >
        <template v-slot:br1>
          <div style="padding: 12px; color: red">第一个标题</div>
        </template>
        <template v-slot:br2>
          <div style="padding: 12px; color: blue">第二个标题</div>
        </template>
      </RCForm>
      <div class="at_button_box">
        <Button @click="logForm">默认状态</Button>
        <Button disabled>默认禁用</Button>
        <Button loading>默认加载</Button>
        <Button disabled loading>默认禁用加载</Button>
        <Button iconType="svg" icon="icon-copy">自定义按钮</Button>
        <Button type="primary">次一级按钮</Button>
        <Button disabled type="primary">次一级按钮禁用</Button>
        <Button loading type="primary">次一级按钮加载</Button>
        <Button disabled loading type="primary">次一级按钮禁用加载</Button>
        <Button iconType="svg" icon="icon-copy" type="primary">
          次一级自定义按钮
        </Button>
        <Button type="plain">再次一级按钮</Button>
        <Button type="plain" disabled>再次一级按钮</Button>
        <Button loading type="plain">再次一级按钮加载</Button>
        <Button loading disabled type="plain">再次一级按钮禁用加载</Button>
        <Button iconType="svg" icon="icon-copy" type="plain">
          再次一级自定义按钮
        </Button>
        <Button disabled iconType="svg" icon="icon-copy" type="plain">
          再次一级自定义按钮禁用
        </Button>
        <Button model="icon" iconType="svg" icon="icon-copy" />
        <Button model="icon" iconType="svg" icon="icon-copy" disabled />
        <Button type="danger">默认状态</Button>
        <Button type="danger" disabled>默认状态</Button>
        <Button type="danger" loading>默认状态</Button>
        <Button type="text">默认状态</Button>
        <Button type="text" disabled>默认状态</Button>
        <Button type="text" iconType="svg" icon="icon-copy" disabled
          >默认状态</Button
        >
        <Button type="text" iconType="svg" icon="icon-copy">默认状态</Button>
        <Button model="icon" iconType="svg" icon="icon-copy" type="plain">
        </Button>
        <Button iconType="slot" type="plain">
          <template v-slot:icon>A</template>
          传一个插槽icon的按钮
        </Button>
      </div>
      <div class="at_button_box">
        <MenuButton> </MenuButton>
        <MenuButton buttonType="primary"> </MenuButton>
        <MenuButton buttonType="plain"> </MenuButton>
        <MenuButton disabled> </MenuButton>
        <MenuButton buttonType="primary" disabled> </MenuButton>
        <MenuButton buttonType="plain" disabled> </MenuButton>
        <MenuButton dropdownModel="same"> </MenuButton>
        <MenuButton dropdownModel="same" buttonType="primary"> </MenuButton>
        <MenuButton dropdownModel="same" buttonType="plain"> </MenuButton>
        <MenuButton dropdownModel="same" buttonType="text"> </MenuButton>
        <MenuButton dropdownModel="same" disabled> </MenuButton>
        <MenuButton
          dropdownModel="same"
          buttonType="primary"
          disabled
        ></MenuButton>
        <MenuButton
          dropdownModel="same"
          buttonType="plain"
          disabled
        ></MenuButton>
        <MenuButton dropdownModel="same" buttonType="text" disabled>
        </MenuButton>

        <MenuButton size="small"> </MenuButton>
        <MenuButton size="small" buttonType="primary"> </MenuButton>
        <MenuButton size="small" buttonType="plain"> </MenuButton>
        <MenuButton size="small" disabled> </MenuButton>
        <MenuButton size="small" buttonType="primary" disabled> </MenuButton>
        <MenuButton size="small" buttonType="plain" disabled> </MenuButton>
        <MenuButton size="small" dropdownModel="same"> </MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="primary"
        ></MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="plain"
        ></MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="text"
        ></MenuButton>
        <MenuButton size="small" dropdownModel="same" disabled> </MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="primary"
          disabled
        ></MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="plain"
          disabled
        ></MenuButton>
        <MenuButton
          size="small"
          dropdownModel="same"
          buttonType="text"
          disabled
        ></MenuButton>
      </div>
      <Button type="plain" icon="icon-sum">主要按钮</Button>
      <Icon iconName="icon-sum" color="red"></Icon>
      <SearchNumberList
        v-model="form1['searchNumber']"
        :ruleModel="form1['ruleOutKey']"
        @update:ruleModel="(tValue) => (form1['ruleOutKey'] = tValue)"
      />

      <DigitalRange v-model="form1['digitalRange']"></DigitalRange>

      <DatePicker v-model="form1['datePicker']" />

      <BasicSelectModal
        v-model="form1['basicSelectModal']"
        :ruleModel="form1['basicSelectModalRuleOutKey']"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <SearchSelect
        v-model="form1['searchSelect']"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        :initMultiple="true"
        searchBy="name"
        :fetchUrl="fetchUrl"
        :initItem="{}"
        :checkTable="form1?.['checkTable']?.['searchSelect']"
        :ruleModel="form1['searchSelectRuleOutKey']"
        @custDialog="custDialog"
      />
      <Selection
        ref="selectionRef"
        v-model="visible"
        @cust-handle="custDialog"
        v-bind="{ ...searchData }"
      />
    </el-config-provider>
  </div>
</template>
<script lang="ts">
import {
  computed,
  reactive,
  defineProps,
  defineEmits,
  ref,
  defineComponent,
  toRefs,
} from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { filterCheckTableList } from "./utils/utils";
// import {
//   Button,
//   Icon,
//   InputAndButton,
//   SearchNumberList,
//   DigitalRange,
//   DatePicker,
//   BasicSelectModal,
//   SearchSelect,
//   RCForm,
//   MenuButton,
//   SearchForm,
//   Selection,
// } from "@vitepress-element-ui/components";
export default defineComponent({
  setup() {
    // zh_CN zh_TW en_US zh_VN
    const fetchUrl = (params: any) => {
      console.log(params);
      
      return new Promise((resolve, reject) => {
        resolve({
          data: [
            { id: 1, name: "名称1", code: "1" },
            { id: 2, name: "名称2", code: "2" },
            { id: 3, name: "名称3", code: "3" },
            { id: 4, name: "名称4", code: "4" },
            { id: 5, name: "名称5", code: "5" },
            { id: 6, name: "名称6", code: "6" },
            { id: 7, name: "名称7", code: "7" },
          ],
          count: 7,
        });
      });
    };
    const state = reactive<any>({
      form1: {
        searchNumber: "",
        ruleOutKey: "",
        // digitalRange: [3, 2],
      },
      rcFormRef: ref(null),
      selectionRef: ref(null),
      SearchFormRef: ref(null),
      visible: false,
      formList: [
        {
          key: "input",
          label: "输入框",
          isShow: true,
        },
        {
          key: "select",
          label: "下拉单选",
          type: "select",
          isShow: true,
          options: [
            { label: "选择1", value: "选择1" },
            { label: "选择2", value: "选择2" },
          ],
        },
        {
          key: "select2",
          label: "下拉单选-selectWith",
          type: "selectWith",
          isShow: true,
          options: [
            { label: "选择1", value: "选择1" },
            { label: "选择2", value: "选择2" },
          ],
        },
        {
          key: "selectMore",
          label: "下拉多选",
          type: "select",
          isShow: true,
          options: [
            { label: "选择1", value: "选择1" },
            { label: "选择2", value: "选择2" },
            { label: "选择12", value: "选择12" },
            { label: "选择23", value: "选择23" },
            { label: "选择14", value: "选择14" },
            { label: "选择25", value: "选择25" },
            { label: "选择16", value: "选择16" },
            { label: "选择27", value: "选择27" },
          ],
          multiple: true,
        },
        {
          key: "staticSelectEnum",
          label: "静态枚举获取方式",
          type: "select",
          isShow: true,
          multiple: true,
        },
        {
          key: "digitalRange",
          label: "区间输入",
          type: "digitalRange",
          changeCallBack: (val: any, form: any) => {
            // console.log(val, form);
            
          },
          isShow: true,
        },
        {
          key: "date1",
          label: "日期选择1",
          type: "dateSelect",
          isShow: true,
        },
        {
          key: "date2",
          label: "日期选择2",
          type: "dateSelect",
          isShow: true,
        },
        {
          key: "date",
          label: "date",
          type: "date",
          isShow: true,
        },
        {
          key: "daterange",
          label: "daterange",
          type: "daterange",
          isShow: true,
        },
        {
          key: "datetime",
          label: "datetime",
          type: "datetime",
          isShow: true,
        },
        {
          key: "datetimerange",
          label: "datetimerange",
          type: "datetimerange",
          isShow: true,
        },
        {
          key: "year",
          label: "year",
          isShow: true,
          type: "year",
          disabledDate: (time: any) => {
            return time.getTime() <= Date.now();
          },
          changeCallBack: (e: any) => {
            // console.log(e);
          },
        },
        {
          key: "searchNumberList",
          label: "多单号查询",
          type: "modalTextarea",
          disabled: true,
          isShow: true,
        },
        {
          key: "searchNumberListOut",
          label: "多单号查询（带排除）",
          type: "modalTextarea",
          isShow: true,
          ruleOutKey: "searchNumberOutKey", // 排除功能所需要的key
          // ruleTitle: '排除',
          // changeCallBack: () => searchNumberListOutCallBack(),
        },
        {
          key: "search1",
          label: "选择器",
          type: "search",
          isShow: true,
          clearData: { search1: "", search1Codes: "" },
        },
        {
          key: "search2",
          label: "选择器(带排序)",
          type: "search",
          isShow: true,
          ruleOutKey: "searchOut2",
          clearData: { search2: "", search2Codes: "", search2Item: "" },
        },
        {
          key: "selectSearch",
          label: "模糊下拉选择器新版",
          type: "searchSelect",
          searchBy: "name",
          fetchUrl: fetchUrl,
          rowKey: "code",
          initMultiple: true,
          disabled: false,
          labelFormat: ["code", "name"],
          catchValue: ["code", "name"],
          ruleOutKey: "selectSearchOut",
          isShow: true,
          changeCallBack: (val: any) => {
            // console.log("changeCallBack", val);
          },
        },
        {
          key: "selectSearch2",
          label: "模糊下拉选择器单选",
          type: "searchSelect",
          searchBy: "name",
          fetchUrl: fetchUrl,
          rowKey: "code",
          initMultiple: false,
          disabled: false,
          catchValue: ["code", "name"],
          isShow: true,
          changeCallBack: (val: any) => {
            // console.log("changeCallBack", val);
          },
        },
        {
          key: "selectSearch3",
          label: "模糊下拉选择器自助",
          type: "searchSelect",
          searchBy: "name",
          rowKey: "code",
          initMultiple: true,
          disabled: false,
          catchValue: ["code", "name"],
          isShow: true,
          initialDataSource: [
            { id: 1, name: "名称1", code: "1" },
            { id: 2, name: "名称2", code: "2" },
            { id: 3, name: "名称3", code: "3" },
          ],
          changeCallBack: (val: any) => {
            // console.log("changeCallBack", val);
          },
        },
        {
          key: "radio",
          label: "radio",
          isShow: true,
          type: "radio",
          options: [
            { value: 0, name: "否" },
            { value: 1, name: "是" },
          ],
        },
        {
          key: "inputNumber",
          label: "inputNumber",
          isShow: true,
          type: "inputNumber",
        },
        {
          key: "remark",
          label: "remark",
          isShow: true,
          type: "remark",
          span: 24,
        },
      ],
      staticData: {
        staticSelectEnum: [
          { label: "静态枚举1", value: "静态枚举1" },
          { label: "静态枚举2", value: "静态枚举2" },
        ],
      },
      rules: {
        inputRule: [
          { required: true, message: "请填写inputRule框", trigger: "change" },
        ],
      },
      form: {
        input: "12312312",
        searchOut2: [1,2,3],
        date1: [new Date(), '', 'nowDateAfter']
      },
      searchData: {},
    });
    const onDialogShow = (key: string) => {
      switch (key) {
        case "search2": 
        case "searchOut2": {
          state.searchData = {
            title: "选择客户",
            selectKey: key,
            isRadio: false,
            fetchUrl: fetchUrl,
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
    const onSearchClear = () => {
      console.log("onSearchClear");
    };
    const custDialog = (data: any, key = "") => {
      const { list, type } = data;
      let dialogKey = key == "" ? type : key;
      let catchValue = state.formList?.find(
        (item: any) => item.key === dialogKey || item?.ruleOutKey === dialogKey
      )?.catchValue || ["id", "code", "name"];

      if (state.SearchFormRef) {
        let operaData = {};
        switch (dialogKey) {
          case "search2": {
            operaData = {
              search2: list.map((item: any) => item.code),
            };
            break;
          }
          case "searchOut2": {
            operaData = {
              searchOut2: list.map((item: any) => item.code),
            };
            break;
          }
          default:
            break;
        }
        state.form = {
          ...state.form,
          checkTable: {
            ...state.form?.checkTable,
            [dialogKey]: filterCheckTableList(list, catchValue),
          },
          ...operaData,
        }
      }
    };
		const onSearchSubmit = (res: any) => {
			console.log(res);
		}
    const logForm = () => {
      console.log(state.form);
    }
    return {
      ...toRefs(state),
      locale: zhCn,
      onDialogShow,
      onSearchClear,
      custDialog,
      fetchUrl,
			onSearchSubmit,
      logForm,
    };
  },
  components: {
    ElConfigProvider,
    // Button,
    // Icon,
    // InputAndButton,
    // SearchNumberList,
    // DigitalRange,
    // DatePicker,
    // BasicSelectModal,
    // SearchSelect,
    // RCForm,
    // MenuButton,
    // SearchForm,
    // Selection,
  },
});
</script>
<style lang="less" scoped>
.at_button_box {
  display: flex;
  flex-wrap: wrap;
  :deep(.button_style_default) {
    margin: 0 10px 10px 0;
  }
  :deep(.menu_button_box) {
    margin: 0 10px 10px 0;
  }
}
</style>
