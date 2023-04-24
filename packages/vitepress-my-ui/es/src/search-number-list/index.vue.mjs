import V from "./index.vue2.mjs";
import { resolveComponent as n, openBlock as f, createBlock as c, mergeProps as A, withCtx as l, createElementVNode as a, createVNode as t, withKeys as g, toDisplayString as p, createTextVNode as i } from "vue";
import "./index.vue3.mjs";
import "./index.vue4.mjs";
import _ from "../../_virtual/_plugin-vue_export-helper.mjs";
const h = { class: "widght_box" }, B = { className: "dialog_title_box" }, E = { className: "title_tips" }, k = /* @__PURE__ */ i("数据格式化"), v = { class: "modal_contant" }, y = { class: "count_box" }, N = { class: "dialog-footer" }, $ = /* @__PURE__ */ i("确认"), w = /* @__PURE__ */ i("取消");
function D(e, o, P, S, T, U) {
  const m = n("svg-icon"), d = n("el-input"), s = n("at-button"), C = n("el-tooltip"), F = n("el-dialog"), b = n("InputAndButton");
  return f(), c(b, A({
    isUse: !!e.modelProps.ruleOutKey,
    disabled: e.disabled,
    initValue: e.ruleValue
  }, {
    onClick: o[5] || (o[5] = (u) => e.onClickShowModel("ruleValue"))
  }), {
    com: l(() => [
      a("div", h, [
        t(d, {
          disabled: e.disabled,
          modelValue: e.theValue,
          "onUpdate:modelValue": o[1] || (o[1] = (u) => e.theValue = u),
          clearable: "",
          onClear: e.isClearInput,
          onChange: e.inputChange,
          placeholder: e.placeholder || "多个值请用逗号或者空格分隔",
          onKeyup: g(e.keyUpEnter, ["enter"])
        }, {
          suffix: l(() => [
            t(m, {
              color: e.disabled ? "#a8abb2" : "#666666",
              iconName: "icon-fangda",
              className: `button_point ${e.disabled ? "button_point_disabled" : ""}`,
              onClick: o[0] || (o[0] = (u) => e.onClickShowModel("theValue"))
            }, null, 8, ["color", "className"])
          ]),
          _: 1
        }, 8, ["disabled", "modelValue", "onClear", "onChange", "placeholder", "onKeyup"]),
        t(F, {
          modelValue: e.modelVisible,
          "onUpdate:modelValue": o[4] || (o[4] = (u) => e.modelVisible = u),
          "append-to-body": "",
          title: e.modelTarget === "ruleValue" && e.modelProps.ruleTitle || `多单号查询${e.modelTarget === "ruleValue" ? " - 排除项" : ""}`,
          width: "800px",
          top: e.dialogTop,
          "before-close": e.beforeClose,
          class: "number-list-dialog"
        }, {
          footer: l(() => [
            a("span", N, [
              t(s, {
                type: "primary",
                onClick: e.onModelSubmit
              }, {
                default: l(() => [
                  $
                ]),
                _: 1
              }, 8, ["onClick"]),
              t(s, {
                class: "mrgl-10",
                onClick: e.beforeClose
              }, {
                default: l(() => [
                  w
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          default: l(() => {
            var u;
            return [
              a("div", B, [
                a("div", E, " 如需同时使用多个值进行查询，请使用逗号,空格或换行分隔" + p(((u = e.modelProps) == null ? void 0 : u.maxLength) > 0 ? ` --- 最多可以输入${e.modelProps.maxLength}行` : ""), 1),
                t(C, {
                  class: "box-item",
                  effect: "dark",
                  content: "格式化：移除字符前后空格，移除空白行，将逗号或者空格分隔转变为换行展示",
                  placement: "top-end"
                }, {
                  default: l(() => [
                    t(s, {
                      type: "plain",
                      onClick: o[2] || (o[2] = (r) => e.inputValue = e.formatting(e.inputValue))
                    }, {
                      default: l(() => [
                        k
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              a("div", v, [
                t(d, {
                  placeholder: "请输入",
                  type: "textarea",
                  modelValue: e.inputValue,
                  "onUpdate:modelValue": o[3] || (o[3] = (r) => e.inputValue = r),
                  rows: 10
                }, null, 8, ["modelValue"]),
                a("div", y, " 行数: " + p(e.countsNumber), 1)
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue", "title", "top", "before-close"])
      ])
    ]),
    _: 1
  }, 16);
}
const j = /* @__PURE__ */ _(V, [["render", D], ["__scopeId", "data-v-5733e122"]]);
export {
  j as default
};
