const isProd = process.env.NODE_ENV === 'production'

// 开发环境
const SERVER_HOST_DEV = 'http://xieyezi.com:9003/mock/14/airi'

// 生产环境
const SERVER_HOST_PROD = 'http://xieyezi.com:9003/mock/14/airi'

const SERVER_API_URL = isProd ? SERVER_HOST_PROD : SERVER_HOST_DEV

const config = {
	SERVER_API_URL
}
export default config
