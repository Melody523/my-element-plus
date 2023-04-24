import s from "./index.vue2.mjs";
import { resolveComponent as t, openBlock as o, createElementBlock as d, createElementVNode as n, createBlock as p } from "vue";
import "./index.vue3.mjs";
import "./index.vue4.mjs";
import i from "../../_virtual/_plugin-vue_export-helper.mjs";
const u = { class: "date_picker_class" };
function c(e, a, m, h, f, k) {
  const l = t("el-date-picker");
  return o(), d("div", u, [
    n("div", null, [
      (o(), p(l, {
        "popper-class": `pagination-popper ${e.classKey}`,
        ref: "datePickerRef",
        modelValue: e.value,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => e.value = r),
        type: e.dateType,
        shortcuts: e.shortcuts,
        key: e.classKey,
        format: e.format || (e.selectTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"),
        onChange: e.onChange,
        placeholder: `${["dateBefore", "nowDateBefore"].includes(e.classKey) ? "请选择结束时间" : "请选择起始时间"}`,
        "start-placeholder": e.startPlaceholder,
        "end-placeholder": e.endPlaceholder,
        onVisibleChange: e.visibleChange,
        "disabled-date": e.disabledDate,
        editable: !1
      }, null, 8, ["popper-class", "modelValue", "type", "shortcuts", "format", "onChange", "placeholder", "start-placeholder", "end-placeholder", "onVisibleChange", "disabled-date"]))
    ])
  ]);
}
const g = /* @__PURE__ */ i(s, [["render", c], ["__scopeId", "data-v-54907bc4"]]);
export {
  g as default
};
