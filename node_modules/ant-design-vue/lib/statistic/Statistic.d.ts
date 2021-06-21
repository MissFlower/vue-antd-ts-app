import { PropType } from 'vue';
import { countdownValueType } from './utils';
export declare const StatisticProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    decimalSeparator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    groupSeparator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<countdownValueType>;
    };
    valueStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    prefix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onFinish: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    decimalSeparator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    groupSeparator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<countdownValueType>;
    };
    valueStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    prefix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onFinish: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    format: string;
    prefixCls: string;
    decimalSeparator: string;
    precision: number;
    groupSeparator: string;
} & {
    value?: countdownValueType;
    title?: import("../_util/type").VueNode;
    loading?: boolean;
    onFinish?: (...args: any[]) => any;
    suffix?: import("../_util/type").VueNode;
    prefix?: import("../_util/type").VueNode;
    formatter?: any;
    valueStyle?: import("vue").CSSProperties;
    valueRender?: any;
}>, {
    format: string;
    prefixCls: string;
    onFinish: (...args: any[]) => any;
    decimalSeparator: string;
    precision: number;
    groupSeparator: string;
}>;
export default _default;
