import { defineComponent as l, reactive as f, computed as o, toRefs as r } from "vue";
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
  setup(t, { emit: a }) {
    let e = f({
      outPut: 0
    });
    return e.outPut = o(() => {
      var i, n, u;
      return typeof t.initValue == "number" ? t.initValue : typeof t.initValue == "string" ? t.initValue && ((n = (i = t.initValue) == null ? void 0 : i.split(",")) == null ? void 0 : n.length) : (u = t.initValue) == null ? void 0 : u.length;
    }), {
      ...r(e),
      emit: a
    };
  }
});
export {
  d as default
};
