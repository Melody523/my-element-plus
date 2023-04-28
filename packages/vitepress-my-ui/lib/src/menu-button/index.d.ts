export declare const MenuButton: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    buttonType: {
        type: StringConstructor;
        default: string;
    };
    buttonTitle: {
        type: StringConstructor;
        default: string;
    };
    menuList: {
        type: () => any[];
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
    size: {
        type: StringConstructor;
        default: string;
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
        type: () => any[];
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
    size: {
        type: StringConstructor;
        default: string;
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
}>>;
export default MenuButton;
