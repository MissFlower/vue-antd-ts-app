export declare function generateShowHourMinuteSecond(format: string): {
    showHour: boolean;
    showMinute: boolean;
    showSecond: boolean;
};
export declare const TimePickerProps: () => {
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    value: {
        validator(value: any): boolean;
    };
    defaultValue: {
        validator(value: any): boolean;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    format: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hideDisabledOptions: import("vue-types").VueTypeValidableDef<boolean>;
    disabledHours: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabledMinutes: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabledSeconds: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    use12Hours: import("vue-types").VueTypeValidableDef<boolean>;
    focusOnOpen: import("vue-types").VueTypeValidableDef<boolean>;
    hourStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    minuteStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    secondStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    allowEmpty: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    clearText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultOpenValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    popupClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    popupStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    placement: import("vue-types").VueTypeValidableDef<any>;
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    addon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onAmPmChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onOpen: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sValue: any;
        };
        $props: Partial<{
            locale: {
                [key: string]: any;
            };
            format: string;
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onOpen: (...args: any[]) => any;
            onClose: (...args: any[]) => any;
            align: {
                [key: string]: any;
            };
            placeholder: string;
            transitionName: string;
            popupClassName: string;
            onOpenChange: (...args: any[]) => any;
            valueFormat: string;
            disabledHours: (...args: any[]) => any;
            disabledMinutes: (...args: any[]) => any;
            disabledSeconds: (...args: any[]) => any;
            hourStep: number;
            minuteStep: number;
            secondStep: number;
            clearText: string;
            defaultOpenValue: {
                [key: string]: any;
            };
            onAmPmChange: (...args: any[]) => any;
        }> & Omit<Readonly<{
            locale: {
                [key: string]: any;
            };
            format: string;
            prefixCls: string;
            align: {
                [key: string]: any;
            };
            placeholder: string;
            transitionName: string;
            popupClassName: string;
            valueFormat: string;
            hourStep: number;
            minuteStep: number;
            secondStep: number;
            clearText: string;
            defaultOpenValue: {
                [key: string]: any;
            };
        } & {
            value?: unknown;
            getPopupContainer?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            open?: boolean;
            autofocus?: boolean;
            popupStyle?: import("vue").CSSProperties;
            defaultValue?: unknown;
            allowClear?: boolean;
            clearIcon?: any;
            suffixIcon?: any;
            placement?: any;
            onOpenChange?: (...args: any[]) => any;
            inputReadOnly?: boolean;
            disabledHours?: (...args: any[]) => any;
            disabledMinutes?: (...args: any[]) => any;
            disabledSeconds?: (...args: any[]) => any;
            hideDisabledOptions?: boolean;
            focusOnOpen?: boolean;
            use12Hours?: boolean;
            allowEmpty?: boolean;
            addon?: any;
            onAmPmChange?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "format" | "getPopupContainer" | "prefixCls" | "onFocus" | "onBlur" | "onChange" | "onKeydown" | "onOpen" | "onClose" | "align" | "placeholder" | "transitionName" | "popupClassName" | "onOpenChange" | "valueFormat" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "hourStep" | "minuteStep" | "secondStep" | "clearText" | "defaultOpenValue" | "onAmPmChange">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "blur" | "change" | "focus" | "keydown" | "update:value" | "openChange" | "update:open", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            locale: {
                [key: string]: any;
            };
            format: string;
            prefixCls: string;
            align: {
                [key: string]: any;
            };
            placeholder: string;
            transitionName: string;
            popupClassName: string;
            valueFormat: string;
            hourStep: number;
            minuteStep: number;
            secondStep: number;
            clearText: string;
            defaultOpenValue: {
                [key: string]: any;
            };
        } & {
            value?: unknown;
            getPopupContainer?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            open?: boolean;
            autofocus?: boolean;
            popupStyle?: import("vue").CSSProperties;
            defaultValue?: unknown;
            allowClear?: boolean;
            clearIcon?: any;
            suffixIcon?: any;
            placement?: any;
            onOpenChange?: (...args: any[]) => any;
            inputReadOnly?: boolean;
            disabledHours?: (...args: any[]) => any;
            disabledMinutes?: (...args: any[]) => any;
            disabledSeconds?: (...args: any[]) => any;
            hideDisabledOptions?: boolean;
            focusOnOpen?: boolean;
            use12Hours?: boolean;
            allowEmpty?: boolean;
            addon?: any;
            onAmPmChange?: (...args: any[]) => any;
        }>, {
            popupRef: any;
            timePickerRef: any;
            configProvider: {
                locale?: {
                    locale: string;
                    Pagination?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    DatePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    TimePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Calendar?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Table?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Modal?: {
                        okText: string;
                        cancelText: string;
                        justOkText: string;
                    };
                    Popconfirm?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Transfer?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Select?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Upload?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Form?: {
                        optional?: string;
                        defaultValidateMessages: {
                            default?: string | (() => string);
                            required?: string | (() => string);
                            enum?: string | (() => string);
                            whitespace?: string | (() => string);
                            date?: {
                                format?: string | (() => string);
                                parse?: string | (() => string);
                                invalid?: string | (() => string);
                            };
                            types?: {
                                string?: string | (() => string);
                                method?: string | (() => string);
                                array?: string | (() => string);
                                object?: string | (() => string);
                                number?: string | (() => string);
                                date?: string | (() => string);
                                boolean?: string | (() => string);
                                integer?: string | (() => string);
                                float?: string | (() => string);
                                regexp?: string | (() => string);
                                email?: string | (() => string);
                                url?: string | (() => string);
                                hex?: string | (() => string);
                            };
                            string?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            number?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            array?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            pattern?: {
                                mismatch?: string | (() => string);
                            };
                        };
                    };
                    Image?: {
                        preview: string;
                    };
                };
                getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
                getTargetContainer?: () => HTMLElement;
                getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
                prefixCls?: string;
                renderEmpty?: typeof import("../config-provider/renderEmpty").default;
                transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
                csp?: unknown;
                autoInsertSpaceInButton?: boolean;
                pageHeader?: {
                    ghost: boolean;
                };
                componentSize?: import("../config-provider").SizeType;
                direction?: "ltr" | "rtl";
                space?: {
                    size: number | import("../config-provider").SizeType;
                };
                virtual?: boolean;
                dropdownMatchSelectWidth?: boolean;
                form?: unknown;
            };
        }, {
            sValue: any;
        }, {}, {
            getDefaultFormat(): string;
            getAllowClear(): boolean;
            getDefaultLocale(): {
                placeholder: string;
            };
            savePopupRef(ref: any): void;
            saveTimePicker(timePickerRef: any): void;
            handleChange(value: any): void;
            handleOpenClose({ open }: {
                open: any;
            }): void;
            focus(): void;
            blur(): void;
            renderInputIcon(prefixCls: string): JSX.Element;
            renderClearIcon(prefixCls: string): import("vue").VNode<any, any, {
                [key: string]: any;
            }>;
            renderTimePicker(locale: any): JSX.Element;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "keydown" | "update:value" | "openChange" | "update:open")[], string, {
            locale: {
                [key: string]: any;
            };
            format: string;
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onOpen: (...args: any[]) => any;
            onClose: (...args: any[]) => any;
            align: {
                [key: string]: any;
            };
            placeholder: string;
            transitionName: string;
            popupClassName: string;
            onOpenChange: (...args: any[]) => any;
            valueFormat: string;
            disabledHours: (...args: any[]) => any;
            disabledMinutes: (...args: any[]) => any;
            disabledSeconds: (...args: any[]) => any;
            hourStep: number;
            minuteStep: number;
            secondStep: number;
            clearText: string;
            defaultOpenValue: {
                [key: string]: any;
            };
            onAmPmChange: (...args: any[]) => any;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        locale: {
            [key: string]: any;
        };
        format: string;
        prefixCls: string;
        align: {
            [key: string]: any;
        };
        placeholder: string;
        transitionName: string;
        popupClassName: string;
        valueFormat: string;
        hourStep: number;
        minuteStep: number;
        secondStep: number;
        clearText: string;
        defaultOpenValue: {
            [key: string]: any;
        };
    } & {
        value?: unknown;
        getPopupContainer?: (...args: any[]) => any;
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onOpen?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
        disabled?: boolean;
        size?: "default" | "small" | "large";
        open?: boolean;
        autofocus?: boolean;
        popupStyle?: import("vue").CSSProperties;
        defaultValue?: unknown;
        allowClear?: boolean;
        clearIcon?: any;
        suffixIcon?: any;
        placement?: any;
        onOpenChange?: (...args: any[]) => any;
        inputReadOnly?: boolean;
        disabledHours?: (...args: any[]) => any;
        disabledMinutes?: (...args: any[]) => any;
        disabledSeconds?: (...args: any[]) => any;
        hideDisabledOptions?: boolean;
        focusOnOpen?: boolean;
        use12Hours?: boolean;
        allowEmpty?: boolean;
        addon?: any;
        onAmPmChange?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<{
        popupRef: any;
        timePickerRef: any;
        configProvider: {
            locale?: {
                locale: string;
                Pagination?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                DatePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                TimePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Calendar?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Table?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Modal?: {
                    okText: string;
                    cancelText: string;
                    justOkText: string;
                };
                Popconfirm?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Transfer?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Select?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Upload?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Form?: {
                    optional?: string;
                    defaultValidateMessages: {
                        default?: string | (() => string);
                        required?: string | (() => string);
                        enum?: string | (() => string);
                        whitespace?: string | (() => string);
                        date?: {
                            format?: string | (() => string);
                            parse?: string | (() => string);
                            invalid?: string | (() => string);
                        };
                        types?: {
                            string?: string | (() => string);
                            method?: string | (() => string);
                            array?: string | (() => string);
                            object?: string | (() => string);
                            number?: string | (() => string);
                            date?: string | (() => string);
                            boolean?: string | (() => string);
                            integer?: string | (() => string);
                            float?: string | (() => string);
                            regexp?: string | (() => string);
                            email?: string | (() => string);
                            url?: string | (() => string);
                            hex?: string | (() => string);
                        };
                        string?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        number?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        array?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        pattern?: {
                            mismatch?: string | (() => string);
                        };
                    };
                };
                Image?: {
                    preview: string;
                };
            };
            getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            getTargetContainer?: () => HTMLElement;
            getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            prefixCls?: string;
            renderEmpty?: typeof import("../config-provider/renderEmpty").default;
            transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
            csp?: unknown;
            autoInsertSpaceInButton?: boolean;
            pageHeader?: {
                ghost: boolean;
            };
            componentSize?: import("../config-provider").SizeType;
            direction?: "ltr" | "rtl";
            space?: {
                size: number | import("../config-provider").SizeType;
            };
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            form?: unknown;
        };
    }> & {
        sValue: any;
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        getDefaultFormat(): string;
        getAllowClear(): boolean;
        getDefaultLocale(): {
            placeholder: string;
        };
        savePopupRef(ref: any): void;
        saveTimePicker(timePickerRef: any): void;
        handleChange(value: any): void;
        handleOpenClose({ open }: {
            open: any;
        }): void;
        focus(): void;
        blur(): void;
        renderInputIcon(prefixCls: string): JSX.Element;
        renderClearIcon(prefixCls: string): import("vue").VNode<any, any, {
            [key: string]: any;
        }>;
        renderTimePicker(locale: any): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    locale: {
        [key: string]: any;
    };
    format: string;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    placeholder: string;
    transitionName: string;
    popupClassName: string;
    valueFormat: string;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    clearText: string;
    defaultOpenValue: {
        [key: string]: any;
    };
} & {
    value?: unknown;
    getPopupContainer?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    disabled?: boolean;
    size?: "default" | "small" | "large";
    open?: boolean;
    autofocus?: boolean;
    popupStyle?: import("vue").CSSProperties;
    defaultValue?: unknown;
    allowClear?: boolean;
    clearIcon?: any;
    suffixIcon?: any;
    placement?: any;
    onOpenChange?: (...args: any[]) => any;
    inputReadOnly?: boolean;
    disabledHours?: (...args: any[]) => any;
    disabledMinutes?: (...args: any[]) => any;
    disabledSeconds?: (...args: any[]) => any;
    hideDisabledOptions?: boolean;
    focusOnOpen?: boolean;
    use12Hours?: boolean;
    allowEmpty?: boolean;
    addon?: any;
    onAmPmChange?: (...args: any[]) => any;
}>, {
    popupRef: any;
    timePickerRef: any;
    configProvider: {
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
}, {
    sValue: any;
}, {}, {
    getDefaultFormat(): string;
    getAllowClear(): boolean;
    getDefaultLocale(): {
        placeholder: string;
    };
    savePopupRef(ref: any): void;
    saveTimePicker(timePickerRef: any): void;
    handleChange(value: any): void;
    handleOpenClose({ open }: {
        open: any;
    }): void;
    focus(): void;
    blur(): void;
    renderInputIcon(prefixCls: string): JSX.Element;
    renderClearIcon(prefixCls: string): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    renderTimePicker(locale: any): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "keydown" | "update:value" | "openChange" | "update:open")[], "blur" | "change" | "focus" | "keydown" | "update:value" | "openChange" | "update:open", {
    locale: {
        [key: string]: any;
    };
    format: string;
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onOpen: (...args: any[]) => any;
    onClose: (...args: any[]) => any;
    align: {
        [key: string]: any;
    };
    placeholder: string;
    transitionName: string;
    popupClassName: string;
    onOpenChange: (...args: any[]) => any;
    valueFormat: string;
    disabledHours: (...args: any[]) => any;
    disabledMinutes: (...args: any[]) => any;
    disabledSeconds: (...args: any[]) => any;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    clearText: string;
    defaultOpenValue: {
        [key: string]: any;
    };
    onAmPmChange: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
