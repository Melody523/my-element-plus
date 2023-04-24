import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => Array<any>;
        default: () => never[];
    };
    rowNumber: {
        type: NumberConstructor;
        default: number;
    };
    hasToolsCol: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    staticData: {
        type: () => any;
        default: () => void;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    formRules: {
        type: () => any;
        default: () => {};
    };
    initForm: {
        type: () => any;
        default: () => {};
    };
    formItemMrgb: {
        type: NumberConstructor;
        default: null;
    };
    extendAttrUrl: {
        type: StringConstructor;
        default: string;
    };
    fetchUrl: {
        type: PropType<(data: any) => Promise<any>>;
    };
    params: {
        type: () => any;
        default: () => void;
    };
    renderFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    callbackFunc: {
        type: FunctionConstructor;
        default: null;
    };
    titleType: {
        type: StringConstructor;
        default: string;
    };
}, {
    showList: (target: any) => any;
    onDialogShow: (key: string, row?: {}) => void;
    onSearchClear: (arg: any, key: string, callback: any) => void;
    submit: () => Promise<void>;
    getText: (target: any, item: any) => any;
    keyUpEnter: () => void;
    custDialog: (data: any, key: string) => void;
    isEmpty: (value: any) => boolean;
    firstDetailTitleIndex: any;
    getData: () => Promise<void>;
    form: import("vue").Ref<any>;
    formRef: import("vue").Ref<any>;
    onChangeFlag: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onDialogShow" | "onSearchClear" | "update:modelValue" | "custDialog" | "inputEnter")[], "onDialogShow" | "onSearchClear" | "update:modelValue" | "custDialog" | "inputEnter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => any;
        default: () => {};
    };
    formList: {
        type: () => Array<any>;
        default: () => never[];
    };
    rowNumber: {
        type: NumberConstructor;
        default: number;
    };
    hasToolsCol: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    staticData: {
        type: () => any;
        default: () => void;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    formRules: {
        type: () => any;
        default: () => {};
    };
    initForm: {
        type: () => any;
        default: () => {};
    };
    formItemMrgb: {
        type: NumberConstructor;
        default: null;
    };
    extendAttrUrl: {
        type: StringConstructor;
        default: string;
    };
    fetchUrl: {
        type: PropType<(data: any) => Promise<any>>;
    };
    params: {
        type: () => any;
        default: () => void;
    };
    renderFunc: {
        type: FunctionConstructor;
        default: (res: any) => any;
    };
    callbackFunc: {
        type: FunctionConstructor;
        default: null;
    };
    titleType: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onOnDialogShow?: ((...args: any[]) => any) | undefined;
    onOnSearchClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCustDialog?: ((...args: any[]) => any) | undefined;
    onInputEnter?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: any;
    renderFunc: Function;
    params: any;
    formList: any[];
    rowNumber: number;
    hasToolsCol: boolean;
    show: boolean;
    staticData: any;
    labelWidth: string;
    formRules: any;
    initForm: any;
    formItemMrgb: number;
    extendAttrUrl: string;
    callbackFunc: Function;
    titleType: string;
}>;
export default _sfc_main;
