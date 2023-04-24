declare function useCurrentInstance(): {
    globalProperties: Record<string, any>;
};
declare function getNotEmptyObject(values: any): any;
declare const isEmpty: (value: any) => boolean;
declare function deepClone(cloneObj: any): any;
declare function getCommonState(): {
    hooksCommonState: any;
    resetInfo: (callback: () => void) => void;
    sizeChange: (val: number, callback: () => void) => void;
    currentChange: (val: number, callback: () => void) => void;
};
export { useCurrentInstance, getNotEmptyObject, isEmpty, deepClone, getCommonState, };
