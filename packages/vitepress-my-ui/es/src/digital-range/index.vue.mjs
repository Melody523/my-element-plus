import p from "./index.vue2.mjs";
import { resolveComponent as t, openBlock as u, createElementBlock as r, createVNode as d, withKeys as a, pushScopeId as s, popScopeId as i, createElementVNode as m } from "vue";
import "./index.vue3.mjs";
import V from "../../_virtual/_plugin-vue_export-helper.mjs";
const b = (e) => (s("data-v-780530e3"), e = e(), i(), e), v = { class: "widght_box" }, f = /* @__PURE__ */ b(() => /* @__PURE__ */ m("div", { class: "mid_text" }, "-", -1));
function g(e, o, y, I, h, C) {
  const n = t("el-input");
  return u(), r("div", v, [
    d(n, {
      disabled: e.disabled,
      modelValue: e.value[0],
      "onUpdate:modelValue": o[0] || (o[0] = (l) => e.value[0] = l),
      clearable: "",
      onChange: e.update,
      placeholder: "0",
      onKeyup: a(e.keyUpEnter, ["enter"]),
      onInput: o[1] || (o[1] = (l) => e.inputValue(l, 0))
    }, null, 8, ["disabled", "modelValue", "onChange", "onKeyup"]),
    f,
    d(n, {
      disabled: e.disabled,
      modelValue: e.value[1],
      "onUpdate:modelValue": o[2] || (o[2] = (l) => e.value[1] = l),
      clearable: "",
      onChange: e.update,
      placeholder: "正无穷",
      onKeyup: a(e.keyUpEnter, ["enter"]),
      onInput: o[3] || (o[3] = (l) => e.inputValue(l, 1))
    }, null, 8, ["disabled", "modelValue", "onChange", "onKeyup"])
  ]);
}
const $ = /* @__PURE__ */ V(p, [["render", g], ["__scopeId", "data-v-780530e3"]]);
export {
  $ as default
};
