<template>
	<div class="warpper">
		<!-- <div>
			<Button type="primary" @click="onVisible">动态切换</Button>
			<Switch v-model:checked="visible" />
		</div> -->
		<a-card title="走马灯" style="width: 400px">
			<a-carousel autoplay>
				<div v-for="(item, index) in orginData.banerList" :key="index">
					<img :src="item" />
				</div>
			</a-carousel>
		</a-card>
		<a-row type="flex">
			<a-col :span="6" v-for="item in orginData.cateGoryList" :key="item.name">
				<a-card :title="item.name">
					<img :src="item.icon" />
					<p>{{ item.name }}</p>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { Switch, Button, Row, Col, Card, Carousel } from 'ant-design-vue'
import useToogle from '../hooks/useToogle'
import request from '../utils/request'

export default defineComponent({
	name: 'Home',
	components: {
		Switch,
		Button,
		Row,
		Col,
		Card,
		Carousel
	},
	setup() {
		const { visible, onVisible } = useToogle(true)
		let orginData = ref({})

		onMounted(async () => {
			const resp = await request('/index', {
				method: 'get'
			})
			console.log(resp)
			const { banerList, brandList, cateGoryList, hotList } = resp
			orginData.value = {
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
