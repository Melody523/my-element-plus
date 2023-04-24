import J from "./index.vue2.mjs";
import { resolveComponent as n, openBlock as o, createElementBlock as r, createVNode as u, withModifiers as j, withCtx as s, createElementVNode as h, normalizeClass as c, Fragment as y, renderList as f, withDirectives as B, createBlock as d, normalizeStyle as S, renderSlot as v, toDisplayString as t, createCommentVNode as q, mergeProps as b, withKeys as p, createTextVNode as A, vShow as w, pushScopeId as G, popScopeId as H } from "vue";
import "./index.vue3.mjs";
import "./index.vue4.mjs";
import Q from "../../_virtual/_plugin-vue_export-helper.mjs";
const X = (l) => (G("data-v-3ae54710"), l = l(), H(), l), Y = { class: "rc_form_box" }, Z = {
  key: 0,
  style: { display: "contents" },
  class: "detail-title-container"
}, x = /* @__PURE__ */ X(() => /* @__PURE__ */ h("div", { class: "gap" }, null, -1)), ee = { class: "detail-title" }, le = {
  key: 1,
  class: "slot-content"
}, ae = {
  key: 6,
  class: "my_date_picker"
}, oe = {
  key: 7,
  class: "my_date_picker"
}, ne = {
  key: 10,
  class: "my_input_number"
}, de = { class: "text-ellipsis" }, re = { class: "my_item_box" };
function se(l, g, ue, pe, he, te) {
  const D = n("SearchNumberList"), K = n("el-option"), E = n("el-select"), M = n("DigitalRange"), $ = n("DatePicker"), O = n("BasicSelectModal"), T = n("SearchSelect"), k = n("el-date-picker"), I = n("el-cascader"), N = n("el-radio"), L = n("el-radio-group"), R = n("el-input-number"), i = n("el-input"), P = n("el-tooltip"), W = n("el-form-item"), C = n("el-col"), _ = n("el-row"), z = n("el-form");
  return o(), r("div", Y, [
    u(z, {
      ref: "formRef",
      model: l.form,
      "label-width": l.labelWidth || "100px",
      onSubmit: g[0] || (g[0] = j(() => {
      }, ["prevent"]))
    }, {
      default: s(() => [
        h("div", {
          class: c(`contant_item ${l.hasToolsCol && l.show ? "contant_item_show" : ""}  ${l.hasToolsCol ? "contant_item_search_form" : "contant_item_no_padding"}`)
        }, [
          u(_, null, {
            default: s(() => [
              (o(!0), r(y, null, f(l.formList, (e, V) => B((o(), d(C, {
                span: e.type === "br" ? 24 : e.span || 24 / l.rowNumber,
                offset: e.offset || 0,
                key: V,
                style: S(e.type === "br" ? "min-height: 0px" : "")
              }, {
                default: s(() => {
                  var m;
                  return [
                    e.type === "br" ? (o(), r("div", Z, [
                      v(l.$slots, e.slotName, {}, void 0, !0),
                      l.titleType === "detail" && e.contant ? (o(), r("div", {
                        key: 0,
                        class: c(`detail-title-content ${e.class} ${l.firstDetailTitleIndex === V ? "no-gap" : ""}`)
                      }, [
                        x,
                        h("div", ee, t(e.contant), 1)
                      ], 2)) : e.contant ? (o(), r("div", le, t(e.contant), 1)) : q("", !0)
                    ])) : (o(), r("div", {
                      key: 1,
                      class: c(` ${l.hasToolsCol ? "my_item_box" : "my_item_box_no_search"} ${((m = Object.keys(l.formRules)) == null ? void 0 : m.length) > 0 ? "rules_item_box" : ""}`),
                      style: S(
                        l.formItemMrgb || l.formItemMrgb === 0 ? `margin-bottom: ${l.formItemMrgb}px` : ""
                      )
                    }, [
                      (o(), d(W, {
                        label: e.label,
                        class: "my_form_item",
                        prop: e.key,
                        key: e.ruleDisabled,
                        rules: !e.isShow || e.ruleDisabled || ["text", "textDate", "textList", "textCascader", "textJoin", "textWith"].includes(
                          e.type
                        ) ? null : l.formRules[e.key]
                      }, {
                        default: s(() => {
                          var F, U;
                          return [
                            e.type === "modalTextarea" ? (o(), d(D, b({
                              key: 0,
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              onClear: (a) => delete l.form[e.key]
                            }, {
                              ...e,
                              modelProps: e,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form)
                            }, {
                              ruleModel: l.form[e.ruleOutKey],
                              "onUpdate:ruleModel": (a) => l.form[e.ruleOutKey] = a,
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              keyUpEnter: l.keyUpEnter
                            }), null, 16, ["modelValue", "onUpdate:modelValue", "onClear", "ruleModel", "onUpdate:ruleModel", "onChange", "keyUpEnter"])) : ["select", "selectWith"].includes(e.type) ? (o(), d(E, {
                              key: 1,
                              "popper-class": "pagination-popper",
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              multiple: e.multiple,
                              "collapse-tags": !0,
                              "max-collapse-tags": e.multiple ? e.tags || 1 : e.tags,
                              "collapse-tags-tooltip": !!(e.tags || e.multiple),
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              filterable: "",
                              clearable: !e.noClearable,
                              placeholder: e.placeholder || "请选择",
                              onClear: (a) => e.selectClear ? e.selectClear() : delete l.form[e.key],
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              onKeyup: p(l.keyUpEnter, ["enter"])
                            }, {
                              default: s(() => [
                                (o(!0), r(y, null, f(e.options || l.staticData[e.selectKey] || l.staticData[e.key] || [], (a) => (o(), d(K, {
                                  key: a.value,
                                  label: e.type === "selectWith" ? `【${a.value}${l.isEmpty(a.value) || l.isEmpty(a.label || a.name) ? "" : "-"}${a.label || a.name}】` : a.label || a.name,
                                  value: a.value
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "max-collapse-tags", "collapse-tags-tooltip", "disabled", "clearable", "placeholder", "onClear", "onChange", "onKeyup"])) : e.type === "digitalRange" ? (o(), d(M, {
                              key: 2,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              keyUpEnter: l.keyUpEnter
                            }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "onChange", "keyUpEnter"])) : e.type === "dateSelect" ? (o(), d($, b({
                              key: 3,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form)
                            }, { ...e }, {
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              }
                            }), null, 16, ["disabled", "modelValue", "onUpdate:modelValue", "onChange"])) : e.type === "search" ? (o(), d(O, {
                              key: 4,
                              placeholder: e.placeholder,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              ruleModel: l.form[e.ruleOutKey],
                              "onUpdate:ruleModel": (a) => l.form[e.ruleOutKey] = a,
                              initItem: e,
                              onOnDialogShow: l.onDialogShow,
                              onOnSearchClear: l.onSearchClear
                            }, null, 8, ["placeholder", "disabled", "modelValue", "onUpdate:modelValue", "ruleModel", "onUpdate:ruleModel", "initItem", "onOnDialogShow", "onOnSearchClear"])) : e.type === "searchSelect" ? (o(), d(T, b({ key: 5 }, { ...e, initItem: e }, {
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              onOnDialogShow: l.onDialogShow,
                              onOnSearchClear: l.onSearchClear,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              checkTable: (U = (F = l.form) == null ? void 0 : F.checkTable) == null ? void 0 : U[e.key],
                              ruleModel: l.form[e.ruleOutKey],
                              "onUpdate:ruleModel": (a) => l.form[e.ruleOutKey] = a,
                              onCustDialog: l.custDialog,
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              }
                            }), null, 16, ["modelValue", "onUpdate:modelValue", "onOnDialogShow", "onOnSearchClear", "disabled", "checkTable", "ruleModel", "onUpdate:ruleModel", "onCustDialog", "onChange"])) : ["date", "daterange", "datetime", "datetimerange"].includes(
                              e.type
                            ) ? (o(), r("div", ae, [
                              u(k, {
                                "popper-class": "pagination-popper",
                                disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                                "disabled-date": e.disabledDate,
                                modelValue: l.form[e.key],
                                "onUpdate:modelValue": (a) => l.form[e.key] = a,
                                type: e.type,
                                placeholder: e.placeholder || "请选择",
                                onChange: (a) => {
                                  l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                                }
                              }, null, 8, ["disabled", "disabled-date", "modelValue", "onUpdate:modelValue", "type", "placeholder", "onChange"])
                            ])) : e.type === "year" ? (o(), r("div", oe, [
                              u(k, {
                                "popper-class": "pagination-popper",
                                clearable: e.clearable,
                                modelValue: l.form[e.key],
                                "onUpdate:modelValue": (a) => l.form[e.key] = a,
                                type: "year",
                                disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                                "disabled-date": e.disabledDate,
                                placeholder: e.placeholder || "请选择",
                                onChange: (a) => {
                                  l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                                },
                                onKeyup: p(l.keyUpEnter, ["enter"])
                              }, null, 8, ["clearable", "modelValue", "onUpdate:modelValue", "disabled", "disabled-date", "placeholder", "onChange", "onKeyup"])
                            ])) : e.type === "cascader" ? (o(), d(I, {
                              key: 8,
                              style: { width: "100%" },
                              props: e.cascaderProps,
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              clearable: "",
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              placeholder: e.placeholder || "请选择",
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              onKeyup: p(l.keyUpEnter, ["enter"])
                            }, null, 8, ["props", "modelValue", "onUpdate:modelValue", "disabled", "placeholder", "onChange", "onKeyup"])) : e.type === "radio" ? (o(), d(L, {
                              key: 9,
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              }
                            }, {
                              default: s(() => [
                                (o(!0), r(y, null, f(e.options || l.staticData[e.key] || [], (a) => (o(), d(N, {
                                  key: a.value,
                                  label: a.value
                                }, {
                                  default: s(() => [
                                    A(t(a.label || a.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])) : e.type === "inputNumber" ? (o(), r("div", ne, [
                              u(R, {
                                precision: e.precision || 0,
                                modelValue: l.form[e.key],
                                "onUpdate:modelValue": (a) => l.form[e.key] = a,
                                min: e.min ?? -1 / 0,
                                max: e.max,
                                controls: !1,
                                disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                                placeholder: e.placeholder || "请输入",
                                onChange: (a) => {
                                  l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                                },
                                onKeyup: p(l.keyUpEnter, ["enter"])
                              }, null, 8, ["precision", "modelValue", "onUpdate:modelValue", "min", "max", "disabled", "placeholder", "onChange", "onKeyup"])
                            ])) : ["remark", "textarea"].includes(e.type) ? (o(), d(i, {
                              key: 11,
                              maxlength: e.maxLen || 255,
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              type: "textarea",
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              placeholder: e.placeholder || "请输入",
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              onKeyup: p(l.keyUpEnter, ["enter"])
                            }, null, 8, ["maxlength", "modelValue", "onUpdate:modelValue", "disabled", "placeholder", "onChange", "onKeyup"])) : ["text", "textDate", "textList", "textCascader", "textJoin", "textWith"].includes(
                              e.type
                            ) ? (o(), d(P, {
                              key: 12,
                              effect: "dark",
                              content: e.isShow && l.getText(l.form[e.selectKey || e.key], e),
                              placement: "top"
                            }, {
                              default: s(() => [
                                h("div", de, t(e.isShow && l.getText(l.form[e.selectKey || e.key], e)), 1)
                              ]),
                              _: 2
                            }, 1032, ["content"])) : (o(), d(i, {
                              key: 13,
                              modelValue: l.form[e.key],
                              "onUpdate:modelValue": (a) => l.form[e.key] = a,
                              modelModifiers: { trim: !0 },
                              clearable: "",
                              disabled: e.disabled || e.disabledFun && e.disabledFun(l.form),
                              placeholder: e.placeholder || "请输入",
                              maxlength: e.maxLen,
                              onChange: (a) => {
                                l.onChangeFlag || e.changeCallBack && e.changeCallBack(a, l.form);
                              },
                              onKeyup: p(l.keyUpEnter, ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength", "onChange", "onKeyup"]))
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "prop", "rules"]))
                    ], 6))
                  ];
                }),
                _: 2
              }, 1032, ["span", "offset", "style"])), [
                [w, l.showList(e)]
              ])), 128)),
              B(u(C, {
                span: 24 / l.rowNumber
              }, {
                default: s(() => [
                  h("div", re, [
                    v(l.$slots, "searchButton", {}, void 0, !0)
                  ])
                ]),
                _: 3
              }, 8, ["span"]), [
                [w, l.hasToolsCol && !l.show]
              ])
            ]),
            _: 3
          })
        ], 2)
      ]),
      _: 3
    }, 8, ["model", "label-width"])
  ]);
}
const ke = /* @__PURE__ */ Q(J, [["render", se], ["__scopeId", "data-v-3ae54710"]]);
export {
  ke as default
};
