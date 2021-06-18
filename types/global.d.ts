/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 18:00:42
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-18 18:38:31
 */
declare global {
	export type Writable<T> = {
		-readonly [P in keyof T]: T[P]
	}
	declare type Recordable<T = any> = Record<string, T>
}
