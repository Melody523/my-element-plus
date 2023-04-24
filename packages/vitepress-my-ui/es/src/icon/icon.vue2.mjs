import { defineComponent as n, useCssVars as i, computed as t, openBlock as u, createElementBlock as m, normalizeClass as f, unref as r, createElementVNode as d } from "vue";
const p = ["xlink:href", "fill"], _ = n({
  name: "Icon"
}), N = /* @__PURE__ */ n({
  ..._,
  props: {
    iconName: {
      //图标名称: icon-copy
      type: String,
      required: !0
    },
    className: {
      //自定义类名
      type: String,
      default: ""
    },
    color: {
      //图标颜色
      type: String,
      default: ""
    }
  },
  setup(o, { expose: s }) {
    const e = o;
    i((a) => ({
      "0e71a39b": o.color
    }));
    const c = t(() => `#${e.iconName}`), l = t(() => `svg-icon ${e.color ? "colorClass" : ""} ${e.className}`);
    return s({ color: e.color }), (a, g) => (u(), m("svg", {
      class: f(r(l)),
      "aria-hidden": "true"
    }, [
      d("use", {
        "xlink:href": r(c),
        fill: o.color
      }, null, 8, p)
    ], 2));
  }
});
export {
  N as default
};
