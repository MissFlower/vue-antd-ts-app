import { ComputedRef } from 'vue';
import { SizeType } from '../../config-provider';
declare const sizeProvider: unique symbol;
declare const useProvideSize: <T = SizeType>(props: Record<any, any>) => ComputedRef<T>;
declare const useInjectSize: <T = SizeType>(props?: Record<any, any>) => ComputedRef<T>;
export { useInjectSize, sizeProvider, useProvideSize };
export default useProvideSize;
