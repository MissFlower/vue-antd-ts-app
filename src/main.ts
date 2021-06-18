/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-17 17:20:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-18 17:03:28
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from 'src/router'

createApp(App).mount('#app')
async function bootstrap() {
	const app = createApp(App)

	// configure router
	setupRouter(app)
}
bootstrap()
