import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectKey: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showFormList: {
        type: () => any;
        default: {
            code: {
                key: string;
                label: string;
                isShow: boolean;
                type: string;
            };
            name: {
                key: string;
                label: string;
                isShow: boolean;
                type: string;
            };
        };
    };
    showTableList: {
        type: () => any;
        default: {
            code: {
                key: string;
                label: string;
                isShow: boolean;
            };
            name: {
                key: string;
                label: string;
                isShow: boolean;
            };
        };
    };
    isRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkTable: {
        type: () => Array<any>;
        default: never[];
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    confirmClose: {
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
    initValue: {
        type: ObjectConstructor;
        default: {};
    };
    defaultValue: {
        type: ObjectConstructor;
        default: {};
    };
    hasPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialDataSource: {
        type: () => Array<any>;
        default: () => never[];
    };
    staticData: {
        type: ObjectConstructor;
        default: {};
    };
}, {
    handleClose: (action: string) => void;
    getData: () => Promise<void>;
    resetInfo: () => void;
    handleOpen: () => void;
    currentChange: (val: number, callback: () => void) => void;
    sizeChange: (val: number, callback: () => void) => void;
    searchData: () => void;
    handleSelectionChange: (val: Array<any>) => void;
    removeSelectData: (row: any) => void;
    rowClick: (rowData: any) => void;
    toFirstTab: () => void;
    initValue: import("vue").Ref<Record<string, any>>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    modelValue: import("vue").Ref<boolean>;
    rowKey: import("vue").Ref<string>;
    checkTable: import("vue").Ref<any[]>;
    fetchUrl: import("vue").Ref<((data: any) => Promise<any>) | undefined>;
    renderFunc: import("vue").Ref<Function>;
    dealFetchFunc: import("vue").Ref<Function>;
    initialDataSource: import("vue").Ref<any[]>;
    staticData: import("vue").Ref<Record<string, any>>;
    defaultValue: import("vue").Ref<Record<string, any>>;
    onCustHandle: import("vue").Ref<((...args: any[]) => any) | undefined>;
    selectKey: import("vue").Ref<string>;
    title: import("vue").Ref<string>;
    showFormList: import("vue").Ref<any>;
    showTableList: import("vue").Ref<any>;
    isRadio: import("vue").Ref<boolean>;
    confirmClose: import("vue").Ref<boolean>;
    hasPagination: import("vue").Ref<boolean>;
    formList: import("vue").Ref<any[]>;
    formListBackup: import("vue").Ref<any[]>;
    form: import("vue").Ref<any>;
    tableData: import("vue").Ref<any[]>;
    selectTableData: import("vue").Ref<any[]>;
    searchFormRef: import("vue").Ref<any>;
    tableList: import("vue").Ref<any[]>;
    tableListBackup: import("vue").Ref<any[]>;
    dialogWidth: import("vue").Ref<number>;
    extendAttributes: import("vue").Ref<any[]>;
    disabledId: import("vue").Ref<string>;
    dialogTop: import("vue").Ref<string>;
    activeName: import("vue").Ref<string>;
    multipleTable: import("vue").Ref<any>;
    dialogRef: import("vue").Ref<any>;
    hasInitialDataSource: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "custHandle")[], "update:modelValue" | "custHandle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectKey: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showFormList: {
        type: () => any;
        default: {
            code: {
                key: string;
                label: string;
                isShow: boolean;
                type: string;
            };
            name: {
                key: string;
                label: string;
                isShow: boolean;
                type: string;
            };
        };
    };
    showTableList: {
        type: () => any;
        default: {
            code: {
                key: string;
                label: string;
                isShow: boolean;
            };
            name: {
                key: string;
                label: string;
                isShow: boolean;
            };
        };
    };
    isRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkTable: {
        type: () => Array<any>;
        default: never[];
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    confirmClose: {
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
    initValue: {
        type: ObjectConstructor;
        default: {};
    };
    defaultValue: {
        type: ObjectConstructor;
        default: {};
    };
    hasPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialDataSource: {
        type: () => Array<any>;
        default: () => never[];
    };
    staticData: {
        type: ObjectConstructor;
        default: {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCustHandle?: ((...args: any[]) => any) | undefined;
}, {
    initValue: Record<string, any>;
    modelValue: boolean;
    rowKey: string;
    checkTable: any[];
    renderFunc: Function;
    dealFetchFunc: Function;
    initialDataSource: any[];
    staticData: Record<string, any>;
    defaultValue: Record<string, any>;
    selectKey: string;
    title: string;
    showFormList: any;
    showTableList: any;
    isRadio: boolean;
    confirmClose: boolean;
    hasPagination: boolean;
}>;
export default _sfc_main;
