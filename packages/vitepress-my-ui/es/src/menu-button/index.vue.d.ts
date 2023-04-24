declare const _sfc_main: import("vue").DefineComponent<{
    buttonType: {
        type: StringConstructor;
        default: string;
    };
    buttonTitle: {
        type: StringConstructor;
        default: string;
    };
    menuList: {
        type: () => Array<any>;
        default: () => never[];
    };
    model: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    dropdownModel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 大小控制
     * large：height:32px
     * small: height:24px
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 特殊枚举给搜索组件提供特殊样式
     */
    useType: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    command: (onClick: () => void) => void;
    emit: (event: "click" | "onControlDropdown", ...args: any[]) => void;
    controlDropdown: (flag: boolean) => void;
    isDropdown: import("vue").Ref<boolean>;
    size: import("vue").Ref<string>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
    disabled: import("vue").Ref<boolean>;
    model: import("vue").Ref<string>;
    menuList: import("vue").Ref<any[]>;
    onOnControlDropdown: import("vue").Ref<((...args: any[]) => any) | undefined>;
    buttonType: import("vue").Ref<string>;
    buttonTitle: import("vue").Ref<string>;
    trigger: import("vue").Ref<string>;
    dropdownModel: import("vue").Ref<string>;
    useType: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "onControlDropdown")[], "click" | "onControlDropdown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    buttonType: {
        type: StringConstructor;
        default: string;
    };
    buttonTitle: {
        type: StringConstructor;
        default: string;
    };
    menuList: {
        type: () => Array<any>;
        default: () => never[];
    };
    model: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    dropdownModel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 大小控制
     * large：height:32px
     * small: height:24px
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 特殊枚举给搜索组件提供特殊样式
     */
    useType: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onOnControlDropdown?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    disabled: boolean;
    model: string;
    menuList: any[];
    buttonType: string;
    buttonTitle: string;
    trigger: string;
    dropdownModel: string;
    useType: boolean;
}>;
export default _sfc_main;
