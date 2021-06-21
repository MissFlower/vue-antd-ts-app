/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 14:08:02
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 17:38:30
 */
import { AppRouteModule } from 'src/router/types'
import { LAYOUT } from 'src/router/constant'

// const User = {
// 	template: '<div>User {{ 123 }}</div>'
// }
const about: AppRouteModule = {
	path: '/about',
	name: 'About',
	component: LAYOUT,
	meta: {
		title: '关于',
		icon: 'simple-icons:about-dot-me'
	},
	children: [
		{
			path: 'index',
			name: 'Index',
			component: () => import('/@/components/HelloWorld.vue'),
			meta: {
				title: 'aa'
			}
		}
	]
}

export default about
