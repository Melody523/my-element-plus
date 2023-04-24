export declare const Selection: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
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
        type: () => any[];
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
        type: import("vue").PropType<(data: any) => Promise<any>>;
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
}, {
    staticData: any;
    handleClose: (action: string) => void;
    getData: () => Promise<void>;
    resetInfo: () => void;
    handleOpen: () => void;
    currentChange: (val: number, callback: () => void) => void;
    sizeChange: (val: number, callback: () => void) => void;
    searchData: () => void;
    handleSelectionChange: (val: any[]) => void;
    removeSelectData: (row: any) => void;
    rowClick: (rowData: any) => void;
    toFirstTab: () => void;
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
        type: () => any[];
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
        type: import("vue").PropType<(data: any) => Promise<any>>;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCustHandle?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    rowKey: string;
    checkTable: any[];
    renderFunc: Function;
    dealFetchFunc: Function;
    params: Record<string, any>;
    selectKey: string;
    title: string;
    showFormList: any;
    showTableList: any;
    isRadio: boolean;
    confirmClose: boolean;
}>>;
export default Selection;
