import axios from 'axios'
import store from "../store";
import qs from 'qs'
import {
	Toast
} from 'vant';

let lock = false
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	withCredentials: true, // send cookies when cross-domain requests
	timeout: 30000, // request timeout
})
// 发请求之前
/* config参数
	notLoading: 请求是否不显示加载框，默认显示
	formData: post时参数是否用form-data形式传，默认json形式
	method: 请求方式，默认post
	data: 请求的参数
	sequence： axios串联时的先后顺序，first:第一个(执行完毕后计数不减1) / mid:中间的 / last:最后一个(执行前计数不加1),默认mid
 */
service.interceptors.request.use(
	config => {
		config.method = config.method || 'post'
		config.sequence = config.sequence || 'mid'
		if (config.method == 'post' && config.formData) { //form-data形式传参要序列化
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
			config.data = qs.stringify(config.data)
		}
		if (config.method == 'get') { // get请求，对于参数为数组时要序列化成 id: [1,2] / id=1&id=2 形式
			config.params = qs.stringify(config.data, {
				indices: false
			})
			config.paramsSerializer = function(params) {
				return params
			}
		}
		if ((config.sequence == 'mid' || config.sequence == 'first') && !config.notLoading) {
			if (store.getters.requserCount == 0) {
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
					duration: 0,
					loadingType: 'spinner'
				});
			}
			store.commit('app/CHANGE_COUNT', store.getters.requserCount + 1)
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
//请求完成
service.interceptors.response.use(
	response => {
		if ((response.config.sequence == 'mid' || response.config.sequence == 'last') && !response.config.notLoading) {
			store.commit('app/CHANGE_COUNT', store.getters.requserCount - 1)
			if (store.getters.requserCount == 0) {
				Toast.clear()
			}
		}
		const res = response.data
		if (res.status == 0) {
			return res
		} else if (res.status == 401) { //重新登录
			if (!lock) {
				lock = true
			}
		} else {
			Toast({
				message: res.msg || '网络开小差了',
				duration: 1.5 * 1000
			})
			return Promise.reject(new Error(res.message || 'Error'))
		}
	},
	error => {
		store.commit('app/CHANGE_COUNT', 0)
		Toast.clear()
		Toast({
			message: error.response.data.msg || '网络开小差了',
			duration: 2 * 1000
		})
		return Promise.reject(error)
	}
)

export default service
