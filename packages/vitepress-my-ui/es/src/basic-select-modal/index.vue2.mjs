import { defineComponent as d, reactive as c, ref as s, computed as n, toRefs as f, defineAsyncComponent as m } from "vue";
const h = d({
  name: "BasicSelectModal",
  emits: ["onDialogShow", "onSearchClear"],
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
    let e = c({
      inputValue: "",
      ruleValue: "",
      inputRef: s(null)
    });
    const a = (t) => {
      l("onDialogShow", t);
    }, u = (t, i, p) => {
      l("onSearchClear", t, i, p);
    };
    e.inputValue = n(() => o.modelValue), e.ruleValue = n(() => o.ruleModel);
    const r = () => {
      e.inputRef.blur();
    };
    return {
      ...f(e),
      onDialogShow: a,
      onSearchClear: u,
      onFocus: r
    };
  },
  components: {
    InputAndButoon: m(
      () => import("../input-and-button/index.vue.mjs")
    )
  }
});
export {
  h as default
};
