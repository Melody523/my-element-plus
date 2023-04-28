import c from "./index.vue2.mjs";
import { resolveComponent as n, openBlock as f, createElementBlock as V, createVNode as u, mergeProps as _, withCtx as t, createElementVNode as a, withKeys as A, toDisplayString as p, createTextVNode as i } from "vue";
import "./index.vue3.mjs";
import "./index.vue4.mjs";
import g from "../../_virtual/_plugin-vue_export-helper.mjs";
const h = { class: "search_number_list_content" }, E = { class: "widght_box" }, B = { className: "dialog_title_box" }, k = { className: "title_tips" }, v = /* @__PURE__ */ i("数据格式化"), y = { class: "modal_contant" }, N = { class: "count_box" }, $ = { class: "dialog-footer" }, w = /* @__PURE__ */ i("确认"), D = /* @__PURE__ */ i("取消");
function P(e, o, S, T, U, I) {
  const m = n("svg-icon"), d = n("el-input"), s = n("at-button"), C = n("el-tooltip"), b = n("el-dialog"), F = n("InputAndButton");
  return f(), V("div", h, [
    u(F, _({
      isUse: !!e.modelProps.ruleOutKey,
      disabled: e.disabled,
      initValue: e.ruleValue
    }, {
      onClick: o[5] || (o[5] = (l) => e.onClickShowModel("ruleValue"))
    }), {
      com: t(() => [
        a("div", E, [
          u(d, {
            disabled: e.disabled,
            modelValue: e.theValue,
            "onUpdate:modelValue": o[1] || (o[1] = (l) => e.theValue = l),
            clearable: "",
            onClear: e.isClearInput,
            onChange: e.inputChange,
            placeholder: e.placeholder || "多个值请用逗号或者空格分隔",
            onKeyup: A(e.keyUpEnter, ["enter"])
          }, {
            suffix: t(() => [
              u(m, {
                color: e.disabled ? "#a8abb2" : "#666666",
                iconName: "icon-fangda",
                className: `button_point ${e.disabled ? "button_point_disabled" : ""}`,
                onClick: o[0] || (o[0] = (l) => e.onClickShowModel("theValue"))
              }, null, 8, ["color", "className"])
            ]),
            _: 1
          }, 8, ["disabled", "modelValue", "onClear", "onChange", "placeholder", "onKeyup"]),
          u(b, {
            modelValue: e.modelVisible,
            "onUpdate:modelValue": o[4] || (o[4] = (l) => e.modelVisible = l),
            "append-to-body": "",
            title: e.modelTarget === "ruleValue" && e.modelProps.ruleTitle || `多单号查询${e.modelTarget === "ruleValue" ? " - 排除项" : ""}`,
            width: "800px",
            top: e.dialogTop,
            "before-close": e.beforeClose,
            class: "number-list-dialog"
          }, {
            footer: t(() => [
              a("span", $, [
                u(s, {
                  type: "primary",
                  onClick: e.onModelSubmit
                }, {
                  default: t(() => [
                    w
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                u(s, {
                  class: "mrgl-10",
                  onClick: e.beforeClose
                }, {
                  default: t(() => [
                    D
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            default: t(() => {
              var l;
              return [
                a("div", B, [
                  a("div", k, " 如需同时使用多个值进行查询，请使用逗号,空格或换行分隔" + p(((l = e.modelProps) == null ? void 0 : l.maxLength) > 0 ? ` --- 最多可以输入${e.modelProps.maxLength}行` : ""), 1),
                  u(C, {
                    class: "box-item",
                    effect: "dark",
                    content: "格式化：移除字符前后空格，移除空白行，将逗号或者空格分隔转变为换行展示",
                    placement: "top-end"
                  }, {
                    default: t(() => [
                      u(s, {
                        type: "plain",
                        onClick: o[2] || (o[2] = (r) => e.inputValue = e.formatting(e.inputValue))
                      }, {
                        default: t(() => [
                          v
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                a("div", y, [
                  u(d, {
                    placeholder: "请输入",
                    type: "textarea",
                    modelValue: e.inputValue,
                    "onUpdate:modelValue": o[3] || (o[3] = (r) => e.inputValue = r),
                    rows: 10
                  }, null, 8, ["modelValue"]),
                  a("div", N, " 行数: " + p(e.countsNumber), 1)
                ])
              ];
            }),
            _: 1
          }, 8, ["modelValue", "title", "top", "before-close"])
        ])
      ]),
      _: 1
    }, 16)
  ]);
}
const q = /* @__PURE__ */ g(c, [["render", P], ["__scopeId", "data-v-b0c5ff73"]]);
export {
  q as default
};
