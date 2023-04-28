import i from "./index.vue2.mjs";
import { resolveComponent as t, openBlock as l, createElementBlock as m, normalizeStyle as S, createVNode as e, mergeProps as n, withCtx as w, withDirectives as u, createElementVNode as d, vShow as p } from "vue";
import "./index.vue3.mjs";
import b from "../../_virtual/_plugin-vue_export-helper.mjs";
const f = { class: "under_stick_control" };
function g(o, s, C, D, c, O) {
  const a = t("ToolsList"), h = t("RCForm");
  return l(), m("div", {
    class: "contant_box",
    style: S(`max-height:${o.maxHeight}px`)
  }, [
    e(h, n({ ref: "RCFormRef" }, {
      ...o.$attrs,
      formList: o.formList,
      rowNumber: o.rowNumber,
      staticData: o.staticData,
      labelWidth: o.labelWidth,
      hasToolsCol: !0,
      show: o.hasShow ? o.show : !1
    }, {
      modelValue: o.form,
      "onUpdate:modelValue": s[0] || (s[0] = (r) => o.form = r),
      onOnDialogShow: o.onDialogShow,
      onCustDialog: o.custDialog,
      onInputEnter: o.onSearchSubmit
    }), {
      searchButton: w(() => [
        e(a, n({
          show: o.show,
          disabled: o.toolsListDisabled,
          hasShow: o.hasShow
        }, {
          onOnReset: o.onReset,
          onOnSearchSubmit: o.onSearchSubmit,
          onChangeShow: o.changeShow
        }), null, 16, ["onOnReset", "onOnSearchSubmit", "onChangeShow"])
      ]),
      _: 1
    }, 16, ["modelValue", "onOnDialogShow", "onCustDialog", "onInputEnter"]),
    u(d("div", f, [
      e(a, n({
        show: o.show,
        disabled: o.toolsListDisabled,
        hasShow: o.hasShow
      }, {
        onOnReset: o.onReset,
        onOnSearchSubmit: o.onSearchSubmit,
        onChangeShow: o.changeShow
      }), null, 16, ["onOnReset", "onOnSearchSubmit", "onChangeShow"])
    ], 512), [
      [p, o.hasShow && o.show]
    ])
  ], 4);
}
const V = /* @__PURE__ */ b(i, [["render", g], ["__scopeId", "data-v-5353ccee"]]);
export {
  V as default
};
