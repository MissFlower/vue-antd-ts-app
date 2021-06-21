<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-21 15:46:23
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 17:56:48
-->
<template>
	<RouterView :key="123" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'PageLayout',
		setup() {}
	})
</script>

<style lang="scss" scoped></style>
