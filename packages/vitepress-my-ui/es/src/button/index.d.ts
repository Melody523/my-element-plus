export declare const Button: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    model: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconType: {
        type: StringConstructor;
        default: string;
    };
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
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    model: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconType: {
        type: StringConstructor;
        default: string;
    };
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
}>>;
export default Button;
