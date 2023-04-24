import n from "./index.vue2.mjs";
import { resolveComponent as a, openBlock as t, createElementBlock as r, renderSlot as p, createVNode as s, pushScopeId as c, popScopeId as i, createElementVNode as l } from "vue";
import "./index.vue3.mjs";
import d from "../../_virtual/_plugin-vue_export-helper.mjs";
const g = (e) => (c("data-v-fdcdcec9"), e = e(), i(), e), u = { class: "page-suffix" }, m = /* @__PURE__ */ g(() => /* @__PURE__ */ l("span", null, null, -1));
function f(e, h, z, C, _, S) {
  const o = a("el-pagination");
  return t(), r("div", u, [
    p(e.$slots, "default", {}, () => [
      m
    ], !0),
    s(o, {
      background: "",
      small: "",
      "page-sizes": e.pageSizeArr,
      total: e.total,
      "current-page": e.currentPage,
      "page-size": e.pageSize,
      layout: "total, sizes, prev, pager, next, jumper",
      onSizeChange: e.sizeChange,
      onCurrentChange: e.currentChange,
      "pager-count": e.pagerCount
    }, null, 8, ["page-sizes", "total", "current-page", "page-size", "onSizeChange", "onCurrentChange", "pager-count"])
  ]);
}
const B = /* @__PURE__ */ d(n, [["render", f], ["__scopeId", "data-v-fdcdcec9"]]);
export {
  B as default
};
