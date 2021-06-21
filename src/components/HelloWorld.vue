<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-18 18:47:17
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-21 21:16:27
-->
<template>
	<a>{{ count }}</a>
</template>

<script lang="ts">
	import { ref, defineComponent } from 'vue'
	export default defineComponent({
		name: 'HelloWorld',
		setup: () => {
			const count = ref(112)
			return { count }
		}
	})
</script>
