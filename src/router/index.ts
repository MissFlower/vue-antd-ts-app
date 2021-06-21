/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 16:55:36
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 16:48:11
 */
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'
import { REDIRECT_NAME } from './constant'

const WHITE_NAME_LIST = [REDIRECT_NAME]

// app router
export const router = createRouter({
	history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes: basicRoutes as unknown as RouteRecordRaw[],
	scrollBehavior: () => ({
		left: 0,
		top: 0
	}),
	strict: true
})

// reset router
export function resetRouter() {
	router.getRoutes().forEach(route => {
		const { name } = route
		if (name && !WHITE_NAME_LIST.includes(name as string)) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}

// config router
export function setupRouter(app: App<Element>) {
	console.log(router)
	app.use(router)
}
