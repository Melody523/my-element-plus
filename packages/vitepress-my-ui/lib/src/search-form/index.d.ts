export declare const SearchForm: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => any[];
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
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    onSearchSubmit: () => void;
    onReset: () => void;
    onDialogShow: (key: any, row?: {}) => void;
    custDialog: (data: any, key: string) => void;
    changeShow: (target?: boolean | undefined) => void;
    hasShow: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onDialogShow" | "update:modelValue" | "custDialog" | "onSearchSubmit" | "firstSearch" | "onReset")[], "onDialogShow" | "update:modelValue" | "custDialog" | "onSearchSubmit" | "firstSearch" | "onReset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => any[];
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
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & {
    onOnDialogShow?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCustDialog?: ((...args: any[]) => any) | undefined;
    onOnSearchSubmit?: ((...args: any[]) => any) | undefined;
    onFirstSearch?: ((...args: any[]) => any) | undefined;
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
    maxHeight: string | number;
}>>;
export default SearchForm;
