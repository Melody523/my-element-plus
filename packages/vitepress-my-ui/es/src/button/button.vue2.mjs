import { defineComponent as n, reactive as f, useSlots as i, toRefs as t } from "vue";
const u = n({
  name: "Button",
  emits: ["click"],
  props: {
    /**
     * 按钮类型
     * default | danger | primary | plain | text |warning
     */
    type: {
      type: String,
      default: "default"
    },
    /**
     * 按钮默认size
     * small | large,
     * hegiht:24px | hegiht:32px
     */
    size: {
      type: String,
      default: "large"
    },
    /**
     * 按钮模式
     * normal | icon
     */
    model: {
      type: String,
      default: "normal"
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * loading
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * icon名称 当前变量仅支持fa和svg-icon
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * 引用icon的类型 暂时支持svg(svg-icon)两种方式
     */
    iconType: {
      type: String,
      default: "svg"
    },
    /**
     * 手动设置按钮选中状态(实际上就是把hover颜色改为常驻颜色)
     */
    isHover: {
      type: Boolean,
      default: !1
    }
  },
  setup(l, { emit: a }) {
    let e = f({
      slotDefault: !!i().default
      // 判断是否传入了 default slot
    });
    const o = () => {
      a("click");
    };
    return {
      ...t(e),
      ...t(l),
      state: e,
      onClick: o
    };
  }
});
export {
  u as default
};
