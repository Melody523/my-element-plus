import { getCurrentInstance as a, reactive as f } from "vue";
import c from "dayjs";
function y() {
  const { appContext: { config: { globalProperties: t } } } = a();
  return t.dayjs = c, {
    globalProperties: t
  };
}
function i(t) {
  return t !== null && typeof t == "object" && Object.prototype.toString.call(t) !== "[object Date]";
}
function m(t) {
  if (!i(t))
    return t;
  for (const e in t)
    !t[e] && t[e] !== 0 && typeof t[e] != "boolean" && delete t[e];
  return t;
}
const C = (t) => !t && typeof t != "boolean" && t !== 0;
function s(t) {
  if (!i(t))
    return t;
  const e = Array.isArray(t) ? [] : {};
  for (const n in t)
    Reflect.has(t, n) && (t[n] && i(t[n]) ? e[n] = s(t[n]) : e[n] = t[n]);
  return e;
}
function d() {
  const t = f({
    tableLoading: !1,
    pager: {
      total: 0,
      // 分页总条数初始值为0
      currentPage: 1,
      // 默认显示第一页
      pageSize: 15
      // 每页条数默认
    }
  });
  return {
    hooksCommonState: t,
    resetInfo: (o) => {
      var r;
      (r = t.formRef) == null || r.resetFields(), o();
    },
    sizeChange: function(o, r) {
      t.pager.pageSize = o, t.pager.currentPage = 1, r();
    },
    currentChange: function(o, r) {
      t.pager.currentPage = o, r();
    }
  };
}
export {
  s as deepClone,
  d as getCommonState,
  m as getNotEmptyObject,
  C as isEmpty,
  y as useCurrentInstance
};
