import { ColProps } from '../grid/Col';
import { FormLabelAlign } from './interface';
import { RequiredMark } from './Form';
import { VueNode } from '../_util/type';
import { FunctionalComponent, HTMLAttributes } from 'vue';
export interface FormItemLabelProps {
    colon?: boolean;
    htmlFor?: string;
    label?: VueNode;
    labelAlign?: FormLabelAlign;
    labelCol?: ColProps & HTMLAttributes;
    requiredMark?: RequiredMark;
    required?: boolean;
    prefixCls: string;
    onClick: Function;
}
declare const FormItemLabel: FunctionalComponent<FormItemLabelProps>;
export default FormItemLabel;
