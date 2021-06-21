<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 14:32:51
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 16:58:06
-->
<template>
	<Layout>
		<LayoutHeader />

		<Layout>
			<LayoutSiderBar />

			<Layout>
				<LayoutContent />
			</Layout>
		</Layout>
	</Layout>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { Layout } from 'ant-design-vue'
	import LayoutHeader from './Header/index.vue'
	import LayoutSiderBar from './Sider/index.vue'
	import LayoutContent from './Content/index.vue'

	export default defineComponent({
		name: 'DefaultLayout',
		components: {
			Layout,
			LayoutHeader,
			LayoutSiderBar,
			LayoutContent
		},
		setup() {}
	})
</script>

<style lang="scss" scoped></style>
