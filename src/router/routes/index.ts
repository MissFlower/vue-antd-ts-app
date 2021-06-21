/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 17:13:14
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 16:58:40
 */
import { AppRouteModule } from './../types'

const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach(key => {
	const module = modules[key].default || {}
	const moduleList = Array.isArray(module) ? [...module] : [module]
	routeModuleList.push(...moduleList)
})

// async route
export const asyncRoutes = [...routeModuleList]

// Basic routing without permission
export const basicRoutes = [...routeModuleList]
