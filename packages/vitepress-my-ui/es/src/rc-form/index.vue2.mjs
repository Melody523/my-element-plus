import { defineComponent as O, reactive as L, ref as R, computed as i, toRefs as I, defineAsyncComponent as f } from "vue";
import { useCurrentInstance as N, isEmpty as U, deepClone as y, getNotEmptyObject as V } from "../utils/utils.mjs";
const g = O({
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
    // 每行表单项数量
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
    // 标题类型
    titleType: {
      type: String,
      default: ""
    }
  },
  setup(n, { emit: s }) {
    const { globalProperties: h } = N();
    let l = L({
      form: {},
      formRef: R(null),
      onChangeFlag: !1
    });
    const p = (e, t) => {
      var o;
      let r = e;
      if (t.textFormat)
        return t.textFormat(e, l.form);
      if ((t != null && t.options || (o = n == null ? void 0 : n.staticData) != null && o[t.key]) && (r = b(e, t.options || n.staticData[t.key], t.type === "textWith")), t.type === "textDate") {
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
    }, b = (e, t, r = !1) => {
      let o;
      return t && Array.isArray(t) && (o = t.find((a) => a.value === e)), o && (r ? `【${o == null ? void 0 : o.value}-${o == null ? void 0 : o.name}】` : (o == null ? void 0 : o.name) || (o == null ? void 0 : o.label)) || e;
    }, D = (e, t) => {
      try {
        return h.dayjs(e).format(t || "YYYY-MM-DD");
      } catch {
        return e;
      }
    }, S = i(() => n.formList.filter((e) => e.isShow).slice(0, n.rowNumber - 1)), w = (e) => n.show ? e.isShow : S.value.findIndex(
      (t) => t.key === e.key
    ) > -1, C = (e, t = {}) => {
      s("onDialogShow", e, t);
    }, x = (e, t) => {
      s("custDialog", e, t);
    }, j = (e, t, r) => {
      if (e) {
        const o = y(l.form);
        Object.keys({ ...e, key: t }).map((a) => {
          var c;
          o[a] = e[a], (c = o == null ? void 0 : o.checkTable) != null && c.hasOwnProperty(a) && (o.checkTable[a] = []);
        }), l.form = o;
      }
      r && r(), s("onSearchClear", e, t, r);
    }, k = (e) => {
      const t = y(e);
      return Object.keys(e).forEach((r) => {
        Array.isArray(e[r]) && e[r].length === 0 && delete t[r];
      }), t;
    }, m = () => new Promise((e, t) => {
      try {
        l.formRef.validate((r, o) => {
          r ? e(k(V(l.form))) : (console.log("form", o), t(o));
        });
      } catch (r) {
        console.log("catch", r), t(r);
      }
    });
    l.form = i({
      // 重新定义
      get: () => n.modelValue,
      set: (e) => s("update:modelValue", e)
    });
    const d = async () => {
      try {
        if (n.fetchUrl) {
          const e = await n.fetchUrl(n.params);
          l.form = n.renderFunc(e || {});
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    n.fetchUrl && d();
    const F = i(() => n.formList.findIndex((e) => e.contant)), T = () => {
      s("inputEnter");
    }, A = (e) => {
      e.selectClear ? e.selectClear() : delete l.form[e.key];
    };
    return {
      ...I(l),
      showList: w,
      onDialogShow: C,
      onSearchClear: j,
      submit: m,
      getText: p,
      keyUpEnter: T,
      custDialog: x,
      isEmpty: U,
      firstDetailTitleIndex: F,
      getData: d,
      clearSelect: A
    };
  },
  components: {
    SearchNumberList: f(
      () => import("../search-number-list/index.vue.mjs")
    ),
    DigitalRange: f(
      () => import("../digital-range/index.vue.mjs")
    ),
    DatePicker: f(
      () => import("../date-picker/index.vue.mjs")
    ),
    BasicSelectModal: f(
      () => import("../basic-select-modal/index.vue.mjs")
    ),
    SearchSelect: f(
      () => import("../search-select/index.vue.mjs")
    )
  }
});
export {
  g as default
};
