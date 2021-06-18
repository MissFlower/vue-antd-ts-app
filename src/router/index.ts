/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 16:55:36
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-18 17:24:00
 */
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'

// router
console.log(createWebHashHistory())
export const router = createRouter({
	history: createWebHashHistory(),
	routes: basicRoutes as unknown as RouteRecordRaw[],
	scrollBehavior: () => ({
		left: 0,
		top: 0
	}),
	strict: true
})
export function setupRouter(app: App<Element>) {
	app.use(router)
}
