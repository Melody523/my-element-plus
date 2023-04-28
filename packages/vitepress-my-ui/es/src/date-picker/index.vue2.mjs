import { useCurrentInstance as m } from "../utils/utils.mjs";
import { defineComponent as D, reactive as y, ref as Y, computed as g, watch as B, toRefs as k } from "vue";
const p = D({
  name: "DatePicker",
  emits: ["update:modelValue", "clear", "change"],
  props: {
    // 主参数
    modelValue: {
      type: Array,
      default: () => []
    },
    // onChange输出的时间格式控制
    initFormat: {
      type: String,
      default: ""
    },
    startPlaceholder: {
      type: String,
      default: "开始日期"
    },
    endPlaceholder: {
      type: String,
      default: "结束日期"
    },
    // 启用时间模式
    selectTime: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    }
  },
  setup(o, { emit: f }) {
    const { globalProperties: c } = m();
    let e = y({
      dateType: o.selectTime ? "datetimerange" : "daterange",
      // 选择器type变量
      value: "",
      // 组件内value变量
      datePickerRef: Y(null),
      classKey: "daterange",
      // 输入模式类型标识变量
      format: ""
      // 不同组件输入模式下的的时间格式变量
    });
    const n = [
      {
        text: "时间范围",
        value: () => {
          a("daterange"), l(null), setTimeout(() => {
            e.datePickerRef.focus(!0);
          }, 0);
        }
      },
      {
        text: "指定日之前",
        value: () => {
          a("dateBefore"), l(null), setTimeout(() => {
            e.datePickerRef.focus(!0);
          }, 0);
        }
      },
      {
        text: "指定日之后",
        value: () => {
          a("dateAfter"), l(null), setTimeout(() => {
            e.datePickerRef.focus(!0);
          }, 0);
        }
      },
      {
        text: "当日之前",
        value: () => {
          a("nowDateBefore"), l(s(Date(), "YYYY-MM-DD 23:59:59"));
        }
      },
      {
        text: "当日之后",
        value: () => {
          a("nowDateAfter"), l(s(Date(), "YYYY-MM-DD 00:00:00"));
        }
      }
    ];
    let d = g(
      () => o.selectTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
    ).value;
    const a = (t) => {
      const r = o.selectTime ? "datetime" : "date";
      switch (t) {
        case "daterange":
          e.dateType = o.selectTime ? "datetimerange" : "daterange", e.format = "";
          break;
        case "dateBefore":
        case "nowDateBefore":
          e.dateType = r, e.format = `~ 至 ${d}`;
          break;
        case "dateAfter":
        case "nowDateAfter":
          e.dateType = r, e.format = `${d} 至 ~`;
          break;
      }
      e.classKey = t;
    }, s = (t, r) => t ? c.dayjs(t).format(r || o.initFormat || d) : "", l = (t) => {
      if (!t) {
        ["dateBefore", "dateAfter"].includes(e.classKey) ? f("update:modelValue", ["", "", e.classKey]) : f("update:modelValue", ["", "", "daterange"]), f("clear", t);
        return;
      }
      let r = [];
      switch (e.classKey) {
        case "daterange":
          r = [
            s(t[0]),
            s(t[1]),
            e.classKey
          ];
          break;
        case "dateBefore":
        case "nowDateBefore":
          r = ["", s(t), e.classKey];
          break;
        case "dateAfter":
        case "nowDateAfter":
          r = [s(t), "", e.classKey];
          break;
      }
      f("update:modelValue", r);
    };
    B(
      () => o.modelValue,
      (t) => {
        if (t && t.length > 0)
          if (t[2])
            switch (a(t[2]), t[2]) {
              case "daterange":
                e.value = [t[0], t[1]];
                break;
              case "dateBefore":
                e.value = t[1];
                break;
              case "dateAfter":
                e.value = t[0];
                break;
              case "nowDateBefore":
                e.value = s(Date(), "YYYY-MM-DD 23:59:59");
                break;
              case "nowDateAfter":
                e.value = s(Date(), "YYYY-MM-DD 00:00:00");
                break;
            }
          else
            t[0] && t[1] ? (a("daterange"), e.value = t) : t[0] ? (a("dateAfter"), e.value = t[0]) : t[1] && (a("dateBefore"), e.value = t[1]);
        else
          a("daterange"), e.value = "";
        f("change", e.value);
      },
      { deep: !0, immediate: !0 }
    );
    const i = (t) => {
      o.selectTime && (t ? [
        "dateBefore",
        "dateAfter",
        "nowDateBefore",
        "nowDateAfter"
      ].includes(e.classKey) && (e.format = "") : (["dateBefore", "nowDateBefore"].includes(e.classKey) && (e.format = `~ 至 ${d}`), ["dateAfter", "nowDateAfter"].includes(e.classKey) && (e.format = `${d} 至 ~`)));
    }, u = (t) => ["nowDateBefore", "nowDateAfter"].includes(e.classKey);
    return {
      ...k(e),
      shortcuts: n,
      onChange: l,
      visibleChange: i,
      disabledDate: u
    };
  }
});
export {
  p as default
};
