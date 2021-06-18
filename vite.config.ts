/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-17 17:20:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-18 17:55:32
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string): string {
	return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()], // 注册插件
	server: {
		open: true
	},
	resolve: {
		alias: [
			{
				find: /\/@\//,
				replacement: pathResolve('src') + '/'
			},
			{
				find: /src/,
				replacement: pathResolve('src') + '/'
			}
		]
	}
})
