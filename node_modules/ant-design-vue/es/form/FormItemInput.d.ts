import { ColProps } from '../grid/Col';
import { ValidateStatus } from './FormItem';
import { VueNode } from '../_util/type';
export interface FormItemInputMiscProps {
    prefixCls: string;
    errors: VueNode[];
    hasFeedback?: boolean;
    validateStatus?: ValidateStatus;
    onDomErrorVisibleChange: (visible: boolean) => void;
}
export interface FormItemInputProps {
    wrapperCol?: ColProps;
    help?: VueNode;
    extra?: VueNode;
    status?: ValidateStatus;
}
declare const FormItemInput: import("vue").DefineComponent<Readonly<{
    errors?: any;
    prefixCls?: any;
    help?: any;
    onDomErrorVisibleChange?: any;
    status?: any;
    extra?: any;
    hasFeedback?: any;
    validateStatus?: any;
    wrapperCol?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errors: any;
    prefixCls: any;
    help: any;
    onDomErrorVisibleChange: any;
    status: any;
    extra: any;
    hasFeedback: any;
    validateStatus: any;
    wrapperCol: any;
} & {}>, {
    errors: any;
    prefixCls: any;
    help: any;
    onDomErrorVisibleChange: any;
    status: any;
    extra: any;
    hasFeedback: any;
    validateStatus: any;
    wrapperCol: any;
}>;
export default FormItemInput;
