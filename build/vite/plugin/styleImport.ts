/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-19 21:01:00
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-19 21:07:28
 */
/**
 * 按需引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import
 */
import styleImport from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
	if (!isBuild) {
		return []
	}

	const styleImportPlugin = styleImport({
		libs: [
			{
				libraryName: 'ant-design-vue',
				esModule: true,
				resolveStyle: name => {
					return `ant-design-vue/es/${name}/style/index`
				}
			}
		]
	})

	return styleImportPlugin
}
