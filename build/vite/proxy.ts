/*
 * @Description: Used to parse the .env.development proxy configuration
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-19 19:43:12
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 22:55:57
 */
import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>

const httpsRE = /^https:\/\//
/**
 * 生成proxy
 * @param params
 */
export function createProxy(list: ProxyList = []) {
	const ret: ProxyTargetList = {}
	for (const [prefix, target] of list) {
		const isHttps = httpsRE.test(target)

		// https://github.com/http-party/node-http-proxy#options
		ret[prefix] = {
			target,
			changeOrigin: true,
			ws: true,
			rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
			// https is require secure=false
			...(isHttps ? { secure: false } : {})
		}
	}
	return ret
}
