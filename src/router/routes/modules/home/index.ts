/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 13:41:37
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 18:38:40
 */
import { AppRouteModule } from 'src/router/types'
import { LAYOUT } from 'src/router/constant'

const home: AppRouteModule = {
	path: '/home',
	name: 'Home',
	component: LAYOUT,
	// redirect: '/home/index',
	meta: {
		title: '首页',
		icon: 'ion:grid-outline'
	},
	children: [
		{
			path: 'index',
			name: 'Home1',
			component: () => import('/@/components/HelloWorld.vue'),
			meta: {
				title: '首页',
				icon: 'ion:grid-outline'
			}
		}
	]
}

export default home
