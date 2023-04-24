import b from "./index.vue2.mjs";
import { resolveComponent as n, openBlock as t, createBlock as a, mergeProps as c, withCtx as i, createElementVNode as r, createVNode as s, createElementBlock as g, Fragment as v, renderList as f, withModifiers as h } from "vue";
import "./index.vue3.mjs";
import I from "../../_virtual/_plugin-vue_export-helper.mjs";
const k = { class: "widght_box" }, C = { class: "control_button" };
function y(e, o, w, B, S, $) {
  const d = n("el-option"), u = n("el-select"), m = n("svg-icon"), p = n("InputAndButoon");
  return t(), a(p, c({
    isUse: !!e.initItem.ruleOutKey,
    disabled: e.disabled,
    initValue: e.ruleModel
  }, {
    onClick: o[2] || (o[2] = (l) => e.onDialogShow(e.initItem.ruleOutKey, e.initItem))
  }), {
    com: i(() => [
      r("div", k, [
        s(u, {
          "model-value": e.inputValue,
          multiple: e.initMultiple,
          filterable: "",
          "value-key": e.rowKey,
          remote: "",
          "remote-method": e.onSearch,
          loading: e.loading,
          disabled: e.disabled,
          clearable: !0,
          placeholder: `${e.initItem.placeholder || "请输入关键词搜索或选择"}`,
          onChange: e.onSelect,
          "collapse-tags": !0,
          "max-collapse-tags": 1,
          "collapse-tags-tooltip": !0,
          onClear: o[0] || (o[0] = () => {
            !e.disabled && e.onSearchClear(
              e.initItem.clearData,
              e.initItem.key,
              e.initItem.callback
            );
          })
        }, {
          default: i(() => [
            (t(!0), g(v, null, f(e.options, (l) => (t(), a(d, {
              key: l[e.rowKey],
              label: l.label,
              value: l.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["model-value", "multiple", "value-key", "remote-method", "loading", "disabled", "placeholder", "onChange"]),
        r("div", C, [
          s(m, {
            color: e.disabled ? "#a8abb2" : "#666666",
            iconName: "icon-a-xuanzeqi",
            className: `button_padding button_point ${e.disabled ? "button_point_disabled" : ""}`,
            onClick: o[1] || (o[1] = h(
              () => {
                !e.disabled && e.onDialogShow(e.initItem.key, e.initItem);
              },
              ["stop"]
            ))
          }, null, 8, ["color", "className"])
        ])
      ])
    ]),
    _: 1
  }, 16);
}
const V = /* @__PURE__ */ I(b, [["render", y], ["__scopeId", "data-v-661fcda9"]]);
export {
  V as default
};
