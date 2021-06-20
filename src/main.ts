/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-17 17:20:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 23:35:18
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from 'src/router'

async function bootstrap() {
	const app = createApp(App)

	// configure router
	setupRouter(app)

	// Mount when the route is ready
	// https://next.router.vuejs.org/api/#isready
	await router.isReady()

	app.mount('#app', true)
}
bootstrap()
