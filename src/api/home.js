import request from '@/utils/request'

export function getDemo(data, seq, noLoad) {
  return request({
    url: '/demo',
    method: 'post',
    formData: true,
    data,
    seq,
    noLoad
  })
}
