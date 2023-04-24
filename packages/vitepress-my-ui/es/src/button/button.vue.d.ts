declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * 按钮类型
     * default | danger | primary | plain | text |warning
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按钮默认size
     * small | large,
     * hegiht:24px | hegiht:32px
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按钮模式
     * normal | icon
     */
    model: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 禁用
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * loading
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * icon名称 当前变量仅支持fa和svg-icon
     */
    icon: {
        type: StringConstructor;
        default: null;
    };
    /**
     * 引用icon的类型 暂时支持svg(svg-icon)两种方式
     */
    iconType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 手动设置按钮选中状态(实际上就是把hover颜色改为常驻颜色)
     */
    isHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    state: any;
    onClick: () => void;
    type: import("vue").Ref<string>;
    size: import("vue").Ref<string>;
    disabled: import("vue").Ref<boolean>;
    model: import("vue").Ref<string>;
    loading: import("vue").Ref<boolean>;
    icon: import("vue").Ref<string>;
    iconType: import("vue").Ref<string>;
    isHover: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 按钮类型
     * default | danger | primary | plain | text |warning
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按钮默认size
     * small | large,
     * hegiht:24px | hegiht:32px
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按钮模式
     * normal | icon
     */
    model: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 禁用
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * loading
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * icon名称 当前变量仅支持fa和svg-icon
     */
    icon: {
        type: StringConstructor;
        default: null;
    };
    /**
     * 引用icon的类型 暂时支持svg(svg-icon)两种方式
     */
    iconType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 手动设置按钮选中状态(实际上就是把hover颜色改为常驻颜色)
     */
    isHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    size: string;
    disabled: boolean;
    model: string;
    loading: boolean;
    icon: string;
    iconType: string;
    isHover: boolean;
}>;
export default _sfc_main;
