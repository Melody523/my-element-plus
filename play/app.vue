<template>
  <div>
    <el-config-provider :locale="locale">
      <!-- <BasicSelectModal
        v-model="form1['basicSelectModal']"
        :ruleModel="form1['basicSelectModalRuleOutKey']"
        :initItem="{ ruleOutKey: 'basicSelectModalRuleOutKey', key: 'basicSelectModal' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
      />
      <SearchSelect
        v-model="form1['searchSelect']"
        :ruleModel="form1['searchSelectRuleOutKey']"
        :initItem="{ ruleOutKey: 'searchSelectRuleOutKey', key: 'searchSelect', useCheckTable: true }"
        :checkTable="form1?.['checkTable']?.['searchSelect']"
        v-bind="{ fetchUrl: fetchUrl, initMultiple: true, searchBy: 'name' }"
        @onDialogShow="onDialogShow"
        @onSearchClear="onSearchClear"
        @custDialog="custDialog"
      /> -->
      <!-- <RCForm
        ref="rcFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
          formRules: rules,
          titleType: 'detail',
          fetchUrl: fetchApi,
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
      </RCForm> -->
      <SearchForm
        ref="SearchFormRef"
        v-bind="{
          formList: formList,
          staticData: staticData,
          labelWidth: '160px',
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

      <DatePicker v-model="form1['datePicker']" :clearable="false" />

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
export default defineComponent({
  setup() {
    // zh_CN zh_TW en_US zh_VN
    const mockData = (count = 20, startCount = 1) => {
      let data = []
      for(let i = startCount; i <= count; i++) {
        data.push({ id: i, name: `名称${i}`, code: `code${i}`, label: `名称${i}`, value: `code${i}` })
      }
      return data
    }
    const fetchUrl = (params: any) => {
      console.log(params);
      
      return new Promise((resolve, reject) => {
        resolve({
          data: mockData(params.currentPage * params.pageSize, (params.currentPage - 1) * params.pageSize + 1),
          count: 45,
        });
      });
    };
    let id = 0;
    const state = reactive<any>({
      form1: {},
      rcFormRef: ref(null),
      selectionRef: ref(null),
      SearchFormRef: ref(null),
      visible: false,
      formList: [
        // {
				// 	key: 'baseMessage',
				// 	type: 'br',
				// 	contant: '基本信息',
				// 	isShow: true,
				// },
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
          selectKey: 'selectWith',
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
            lazyLoad (node: any, resolve: any) {
              const { level } = node;
              setTimeout(() => {
                const nodes = Array.from({ length: level + 1 })
                  .map(item => ({
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2
                  }));
                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                resolve(nodes);
              }, 1000);
            }
          }
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
          ruleTitle: '排除单号',
        },
        // {
				// 	key: 'baseMessage2',
				// 	type: 'br',
				// 	contant: '弹窗选择信息',
				// 	isShow: true,
				// },
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
          useCheckTable: true
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
          useCheckTable: true
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
          useCheckTable: true
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
					key: 'otherMessage',
					type: 'br',
					slotName: 'otherMessage',
					isShow: true,
				},
      ],
      staticData: {
        selectWith: mockData(10),
      },
      rules: {
        input: [
          { required: true, message: "请填写输入框", trigger: "blur" },
        ],
      },
      form: {},
      searchData: {},
      setFormValue: {
        basicSelectModal: { basicSelectModal: 'name', basicSelectModalId: 'id' },
        basicSelectModalRuleOutKey: { basicSelectModalRuleOutKey: 'id' },
        searchSelect: { searchSelect: 'name', searchSelectId: 'id' },
        searchSelectRuleOutKey: { searchSelectRuleOutKey: 'id' },
        search: { search: 'name' },
        searchOut: { searchOut: 'id' },
        search2: { search2: 'name' },
        searchOut2: { searchOut2: 'id' },
        selectSearch1: { selectSearch1: 'name' },
        selectSearchOut1: { selectSearchOut1: 'id' },
        selectSearch2: { selectSearch2: 'name' },
        selectSearchOut2: { selectSearchOut2: 'id' },
        selectSearch3: { selectSearch3: 'name' },
        selectSearchOut3: { selectSearchOut3: 'id' },
      }
    });
    const onDialogShow = (key: string, item: any) => {
      switch (key) {
        case "basicSelectModal": 
        case "basicSelectModalRuleOutKey": {
          state.searchData = {
            title: "弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl: fetchUrl,
            // initialDataSource: mockData(15),
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
        case "searchSelect": 
        case "searchSelectRuleOutKey": {
          state.searchData = {
            title: "弹窗选择器",
            selectKey: key,
            isRadio: false,
            fetchUrl: fetchUrl
          };
          state.visible = true;
          break;
        }
        case "search": 
        case "searchOut": 
        case "search2": 
        case "searchOut2": 
        case "selectSearch1": 
        case "selectSearchOut1": 
        case "selectSearch2": 
        case "selectSearchOut2": 
        case "selectSearch3": 
        case "selectSearchOut3": {
          state.searchData = {
            title: "弹窗选择器",
            selectKey: key,
            isRadio: !item.initMultiple,
            fetchUrl: item.fetchUrl,
            initialDataSource: item.initialDataSource,
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
    const custDialog = (data: any, key = "") => {
      const { list, type } = data;
      let dialogKey = key == "" ? type : key;
      let catchValue = state.formList?.find(
        (item: any) => item.key === dialogKey || item?.ruleOutKey === dialogKey
      )?.catchValue || ["id", "code", "name"];
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
		const onSearchSubmit = (res: any) => {
			console.log(res);
		}
    const logForm = () => {
      state.rcFormRef.submit()
				.then((res: any) => {
          console.log(res);
				})
				.catch((error: any) => {
					console.log(error);
				});
    }
    const resetForm = () => {
      state.form = {}
    }
    const fetchApi = (params: any) => {
      return new Promise((resolve, reject) => {
        resolve({
          input: '输入框',
          radioSelect: '1',
          selectWith: 'code1',
        });
      });
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
      resetForm,
      fetchApi,
    };
  },
  components: {
    ElConfigProvider,
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
.btn_tools {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dedede;
}
.mrgl_10 {
  margin-left: 10px;
}
</style>
