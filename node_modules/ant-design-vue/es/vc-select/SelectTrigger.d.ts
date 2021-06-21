import { CSSProperties, VNodeChild } from 'vue';
import { RenderDOMFunc } from './interface';
import { DropdownRender } from './interface/generator';
export interface SelectTriggerProps {
    prefixCls: string;
    disabled: boolean;
    visible: boolean;
    popupElement: VNodeChild | JSX.Element;
    animation?: string;
    transitionName?: string;
    containerWidth: number;
    dropdownStyle: CSSProperties;
    dropdownClassName: string;
    direction: string;
    dropdownMatchSelectWidth?: boolean | number;
    dropdownRender?: DropdownRender;
    getPopupContainer?: RenderDOMFunc;
    dropdownAlign: object;
    empty: boolean;
    getTriggerDOMNode: () => any;
}
declare const SelectTrigger: import("vue").DefineComponent<SelectTriggerProps, {
    popupRef: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    getPopupContainer?: RenderDOMFunc;
    prefixCls?: string;
    direction?: string;
    dropdownMatchSelectWidth?: number | boolean;
    empty?: boolean;
    disabled?: boolean;
    visible?: boolean;
    animation?: string;
    popupElement?: VNodeChild | JSX.Element;
    transitionName?: string;
    containerWidth?: number;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    dropdownRender?: import("../_util/type").VueNode;
    dropdownAlign?: unknown;
    getTriggerDOMNode?: unknown;
}>, {}>;
export default SelectTrigger;
