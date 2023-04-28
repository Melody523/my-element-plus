import { defineComponent as r, useCssVars as i, computed as s, openBlock as u, createElementBlock as m, normalizeClass as f, unref as t, createElementVNode as d } from "vue";
const p = ["xlink:href", "fill"], N = r({
  name: "Icon"
}), C = /* @__PURE__ */ r({
  ...N,
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
  setup(o, { expose: c }) {
    const e = o;
    i((a) => ({
      74316426: o.color
    }));
    const l = s(() => `#${e.iconName}`), n = s(() => `svg-icon ${e.color || e.className ? "colorClass" : ""} ${e.className}`);
    return c({ color: e.color }), (a, _) => (u(), m("svg", {
      class: f(t(n)),
      "aria-hidden": "true"
    }, [
      d("use", {
        "xlink:href": t(l),
        fill: o.color
      }, null, 8, p)
    ], 2));
  }
});
export {
  C as default
};
