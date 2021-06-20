/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-19 18:51:35
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 21:20:00
 */
import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { configStyleImportPlugin } from './styleImport'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	console.log(viteEnv)
	const vitePlugins: (Plugin | Plugin[])[] = [
		// 解析vue template组件
		vue(),
		// 解析vueJsx组件
		vueJsx()
	]
	// vite-plugin-style-import
	vitePlugins.push(configStyleImportPlugin(isBuild))

	return vitePlugins
}
