import { ExtractPropTypes } from 'vue';
declare const breadcrumbSeparator: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type BreadcrumbSeparator = Partial<ExtractPropTypes<typeof breadcrumbSeparator>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls: string;
} & {}>, {
    prefixCls: string;
}>;
export default _default;
