import { defineComponent as O, reactive as R, ref as b, computed as B, watch as S, toRefs as y, defineAsyncComponent as p } from "vue";
import { getCommonState as K, deepClone as s } from "../utils/utils.mjs";
const A = O({
  name: "Selection",
  emits: ["update:modelValue", "custHandle"],
  props: {
    modelValue: {
      // 显示或隐藏弹窗
      type: Boolean,
      default: !1
    },
    selectKey: {
      // 所选数据给对应的selectKey
      type: String,
      default: ""
    },
    title: {
      // 弹窗标题
      type: String,
      default: ""
    },
    showFormList: {
      // 显示的form查询条件
      type: Object,
      default: {
        code: { key: "code", label: "编码", isShow: !0, type: "input" },
        name: { key: "name", label: "名称", isShow: !0, type: "input" }
      }
    },
    showTableList: {
      // 显示的table列
      type: Object,
      default: {
        code: { key: "code", label: "编码", isShow: !0 },
        name: { key: "name", label: "名称", isShow: !0 }
      }
    },
    isRadio: {
      // 是否单选 默认为单选
      type: Boolean,
      default: !0
    },
    checkTable: {
      // 回传选中的list
      type: Array,
      default: []
    },
    rowKey: {
      type: String,
      default: "id"
    },
    // 点击确认后关闭弹窗
    confirmClose: {
      type: Boolean,
      default: !0
    },
    // 请求接口
    fetchUrl: {
      type: Function
    },
    // 请求结果的处理函数
    renderFunc: {
      type: Function,
      default: (a) => a
    },
    // 请求前的form处理函数
    dealFetchFunc: {
      type: Function,
      default: (a) => a
    },
    // 初始参数,重置后清空
    initValue: {
      type: Object,
      default: {}
    },
    // 默认参数,重置后回填
    defaultValue: {
      type: Object,
      default: {}
    },
    // 是否有翻页
    hasPagination: {
      type: Boolean,
      default: !0
    },
    // 表格初始值
    initialDataSource: {
      type: Array,
      default: () => []
    },
    // 下拉选择框静态数据
    staticData: {
      type: Object,
      default: {}
    }
  },
  setup(a, { emit: c }) {
    const { hooksCommonState: n, currentChange: D, sizeChange: T } = K(), e = R({
      formList: [],
      formListBackup: [],
      tableList: [],
      tableListBackup: [],
      form: {},
      tableData: [],
      selectTableData: [],
      searchFormRef: b(null),
      multipleTable: b(null),
      dialogWidth: 1e3,
      extendAttributes: [],
      disabledId: "",
      dialogTop: "8vh",
      activeName: "first",
      dialogRef: b(""),
      hasInitialDataSource: !1
    });
    e.hasInitialDataSource = B(
      () => {
        var t;
        return ((t = a.initialDataSource) == null ? void 0 : t.length) > 0;
      }
    );
    const L = (t) => {
      t === "confirm" ? (c("custHandle", {
        visible: !1,
        list: e.selectTableData || [],
        type: a.selectKey
      }), a.confirmClose && (c("update:modelValue", !1), e.multipleTable.clearSelection(), e.form = {})) : (c("update:modelValue", !1), e.multipleTable.clearSelection(), e.form = {});
    }, w = (t) => {
      a.isRadio ? (t && Object.keys(t).length > 0 && (c("custHandle", {
        visible: !1,
        list: [t] || [],
        rowData: t,
        type: a.selectKey
      }), c("update:modelValue", !1), e.selectTableData = [], e.multipleTable.clearSelection()), e.form = {}) : e.multipleTable.toggleRowSelection(t);
    }, F = (t) => {
      e.selectTableData = t;
    }, C = (t) => {
      e.multipleTable.toggleRowSelection(
        e.multipleTable.getSelectionRows().find((o) => o[a.rowKey] == t[a.rowKey]),
        !1
      ), e.selectTableData = e.selectTableData.filter(
        (o) => o[a.rowKey] !== t[a.rowKey]
      );
    }, u = () => {
      e.tableData = s(a.initialDataSource).filter(
        (t) => {
          var o;
          return (o = Object.keys(e.form)) == null ? void 0 : o.every((l) => ["string"].includes(typeof e.form[l]) ? t[l].includes(e.form[l]) : ["object"].includes(typeof e.form[l]) ? e.form[l].includes(t[l]) : t[l] == e.form[l]);
        }
      );
    }, h = () => {
      e.hasInitialDataSource ? u() : (n.pager.currentPage = 1, f());
    }, k = () => {
      e.form = { ...a.defaultValue }, e.hasInitialDataSource ? u() : h();
    }, f = async () => {
      if (a.fetchUrl)
        try {
          let t = s(e.form);
          n.tableLoading = !0;
          const o = n.pager.currentPage, l = n.pager.pageSize;
          e.formList.filter((i) => i.type === "modalTextarea").map((i) => {
            t[i.key] && (t[i.key] = e.form[i.key].split(","));
          });
          let r = a.hasPagination ? {
            currentPage: o,
            pageSize: l,
            ...t
          } : { ...t };
          a.fetchUrl(a.dealFetchFunc(r)).then((i) => {
            const { data: d = [], count: m = 0 } = a.renderFunc(i);
            e.tableData = d, n.tableLoading = !1, n.pager.total = m;
          });
        } catch (t) {
          e.tableData = [], n.pager.total = 0, console.log("%c error", "color: chartreuse", t), n.tableLoading = !1;
        }
    }, j = (t) => {
      t == null || t.forEach((o) => {
        e.multipleTable.toggleRowSelection(o);
      }), e.selectTableData = t;
    }, g = (t, o) => {
      var r;
      let l = [];
      return (r = Object.keys(t)) == null || r.map((i) => {
        if (typeof t[i] == "boolean" && t[i]) {
          let d = o.find((m) => m.key == i) || [];
          l.push({ ...d, isShow: !0 });
        } else
          typeof t[i] == "object" && l.push({ isShow: !0, ...t[i] });
      }), l;
    }, V = () => {
      e.activeName = "first";
      const t = a.checkTable;
      t.length > 0 && j(t), e.form = { ...a.initValue, ...a.defaultValue }, !a.fetchUrl && e.hasInitialDataSource ? u() : (e.tableData = [], f()), n.pager.currentPage = 1, n.pager.total = 0;
    }, v = () => {
      e.activeName = "first";
    };
    return S(
      () => a.showFormList,
      () => {
        e.formList = s(
          g(a.showFormList, e.formListBackup)
        );
      },
      { immediate: !0, deep: !0 }
    ), S(
      () => a.showTableList,
      () => {
        e.tableList = s(
          g(a.showTableList, e.tableListBackup)
        );
      },
      { immediate: !0, deep: !0 }
    ), {
      ...y(e),
      ...y(a),
      ...y(n),
      handleClose: L,
      getData: f,
      resetInfo: k,
      handleOpen: V,
      currentChange: D,
      sizeChange: T,
      searchData: h,
      handleSelectionChange: F,
      removeSelectData: C,
      rowClick: w,
      toFirstTab: v
    };
  },
  components: {
    SearchForm: p(() => import("../search-form/index.vue.mjs")),
    ThePagination: p(
      () => import("../the-pagination/index.vue.mjs")
    )
  }
});
export {
  A as default
};
