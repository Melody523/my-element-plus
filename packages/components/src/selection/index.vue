<template>
  <el-dialog append-to-body ref="dialogRef" :class="`custom-dialog-detail ${!isRadio && 'dialog-container'}`" :title="title" @open="handleOpen" :width="dialogWidth" :top='dialogTop' :model-value="curModelValue" :before-close="() => { handleClose('cancel') }">
    <template #title v-if="!isRadio">
      <div class="dialog-title">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="title" name="first"></el-tab-pane>
          <el-tab-pane :label="`已选择(${selectTableData.length})`" name="second"></el-tab-pane>
        </el-tabs>
      </div>
    </template>
    <div class="page-searchbox" v-if="formList.length > 0 && activeName === 'first'">
      <SearchForm
        ref="searchFormRef"
        v-if="formList.length"
        v-bind="{
          formList: formList,
          staticData,
          labelWidth: '96px',
          initValue: form,
          hasSetting: false
        }"
        @onSearchSubmit="searchData"
        @firstSearch="searchData"
        @onReset="resetInfo"
      />
    </div>
    <div class="dialog-main">
      <div class="dialog-table-content">
        <el-table v-show="activeName === 'first'" scrollbar-always-on ref="multipleTable" stripe :row-key="rowKey" :data="tableData" v-loading="tableLoading" :row-class-name="({ row }) => row.disabled && 'disabled'" :height="`${isRadio ? '400' : '285'}`" :highlight-current-row="isRadio" @row-click="rowClick" @selection-change="handleSelectionChange">
          <el-table-column v-if="!isRadio" type="selection" width="55" :reserve-selection="true" align="center"></el-table-column>
          <el-table-column show-overflow-tooltip v-for="(item) in tableList.filter((item) => item.isShow)" :key="item.key" :prop="item.key" align="center" :label="item.label"></el-table-column>
        </el-table>
        <div class="table-page" v-show="activeName === 'first'">
          <the-pagination popper-class="pagination-popper" v-bind="pager" small @cust-currentChange="currentChange($event, getData)"
            @cust-sizeChange="sizeChange($event, getData)"></the-pagination>
        </div>
        <div class="select-table">
          <el-table scrollbar-always-on v-show="activeName === 'second' && selectTableData.length > 0" stripe :row-key="rowKey" :data="selectTableData" height="400">
            <el-table-column show-overflow-tooltip v-for="(item) in tableList.filter((item) => item.isShow)" :key="item.key" :prop="item.key" align="center" :label="item.label"></el-table-column>
            <el-table-column label="操作" align="center" column-key="control" width="150">
              <template v-slot="scope">
                <span class="action-btn" @click="removeSelectData(scope.row)">移除</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="no-data-content" v-if="selectTableData.length <= 0 && activeName === 'second'">
          <img class="image" src="../assets/img/BlankShow.png" />
          <div class="tips">请至 <span class="click-tips" @click="toFirstTab">{{title}}列表</span> 进行选择</div>
        </div>
      </div>
    </div>
    <template #footer v-if="!isRadio">
      <span class="dialog-footer">
        <el-button @click="handleClose('cancel')">取 消</el-button>
        <el-button type="primary" @click="handleClose('confirm')">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRefs, watch, defineAsyncComponent, nextTick, provide, computed, PropType } from "vue";
import { deepClone, getCommonState } from "../utils/utils";
// 组件初始化数据接口
interface ICompStateData {
  formList: Array<any>;
  formListBackup: Array<any>;
  form: any;
  tableData: Array<any>;
  // 选择后的
  selectTableData: Array<any>;
  searchFormRef: any;
  tableList: Array<any>;
  tableListBackup: Array<any>;
  dialogWidth: number;
  extendAttributes: any[];
  disabledId: string;
  dialogTop: string;
  activeName: string;
  multipleTable: any;
  dialogRef: any;
}
// 静态数据
let staticData:any = {};

