<template>
	<div class="warpper">
		<Button type="primary" @click="onVisible">动态切换</Button>
		<div>
			<Switch v-model:checked="visible" />
		</div>
		<Row>
			<!-- <Col :span="8"> col-8 </Col>
			<Col :span="8"> col-8 </Col>
			<Col :span="8"> col-8 </Col> -->
		</Row>
	</div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue'
import { Switch, Button, Row, Col } from 'ant-design-vue'
import useToogle from '../hooks/useToogle'
import request from '../utils/request'

export default defineComponent({
	name: 'Home',
	components: {
		Switch,
		Button,
		Row,
		Col
	},
	setup() {
		const { visible, onVisible } = useToogle(true)
		let orginData = reactive()

		onMounted(async () => {
			const resp = await request('/index', {
				method: 'get'
			})
			console.log(resp)
			const { banerList, brandList, cateGoryList, hotList } = resp
			orginData = {
				banerList,
				brandList,
				cateGoryList,
				hotList
			}
		})

		return {
			visible,
			orginData,
			onVisible
		}
	}
})
</script>

<style>
.warpper {
}
</style>
