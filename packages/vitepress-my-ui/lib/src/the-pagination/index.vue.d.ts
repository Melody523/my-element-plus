declare const _sfc_main: import("vue").DefineComponent<{
    pageSizeArr: {
        type: () => number[];
        default: () => number[];
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    pagerCount: {
        type: NumberConstructor;
        default: number;
    };
}, {
    sizeChange: (val: number) => void;
    currentChange: (val: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("custCurrentChange" | "custSizeChange")[], "custCurrentChange" | "custSizeChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pageSizeArr: {
        type: () => number[];
        default: () => number[];
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    pagerCount: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onCustCurrentChange?: ((...args: any[]) => any) | undefined;
    onCustSizeChange?: ((...args: any[]) => any) | undefined;
}, {
    pageSizeArr: number[];
    currentPage: number;
    pageSize: number;
    total: number;
    pagerCount: number;
}>;
export default _sfc_main;
