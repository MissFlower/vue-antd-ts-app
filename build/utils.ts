/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 17:56:43
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 23:26:08
 */
// 将所有环境变量配置文件读取到process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {}
	for (const envName of Object.keys(envConf)) {
		// 将\\n转为\n
		let realName = envConf[envName].replace(/\\n/g, '\n')
		realName = realName === 'true' ? true : realName === 'false' ? false : realName

		if (envName === 'VITE_PORT') {
			realName = Number(realName)
		}

		if (envName === 'VITE_PROXY') {
			try {
				realName = JSON.parse(realName)
			} catch (error) {}
		}
		ret[envName] = realName
		process.env[envName] = realName
	}
	return ret
}
