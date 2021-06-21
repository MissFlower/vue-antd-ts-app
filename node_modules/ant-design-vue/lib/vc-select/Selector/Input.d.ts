import { VNodeChild } from 'vue';
import { RefObject } from '../../_util/createRef';
interface InputProps {
    prefixCls: string;
    id: string;
    inputElement: VNodeChild;
    disabled: boolean;
    autofocus: boolean;
    autocomplete: string;
    editable: boolean;
    accessibilityIndex: number;
    value: string;
    open: boolean;
    tabindex: number | string;
    /** Pass accessibility props to input */
    attrs: object;
    inputRef: RefObject;
    onKeydown: EventHandlerNonNull;
    onMousedown: EventHandlerNonNull;
    onChange: EventHandlerNonNull;
    onPaste: EventHandlerNonNull;
    onCompositionstart: EventHandlerNonNull;
    onCompositionend: EventHandlerNonNull;
}
declare const Input: import("vue").DefineComponent<InputProps, {
    VCSelectContainerEvent: any;
    blurTimeout: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    value?: string;
    prefixCls?: string;
    onPaste?: EventHandlerNonNull;
    onCompositionend?: EventHandlerNonNull;
    onCompositionstart?: EventHandlerNonNull;
    onChange?: EventHandlerNonNull;
    onKeydown?: EventHandlerNonNull;
    onMousedown?: EventHandlerNonNull;
    attrs?: unknown;
    tabindex?: string | number;
    disabled?: boolean;
    open?: boolean;
    id?: string;
    inputElement?: VNodeChild;
    autofocus?: boolean;
    autocomplete?: string;
    editable?: boolean;
    accessibilityIndex?: number;
    inputRef?: RefObject;
}>, {}>;
export default Input;
