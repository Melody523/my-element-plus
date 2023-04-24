import y from "./index.vue2.mjs";
import { resolveComponent as t, openBlock as o, createElementBlock as l, normalizeClass as k, createElementVNode as r, createBlock as a, withCtx as n, toDisplayString as m, createCommentVNode as s, createVNode as u, Fragment as c, renderList as h, createTextVNode as $, renderSlot as v } from "vue";
import "./index.vue3.mjs";
import C from "../../_virtual/_plugin-vue_export-helper.mjs";
const N = { class: "other_button_title_box" }, T = { class: "button_title" }, V = { class: "dropdown_button_box" }, B = {
  key: 0,
  class: "button_title"
};
function L(e, p, M, D, z, E) {
  const _ = t("el-button"), b = t("svg-icon"), g = t("el-dropdown-item"), f = t("el-dropdown-menu"), w = t("el-dropdown");
  return o(), l("div", {
    class: k(`menu_button_box ${e.buttonType}_button_box ${e.size}_button ${e.dropdownModel}_button_model ${e.useType ? "useType_style" : ""} ${e.disabled ? "is_disabled" : ""}`)
  }, [
    r("div", N, [
      e.dropdownModel === "other" ? (o(), a(_, {
        key: 0,
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (i) => e.emit("click", ""))
      }, {
        default: n(() => [
          r("span", T, m(e.buttonTitle), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : s("", !0)
    ]),
    r("div", V, [
      u(w, {
        onCommand: e.command,
        trigger: e.trigger || "hover",
        placement: "bottom",
        onVisibleChange: e.controlDropdown,
        disabled: e.disabled
      }, {
        dropdown: n(() => {
          var i;
          return [
            e.model === "menuList" ? (o(), l(c, { key: 0 }, [
              ((i = e.menuList) == null ? void 0 : i.length) > 0 ? (o(), a(f, { key: 0 }, {
                default: n(() => [
                  (o(!0), l(c, null, h(e.menuList, (d) => (o(), a(g, {
                    key: d.key,
                    command: d.onClick,
                    disabled: d.disabled
                  }, {
                    default: n(() => [
                      $(m(d.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["command", "disabled"]))), 128))
                ]),
                _: 1
              })) : s("", !0)
            ], 64)) : e.model === "contant" ? v(e.$slots, "contant", { key: 1 }, void 0, !0) : s("", !0)
          ];
        }),
        default: n(() => [
          u(_, null, {
            default: n(() => [
              e.dropdownModel === "same" ? (o(), l("span", B, m(e.buttonTitle), 1)) : s("", !0),
              u(b, {
                color: "icon_style",
                iconName: e.isDropdown ? "icon-xiangshang" : "icon-xiangxia",
                className: "icon_style"
              }, null, 8, ["iconName"])
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["onCommand", "trigger", "onVisibleChange", "disabled"])
    ])
  ], 2);
}
const q = /* @__PURE__ */ C(y, [["render", L], ["__scopeId", "data-v-f444842f"]]);
export {
  q as default
};
