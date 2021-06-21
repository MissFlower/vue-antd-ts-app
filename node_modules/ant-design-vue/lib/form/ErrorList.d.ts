import { VueNode } from '../_util/type';
export interface ErrorListProps {
    errors?: VueNode[];
    /** @private Internal Usage. Do not use in your production */
    help?: VueNode;
    /** @private Internal Usage. Do not use in your production */
    onDomErrorVisibleChange?: (visible: boolean) => void;
}
declare const _default: import("@vue/runtime-core").DefineComponent<Readonly<{
    errors?: any;
    help?: any;
    onDomErrorVisibleChange?: any;
}>, () => JSX.Element, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, Record<string, any>, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    errors: any;
    help: any;
    onDomErrorVisibleChange: any;
} & {}>, {
    errors: any;
    help: any;
    onDomErrorVisibleChange: any;
}>;
export default _default;
