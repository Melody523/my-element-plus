import { defineComponent as b, reactive as D, watch as C, watchEffect as k, toRefs as s, defineAsyncComponent as g } from "vue";
import { deepClone as M } from "../utils/utils.mjs";
const K = b({
  name: "SearchSelect",
  emits: [
    "update:modelValue",
    "onDialogShow",
    "onSearchClear",
    "change",
    "custDialog"
  ],
  props: {
    modelValue: {
      type: Array || Object
      // default: () => [],  // 兼容underfind的情况不能给默认数据
    },
    // 排除对应的key
    ruleModel: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 下拉选项的唯一标识
    rowKey: {
      type: String,
      default: "id"
    },
    // 是否启用多选
    initMultiple: {
      type: Boolean,
      default: !0
    },
    // 外部下拉基于什么key进行筛选 同时作为label值
    searchBy: {
      type: String,
      default: ""
    },
    // 简化数据项，自行约定，建议：必须有rowKey合searchBy
    catchValue: {
      type: Array,
      default: () => ["id", "code", "name"]
    },
    // item配置参数
    initItem: {
      type: Object,
      default: () => ({})
    },
    // 回显table数据
    checkTable: {
      type: Array,
      default: () => []
    },
    // options lable 通过Format自定义
    labelFormat: {
      type: [Array, Function],
      default: []
    },
    // 是否返回所有数据，不做过滤
    catchValueAll: {
      type: Boolean,
      default: !1
    },
    // 请求接口
    fetchUrl: {
      type: Function
    },
    // 请求结果的处理函数
    renderFunc: {
      type: Function,
      default: (e) => e
    },
    // 请求前的form处理函数
    dealFetchFunc: {
      type: Function,
      default: (e) => e
    },
    // 请求params
    params: {
      type: Object,
      default: {}
    },
    // 初始值选项
    initialDataSource: {
      type: Array,
      default: () => []
    },
    // 翻页params
    pagination: {
      type: Object,
      default: { currentPage: 1, pageSize: 15 }
    }
  },
  setup(e, { emit: c }) {
    let n = D({
      inputValue: [],
      loading: !1,
      options: [],
      query: ""
    });
    const o = (t) => {
      let a = e.initMultiple ? t : t ? [t] : [];
      c("update:modelValue", a), c("custDialog", { list: a }, e.initItem.key);
    }, r = (t, a = !1, i = !1) => {
      let l = [];
      t && t.length > 0 && (l = [...t]), a && (e.initMultiple ? l = [...n.inputValue, ...l] : n.inputValue && Object.keys(n.inputValue).length > 0 && (l = [n.inputValue, ...l])), i && (l = [
        ...l,
        ...n.options.map((u) => u.value)
      ]), n.options = h(
        l.map((u) => y(u))
      );
    }, S = () => ({
      ...e.pagination,
      ...e.params
    }), V = (t, a = !1) => {
      e.fetchUrl && (t || a) && (n.query = t, n.loading = !0, e.fetchUrl(e.dealFetchFunc(S())).then((i) => {
        if (t === n.query) {
          const { data: l } = e.renderFunc(i);
          r(l, !0, !1);
        }
      }).catch((i) => {
        console.log("onSearch catch", i), r([], !1, !1);
      }).finally(() => {
        n.loading = !1;
      }));
    }, w = (t, a) => {
      c("onDialogShow", t, a);
    }, h = (t) => {
      const a = /* @__PURE__ */ new Map();
      return t.filter(
        (l) => !a.has(l[e.rowKey]) && a.set(l[e.rowKey], 1)
      );
    }, y = (t) => {
      var u;
      let a = {};
      e.catchValueAll ? a = { ...t } : ((u = e.catchValue) == null ? void 0 : u.length) > 0 && e.catchValue.forEach((f) => {
        a[f] = t[f];
      });
      let i = (f) => {
        var d, m;
        return typeof e.labelFormat == "function" ? e.labelFormat(f) : typeof e.labelFormat == "object" && ((d = e.labelFormat) == null ? void 0 : d.length) > 0 ? (m = e.labelFormat) == null ? void 0 : m.map((A) => t == null ? void 0 : t[A]).join(" ") : f == null ? void 0 : f[e.searchBy];
      };
      const l = {
        [e.rowKey]: t[e.rowKey],
        label: i(t),
        value: Object.keys(a).length > 0 ? { ...a } : {
          code: t.code,
          name: t.name,
          id: t.id
        }
      };
      return M(l);
    };
    C(
      () => e.modelValue,
      (t) => {
        var i, l, u;
        if (!Array.isArray(t) && ((i = e.initItem) != null && i.useCheckTable && !t || !((l = e.initItem) != null && l.useCheckTable))) {
          c("update:modelValue", []);
          return;
        }
        let a = (u = e.initItem) != null && u.useCheckTable ? e == null ? void 0 : e.checkTable : t;
        a && (a != null && a.length) && Array.isArray(a) ? (n.inputValue = e.initMultiple ? a : a[0], r(a, !1, !0), c("change", a)) : (n.inputValue = e.initMultiple ? [] : "", r([], !1, !1), c("change", []));
      },
      { deep: !0, immediate: !0 }
    );
    const F = (t, a, i) => {
      o(e.initMultiple ? [] : ""), c("onSearchClear", t, a, i);
    };
    return k(() => {
      var t;
      !e.fetchUrl && ((t = e.initialDataSource) == null ? void 0 : t.length) > 0 && r(e.initialDataSource, !0, !1);
    }), {
      ...s(n),
      ...s(e),
      onSearch: V,
      onSelect: o,
      controlOptions: y,
      deleteRepeat: h,
      onDialogShow: w,
      onSearchClear: F
    };
  },
  components: {
    InputAndButoon: g(
      () => import("../input-and-button/index.vue.mjs")
    ),
    SvgIcon: g(
      () => import("../icon/index.vue.mjs")
    )
  }
});
export {
  K as default
};
