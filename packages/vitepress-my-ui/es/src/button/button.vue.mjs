import c from "./button.vue2.mjs";
import { resolveComponent as n, openBlock as e, createElementBlock as t, normalizeClass as d, createVNode as s, mergeProps as u, withCtx as m, renderSlot as i, createCommentVNode as l } from "vue";
import "./button.vue3.mjs";
import _ from "../../_virtual/_plugin-vue_export-helper.mjs";
const p = {
  key: 0,
  class: "button_icon"
}, f = {
  key: 1,
  class: "button_icon"
}, y = {
  key: 2,
  class: "button_title"
};
function b(o, v, $, k, g, C) {
  const r = n("svg-icon"), a = n("el-button");
  return e(), t("div", {
    class: d(`button_style_default ${o.type}_style  ${o.size}_button ${o.model}_model  ${o.isHover ? "is_hover" : ""} button_style`)
  }, [
    s(a, u({ onClick: o.onClick }, { disabled: o.disabled, loading: o.loading }), {
      default: m(() => [
        o.iconType === "svg" && o.icon && !o.loading ? (e(), t("i", p, [
          s(r, {
            color: "icon_style",
            iconName: o.icon,
            className: "icon_style"
          }, null, 8, ["iconName"])
        ])) : o.iconType === "slot" ? (e(), t("i", f, [
          i(o.$slots, "icon", {}, void 0, !0)
        ])) : l("", !0),
        o.slotDefault ? (e(), t("span", y, [
          i(o.$slots, "default", {}, void 0, !0)
        ])) : l("", !0)
      ]),
      _: 3
    }, 16, ["onClick"])
  ], 2);
}
const T = /* @__PURE__ */ _(c, [["render", b], ["__scopeId", "data-v-15810987"]]);
export {
  T as default
};
