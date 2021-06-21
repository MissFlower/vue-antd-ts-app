import { VueNode } from '../_util/type';
export interface CascaderOptionType {
    value?: string | number;
    label?: VueNode;
    disabled?: boolean;
    isLeaf?: boolean;
    loading?: boolean;
    children?: CascaderOptionType[];
    [key: string]: any;
}
export interface FieldNamesType {
    value?: string;
    label?: string;
    children?: string;
}
export interface FilledFieldNamesType {
    value: string;
    label: string;
    children: string;
}
export interface ShowSearchType {
    filter?: (inputValue: string, path: CascaderOptionType[], names: FilledFieldNamesType) => boolean;
    render?: (inputValue: string, path: CascaderOptionType[], prefixCls: string | undefined, names: FilledFieldNamesType) => VueNode;
    sort?: (a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string, names: FilledFieldNamesType) => number;
    matchInputWidth?: boolean;
    limit?: number | false;
}
export interface EmptyFilteredOptionsType {
    disabled: boolean;
    [key: string]: any;
}
export interface FilteredOptionsType extends EmptyFilteredOptionsType {
    __IS_FILTERED_OPTION: boolean;
    path: CascaderOptionType[];
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sValue: any[];
            inputValue: string;
            inputFocused: boolean;
            sPopupVisible: boolean;
            flattenOptions: any[];
        };
        $props: Partial<{
            value: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            disabled: boolean;
            options: CascaderOptionType[];
            placeholder: string;
            showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
            onSearch: (...args: any[]) => any;
            transitionName: string;
            onPopupVisibleChange: (...args: any[]) => any;
            popupStyle: {
                [key: string]: any;
            };
            popupClassName: string;
            popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
            defaultValue: unknown[];
            allowClear: boolean;
            inputPrefixCls: string;
            "onUpdate:value": (...args: any[]) => any;
            displayRender: (...args: any[]) => any;
            loadData: (...args: any[]) => any;
        }> & Omit<Readonly<{
            value: unknown[];
            prefixCls: string;
            disabled: boolean;
            options: CascaderOptionType[];
            placeholder: string;
            showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
            transitionName: string;
            popupStyle: {
                [key: string]: any;
            };
            popupClassName: string;
            popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
            defaultValue: unknown[];
            allowClear: boolean;
            inputPrefixCls: string;
        } & {
            getPopupContainer?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            size?: "default" | "small" | "large";
            notFoundContent?: VueNode;
            autofocus?: boolean;
            onSearch?: (...args: any[]) => any;
            onPopupVisibleChange?: (...args: any[]) => any;
            popupVisible?: boolean;
            suffixIcon?: VueNode;
            "onUpdate:value"?: (...args: any[]) => any;
            displayRender?: (...args: any[]) => any;
            loadData?: (...args: any[]) => any;
            expandTrigger?: "click" | "hover";
            changeOnSelect?: boolean;
            fieldNames?: unknown;
            showSearchRender?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "value" | "getPopupContainer" | "prefixCls" | "onFocus" | "onBlur" | "onChange" | "disabled" | "options" | "placeholder" | "showSearch" | "onSearch" | "transitionName" | "onPopupVisibleChange" | "popupStyle" | "popupClassName" | "popupPlacement" | "defaultValue" | "allowClear" | "inputPrefixCls" | "onUpdate:value" | "displayRender" | "loadData">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            value: unknown[];
            prefixCls: string;
            disabled: boolean;
            options: CascaderOptionType[];
            placeholder: string;
            showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
            transitionName: string;
            popupStyle: {
                [key: string]: any;
            };
            popupClassName: string;
            popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
            defaultValue: unknown[];
            allowClear: boolean;
            inputPrefixCls: string;
        } & {
            getPopupContainer?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            size?: "default" | "small" | "large";
            notFoundContent?: VueNode;
            autofocus?: boolean;
            onSearch?: (...args: any[]) => any;
            onPopupVisibleChange?: (...args: any[]) => any;
            popupVisible?: boolean;
            suffixIcon?: VueNode;
            "onUpdate:value"?: (...args: any[]) => any;
            displayRender?: (...args: any[]) => any;
            loadData?: (...args: any[]) => any;
            expandTrigger?: "click" | "hover";
            changeOnSelect?: boolean;
            fieldNames?: unknown;
            showSearchRender?: any;
        }>, {
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
            localeData: any;
            cachedOptions: any[];
            popupRef: any;
            input: any;
        }, {
            sValue: any[];
            inputValue: string;
            inputFocused: boolean;
            sPopupVisible: boolean;
            flattenOptions: any[];
        }, {}, {
            savePopupRef(ref: any): void;
            highlightKeyword(str: string, keyword: string, prefixCls: string): (string | (string | JSX.Element)[])[];
            defaultRenderFilteredOption(opt: {
                inputValue: string;
                path: CascaderOptionType[];
                prefixCls: string;
                names: FilledFieldNamesType;
            }): any[];
            saveInput(node: any): void;
            handleChange(value: any, selectedOptions: CascaderOptionType[]): void;
            handlePopupVisibleChange(popupVisible: boolean): void;
            handleInputFocus(e: InputEvent): void;
            handleInputBlur(e: InputEvent): void;
            handleInputClick(e: MouseEvent & {
                nativeEvent?: any;
            }): void;
            handleKeyDown(e: KeyboardEvent): void;
            handleInputChange(e: Event): void;
            setValue(value: string[] | number[], selectedOptions?: CascaderOptionType[]): void;
            getLabel(): any;
            clearSelection(e: MouseEvent): void;
            generateFilteredOptions(prefixCls: string, renderEmpty: typeof import("../config-provider/renderEmpty").default): EmptyFilteredOptionsType[] | FilteredOptionsType[];
            focus(): void;
            blur(): void;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            value: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            disabled: boolean;
            options: CascaderOptionType[];
            placeholder: string;
            showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
            onSearch: (...args: any[]) => any;
            transitionName: string;
            onPopupVisibleChange: (...args: any[]) => any;
            popupStyle: {
                [key: string]: any;
            };
            popupClassName: string;
            popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
            defaultValue: unknown[];
            allowClear: boolean;
            inputPrefixCls: string;
            "onUpdate:value": (...args: any[]) => any;
            displayRender: (...args: any[]) => any;
            loadData: (...args: any[]) => any;
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
        value: unknown[];
        prefixCls: string;
        disabled: boolean;
        options: CascaderOptionType[];
        placeholder: string;
        showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
        transitionName: string;
        popupStyle: {
            [key: string]: any;
        };
        popupClassName: string;
        popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
        defaultValue: unknown[];
        allowClear: boolean;
        inputPrefixCls: string;
    } & {
        getPopupContainer?: (...args: any[]) => any;
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        size?: "default" | "small" | "large";
        notFoundContent?: VueNode;
        autofocus?: boolean;
        onSearch?: (...args: any[]) => any;
        onPopupVisibleChange?: (...args: any[]) => any;
        popupVisible?: boolean;
        suffixIcon?: VueNode;
        "onUpdate:value"?: (...args: any[]) => any;
        displayRender?: (...args: any[]) => any;
        loadData?: (...args: any[]) => any;
        expandTrigger?: "click" | "hover";
        changeOnSelect?: boolean;
        fieldNames?: unknown;
        showSearchRender?: any;
    }> & import("vue").ShallowUnwrapRef<{
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
        localeData: any;
        cachedOptions: any[];
        popupRef: any;
        input: any;
    }> & {
        sValue: any[];
        inputValue: string;
        inputFocused: boolean;
        sPopupVisible: boolean;
        flattenOptions: any[];
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        savePopupRef(ref: any): void;
        highlightKeyword(str: string, keyword: string, prefixCls: string): (string | (string | JSX.Element)[])[];
        defaultRenderFilteredOption(opt: {
            inputValue: string;
            path: CascaderOptionType[];
            prefixCls: string;
            names: FilledFieldNamesType;
        }): any[];
        saveInput(node: any): void;
        handleChange(value: any, selectedOptions: CascaderOptionType[]): void;
        handlePopupVisibleChange(popupVisible: boolean): void;
        handleInputFocus(e: InputEvent): void;
        handleInputBlur(e: InputEvent): void;
        handleInputClick(e: MouseEvent & {
            nativeEvent?: any;
        }): void;
        handleKeyDown(e: KeyboardEvent): void;
        handleInputChange(e: Event): void;
        setValue(value: string[] | number[], selectedOptions?: CascaderOptionType[]): void;
        getLabel(): any;
        clearSelection(e: MouseEvent): void;
        generateFilteredOptions(prefixCls: string, renderEmpty: typeof import("../config-provider/renderEmpty").default): EmptyFilteredOptionsType[] | FilteredOptionsType[];
        focus(): void;
        blur(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    value: unknown[];
    prefixCls: string;
    disabled: boolean;
    options: CascaderOptionType[];
    placeholder: string;
    showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
    transitionName: string;
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
    defaultValue: unknown[];
    allowClear: boolean;
    inputPrefixCls: string;
} & {
    getPopupContainer?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    size?: "default" | "small" | "large";
    notFoundContent?: VueNode;
    autofocus?: boolean;
    onSearch?: (...args: any[]) => any;
    onPopupVisibleChange?: (...args: any[]) => any;
    popupVisible?: boolean;
    suffixIcon?: VueNode;
    "onUpdate:value"?: (...args: any[]) => any;
    displayRender?: (...args: any[]) => any;
    loadData?: (...args: any[]) => any;
    expandTrigger?: "click" | "hover";
    changeOnSelect?: boolean;
    fieldNames?: unknown;
    showSearchRender?: any;
}>, {
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
    localeData: any;
    cachedOptions: any[];
    popupRef: any;
    input: any;
}, {
    sValue: any[];
    inputValue: string;
    inputFocused: boolean;
    sPopupVisible: boolean;
    flattenOptions: any[];
}, {}, {
    savePopupRef(ref: any): void;
    highlightKeyword(str: string, keyword: string, prefixCls: string): (string | (string | JSX.Element)[])[];
    defaultRenderFilteredOption(opt: {
        inputValue: string;
        path: CascaderOptionType[];
        prefixCls: string;
        names: FilledFieldNamesType;
    }): any[];
    saveInput(node: any): void;
    handleChange(value: any, selectedOptions: CascaderOptionType[]): void;
    handlePopupVisibleChange(popupVisible: boolean): void;
    handleInputFocus(e: InputEvent): void;
    handleInputBlur(e: InputEvent): void;
    handleInputClick(e: MouseEvent & {
        nativeEvent?: any;
    }): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleInputChange(e: Event): void;
    setValue(value: string[] | number[], selectedOptions?: CascaderOptionType[]): void;
    getLabel(): any;
    clearSelection(e: MouseEvent): void;
    generateFilteredOptions(prefixCls: string, renderEmpty: typeof import("../config-provider/renderEmpty").default): EmptyFilteredOptionsType[] | FilteredOptionsType[];
    focus(): void;
    blur(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    value: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    disabled: boolean;
    options: CascaderOptionType[];
    placeholder: string;
    showSearch: boolean | ShowSearchType | (new (...args: any[]) => (boolean | ShowSearchType) & {}) | ((new (...args: any[]) => (boolean | ShowSearchType) & {}) | (() => boolean | ShowSearchType))[];
    onSearch: (...args: any[]) => any;
    transitionName: string;
    onPopupVisibleChange: (...args: any[]) => any;
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight";
    defaultValue: unknown[];
    allowClear: boolean;
    inputPrefixCls: string;
    "onUpdate:value": (...args: any[]) => any;
    displayRender: (...args: any[]) => any;
    loadData: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
