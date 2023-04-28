import { defineComponent as d, reactive as h, ref as w, computed as n, onMounted as S, toRefs as u, defineAsyncComponent as b } from "vue";
import g from "../rc-form/index.vue.mjs";
import { deepClone as y } from "../utils/utils.mjs";
const D = d({
  name: "SearchForm",
  emits: [
    "onSearchSubmit",
    "onDialogShow",
    "custDialog",
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
    // 操作按钮是否禁用
    toolsListDisabled: {
      type: Boolean,
      default: !1
    },
    // 是否展开所有表单项
    show: {
      type: Boolean,
      default: !0
    },
    // 点击搜索后是否自动收起表单项
    keepShow: {
      type: Boolean,
      default: !0
    },
    maxHeight: {
      type: [String, Number],
      default: "400"
    }
  },
  setup(t, { emit: a }) {
    let o = h({
      form: {},
      show: t.show,
      RCFormRef: w(null)
    });
    const s = () => {
      o.RCFormRef.submit().then((e) => {
        !t.keepShow && (o.show = !1), a("onSearchSubmit", e);
      }).catch((e) => {
        console.log(e);
      });
    };
    o.form = n({
      // 重新定义
      get: () => t.modelValue,
      set: (e) => a("update:modelValue", e)
    });
    const f = () => {
      o.form = y(t.defaultValue), a("onReset");
    }, m = (e) => {
      o.show = !o.show;
    };
    S(async () => {
      const e = {
        ...o.form,
        ...t.initValue,
        ...t.defaultValue
      };
      o.form = e;
    });
    const r = (e, l = {}) => {
      a("onDialogShow", e, l);
    }, i = (e, l) => {
      a("custDialog", e, l);
    }, c = n(() => t.formList.filter((e) => e.isShow).length >= t.rowNumber);
    return {
      ...u(t),
      ...u(o),
      onSearchSubmit: s,
      onReset: f,
      onDialogShow: r,
      custDialog: i,
      changeShow: m,
      hasShow: c
    };
  },
  components: {
    RCForm: g,
    // 同步引入
    ToolsList: b(
      () => import("../tools-list/index.vue.mjs")
    )
  }
});
export {
  D as default
};
