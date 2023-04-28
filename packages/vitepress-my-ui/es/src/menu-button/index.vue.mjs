import k from "./index.vue2.mjs";
import { resolveComponent as t, openBlock as e, createElementBlock as l, normalizeClass as y, createElementVNode as r, createBlock as a, withCtx as n, toDisplayString as m, createCommentVNode as s, createVNode as u, Fragment as c, renderList as h, createTextVNode as C, renderSlot as $ } from "vue";
import "./index.vue3.mjs";
import v from "../../_virtual/_plugin-vue_export-helper.mjs";
const N = { class: "other_button_title_box" }, V = { class: "button_title" }, B = { class: "dropdown_button_box" }, L = {
  key: 0,
  class: "button_title"
};
function M(o, p, T, D, z, E) {
  const _ = t("el-button"), b = t("svg-icon"), g = t("el-dropdown-item"), f = t("el-dropdown-menu"), w = t("el-dropdown");
  return e(), l("div", {
    class: y(`menu_button_box ${o.buttonType}_button_box ${o.size}_button ${o.dropdownModel}_button_model ${o.disabled ? "is_disabled" : ""}`)
  }, [
    r("div", N, [
      o.dropdownModel === "other" ? (e(), a(_, {
        key: 0,
        disabled: o.disabled,
        onClick: p[0] || (p[0] = (i) => o.emit("click", ""))
      }, {
        default: n(() => [
          r("span", V, m(o.buttonTitle), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : s("", !0)
    ]),
    r("div", B, [
      u(w, {
        onCommand: o.command,
        trigger: o.trigger,
        placement: "bottom",
        onVisibleChange: o.controlDropdown,
        disabled: o.disabled
      }, {
        dropdown: n(() => {
          var i;
          return [
            o.model === "menuList" ? (e(), l(c, { key: 0 }, [
              ((i = o.menuList) == null ? void 0 : i.length) > 0 ? (e(), a(f, { key: 0 }, {
                default: n(() => [
                  (e(!0), l(c, null, h(o.menuList, (d) => (e(), a(g, {
                    key: d.key,
                    command: d.onClick,
                    disabled: d.disabled
                  }, {
                    default: n(() => [
                      C(m(d.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["command", "disabled"]))), 128))
                ]),
                _: 1
              })) : s("", !0)
            ], 64)) : o.model === "contant" ? $(o.$slots, "contant", { key: 1 }, void 0, !0) : s("", !0)
          ];
        }),
        default: n(() => [
          u(_, null, {
            default: n(() => [
              o.dropdownModel === "same" ? (e(), l("span", L, m(o.buttonTitle), 1)) : s("", !0),
              u(b, {
                color: "icon_style",
                iconName: o.isDropdown ? "icon-xiangshang" : "icon-xiangxia",
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
const q = /* @__PURE__ */ v(k, [["render", M], ["__scopeId", "data-v-23213f0c"]]);
export {
  q as default
};
