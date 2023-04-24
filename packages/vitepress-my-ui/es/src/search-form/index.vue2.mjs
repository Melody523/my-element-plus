import { defineComponent as r, reactive as d, ref as h, computed as n, onMounted as w, toRefs as b, defineAsyncComponent as S } from "vue";
import y from "../rc-form/index.vue.mjs";
import { deepClone as g } from "../utils/utils.mjs";
const D = r({
  name: "SearchForm",
  emits: [
    "onSearchSubmit",
    "onDialogShow",
    "custDialog",
    "firstSearch",
    "onReset",
    "update:modelValue"
  ],
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
    // 静态枚举:
    staticData: {
      type: Object,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    // 初始参数
    initValue: {
      type: Object,
      default: () => ({})
    },
    // 默认参数
    defaultValue: {
      type: Object,
      default: () => ({})
    },
    rowNumber: {
      type: Number,
      default: 3
    },
    toolsListDisabled: {
      type: Boolean,
      default: !1
    },
    show: {
      type: Boolean,
      default: !1
    },
    maxHeight: {
      type: [String, Number],
      default: "400"
    }
  },
  setup(o, { emit: a }) {
    let t = d({
      form: {},
      show: o.show,
      RCFormRef: h(null)
    });
    const u = () => {
      t.RCFormRef.submit().then((e) => {
        t.show = !1, a("onSearchSubmit", e);
      }).catch((e) => {
        console.log(e);
      });
    };
    t.form = n({
      // 重新定义
      get: () => o.modelValue,
      set: (e) => a("update:modelValue", e)
    });
    const s = () => {
      console.log("onReset", o.defaultValue);
      const e = o.defaultValue ? g(o.defaultValue) : {};
      t.form = e, a("onReset");
    }, f = (e) => {
      e || e === !1 ? t.show = e : t.show = !t.show;
    };
    w(async () => {
      const e = {
        ...t.form,
        ...o.initValue,
        ...o.defaultValue
      };
      t.form = e;
    });
    const m = (e, l = {}) => {
      a("onDialogShow", e, l);
    }, c = (e, l) => {
      a("custDialog", e, l);
    }, i = n(() => o.formList.filter((e) => e.isShow).length < o.rowNumber);
    return {
      ...b(t),
      onSearchSubmit: u,
      onReset: s,
      onDialogShow: m,
      custDialog: c,
      changeShow: f,
      hasShow: i
    };
  },
  components: {
    RCForm: y,
    // 同步引入
    ToolsList: S(
      () => import("../tools-list/index.vue.mjs")
    )
  }
});
export {
  D as default
};
