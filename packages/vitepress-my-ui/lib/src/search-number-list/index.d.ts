export declare const SearchNumberList: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    keyUpEnter: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    onClickShowModel: (model?: any) => void;
    onModelSubmit: () => void;
    formatting: (str: string) => string;
    isClearInput: () => void;
    inputChange: (val: string) => void;
    beforeClose: () => void;
    theValue: import("vue").Ref<any>;
    inputValue: import("vue").Ref<string>;
    modelVisible: import("vue").Ref<boolean>;
    dialogTop: import("vue").Ref<string>;
    ruleValue: import("vue").Ref<any>;
    modelTarget: import("vue").Ref<string>;
    countsNumber: import("vue").Ref<any>;
    disabled: import("vue").Ref<boolean>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    modelValue: import("vue").Ref<string>;
    ruleModel: import("vue").Ref<string>;
    placeholder: import("vue").Ref<string>;
    onClear: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    keyUpEnter: import("vue").Ref<Function>;
    "onUpdate:ruleModel": import("vue").Ref<((...args: any[]) => any) | undefined>;
    modelProps: import("vue").Ref<Record<string, any>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "clear" | "change" | "update:ruleModel")[], "update:modelValue" | "clear" | "change" | "update:ruleModel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    keyUpEnter: {
        type: FunctionConstructor;
        default: () => void;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:ruleModel"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    ruleModel: string;
    placeholder: string;
    keyUpEnter: Function;
    modelProps: Record<string, any>;
}>>;
export default SearchNumberList;
