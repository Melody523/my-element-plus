import { defineComponent as t, reactive as o, toRefs as n, defineAsyncComponent as s } from "vue";
const p = t({
  name: "ToolsList",
  emits: ["update:modelValue"],
  props: [
    "onReset",
    "onSearchSubmit",
    "changeShow",
    "show",
    "disabled"
  ],
  setup(m, { emit: a }) {
    let e = o({});
    return {
      ...n(e)
    };
  },
  components: {
    MenuButton: s(() => import("../menu-button/index.vue.mjs"))
  }
});
export {
  p as default
};
