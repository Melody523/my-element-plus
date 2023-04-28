import { defineComponent as a, reactive as i, toRefs as n, defineAsyncComponent as l } from "vue";
const u = a({
  name: "MenuButton",
  emits: ["click", "onControlDropdown"],
  props: {
    // 按钮类型default为边框蓝色背景白色，primary为蓝底白字, plain
    buttonType: {
      type: String,
      default: "default"
    },
    // 外侧按钮字样
    buttonTitle: {
      type: String,
      default: "按钮"
    },
    // 下拉菜单组
    menuList: {
      type: Array,
      default: () => []
    },
    // 组件模式 contant | menuList | none
    model: {
      type: String,
      default: "menuList"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: String,
      default: "hover"
    },
    // 下拉按钮的类型 same | other
    dropdownModel: {
      type: String,
      default: "other"
    },
    /**
     * 大小控制
     * large：height:32px
     * small: height:24px
     */
    size: {
      type: String,
      default: "large"
    }
  },
  setup(r, { emit: e }) {
    const o = i({
      isDropdown: !1
    }), d = (t) => {
      t();
    }, p = (t) => {
      o.isDropdown = t, e("onControlDropdown", { flag: t });
    };
    return {
      ...n(r),
      ...n(o),
      command: d,
      emit: e,
      controlDropdown: p
    };
  },
  components: {
    SvgIcon: l(
      () => import("../icon/index.vue.mjs")
    )
  }
});
export {
  u as default
};
