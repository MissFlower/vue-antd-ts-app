/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 18:00:42
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 23:32:30
 */
import type {
	ComponentRenderProxy,
	VNode,
	VNodeChild,
	ComponentPublicInstance,
	FunctionalComponent,
	PropType as VuePropType
} from 'vue'

declare global {
	// vue
	declare type PropType<T> = VuePropType<T>
	declare type VueNode = VNodeChild | JSX.Element
	// 减号移除特定修饰符
	export type Writable<T> = {
		-readonly [P in keyof T]: T[P]
	}
	declare type Recordable<T = any> = Record<string, T>

	interface ImportMetaEnv extends ViteEnv {
		__: unknown
	}
	declare interface ViteEnv {
		VITE_PORT: number
		VITE_GLOB_APP_TITLE: string
		VITE_GLOB_APP_SHORT_NAME: string
		VITE_PUBLIC_PATH: string
		VITE_PROXY: [string, string][]
	}

	namespace JSX {
		// tslint:disable no-empty-interface
		type Element = VNode
		// tslint:disable no-empty-interface
		type ElementClass = ComponentRenderProxy
		interface ElementAttributesProperty {
			$props: any
		}
		interface IntrinsicElements {
			[elem: string]: any
		}
		interface IntrinsicAttributes {
			[elem: string]: any
		}
	}
}
declare module 'vue' {
	export type JSXComponent<Props = any> =
		| { new (): ComponentPublicInstance<Props> }
		| FunctionalComponent<Props>
}
