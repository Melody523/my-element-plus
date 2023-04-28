import { defineComponent as l, reactive as o, computed as f, toRefs as r, defineAsyncComponent as m } from "vue";
const d = l({
  name: "InputAndButton",
  emits: ["click"],
  props: {
    isUse: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 徽标计数 通过数组长度 字符串切割长度 直接传数量
    initValue: {
      type: String || Array || Number,
      default: ""
    }
  },
  setup(e, { emit: a }) {
    let t = o({
      outPut: 0
    });
    return t.outPut = f(() => {
      var n, i, u;
      return typeof e.initValue == "number" ? e.initValue : typeof e.initValue == "string" ? e.initValue && ((i = (n = e.initValue) == null ? void 0 : n.split(",")) == null ? void 0 : i.length) : (u = e.initValue) == null ? void 0 : u.length;
    }), {
      ...r(t),
      emit: a
    };
  },
  components: {
    SvgIcon: m(
      () => import("../icon/index.vue.mjs")
    )
  }
});
export {
  d as default
};
