import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: () => Array<any>;
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    initMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchBy: {
        type: StringConstructor;
        default: string;
    };
    catchValue: {
        type: () => Array<string>;
        default: () => string[];
    };
    initItem: {
        type: () => any;
        default: () => {};
    };
    checkTable: {
        type: () => Array<any>;
        default: () => never[];
    };
    labelFormat: {
        type: (ArrayConstructor | FunctionConstructor)[];
        default: never[];
    };
    catchValueAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchUrl: {
        type: PropType<(data: any) => Promise<any>>;
    };
    renderFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    dealFetchFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    params: {
        type: ObjectConstructor;
        default: {};
    };
    initialDataSource: {
        type: () => Array<any>;
        default: () => never[];
    };
    pagination: {
        type: ObjectConstructor;
        default: {
            currentPage: number;
            pageSize: number;
        };
    };
}, {
    onSearch: (query: string, isDefault?: boolean) => void;
    onSelect: (val: any) => void;
    controlOptions: (oldObject: any) => any;
    deleteRepeat: (arr: any) => any;
    onDialogShow: (target: any, initItemData: any) => void;
    onSearchClear: (arg: any, key: string, callback: any) => void;
    disabled: import("vue").Ref<boolean>;
    onOnDialogShow: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onOnSearchClear: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    modelValue: import("vue").Ref<any[] | undefined>;
    ruleModel: import("vue").Ref<string>;
    initItem: import("vue").Ref<any>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onCustDialog: import("vue").Ref<((...args: any[]) => any) | undefined>;
    rowKey: import("vue").Ref<string>;
    initMultiple: import("vue").Ref<boolean>;
    searchBy: import("vue").Ref<string>;
    catchValue: import("vue").Ref<string[]>;
    checkTable: import("vue").Ref<any[]>;
    labelFormat: import("vue").Ref<Function | unknown[]>;
    catchValueAll: import("vue").Ref<boolean>;
    fetchUrl: import("vue").Ref<((data: any) => Promise<any>) | undefined>;
    renderFunc: import("vue").Ref<Function>;
    dealFetchFunc: import("vue").Ref<Function>;
    params: import("vue").Ref<Record<string, any>>;
    initialDataSource: import("vue").Ref<any[]>;
    pagination: import("vue").Ref<Record<string, any>>;
    inputValue: import("vue").Ref<any>;
    loading: import("vue").Ref<boolean>;
    options: import("vue").Ref<any[]>;
    query: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onDialogShow" | "onSearchClear" | "update:modelValue" | "change" | "custDialog")[], "onDialogShow" | "onSearchClear" | "update:modelValue" | "change" | "custDialog", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => Array<any>;
    };
    ruleModel: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    initMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchBy: {
        type: StringConstructor;
        default: string;
    };
    catchValue: {
        type: () => Array<string>;
        default: () => string[];
    };
    initItem: {
        type: () => any;
        default: () => {};
    };
    checkTable: {
        type: () => Array<any>;
        default: () => never[];
    };
    labelFormat: {
        type: (ArrayConstructor | FunctionConstructor)[];
        default: never[];
    };
    catchValueAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchUrl: {
        type: PropType<(data: any) => Promise<any>>;
    };
    renderFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    dealFetchFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    params: {
        type: ObjectConstructor;
        default: {};
    };
    initialDataSource: {
        type: () => Array<any>;
        default: () => never[];
    };
    pagination: {
        type: ObjectConstructor;
        default: {
            currentPage: number;
            pageSize: number;
        };
    };
}>> & {
    onOnDialogShow?: ((...args: any[]) => any) | undefined;
    onOnSearchClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onCustDialog?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    ruleModel: string;
    initItem: any;
    rowKey: string;
    initMultiple: boolean;
    searchBy: string;
    catchValue: string[];
    checkTable: any[];
    labelFormat: Function | unknown[];
    catchValueAll: boolean;
    renderFunc: Function;
    dealFetchFunc: Function;
    params: Record<string, any>;
    initialDataSource: any[];
    pagination: Record<string, any>;
}>;
export default _sfc_main;
