import i from "./button.vue2.mjs";
import { resolveComponent as r, openBlock as e, createElementBlock as t, normalizeClass as d, createVNode as a, mergeProps as u, withCtx as p, renderSlot as s, createCommentVNode as n } from "vue";
import "./button.vue3.mjs";
import c from "../../_virtual/_plugin-vue_export-helper.mjs";
const m = {
  key: 0,
  class: "button_icon"
}, _ = {
  key: 1,
  class: "button_icon"
}, f = {
  key: 2,
  class: "button_title"
};
function b(o, $, y, k, v, C) {
  const l = r("el-button");
  return e(), t("div", {
    class: d(`button_style_default ${o.type}_style  ${o.size}_button ${o.model}_model  ${o.isHover ? "is_hover" : ""} button_style`)
  }, [
    a(l, u({ onClick: o.onClick }, { disabled: o.disabled, loading: o.loading }), {
      default: p(() => [
        o.iconType === "svg" && o.icon && !o.loading ? (e(), t("i", m)) : o.iconType === "slot" ? (e(), t("i", _, [
          s(o.$slots, "icon", {}, void 0, !0)
        ])) : n("", !0),
        o.slotDefault ? (e(), t("span", f, [
          s(o.$slots, "default", {}, void 0, !0)
        ])) : n("", !0)
      ]),
      _: 3
    }, 16, ["onClick"])
  ], 2);
}
const N = /* @__PURE__ */ c(i, [["render", b], ["__scopeId", "data-v-6605bedd"]]);
export {
  N as default
};
