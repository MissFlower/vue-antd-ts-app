import { Plugin } from 'vue';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            transformCellText: (...args: any[]) => any;
            footer: (...args: any[]) => any;
            title: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            components: {
                [key: string]: any;
            };
            dropdownPrefixCls: string;
            dataSource: unknown[];
            rowClassName: (...args: any[]) => any;
            defaultExpandedRowKeys: unknown[];
            expandedRowKeys: unknown[];
            expandIconColumnIndex: number;
            indentSize: number;
            customRow: (...args: any[]) => any;
            customHeaderRow: (...args: any[]) => any;
            tableLayout: string;
            expandIcon: (...args: any[]) => any;
            onExpandedRowsChange: (...args: any[]) => any;
            onExpand: (...args: any[]) => any;
            onRowClick: (...args: any[]) => any;
        }> & Omit<Readonly<{
            prefixCls: string;
            components: {
                [key: string]: any;
            };
            dropdownPrefixCls: string;
            dataSource: unknown[];
            defaultExpandedRowKeys: unknown[];
            expandedRowKeys: unknown[];
            expandIconColumnIndex: number;
            indentSize: number;
            tableLayout: string;
        } & {
            locale?: {
                filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
                filterConfirm: any;
                filterReset: any;
                emptyText: any;
                selectAll: any;
                selectInvert: any;
                sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
                expand: (string | ((props: Record<string, unknown>) => string)) & string;
                collapse: (string | ((props: Record<string, unknown>) => string)) & string;
            };
            getPopupContainer?: (...args: any[]) => any;
            transformCellText?: (...args: any[]) => any;
            footer?: (...args: any[]) => any;
            title?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            scroll?: unknown;
            size?: "default" | "small" | "middle" | "large";
            loading?: boolean | {
                prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
                spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                size: "default" | "small" | "large";
                wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
                tip: (string | ((props: Record<string, unknown>) => string)) & string;
                delay: (number | ((props: Record<string, unknown>) => number)) & number;
                indicator: any;
            };
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
            sortDirections?: import("./interface").SortOrder[];
            rowSelection?: {
                [key: string]: any;
            } | {
                type: "checkbox" | "radio";
                selectedRowKeys: unknown[] | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
                getCheckboxProps: any;
                selections: boolean | unknown[] | (() => unknown[]);
                hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                columnWidth: string | number;
                selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
                columnTitle: any;
            };
            columns?: unknown;
            rowKey?: any;
            rowClassName?: (...args: any[]) => any;
            expandedRowRender?: any;
            defaultExpandAllRows?: boolean;
            expandIconAsCell?: boolean;
            expandRowByClick?: boolean;
            customRow?: (...args: any[]) => any;
            customHeaderRow?: (...args: any[]) => any;
            useFixedHeader?: boolean;
            showHeader?: boolean;
            childrenColumnName?: string | unknown[];
            bodyStyle?: import("vue").CSSProperties;
            expandIcon?: (...args: any[]) => any;
            onExpandedRowsChange?: (...args: any[]) => any;
            onExpand?: (...args: any[]) => any;
            onRowClick?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "getPopupContainer" | "prefixCls" | "transformCellText" | "footer" | "title" | "onChange" | "components" | "dropdownPrefixCls" | "dataSource" | "rowClassName" | "defaultExpandedRowKeys" | "expandedRowKeys" | "expandIconColumnIndex" | "indentSize" | "customRow" | "customHeaderRow" | "tableLayout" | "expandIcon" | "onExpandedRowsChange" | "onExpand" | "onRowClick">;
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
            prefixCls: string;
            components: {
                [key: string]: any;
            };
            dropdownPrefixCls: string;
            dataSource: unknown[];
            defaultExpandedRowKeys: unknown[];
            expandedRowKeys: unknown[];
            expandIconColumnIndex: number;
            indentSize: number;
            tableLayout: string;
        } & {
            locale?: {
                filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
                filterConfirm: any;
                filterReset: any;
                emptyText: any;
                selectAll: any;
                selectInvert: any;
                sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
                expand: (string | ((props: Record<string, unknown>) => string)) & string;
                collapse: (string | ((props: Record<string, unknown>) => string)) & string;
            };
            getPopupContainer?: (...args: any[]) => any;
            transformCellText?: (...args: any[]) => any;
            footer?: (...args: any[]) => any;
            title?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            scroll?: unknown;
            size?: "default" | "small" | "middle" | "large";
            loading?: boolean | {
                prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
                spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                size: "default" | "small" | "large";
                wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
                tip: (string | ((props: Record<string, unknown>) => string)) & string;
                delay: (number | ((props: Record<string, unknown>) => number)) & number;
                indicator: any;
            };
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
            sortDirections?: import("./interface").SortOrder[];
            rowSelection?: {
                [key: string]: any;
            } | {
                type: "checkbox" | "radio";
                selectedRowKeys: unknown[] | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
                getCheckboxProps: any;
                selections: boolean | unknown[] | (() => unknown[]);
                hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                columnWidth: string | number;
                selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
                columnTitle: any;
            };
            columns?: unknown;
            rowKey?: any;
            rowClassName?: (...args: any[]) => any;
            expandedRowRender?: any;
            defaultExpandAllRows?: boolean;
            expandIconAsCell?: boolean;
            expandRowByClick?: boolean;
            customRow?: (...args: any[]) => any;
            customHeaderRow?: (...args: any[]) => any;
            useFixedHeader?: boolean;
            showHeader?: boolean;
            childrenColumnName?: string | unknown[];
            bodyStyle?: import("vue").CSSProperties;
            expandIcon?: (...args: any[]) => any;
            onExpandedRowsChange?: (...args: any[]) => any;
            onExpand?: (...args: any[]) => any;
            onRowClick?: (...args: any[]) => any;
        }>, unknown, unknown, {}, {
            normalize(elements?: any[]): any[];
            updateColumns(cols?: any[]): any[];
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            transformCellText: (...args: any[]) => any;
            footer: (...args: any[]) => any;
            title: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            components: {
                [key: string]: any;
            };
            dropdownPrefixCls: string;
            dataSource: unknown[];
            rowClassName: (...args: any[]) => any;
            defaultExpandedRowKeys: unknown[];
            expandedRowKeys: unknown[];
            expandIconColumnIndex: number;
            indentSize: number;
            customRow: (...args: any[]) => any;
            customHeaderRow: (...args: any[]) => any;
            tableLayout: string;
            expandIcon: (...args: any[]) => any;
            onExpandedRowsChange: (...args: any[]) => any;
            onExpand: (...args: any[]) => any;
            onRowClick: (...args: any[]) => any;
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
        prefixCls: string;
        components: {
            [key: string]: any;
        };
        dropdownPrefixCls: string;
        dataSource: unknown[];
        defaultExpandedRowKeys: unknown[];
        expandedRowKeys: unknown[];
        expandIconColumnIndex: number;
        indentSize: number;
        tableLayout: string;
    } & {
        locale?: {
            filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
            filterConfirm: any;
            filterReset: any;
            emptyText: any;
            selectAll: any;
            selectInvert: any;
            sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
            expand: (string | ((props: Record<string, unknown>) => string)) & string;
            collapse: (string | ((props: Record<string, unknown>) => string)) & string;
        };
        getPopupContainer?: (...args: any[]) => any;
        transformCellText?: (...args: any[]) => any;
        footer?: (...args: any[]) => any;
        title?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        scroll?: unknown;
        size?: "default" | "small" | "middle" | "large";
        loading?: boolean | {
            prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
            spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            size: "default" | "small" | "large";
            wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
            tip: (string | ((props: Record<string, unknown>) => string)) & string;
            delay: (number | ((props: Record<string, unknown>) => number)) & number;
            indicator: any;
        };
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
        sortDirections?: import("./interface").SortOrder[];
        rowSelection?: {
            [key: string]: any;
        } | {
            type: "checkbox" | "radio";
            selectedRowKeys: unknown[] | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
            getCheckboxProps: any;
            selections: boolean | unknown[] | (() => unknown[]);
            hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            columnWidth: string | number;
            selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
            columnTitle: any;
        };
        columns?: unknown;
        rowKey?: any;
        rowClassName?: (...args: any[]) => any;
        expandedRowRender?: any;
        defaultExpandAllRows?: boolean;
        expandIconAsCell?: boolean;
        expandRowByClick?: boolean;
        customRow?: (...args: any[]) => any;
        customHeaderRow?: (...args: any[]) => any;
        useFixedHeader?: boolean;
        showHeader?: boolean;
        childrenColumnName?: string | unknown[];
        bodyStyle?: import("vue").CSSProperties;
        expandIcon?: (...args: any[]) => any;
        onExpandedRowsChange?: (...args: any[]) => any;
        onExpand?: (...args: any[]) => any;
        onRowClick?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<{}> & {} & {} & {
        normalize(elements?: any[]): any[];
        updateColumns(cols?: any[]): any[];
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls: string;
    components: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    dataSource: unknown[];
    defaultExpandedRowKeys: unknown[];
    expandedRowKeys: unknown[];
    expandIconColumnIndex: number;
    indentSize: number;
    tableLayout: string;
} & {
    locale?: {
        filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        filterConfirm: any;
        filterReset: any;
        emptyText: any;
        selectAll: any;
        selectInvert: any;
        sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        expand: (string | ((props: Record<string, unknown>) => string)) & string;
        collapse: (string | ((props: Record<string, unknown>) => string)) & string;
    };
    getPopupContainer?: (...args: any[]) => any;
    transformCellText?: (...args: any[]) => any;
    footer?: (...args: any[]) => any;
    title?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    scroll?: unknown;
    size?: "default" | "small" | "middle" | "large";
    loading?: boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        size: "default" | "small" | "large";
        wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
        tip: (string | ((props: Record<string, unknown>) => string)) & string;
        delay: (number | ((props: Record<string, unknown>) => number)) & number;
        indicator: any;
    };
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
    sortDirections?: import("./interface").SortOrder[];
    rowSelection?: {
        [key: string]: any;
    } | {
        type: "checkbox" | "radio";
        selectedRowKeys: unknown[] | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
        getCheckboxProps: any;
        selections: boolean | unknown[] | (() => unknown[]);
        hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        columnWidth: string | number;
        selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
        columnTitle: any;
    };
    columns?: unknown;
    rowKey?: any;
    rowClassName?: (...args: any[]) => any;
    expandedRowRender?: any;
    defaultExpandAllRows?: boolean;
    expandIconAsCell?: boolean;
    expandRowByClick?: boolean;
    customRow?: (...args: any[]) => any;
    customHeaderRow?: (...args: any[]) => any;
    useFixedHeader?: boolean;
    showHeader?: boolean;
    childrenColumnName?: string | unknown[];
    bodyStyle?: import("vue").CSSProperties;
    expandIcon?: (...args: any[]) => any;
    onExpandedRowsChange?: (...args: any[]) => any;
    onExpand?: (...args: any[]) => any;
    onRowClick?: (...args: any[]) => any;
}>, unknown, unknown, {}, {
    normalize(elements?: any[]): any[];
    updateColumns(cols?: any[]): any[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    transformCellText: (...args: any[]) => any;
    footer: (...args: any[]) => any;
    title: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    components: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    dataSource: unknown[];
    rowClassName: (...args: any[]) => any;
    defaultExpandedRowKeys: unknown[];
    expandedRowKeys: unknown[];
    expandIconColumnIndex: number;
    indentSize: number;
    customRow: (...args: any[]) => any;
    customHeaderRow: (...args: any[]) => any;
    tableLayout: string;
    expandIcon: (...args: any[]) => any;
    onExpandedRowsChange: (...args: any[]) => any;
    onExpand: (...args: any[]) => any;
    onRowClick: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Column: typeof Column;
    readonly ColumnGroup: typeof ColumnGroup;
};
export default _default;
