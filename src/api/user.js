import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/mem/login',
    method: 'post',
    data,
    isAuth: false
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
export function getPersonData(token) {
  return request({
    url: '/mem/info',
    method: 'get',
    params: { token },
    isAuth: true
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
