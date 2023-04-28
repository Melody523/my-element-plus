import R from "./index.vue2.mjs";
import { resolveComponent as s, resolveDirective as N, openBlock as t, createBlock as r, normalizeClass as V, createSlots as _, withCtx as l, createElementBlock as d, createVNode as n, mergeProps as v, createCommentVNode as u, createElementVNode as i, withDirectives as c, Fragment as w, renderList as C, vShow as h, toDisplayString as $, createTextVNode as m, pushScopeId as T, popScopeId as B } from "vue";
import L from "../assets/img/BlankShow.png.mjs";
import "./index.vue3.mjs";
import "./index.vue4.mjs";
import O from "../../_virtual/_plugin-vue_export-helper.mjs";
const I = (e) => (T("data-v-e67c8298"), e = e(), B(), e), E = { class: "dialog-title" }, z = {
  key: 0,
  class: "page-searchbox"
}, K = { class: "dialog-main" }, P = { class: "dialog-table-content" }, U = {
  key: 0,
  class: "table-page"
}, W = { class: "select-table" }, A = ["onClick"], j = {
  key: 1,
  class: "no-data-content"
}, q = /* @__PURE__ */ I(() => /* @__PURE__ */ i("img", {
  class: "image",
  src: L
}, null, -1)), G = { class: "tips" }, H = /* @__PURE__ */ m(" 请至 "), J = /* @__PURE__ */ m(" 进行选择 "), M = { class: "dialog-footer" }, Q = /* @__PURE__ */ m("取 消"), X = /* @__PURE__ */ m("确 定");
function Y(e, a, Z, x, ee, oe) {
  const g = s("el-tab-pane"), k = s("el-tabs"), y = s("SearchForm"), p = s("el-table-column"), b = s("el-table"), S = s("the-pagination"), f = s("el-button"), D = s("el-dialog"), F = N("loading");
  return t(), r(D, {
    "append-to-body": "",
    ref: "dialogRef",
    class: V(`custom-dialog-detail ${!e.isRadio && "dialog-container"}`),
    title: e.title,
    onOpen: e.handleOpen,
    width: e.dialogWidth,
    top: e.dialogTop,
    "model-value": e.modelValue,
    "before-close": () => {
      e.handleClose("cancel");
    }
  }, _({
    default: l(() => [
      e.formList.length > 0 && e.activeName === "first" ? (t(), d("div", z, [
        n(y, v({
          ref: "searchFormRef",
          modelValue: e.form,
          "onUpdate:modelValue": a[1] || (a[1] = (o) => e.form = o)
        }, {
          formList: e.formList,
          staticData: e.staticData,
          labelWidth: "96px",
          hasSetting: !1
        }, {
          onOnSearchSubmit: e.searchData,
          onFirstSearch: e.searchData,
          onOnReset: e.resetInfo
        }), null, 16, ["modelValue", "onOnSearchSubmit", "onFirstSearch", "onOnReset"])
      ])) : u("", !0),
      i("div", K, [
        i("div", P, [
          c((t(), r(b, {
            "scrollbar-always-on": "",
            ref: "multipleTable",
            stripe: "",
            "row-key": e.rowKey,
            data: e.tableData,
            "row-class-name": ({ row: o }) => o.disabled && "disabled",
            height: `${e.isRadio ? "400" : "285"}`,
            "highlight-current-row": e.isRadio,
            onRowClick: e.rowClick,
            onSelectionChange: e.handleSelectionChange
          }, {
            default: l(() => [
              e.isRadio ? u("", !0) : (t(), r(p, {
                key: 0,
                type: "selection",
                width: "55",
                "reserve-selection": !0,
                align: "center"
              })),
              (t(!0), d(w, null, C(e.tableList.filter((o) => o.isShow), (o) => (t(), r(p, {
                "show-overflow-tooltip": "",
                key: o.key,
                prop: o.key,
                align: "center",
                label: o.label
              }, null, 8, ["prop", "label"]))), 128))
            ]),
            _: 1
          }, 8, ["row-key", "data", "row-class-name", "height", "highlight-current-row", "onRowClick", "onSelectionChange"])), [
            [h, e.activeName === "first"],
            [F, e.tableLoading]
          ]),
          !e.hasInitialDataSource && e.hasPagination ? c((t(), d("div", U, [
            n(S, v({ "popper-class": "pagination-popper" }, e.pager, {
              small: "",
              onCustCurrentChange: a[2] || (a[2] = (o) => e.currentChange(o, e.getData)),
              onCustSizeChange: a[3] || (a[3] = (o) => e.sizeChange(o, e.getData))
            }), null, 16)
          ], 512)), [
            [h, e.activeName === "first"]
          ]) : u("", !0),
          c(i("div", W, [
            n(b, {
              "scrollbar-always-on": "",
              stripe: "",
              "row-key": e.rowKey,
              data: e.selectTableData,
              height: "400"
            }, {
              default: l(() => [
                (t(!0), d(w, null, C(e.tableList.filter((o) => o.isShow), (o) => (t(), r(p, {
                  "show-overflow-tooltip": "",
                  key: o.key,
                  prop: o.key,
                  align: "center",
                  label: o.label
                }, null, 8, ["prop", "label"]))), 128)),
                n(p, {
                  label: "操作",
                  align: "center",
                  "column-key": "control",
                  width: "150"
                }, {
                  default: l((o) => [
                    i("span", {
                      class: "action-btn",
                      onClick: (ae) => e.removeSelectData(o.row)
                    }, "移除", 8, A)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["row-key", "data"])
          ], 512), [
            [h, e.activeName === "second" && e.selectTableData.length > 0]
          ]),
          e.selectTableData.length <= 0 && e.activeName === "second" ? (t(), d("div", j, [
            q,
            i("div", G, [
              H,
              i("span", {
                class: "click-tips",
                onClick: a[4] || (a[4] = (...o) => e.toFirstTab && e.toFirstTab(...o))
              }, $(e.title) + "列表", 1),
              J
            ])
          ])) : u("", !0)
        ])
      ])
    ]),
    _: 2
  }, [
    e.isRadio ? void 0 : {
      name: "title",
      fn: l(() => [
        i("div", E, [
          n(k, {
            modelValue: e.activeName,
            "onUpdate:modelValue": a[0] || (a[0] = (o) => e.activeName = o)
          }, {
            default: l(() => [
              n(g, {
                label: e.title,
                name: "first"
              }, null, 8, ["label"]),
              n(g, {
                label: `已选择(${e.selectTableData.length})`,
                name: "second"
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])
    },
    e.isRadio ? void 0 : {
      name: "footer",
      fn: l(() => [
        i("span", M, [
          n(f, {
            onClick: a[5] || (a[5] = (o) => e.handleClose("cancel"))
          }, {
            default: l(() => [
              Q
            ]),
            _: 1
          }),
          n(f, {
            type: "primary",
            onClick: a[6] || (a[6] = (o) => e.handleClose("confirm"))
          }, {
            default: l(() => [
              X
            ]),
            _: 1
          })
        ])
      ])
    }
  ]), 1032, ["class", "title", "onOpen", "width", "top", "model-value", "before-close"]);
}
const de = /* @__PURE__ */ O(R, [["render", Y], ["__scopeId", "data-v-e67c8298"]]);
export {
  de as default
};
