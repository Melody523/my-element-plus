import { defineComponent as c, reactive as s, ref as f, computed as n, toRefs as m, defineAsyncComponent as a } from "vue";
const V = c({
  name: "BasicSelectModal",
  emits: ["onDialogShow", "onSearchClear", "update:modelValue"],
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    // 排除项的值
    ruleModel: {
      type: String,
      default: ""
    },
    initItem: {
      type: Object,
      default: {}
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(o, { emit: l }) {
    let e = s({
      inputValue: "",
      ruleValue: "",
      inputRef: f(null)
    });
    const u = (t) => {
      l("onDialogShow", t, o.initItem);
    }, i = (t, d, p) => {
      e.inputValue = "", l("onSearchClear", t, d, p);
    };
    e.inputValue = n({
      // 重新定义
      get: () => o.modelValue,
      set: (t) => l("update:modelValue", t)
    }), e.ruleValue = n(() => o.ruleModel);
    const r = () => {
      e.inputRef.blur();
    };
    return {
      ...m(e),
      onDialogShow: u,
      onSearchClear: i,
      onFocus: r
    };
  },
  components: {
    InputAndButoon: a(
      () => import("../input-and-button/index.vue.mjs")
    ),
    SvgIcon: a(
      () => import("../icon/index.vue.mjs")
    )
  }
});
export {
  V as default
};
