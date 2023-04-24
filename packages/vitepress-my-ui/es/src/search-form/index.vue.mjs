import i from "./index.vue2.mjs";
import { resolveComponent as n, openBlock as m, createElementBlock as S, normalizeStyle as d, createVNode as e, mergeProps as u, withCtx as w, normalizeProps as r, guardReactiveProps as t, withDirectives as p, createElementVNode as f, vShow as b } from "vue";
import "./index.vue3.mjs";
import g from "../../_virtual/_plugin-vue_export-helper.mjs";
const D = { class: "under_stick_control" };
function R(o, s, C, c, v, L) {
  const a = n("ToolsList"), l = n("RCForm");
  return m(), S("div", {
    class: "contant_box",
    style: d(`max-height:${o.maxHeight}px`)
  }, [
    e(l, u({ ref: "RCFormRef" }, {
      ...o.$attrs,
      formList: o.formList,
      rowNumber: o.rowNumber,
      staticData: o.staticData,
      labelWidth: o.labelWidth,
      hasToolsCol: !0,
      show: o.hasShow ? !1 : o.show
    }, {
      modelValue: o.form,
      "onUpdate:modelValue": s[0] || (s[0] = (h) => o.form = h),
      onOnDialogShow: o.onDialogShow,
      onCustDialog: o.custDialog,
      onInputEnter: o.onSearchSubmit
    }), {
      searchButton: w(() => [
        e(a, r(t({
          onReset: o.onReset,
          onSearchSubmit: o.onSearchSubmit,
          show: o.hasShow ? !1 : o.show,
          changeShow: o.hasShow ? !1 : o.changeShow,
          disabled: o.toolsListDisabled
        })), null, 16)
      ]),
      _: 1
    }, 16, ["modelValue", "onOnDialogShow", "onCustDialog", "onInputEnter"]),
    p(f("div", D, [
      e(a, r(t({
        onReset: o.onReset,
        onSearchSubmit: o.onSearchSubmit,
        show: o.hasShow ? !1 : o.show,
        changeShow: o.hasShow ? !1 : o.changeShow,
        disabled: o.toolsListDisabled
      })), null, 16)
    ], 512), [
      [b, !o.hasShow && o.show]
    ])
  ], 4);
}
const N = /* @__PURE__ */ g(i, [["render", R], ["__scopeId", "data-v-a52653a4"]]);
export {
  N as default
};
