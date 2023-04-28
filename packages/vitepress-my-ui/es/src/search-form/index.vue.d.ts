declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => Array<any>;
        default: () => never[];
    };
    staticData: {
        type: () => any;
        default: () => {};
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    initValue: {
        type: () => any;
        default: () => {};
    };
    defaultValue: {
        type: () => any;
        default: () => {};
    };
    rowNumber: {
        type: NumberConstructor;
        default: number;
    };
    toolsListDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    onSearchSubmit: () => void;
    onReset: () => void;
    onDialogShow: (key: any, row?: {}) => void;
    custDialog: (list: any, key: string) => void;
    changeShow: (target?: boolean | undefined) => void;
    hasShow: import("vue").ComputedRef<boolean>;
    initValue: import("vue").Ref<any>;
    onOnDialogShow: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    modelValue: import("vue").Ref<any>;
    onCustDialog: import("vue").Ref<((...args: any[]) => any) | undefined>;
    formList: import("vue").Ref<any[]>;
    rowNumber: import("vue").Ref<number>;
    show: import("vue").Ref<boolean>;
    staticData: import("vue").Ref<any>;
    labelWidth: import("vue").Ref<string>;
    onOnSearchSubmit: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onOnReset: import("vue").Ref<((...args: any[]) => any) | undefined>;
    defaultValue: import("vue").Ref<any>;
    toolsListDisabled: import("vue").Ref<boolean>;
    keepShow: import("vue").Ref<boolean>;
    maxHeight: import("vue").Ref<string | number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onDialogShow" | "update:modelValue" | "custDialog" | "onSearchSubmit" | "onReset")[], "onDialogShow" | "update:modelValue" | "custDialog" | "onSearchSubmit" | "onReset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => Array<any>;
        default: () => never[];
    };
    staticData: {
        type: () => any;
        default: () => {};
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    initValue: {
        type: () => any;
        default: () => {};
    };
    defaultValue: {
        type: () => any;
        default: () => {};
    };
    rowNumber: {
        type: NumberConstructor;
        default: number;
    };
    toolsListDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & {
    onOnDialogShow?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCustDialog?: ((...args: any[]) => any) | undefined;
    onOnSearchSubmit?: ((...args: any[]) => any) | undefined;
    onOnReset?: ((...args: any[]) => any) | undefined;
}, {
    initValue: any;
    modelValue: any;
    formList: any[];
    rowNumber: number;
    show: boolean;
    staticData: any;
    labelWidth: string;
    defaultValue: any;
    toolsListDisabled: boolean;
    keepShow: boolean;
    maxHeight: string | number;
}>;
export default _sfc_main;
