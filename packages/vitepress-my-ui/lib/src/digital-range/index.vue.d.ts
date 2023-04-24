declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: string[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatting: {
        type: StringConstructor;
        default: string;
    };
    keyUpEnter: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    update: () => void;
    inputValue: (e: any, index: number) => void;
    value: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: string[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatting: {
        type: StringConstructor;
        default: string;
    };
    keyUpEnter: {
        type: FunctionConstructor;
        default: () => void;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: unknown[];
    formatting: string;
    keyUpEnter: Function;
}>;
export default _sfc_main;
