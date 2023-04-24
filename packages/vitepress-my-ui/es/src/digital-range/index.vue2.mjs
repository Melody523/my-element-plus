import { defineComponent as p, reactive as f, watch as m, toRefs as c, nextTick as g } from "vue";
const b = p({
  name: "DigitalRange",
  emits: ["update:modelValue", "change", "input"],
  props: {
    modelValue: {
      type: Array,
      default: ["", ""]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formatting: {
      type: String,
      default: "numberAbsRange"
    },
    keyUpEnter: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(r, { emit: u }) {
    let e = f({
      value: ["", ""]
    });
    const o = () => {
      if (r.formatting === "numberAbsRange") {
        let t = parseInt(e.value[0]), a = parseInt(e.value[1]);
        const l = [
          isNaN(t) ? "" : Math.abs(t),
          isNaN(a) ? "" : Math.abs(a)
        ];
        l.every((n) => n || n === 0) ? e.value = l.sort((n, d) => n - d) : e.value = l;
      }
    }, s = () => {
      o(), g(), u("update:modelValue", e.value);
    }, i = (t, a) => {
      u("input", t, a);
    };
    return m(
      () => r.modelValue,
      (t) => {
        t && (e.value = t), o(), u("change", e.value);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), {
      ...c(e),
      update: s,
      inputValue: i
    };
  }
});
export {
  b as default
};
