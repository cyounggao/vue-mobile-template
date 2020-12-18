import request from '@/utils/request'

export function getDemo(data, sequence, notLoading) {
	return request({
		url: '/demo',
		method: 'post',
		formData: true,
		data,
		sequence,
		notLoading
	})
}
