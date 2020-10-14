<template>
	<div class="warpper">
		<Button type="primary" @click="onVisible">动态切换</Button>
	</div>
	<div>
		<Switch v-model:checked="visible" />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { Switch, Button } from 'ant-design-vue'
import useToogle from '../hooks/useToogle'

export default defineComponent({
	name: 'Home',
	components: {
		Switch,
		Button
	},
	setup() {
		const { visible, onVisible } = useToogle(true)
		return {
			visible,
			onVisible
		}
	}
})
</script>

<style>
.warpper {
}
</style>
