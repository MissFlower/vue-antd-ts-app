<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 15:43:29
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 17:07:09
-->
<template>
	<div>
		content
		<PageLayout />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import PageLayout from '/src/layouts/page/index.vue'

	export default defineComponent({
		name: 'LayoutContent',
		components: {
			PageLayout
		},
		setup() {}
	})
</script>

<style lang="scss" scoped></style>
