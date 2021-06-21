import { PropType } from 'vue';
import { MenuMode } from './interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    mode: PropType<MenuMode>;
    visible: BooleanConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    disabled: BooleanConstructor;
    onVisibleChange: PropType<(visible: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visibleChange"[], "visibleChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    visible: boolean;
} & {
    prefixCls?: string;
    mode?: MenuMode;
    popupClassName?: string;
    onVisibleChange?: (visible: boolean) => void;
    popupOffset?: number[];
}>, {
    disabled: boolean;
    visible: boolean;
}>;
export default _default;
