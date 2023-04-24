export declare const BasicSelectModal: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    initItem: {
        type: ObjectConstructor;
        default: {};
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    onDialogShow: (key: string) => void;
    onSearchClear: (arg: any, key: string, callback: any) => void;
    onFocus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onDialogShow" | "onSearchClear")[], "onDialogShow" | "onSearchClear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    initItem: {
        type: ObjectConstructor;
        default: {};
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOnDialogShow?: ((...args: any[]) => any) | undefined;
    onOnSearchClear?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    ruleModel: string;
    initItem: Record<string, any>;
    placeholder: string;
}>>;
export default BasicSelectModal;