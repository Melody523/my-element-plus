import { ElMessage as V } from "element-plus";
import { defineComponent as h, reactive as b, computed as o, toRefs as s, defineAsyncComponent as p } from "vue";
const C = h({
  name: "SearchNumberList",
  emits: ["update:modelValue", "clear", "update:ruleModel", "change"],
  props: {
    // 目标值（输入值）-外部传入
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 组件配置config
    modelProps: {
      type: Object,
      default: () => ({})
    },
    // 排除对应的key
    ruleModel: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    // 回车触发
    keyUpEnter: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(l, { emit: u }) {
    let e = b({
      theValue: "",
      ruleValue: "",
      inputValue: "",
      modelVisible: !1,
      modelTarget: "",
      dialogTop: "15vh",
      countsNumber: 0
    });
    const a = (t) => t && t.replace(/(,|，|\s)/g, `
`).split(`
`).map((n) => n.trim()).filter((n) => n).join(`
`) || "", c = (t) => {
      l.disabled || (e.modelVisible = !0, e.inputValue = a(e[t]), e.modelTarget = t);
    }, i = () => {
      var n;
      const t = a(e.inputValue).split(`
`);
      if ((n = l == null ? void 0 : l.modelProps) != null && n.maxLength && t.length > l.modelProps.maxLength) {
        V({
          message: `当前输入数据超出可输入最大行数${l.modelProps.maxLength}，请进行调整！`,
          type: "warning"
        });
        return;
      }
      e[e.modelTarget] = t.join(","), r();
    }, f = () => {
      e.theValue = "", u("clear", "");
    }, g = (t) => {
      e.inputValue = a(t), i();
    };
    e.theValue = o({
      get: () => l.modelValue,
      set: (t) => u("update:modelValue", t)
    }), e.ruleValue = o({
      get: () => l.ruleModel,
      set: (t) => u("update:ruleModel", t)
    }), e.countsNumber = o(() => {
      var t, n, d, m;
      return e.inputValue && ((n = (t = e.inputValue) == null ? void 0 : t.split(`
`)) != null && n.length) ? (m = (d = e.inputValue) == null ? void 0 : d.split(`
`)) == null ? void 0 : m.length : 0;
    });
    const r = () => {
      e.modelTarget = "", e.modelVisible = !1, e.inputValue = "";
    };
    return {
      ...s(l),
      ...s(e),
      onClickShowModel: c,
      onModelSubmit: i,
      formatting: a,
      isClearInput: f,
      inputChange: g,
      beforeClose: r
    };
  },
  components: {
    InputAndButton: p(
      () => import("../input-and-button/index.vue.mjs")
    ),
    AtButton: p(
      () => import("../button/button.vue.mjs")
    )
  }
});
export {
  C as default
};
