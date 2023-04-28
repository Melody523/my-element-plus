export declare const DatePicker: import("../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: () => any[];
        default: () => never[];
    };
    initFormat: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    endPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    selectTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    shortcuts: {
        text: string;
        value: () => void;
    }[];
    onChange: (value: any) => void;
    visibleChange: (status: any) => void;
    disabledDate: (date: any) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "clear" | "change")[], "update:modelValue" | "clear" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => any[];
        default: () => never[];
    };
    initFormat: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    endPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    selectTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: any[];
    initFormat: string;
    startPlaceholder: string;
    endPlaceholder: string;
    selectTime: boolean;
    clearable: boolean;
}>>;
export default DatePicker;
