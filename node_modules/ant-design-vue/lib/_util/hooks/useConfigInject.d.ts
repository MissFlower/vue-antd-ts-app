import { RequiredMark } from '../../form/Form';
import { ComputedRef, UnwrapRef } from 'vue';
import { ConfigProviderProps, Direction, SizeType } from '../../config-provider';
declare const _default: (name: string, props: Record<any, any>) => {
    configProvider: UnwrapRef<ConfigProviderProps>;
    prefixCls: ComputedRef<string>;
    direction: ComputedRef<Direction>;
    size: ComputedRef<SizeType>;
    getTargetContainer: ComputedRef<() => HTMLElement>;
    space: ComputedRef<{
        size: SizeType | number;
    }>;
    pageHeader: ComputedRef<{
        ghost: boolean;
    }>;
    form?: ComputedRef<{
        requiredMark?: RequiredMark;
    }>;
};
export default _default;
