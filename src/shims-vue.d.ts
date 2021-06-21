/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 23:00:26
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 21:16:48
 */
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