export default defineComponent({
  name: "Selection",
  emits: ['update:modelValue', "custHandle"],
  props: {
    modelValue: { // 显示或隐藏弹窗
      type: Boolean,
      default: false,
    },
    selectKey: { // 所选数据给对应的selectKey
      type: String,
      default: "",
    },
    title: { // 弹窗标题
      type: String,
      default: "",
    },
    showFormList: { // 显示的form查询条件
      type: Object as () => any,
      default: { code: { key: "code", label: "编码", isShow: true, type: 'input' }, name: { key: "name", label: "名称", isShow: true, type: 'input' }, },
    },
    showTableList: { // 显示的table列
      type: Object as () => any,
      default: { code: { key: "code", label: "编码", isShow: true }, name: { key: "name", label: "名称", isShow: true }, },
    },
    isRadio: { // 是否单选 默认为单选
      type: Boolean,
      default: true
    },
    checkTable: { // 回传选中的list
      type: Array as () => Array<any>,
      default: [],
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    confirmClose: {
      type: Boolean,
      default: true
    },
    // 请求接口
    fetchUrl: {
      type: Function as PropType<(data: any) => Promise<any>>,
    },
    // 请求结果的处理函数
    renderFunc: {
      type: Function,
      default: (res: any) => res,
    },
    // 请求前的form处理函数
    dealFetchFunc: {
      type: Function,
      default: (res: any) => res,
    },
    // 请求params
    params: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const { hooksCommonState, currentChange, sizeChange } = getCommonState();
    const state = reactive<ICompStateData>({
      formList: [],
      formListBackup: [],
      tableList: [],
      tableListBackup: [],
      form: {},
      tableData: [],
      selectTableData: [],
      searchFormRef: ref(null),
      multipleTable: ref(null),
      dialogWidth: 920,
      extendAttributes: [],
      disabledId: '',
      dialogTop: '8vh',
      activeName: 'first',
      dialogRef: ref('')
    });
    /**
     * 设置祖父公开的form值
     */
		provide('form', state.form);
    /**
     * 给子孙和自己提供浅修改form数据的方法
     * 直接传入一个新的object对象 属于深赋值 直接更改整个对象
     * 如果不是深赋值请直接state.form.xxx进行赋值
     */
    const changeForm = (newObj: any) => {
      const newObjs = {...newObj} // 最终取值
      const newConcat = {...state.form, ...newObjs} // 组合原本的数据
      const newConcatKeys = Object.keys(newConcat); // 获取组合后数据key数组
      const keys = Object.keys(newObjs); // 获取最终key数组
      // 循环组合后数组,校验是否属于最终key数组,有就赋值没有就删掉
      newConcatKeys.forEach((item)=>{
        if (keys.includes(item)) {
          state.form[item] = newObj[item]
        }else{
          delete state.form[item]
        }
      })
    };
    provide('changeForm', changeForm);
    // 确认或取消弹窗
    const handleClose = (action: string): void => {
      if(action === "confirm"){
        emit("custHandle", { visible: false, list: state.selectTableData || [], type: props.selectKey })
        if (props.confirmClose) {
          emit('update:modelValue', false)
          state.multipleTable.clearSelection()
          changeForm({})
        }
      } else {
        emit('update:modelValue', false)
        state.multipleTable.clearSelection()
        changeForm({})
      }

    };
    // 点击行
    const rowClick = (rowData: any) => {
      if (!props.isRadio) {
        state.multipleTable.toggleRowSelection(rowData)
      } else {
        if(rowData && Object.keys(rowData).length > 0){// 这里只需要已存在的数据，清空的时候会调用这
          let selectTableData = [rowData]
          emit("custHandle", { visible: false, list: selectTableData || [], rowData, type: props.selectKey })
          emit('update:modelValue', false)
          state.selectTableData = []
          state.multipleTable.clearSelection()
        }
        changeForm({})
      }
    };
    // 当选择项发生变化时会触发该事件
    const handleSelectionChange = (val: Array<any>) => {
      state.selectTableData = val
    }
    // 已选择列表下移除操作
    const removeSelectData = (row: any) => {
      state.multipleTable.toggleRowSelection(state.multipleTable.getSelectionRows().find((item:any) => item[props.rowKey] == row[props.rowKey]), false)
      state.selectTableData = state.selectTableData.filter(item => item[props.rowKey] !== row[props.rowKey])
    }
    // 搜索
    const searchData = () => {
      hooksCommonState.pager.currentPage = 1;
      getData();
    }
    // 重置
    const resetInfo = () => {
      changeForm({})
      searchData()
    };
    // 获取表格数据
    const getData = async (): Promise<void> => { // flag为了判断弹窗第一次获取数据
    console.log('props.fetchUrl', props.fetchUrl);
    
      if (!props.fetchUrl) return;
      try {
        let formData = deepClone(state.form);
        hooksCommonState.tableLoading = true;
        const currentPage = hooksCommonState.pager.currentPage;
        const pageSize = hooksCommonState.pager.pageSize;
        // 处理textList类型的查询条件
        state.formList.filter(item => item.type === 'modalTextarea').map(itm => {
          if (formData[itm.key]) {
            formData[itm.key] = state.form[itm.key].split(',');
          }
        })
        props.fetchUrl(props.dealFetchFunc({currentPage, pageSize, ...formData}))
          .then((res: any) => {
            const { tableData, count } = props.renderFunc(res)
            state.tableData = tableData
            hooksCommonState.tableLoading = false;
            hooksCommonState.pager.total = count;
          })
        // 重新组合textList类型的查询条件以便于回显数据
      } catch (error) {
        state.tableData = []
        hooksCommonState.pager.total = 0;
        console.log("%c error", "color: chartreuse", error);
        hooksCommonState.tableLoading = false;
      }
    };
    
    const selectDataList = (checkTable: Array<any>) => {
      checkTable?.forEach(row => {
        state.multipleTable.toggleRowSelection(row)
      });
      state.selectTableData = checkTable
    }
    // 参数 data 传入要该表的数据 list 表示原有的数据
    const getFirstList =(data: any, list: any[]) => {
      let lt: any[] = [];
      Object.keys(data)?.map(key => {
        if (typeof(data[key]) === 'boolean' && data[key]) {
          let _item = list.find(item => item.key == key) || []
          lt.push({ ..._item, isShow: true })
        } else if (typeof(data[key]) === 'object') {
          lt.push({ ...data[key], isShow: true })
        }
      })
      return lt
    }
    const handleOpen = (): void => {
      state.activeName = 'first'
      const checkTable = props.checkTable;
      if (checkTable.length > 0) {
        selectDataList(checkTable)
      }
      getData()
      state.tableData = [];
      hooksCommonState.pager.currentPage = 1;
      hooksCommonState.pager.total = 0;
    }
    const toFirstTab = () => {
      state.activeName = "first"
    }

    watch(() => props.showFormList,() => {
      state.formList = deepClone(getFirstList(props.showFormList, state.formListBackup));
      // 初始form表单的信息
      state.formList.filter(item => item.isShow).map(item => {
        state.form[item.key] = '';
      });
    }, { immediate: true });

    watch(() => props.showTableList, () => {
      state.tableList = deepClone(getFirstList(props.showTableList, state.tableListBackup));
    }, { immediate: true });

    const curModelValue = computed({ // 重新定义
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    })

    return {
      ...toRefs(state),
      ...toRefs(hooksCommonState),
      staticData,
      handleClose,
      getData,
      resetInfo,
      handleOpen,
      currentChange,
      sizeChange,
      searchData,
      handleSelectionChange,
      removeSelectData,
      rowClick,
      toFirstTab,
      changeForm,
      curModelValue,
    };
  },
  components: {
    SearchForm: defineAsyncComponent(() => import('../search-form/index.vue')),
    ThePagination: defineAsyncComponent(() => import('../the-pagination/index.vue')),
  },
});
</script>

<style lang="less" scoped>
  .dialog-main {
    .el-table .success-row {
      background: #f0f9eb;
    }
    .dialog-table-content {
      // width: 100% ;
      .table-page {
        display: flex;
        justify-content: flex-end;
        padding: 10px 0;
      }
    }
    :deep(.el-table__body tr.current-row>td) {
      background-color: #6CA6CD	 !important;
    }
    .search-tools{
      width: 144px;
    }
  }
  .disabled {
    cursor: not-allowed;
  }
  .pagination-popper {
    z-index:999999 !important;
  }
  .dialog-footer {
    display: flex;
    justify-content: flex-end;

  }
  :deep(.el-tabs__nav-wrap::after) {
    display: none;
  }
  .no-data-content {
    width: 100%;
    height: 410px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image {
      width: 150px;
      height: 101px;
    }
    .tips {
      font-size: 14px;
      font-weight: 400;
      color: #999999;
      line-height: 22px;
      margin-top: 20px;
      text-align: center;
      .click-tips {
        color: #256BFF;
        cursor: pointer;
      }
    }
  }
  .select-table {
    padding-top: 10px;
  }
  .action-btn {
    color: #256BFF;
    cursor: pointer;
  }
</style>
<style lang="less">
  .dialog-container .el-dialog__header {
    background-color: #fff;
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 1px solid rgba(31, 56, 88, 0.1);
  }
  .dialog-container .el-tabs__header {
    margin-bottom: 0;
  }
  .custom-dialog-detail.el-dialog {
    .el-table .el-table__header-wrapper th .cell {
      justify-content: center;
    }
    .el-dialog__body {
      margin-top: 0;
      padding: 0 10px;
    }
    .el-dialog__body .page-searchbox {
      margin: 0;
      .el-input {
        width: 100% !important;
      }
    }
    .el-form-item__content {
      flex: 1;
    }
    .el-dialog__footer {
      padding: 10px;
      border-top: 1px solid rgba(31, 56, 88, 0.1);
    }
    .table-page {
      .page-suffix {
        border-top: 0 none;
      }
    }
  }
</style>
