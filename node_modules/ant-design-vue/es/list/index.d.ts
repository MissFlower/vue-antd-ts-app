import { Plugin } from 'vue';
import Item, { ListItemMeta } from './Item';
export { ListItemProps, ListItemMetaProps, ListItemMeta } from './Item';
export declare const ColumnCount: (string | number)[];
export declare const ColumnType: string[];
export declare const ListGridType: {
    gutter: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    column: import("vue-types").VueTypeDef<string | number>;
    xs: import("vue-types").VueTypeDef<string | number>;
    sm: import("vue-types").VueTypeDef<string | number>;
    md: import("vue-types").VueTypeDef<string | number>;
    lg: import("vue-types").VueTypeDef<string | number>;
    xl: import("vue-types").VueTypeDef<string | number>;
    xxl: import("vue-types").VueTypeDef<string | number>;
};
export declare const ListSize: ["small", "default", "large"];
export declare const ListProps: () => {
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    grid: import("vue-types").VueTypeLooseShape<{
        gutter: (number | ((props: Record<string, unknown>) => number)) & number;
        column: string | number;
        xs: string | number;
        sm: string | number;
        md: string | number;
        lg: string | number;
        xl: string | number;
        xxl: string | number;
    }>;
    itemLayout: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    loadMore: import("vue-types").VueTypeValidableDef<any>;
    pagination: import("vue-types").VueTypeDef<boolean | Partial<{
        locale: {
            [key: string]: any;
        };
        prefixCls: string;
        role: string;
        current: number;
        size: string;
        total: number;
        defaultCurrent: number;
        defaultPageSize: number;
        pageSize: number;
        selectPrefixCls: string;
    } & {
        onChange?: (...args: any[]) => any;
        disabled?: boolean;
        showSizeChange?: (...args: any[]) => any;
        hideOnSinglePage?: boolean;
        showSizeChanger?: boolean;
        pageSizeOptions?: (string | number)[];
        buildOptionText?: (...args: any[]) => any;
        showQuickJumper?: boolean | {
            [key: string]: any;
        };
        showTotal?: any;
        simple?: boolean;
        itemRender?: (...args: any[]) => any;
        showLessItems?: boolean;
        onShowSizeChange?: (...args: any[]) => any;
        "onUpdate:current"?: (...args: any[]) => any;
        "onUpdate:pageSize"?: (...args: any[]) => any;
        position?: "both" | "bottom" | "top";
    }>>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowKey: import("vue-types").VueTypeValidableDef<any>;
    renderItem: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    split: import("vue-types").VueTypeValidableDef<boolean>;
    header: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            paginationCurrent: number;
            paginationSize: number;
        };
        $props: Partial<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            dataSource: unknown[];
            itemLayout: string;
        }> & Omit<Readonly<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            dataSource: unknown[];
            itemLayout: string;
        } & {
            footer?: any;
            header?: any;
            grid?: {
                gutter: (number | ((props: Record<string, unknown>) => number)) & number;
                column: string | number;
                xs: string | number;
                sm: string | number;
                md: string | number;
                lg: string | number;
                xl: string | number;
                xxl: string | number;
            };
            size?: "default" | "small" | "large";
            renderItem?: any;
            split?: boolean;
            loading?: boolean | {
                [key: string]: any;
            };
            extra?: any;
            bordered?: boolean;
            pagination?: boolean | Partial<{
                locale: {
                    [key: string]: any;
                };
                prefixCls: string;
                role: string;
                current: number;
                size: string;
                total: number;
                defaultCurrent: number;
                defaultPageSize: number;
                pageSize: number;
                selectPrefixCls: string;
            } & {
                onChange?: (...args: any[]) => any;
                disabled?: boolean;
                showSizeChange?: (...args: any[]) => any;
                hideOnSinglePage?: boolean;
                showSizeChanger?: boolean;
                pageSizeOptions?: (string | number)[];
                buildOptionText?: (...args: any[]) => any;
                showQuickJumper?: boolean | {
                    [key: string]: any;
                };
                showTotal?: any;
                simple?: boolean;
                itemRender?: (...args: any[]) => any;
                showLessItems?: boolean;
                onShowSizeChange?: (...args: any[]) => any;
                "onUpdate:current"?: (...args: any[]) => any;
                "onUpdate:pageSize"?: (...args: any[]) => any;
                position?: "both" | "bottom" | "top";
            }>;
            rowKey?: any;
            loadMore?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "prefixCls" | "dataSource" | "itemLayout">;
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
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            dataSource: unknown[];
            itemLayout: string;
        } & {
            footer?: any;
            header?: any;
            grid?: {
                gutter: (number | ((props: Record<string, unknown>) => number)) & number;
                column: string | number;
                xs: string | number;
                sm: string | number;
                md: string | number;
                lg: string | number;
                xl: string | number;
                xxl: string | number;
            };
            size?: "default" | "small" | "large";
            renderItem?: any;
            split?: boolean;
            loading?: boolean | {
                [key: string]: any;
            };
            extra?: any;
            bordered?: boolean;
            pagination?: boolean | Partial<{
                locale: {
                    [key: string]: any;
                };
                prefixCls: string;
                role: string;
                current: number;
                size: string;
                total: number;
                defaultCurrent: number;
                defaultPageSize: number;
                pageSize: number;
                selectPrefixCls: string;
            } & {
                onChange?: (...args: any[]) => any;
                disabled?: boolean;
                showSizeChange?: (...args: any[]) => any;
                hideOnSinglePage?: boolean;
                showSizeChanger?: boolean;
                pageSizeOptions?: (string | number)[];
                buildOptionText?: (...args: any[]) => any;
                showQuickJumper?: boolean | {
                    [key: string]: any;
                };
                showTotal?: any;
                simple?: boolean;
                itemRender?: (...args: any[]) => any;
                showLessItems?: boolean;
                onShowSizeChange?: (...args: any[]) => any;
                "onUpdate:current"?: (...args: any[]) => any;
                "onUpdate:pageSize"?: (...args: any[]) => any;
                position?: "both" | "bottom" | "top";
            }>;
            rowKey?: any;
            loadMore?: any;
        }>, {
            keys: any[];
            defaultPaginationProps: {};
            onPaginationChange: any;
            onPaginationShowSizeChange: any;
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
            paginationCurrent: number;
            paginationSize: number;
        }, {}, {
            triggerPaginationEvent(eventName: any): (page: any, pageSize: any) => void;
            innerRenderItem(item: any, index: any): any;
            isSomethingAfterLastItem(): boolean;
            renderEmpty(prefixCls: any, renderEmpty: any): JSX.Element;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            dataSource: unknown[];
            itemLayout: string;
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
        prefixCls: string;
        dataSource: unknown[];
        itemLayout: string;
    } & {
        footer?: any;
        header?: any;
        grid?: {
            gutter: (number | ((props: Record<string, unknown>) => number)) & number;
            column: string | number;
            xs: string | number;
            sm: string | number;
            md: string | number;
            lg: string | number;
            xl: string | number;
            xxl: string | number;
        };
        size?: "default" | "small" | "large";
        renderItem?: any;
        split?: boolean;
        loading?: boolean | {
            [key: string]: any;
        };
        extra?: any;
        bordered?: boolean;
        pagination?: boolean | Partial<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            role: string;
            current: number;
            size: string;
            total: number;
            defaultCurrent: number;
            defaultPageSize: number;
            pageSize: number;
            selectPrefixCls: string;
        } & {
            onChange?: (...args: any[]) => any;
            disabled?: boolean;
            showSizeChange?: (...args: any[]) => any;
            hideOnSinglePage?: boolean;
            showSizeChanger?: boolean;
            pageSizeOptions?: (string | number)[];
            buildOptionText?: (...args: any[]) => any;
            showQuickJumper?: boolean | {
                [key: string]: any;
            };
            showTotal?: any;
            simple?: boolean;
            itemRender?: (...args: any[]) => any;
            showLessItems?: boolean;
            onShowSizeChange?: (...args: any[]) => any;
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
            position?: "both" | "bottom" | "top";
        }>;
        rowKey?: any;
        loadMore?: any;
    }> & import("vue").ShallowUnwrapRef<{
        keys: any[];
        defaultPaginationProps: {};
        onPaginationChange: any;
        onPaginationShowSizeChange: any;
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
        paginationCurrent: number;
        paginationSize: number;
    } & {} & {
        triggerPaginationEvent(eventName: any): (page: any, pageSize: any) => void;
        innerRenderItem(item: any, index: any): any;
        isSomethingAfterLastItem(): boolean;
        renderEmpty(prefixCls: any, renderEmpty: any): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    dataSource: unknown[];
    itemLayout: string;
} & {
    footer?: any;
    header?: any;
    grid?: {
        gutter: (number | ((props: Record<string, unknown>) => number)) & number;
        column: string | number;
        xs: string | number;
        sm: string | number;
        md: string | number;
        lg: string | number;
        xl: string | number;
        xxl: string | number;
    };
    size?: "default" | "small" | "large";
    renderItem?: any;
    split?: boolean;
    loading?: boolean | {
        [key: string]: any;
    };
    extra?: any;
    bordered?: boolean;
    pagination?: boolean | Partial<{
        locale: {
            [key: string]: any;
        };
        prefixCls: string;
        role: string;
        current: number;
        size: string;
        total: number;
        defaultCurrent: number;
        defaultPageSize: number;
        pageSize: number;
        selectPrefixCls: string;
    } & {
        onChange?: (...args: any[]) => any;
        disabled?: boolean;
        showSizeChange?: (...args: any[]) => any;
        hideOnSinglePage?: boolean;
        showSizeChanger?: boolean;
        pageSizeOptions?: (string | number)[];
        buildOptionText?: (...args: any[]) => any;
        showQuickJumper?: boolean | {
            [key: string]: any;
        };
        showTotal?: any;
        simple?: boolean;
        itemRender?: (...args: any[]) => any;
        showLessItems?: boolean;
        onShowSizeChange?: (...args: any[]) => any;
        "onUpdate:current"?: (...args: any[]) => any;
        "onUpdate:pageSize"?: (...args: any[]) => any;
        position?: "both" | "bottom" | "top";
    }>;
    rowKey?: any;
    loadMore?: any;
}>, {
    keys: any[];
    defaultPaginationProps: {};
    onPaginationChange: any;
    onPaginationShowSizeChange: any;
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
    paginationCurrent: number;
    paginationSize: number;
}, {}, {
    triggerPaginationEvent(eventName: any): (page: any, pageSize: any) => void;
    innerRenderItem(item: any, index: any): any;
    isSomethingAfterLastItem(): boolean;
    renderEmpty(prefixCls: any, renderEmpty: any): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    dataSource: unknown[];
    itemLayout: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof Item & {
        readonly Meta: typeof ListItemMeta;
    };
};
export default _default;
