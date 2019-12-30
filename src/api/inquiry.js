import request from '@/utils/request'

export function getWaitInquiry() {
  return request({
    url: '/station/wait/inquirylist',
    method: 'get',
    isAuth: true
  })
}
export function exitAccount(data) {
  return request({
    url: '/mem/logout',
    method: 'post',
    data,
    isAuth: true
  })
}
export function getWaitInquiried() {
  return request({
    url: '/station/wait/inquiriedlist',
    method: 'get',
    isAuth: true
  })
}

export function getPatientInfo(inquiryId) {
  return request({
    url: '/office/pat/diagnose',
    method: 'get',
    params: { inquiryId },
    isAuth: true
  })
}
export function getFirstRecord(inquiryId) {
  return request({
    url: '/office/doc/first/record',
    method: 'get',
    params: { inquiryId },
    isAuth: true
  })
}

export function endInquiry(data) {
  return request({
    url: '/office/doc/endInquiry',
    method: 'post',
    data,
    isAuth: true
  })
}
export function getDoctorsadvice(inquiryId) {
  return request({
    url: '/office/doc/medicinal/patlist',
    method: 'get',
    params: { inquiryId },
    isAuth: true
  })
}
export function getQuery(patId, docId) {
  return request({
    url: 'office/doc/Query/InquiryId',
    method: 'get',
    params: { patId, docId },
    isAuth: true
  })
}

export function getdrugadd(keyword, userType, page) {
  return request({
    url: '/office/doc/medicinal/list',
    method: 'get',
    params: { keyword, userType, page },
    isAuth: true
  })
}

export function getIntegralInfo(docId) {
  return request({
    url: '/office/doc/my/integral',
    method: 'get',
    params: { docId },
    isAuth: true
  })
}

export function getMyOrders(docId) {
  return request({
    url: '/office/doc/my/orders',
    method: 'get',
    params: { docId },
    isAuth: true
  })
}

export function getOrdersInfo(inquiryId) {
  return request({
    url: '/office/doc/my/orders/detail',
    method: 'get',
    params: { inquiryId },
    isAuth: true
  })
}

