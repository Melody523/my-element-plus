import { defineComponent as K, reactive as B, ref as u, watch as g, toRefs as y, defineAsyncComponent as h } from "vue";
import { getCommonState as j, deepClone as m } from "../utils/utils.mjs";
let O = {};
const x = K({
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
      default: { code: { key: "code", label: "编码", isShow: !0, type: "input" }, name: { key: "name", label: "名称", isShow: !0, type: "input" } }
    },
    showTableList: {
      // 显示的table列
      type: Object,
      default: { code: { key: "code", label: "编码", isShow: !0 }, name: { key: "name", label: "名称", isShow: !0 } }
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
    // 请求params
    params: {
      type: Object,
      default: {}
    }
  },
  setup(a, { emit: s }) {
    const { hooksCommonState: l, currentChange: p, sizeChange: S } = j(), t = B({
      formList: [],
      formListBackup: [],
      tableList: [],
      tableListBackup: [],
      form: {},
      tableData: [],
      selectTableData: [],
      searchFormRef: u(null),
      multipleTable: u(null),
      dialogWidth: 920,
      extendAttributes: [],
      disabledId: "",
      dialogTop: "8vh",
      activeName: "first",
      dialogRef: u("")
    }), T = (e) => {
      e === "confirm" ? (s("custHandle", { visible: !1, list: t.selectTableData || [], type: a.selectKey }), a.confirmClose && (s("update:modelValue", !1), t.multipleTable.clearSelection(), t.form = {})) : (s("update:modelValue", !1), t.multipleTable.clearSelection(), t.form = {});
    }, L = (e) => {
      a.isRadio ? (e && Object.keys(e).length > 0 && (s("custHandle", { visible: !1, list: [e] || [], rowData: e, type: a.selectKey }), s("update:modelValue", !1), t.selectTableData = [], t.multipleTable.clearSelection()), t.form = {}) : t.multipleTable.toggleRowSelection(e);
    }, w = (e) => {
      t.selectTableData = e;
    }, F = (e) => {
      t.multipleTable.toggleRowSelection(t.multipleTable.getSelectionRows().find((o) => o[a.rowKey] == e[a.rowKey]), !1), t.selectTableData = t.selectTableData.filter((o) => o[a.rowKey] !== e[a.rowKey]);
    }, d = () => {
      l.pager.currentPage = 1, r();
    }, D = () => {
      t.form = {}, d();
    }, r = async () => {
      if (a.fetchUrl)
        try {
          let e = m(t.form);
          l.tableLoading = !0;
          const o = l.pager.currentPage, c = l.pager.pageSize;
          t.formList.filter((i) => i.type === "modalTextarea").map((i) => {
            e[i.key] && (e[i.key] = t.form[i.key].split(","));
          }), a.fetchUrl(a.dealFetchFunc({ currentPage: o, pageSize: c, ...a.params, ...e })).then((i) => {
            const { data: n, count: f } = a.renderFunc(i);
            t.tableData = n, l.tableLoading = !1, l.pager.total = f;
          });
        } catch (e) {
          t.tableData = [], l.pager.total = 0, console.log("%c error", "color: chartreuse", e), l.tableLoading = !1;
        }
    }, C = (e) => {
      e == null || e.forEach((o) => {
        t.multipleTable.toggleRowSelection(o);
      }), t.selectTableData = e;
    }, b = (e, o) => {
      var i;
      let c = [];
      return (i = Object.keys(e)) == null || i.map((n) => {
        if (typeof e[n] == "boolean" && e[n]) {
          let f = o.find((v) => v.key == n) || [];
          c.push({ ...f, isShow: !0 });
        } else
          typeof e[n] == "object" && c.push({ isShow: !0, ...e[n] });
      }), c;
    }, k = () => {
      t.activeName = "first";
      const e = a.checkTable;
      e.length > 0 && C(e), r(), t.tableData = [], l.pager.currentPage = 1, l.pager.total = 0;
    }, R = () => {
      t.activeName = "first";
    };
    return g(() => a.showFormList, () => {
      t.formList = m(b(a.showFormList, t.formListBackup)), t.formList.filter((e) => e.isShow).map((e) => {
        t.form[e.key] = "";
      });
    }, { immediate: !0 }), g(() => a.showTableList, () => {
      t.tableList = m(b(a.showTableList, t.tableListBackup));
    }, { immediate: !0 }), {
      ...y(t),
      ...y(l),
      staticData: O,
      handleClose: T,
      getData: r,
      resetInfo: D,
      handleOpen: k,
      currentChange: p,
      sizeChange: S,
      searchData: d,
      handleSelectionChange: w,
      removeSelectData: F,
      rowClick: L,
      toFirstTab: R
    };
  },
  components: {
    SearchForm: h(() => import("../search-form/index.vue.mjs")),
    ThePagination: h(() => import("../the-pagination/index.vue.mjs"))
  }
});
export {
  x as default
};
