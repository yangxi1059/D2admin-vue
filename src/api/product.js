import request from '@/plugin/axios'

export function getProducts (data) {
  return request({
    url: '/products',
    method: 'get',
    data
  })
}

export function getPageProducts (data) {
  return request({
    url: '/products',
    method: 'post',
    data
  })
}

export function getProductComments (data) {
  return request({
    url: '/productComments',
    method: 'post',
    data
  })
}
