/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 13:46:28
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 14:02:48
 */

import { defineComponent } from '@vue/runtime-core'
import { RouteRecordRaw } from 'vue-router'

export type Component<T extends any = any> =
	| ReturnType<typeof defineComponent>
	| (() => Promise<typeof import('*.vue')>)
	| (() => Promise<T>)

export interface RouteMeta {
	// title
	title: string
	// Whether to ignore permissions
	ignoreAuth?: boolean
	// role info
	// roles?: RoleEnum[]
	// Whether not to cache
	ignoreKeepAlive?: boolean
	// Is it fixed on tab
	affix?: boolean
	// icon on tab
	icon?: string

	frameSrc?: string

	// current page transition
	transitionName?: string

	// Whether the route has been dynamically added
	hideBreadcrumb?: boolean

	// Hide submenu
	hideChildrenInMenu?: boolean

	// Carrying parameters
	carryParam?: boolean

	// Used internally to mark single-level menus
	single?: boolean

	// Currently active menu
	currentActiveMenu?: string

	// Never show in tab
	hideTab?: boolean

	// Never show in menu
	hideMenu?: boolean

	isLink?: boolean
}
// Omit<K,T>类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型：
// K：是对象类型名称，T：是剔除K类型中的属性名称
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
	name: string
	meta: RouteMeta
	component?: Component | string
	components?: Component
	children?: AppRouteRecordRaw[]
	props?: Recordable
	fullPath?: string
}

export type AppRouteModule = AppRouteRecordRaw
