import { defineComponent as A, reactive as T, ref as g, computed as i, watchEffect as U, toRefs as I, defineAsyncComponent as s } from "vue";
import { useCurrentInstance as L, isEmpty as N, deepClone as y, getNotEmptyObject as R } from "../utils/utils.mjs";
const P = A({
  name: "RCForm",
  emits: ["onDialogShow", "onSearchClear", "custDialog", "inputEnter", "update:modelValue"],
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    // 表单枚举
    formList: {
      type: Array,
      default: () => []
    },
    // 每行数量
    rowNumber: {
      type: Number,
      default: 3
    },
    // 是否有工具col
    hasToolsCol: {
      type: Boolean,
      default: !1
    },
    // 查询表单状态（ 收起 | 展开 ）
    show: {
      type: Boolean,
      default: !0
    },
    // 静态枚举方式
    staticData: {
      type: Object,
      default: () => {
      }
    },
    // labelWidth
    labelWidth: {
      type: String,
      default: "100px"
    },
    // 校验规则
    formRules: {
      type: Object,
      default: () => ({})
    },
    initForm: {
      type: Object,
      default: () => ({})
    },
    // 自定义每个表单项下边距
    formItemMrgb: {
      type: Number,
      default: null
    },
    // 单据属性模板url
    extendAttrUrl: {
      type: String,
      default: ""
    },
    fetchUrl: {
      type: Function
    },
    params: {
      type: Object,
      default: () => {
      }
    },
    renderFunc: {
      type: Function,
      default: (n) => n
    },
    callbackFunc: {
      type: Function || null,
      default: null
    },
    // 标题类型
    titleType: {
      type: String,
      default: ""
    }
  },
  setup(n, { emit: f }) {
    const { globalProperties: h } = L();
    let l = T({
      form: {},
      formRef: g(null),
      onChangeFlag: !1
    });
    const b = (e, t) => {
      var o;
      let r = e;
      if (t.textFormat)
        return t.textFormat(e, l.form);
      if ((t != null && t.options || (o = n == null ? void 0 : n.staticData) != null && o[t.key]) && (r = m(e, t.options || n.staticData[t.key], t.type === "textWith")), t.type === "textDate") {
        const a = D(e, t.format);
        a !== "Invalid Date" && (r = a);
      }
      if (["textList", "textCascader", "textJoin"].includes(t.type)) {
        let a = ",", c = "";
        switch (t.type) {
          case "textList":
            a = ",", c = "name";
            break;
          case "textCascader":
            a = " / ", c = "";
            break;
          default:
            a = (t == null ? void 0 : t.joinStr) || ",", c = (t == null ? void 0 : t.joinTarget) || "";
            break;
        }
        e && Array.isArray(e) && e.length > 0 ? r = e == null ? void 0 : e.map((u) => c ? u == null ? void 0 : u[c] : u).join(a) : r = "";
      }
      return r;
    }, m = (e, t, r = !1) => {
      let o;
      return t && Array.isArray(t) && (o = t.find((a) => a.value === e)), o && (r ? `【${o == null ? void 0 : o.value}-${o == null ? void 0 : o.name}】` : (o == null ? void 0 : o.name) || (o == null ? void 0 : o.label)) || e;
    }, D = (e, t) => {
      try {
        return h.dayjs(e).format(t || "YYYY-MM-DD");
      } catch {
        return e;
      }
    }, F = i(() => n.formList.filter((e) => e.isShow).slice(0, n.rowNumber - 1)), S = (e) => n.show ? e.isShow : F.value.findIndex(
      (t) => t.key === e.key
    ) > -1, w = (e, t = {}) => {
      f("onDialogShow", e, t);
    }, x = (e, t) => {
      f("custDialog", e, t);
    }, k = (e, t, r) => {
      if (e) {
        const o = y(l.form);
        Object.keys({ ...e, key: t }).map((a) => {
          var c;
          o[a] = e[a], (c = o == null ? void 0 : o.checkTable) != null && c.hasOwnProperty(a) && (o.checkTable[a] = []);
        }), l.form = o;
      }
      r && r(), f("onSearchClear", { key: t });
    }, j = (e) => {
      const t = y(e);
      return Object.keys(e).forEach((r) => {
        Array.isArray(e[r]) && e[r].length === 0 && delete t[r];
      }), t;
    }, C = () => new Promise((e, t) => {
      try {
        l.formRef.validate((r, o) => {
          r ? e(j(R(l.form))) : (console.log("form", o), t(o));
        });
      } catch (r) {
        console.log("catch", r), t(r);
      }
    });
    l.form = i({
      // 重新定义
      get: () => n.modelValue,
      set: (e) => f("update:modelValue", e)
    });
    const d = async () => {
      try {
        if (n.fetchUrl) {
          const e = await n.fetchUrl(n.params);
          l.form = n.renderFunc(e || {}), n.callbackFunc && n.callbackFunc(e || {});
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    n.fetchUrl && d(), U(() => {
      var e;
      !n.fetchUrl && n.initForm && ((e = Object.keys(n.initForm)) == null ? void 0 : e.length) > 0 && (l.form = { ...n.initForm });
    });
    const p = i(() => n.formList.findIndex((e) => e.contant)), O = () => {
      f("inputEnter");
    };
    return {
      ...I(l),
      showList: S,
      onDialogShow: w,
      onSearchClear: k,
      submit: C,
      getText: b,
      keyUpEnter: O,
      custDialog: x,
      isEmpty: N,
      firstDetailTitleIndex: p,
      getData: d
    };
  },
  components: {
    SearchNumberList: s(
      () => import("../search-number-list/index.vue.mjs")
    ),
    DigitalRange: s(
      () => import("../digital-range/index.vue.mjs")
    ),
    DatePicker: s(
      () => import("../date-picker/index.vue.mjs")
    ),
    BasicSelectModal: s(
      () => import("../basic-select-modal/index.vue.mjs")
    ),
    SearchSelect: s(
      () => import("../search-select/index.vue.mjs")
    )
  }
});
export {
  P as default
};
