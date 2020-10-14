import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import config from '../config'

export type RequestOptions = AxiosRequestConfig

// 响应拦截器
axios.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		const { response } = error
		// 请求有响应
		if (response) {
			const { status, data } = response
			if (status === 400) {
				if (data && data.code >= 190051 && data.code <= 240021) {
					const { code, message } = data
					const err = { code, message }
					return Promise.reject(err)
				}
				return Promise.reject(message)
			}
			return Promise.reject()
		}
		// 请求超时
		if (error.code === 'ECONNABORTED') {
			message.error('请求超时！')
			return Promise.reject()
		}
		return Promise.reject()
	}
)
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function request(url: string, options: RequestOptions): Promise<any> {
	const defaultOptions = {
		timeout: 10000,
		post: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		}
	}
	const newOptions = { ...defaultOptions, ...options }
	const newUrl = config.SERVER_API_URL + url
	console.log('url', newUrl)
	console.log('newOptions', newOptions)
	return axios(newUrl, newOptions)
}
