import { Plugin, VNode } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            filterOption: any;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            dataSource: unknown[];
        }> & Omit<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            dataSource: unknown[];
        } & {
            value?: import("../select").SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: any;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            backfill?: boolean;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: import("../select").SelectValue;
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
            dropdownMenuStyle?: import("vue").CSSProperties;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "children" | "getPopupContainer" | "prefixCls" | "direction" | "onFocus" | "onBlur" | "onChange" | "onKeydown" | "onKeyup" | "onClick" | "onMousedown" | "onMouseenter" | "onMouseleave" | "onSelect" | "onDeselect" | "id" | "options" | "defaultActiveFirstOption" | "searchValue" | "optionLabelProp" | "optionFilterProp" | "filterOption" | "animation" | "maxTagCount" | "maxTagTextLength" | "tokenSeparators" | "tagRender" | "choiceTransitionName" | "onInputKeyDown" | "onSearch" | "transitionName" | "dropdownStyle" | "dropdownClassName" | "dropdownRender" | "showAction" | "inputValue" | "onClear" | "listHeight" | "listItemHeight" | "onPopupScroll" | "onDropdownVisibleChange" | "internalProps" | "bordered" | "dataSource">;
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
        $emit: (event: "blur" | "change" | "focus" | "select", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            dataSource: unknown[];
        } & {
            value?: import("../select").SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: any;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            backfill?: boolean;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: import("../select").SelectValue;
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
            dropdownMenuStyle?: import("vue").CSSProperties;
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
            popupRef: any;
            select: any;
        }, unknown, {}, {
            savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            getInputElement(): JSX.Element;
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select")[], string, {
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            filterOption: any;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            dataSource: unknown[];
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
        children: unknown[];
        prefixCls: string;
        direction: string;
        id: string;
        options: unknown[];
        defaultActiveFirstOption: boolean;
        searchValue: string;
        optionLabelProp: string;
        optionFilterProp: string;
        animation: string;
        maxTagCount: number;
        maxTagTextLength: number;
        tokenSeparators: unknown[];
        choiceTransitionName: string;
        transitionName: string;
        dropdownStyle: {
            [key: string]: any;
        };
        dropdownClassName: string;
        showAction: unknown[];
        inputValue: string;
        listHeight: number;
        listItemHeight: number;
        internalProps: {
            [key: string]: any;
        };
        bordered: boolean;
        dataSource: unknown[];
    } & {
        value?: import("../select").SelectValue;
        getPopupContainer?: (...args: any[]) => any;
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        onMousedown?: (...args: any[]) => any;
        onMouseenter?: (...args: any[]) => any;
        onMouseleave?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
        tabindex?: string | number;
        onDeselect?: (...args: any[]) => any;
        disabled?: boolean;
        size?: "default" | "small" | "middle" | "large";
        open?: boolean;
        mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
        notFoundContent?: import("../_util/type").VueNode;
        menuItemSelectedIcon?: import("../_util/type").VueNode;
        labelInValue?: boolean;
        filterOption?: any;
        autofocus?: boolean;
        removeIcon?: import("../_util/type").VueNode;
        maxTagPlaceholder?: any;
        tagRender?: (...args: any[]) => any;
        placeholder?: import("../_util/type").VueNode;
        showSearch?: boolean;
        onInputKeyDown?: (...args: any[]) => any;
        backfill?: boolean;
        onSearch?: (...args: any[]) => any;
        dropdownRender?: (...args: any[]) => any;
        dropdownAlign?: any;
        defaultValue?: import("../select").SelectValue;
        autoClearSearchValue?: boolean;
        onClear?: (...args: any[]) => any;
        allowClear?: boolean;
        clearIcon?: import("../_util/type").VueNode;
        showArrow?: boolean;
        defaultOpen?: boolean;
        loading?: boolean;
        onPopupScroll?: (...args: any[]) => any;
        onDropdownVisibleChange?: (...args: any[]) => any;
        suffixIcon?: import("../_util/type").VueNode;
        itemIcon?: import("../_util/type").VueNode;
        dropdownMenuStyle?: import("vue").CSSProperties;
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
        popupRef: any;
        select: any;
    }> & {} & {} & {
        savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        getInputElement(): JSX.Element;
        focus(): void;
        blur(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    children: unknown[];
    prefixCls: string;
    direction: string;
    id: string;
    options: unknown[];
    defaultActiveFirstOption: boolean;
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    choiceTransitionName: string;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    showAction: unknown[];
    inputValue: string;
    listHeight: number;
    listItemHeight: number;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
    dataSource: unknown[];
} & {
    value?: import("../select").SelectValue;
    getPopupContainer?: (...args: any[]) => any;
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    tabindex?: string | number;
    onDeselect?: (...args: any[]) => any;
    disabled?: boolean;
    size?: "default" | "small" | "middle" | "large";
    open?: boolean;
    mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    notFoundContent?: import("../_util/type").VueNode;
    menuItemSelectedIcon?: import("../_util/type").VueNode;
    labelInValue?: boolean;
    filterOption?: any;
    autofocus?: boolean;
    removeIcon?: import("../_util/type").VueNode;
    maxTagPlaceholder?: any;
    tagRender?: (...args: any[]) => any;
    placeholder?: import("../_util/type").VueNode;
    showSearch?: boolean;
    onInputKeyDown?: (...args: any[]) => any;
    backfill?: boolean;
    onSearch?: (...args: any[]) => any;
    dropdownRender?: (...args: any[]) => any;
    dropdownAlign?: any;
    defaultValue?: import("../select").SelectValue;
    autoClearSearchValue?: boolean;
    onClear?: (...args: any[]) => any;
    allowClear?: boolean;
    clearIcon?: import("../_util/type").VueNode;
    showArrow?: boolean;
    defaultOpen?: boolean;
    loading?: boolean;
    onPopupScroll?: (...args: any[]) => any;
    onDropdownVisibleChange?: (...args: any[]) => any;
    suffixIcon?: import("../_util/type").VueNode;
    itemIcon?: import("../_util/type").VueNode;
    dropdownMenuStyle?: import("vue").CSSProperties;
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
    popupRef: any;
    select: any;
}, unknown, {}, {
    savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    getInputElement(): JSX.Element;
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select")[], "select" | "blur" | "change" | "focus", {
    children: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    direction: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    onMousedown: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onMouseleave: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    onDeselect: (...args: any[]) => any;
    id: string;
    options: unknown[];
    defaultActiveFirstOption: boolean;
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    filterOption: any;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    tagRender: (...args: any[]) => any;
    choiceTransitionName: string;
    onInputKeyDown: (...args: any[]) => any;
    onSearch: (...args: any[]) => any;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    dropdownRender: (...args: any[]) => any;
    showAction: unknown[];
    inputValue: string;
    onClear: (...args: any[]) => any;
    listHeight: number;
    listItemHeight: number;
    onPopupScroll: (...args: any[]) => any;
    onDropdownVisibleChange: (...args: any[]) => any;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
    dataSource: unknown[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Option: import("../vc-select/Option").OptionFC;
    readonly OptGroup: import("../vc-select/OptGroup").OptionGroupFC;
};
export default _default;
