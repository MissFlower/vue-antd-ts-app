/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-17 17:20:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 18:33:57
 */
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'

import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { createProxy } from './build/vite/proxy'
import { OUTPUT_DIR } from './build/constant'

import { resolve } from 'path'

function pathResolve(dir: string): string {
	return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	// console.log(command, mode, root, env)

	// loadEnv读取的布尔类型是字符串。此函数可以转换为布尔类型
	const viteEnv = wrapperEnv(env)
	const isBuild = command === 'build'

	const { VITE_PORT, VITE_PROXY, VITE_PUBLIC_PATH } = viteEnv
	return {
		base: VITE_PUBLIC_PATH,
		root,
		server: {
			// Listening on all local IPs
			host: true,
			open: true,
			port: VITE_PORT,
			// 从.env.development中加载环境配置
			proxy: createProxy(VITE_PROXY)
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
		},
		build: {
			target: 'es2015',
			outDir: OUTPUT_DIR,
			terserOptions: {
				compress: {
					keep_infinity: true
					// Used to delete console in production environment
					// drop_console: VITE_DROP_CONSOLE
				}
			},
			// Turning off brotliSize display can slightly reduce packaging time
			brotliSize: false,
			chunkSizeWarningLimit: 2000
		},
		css: {
			preprocessorOptions: {
				scss: {
					javascriptEnabled: true
					// additionalData: `@import "./src/assets/common/common.scss";` // 引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
				}
			}
		},
		// 单独提取管理vite插件
		plugins: createVitePlugins(viteEnv, isBuild)
	}
}
