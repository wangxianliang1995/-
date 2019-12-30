import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
})
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
// axios.defaults.headers.patch['Content-Type'] = 'application/json'
// axios.defaults.headers.put['Content-Type'] = 'application/json'

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    debugger;
    if (config.isAuth) {
      if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['Authorization'] = 'Bearer ' + getToken()
      }
    } else {
      config.headers['Authorization'] = 'Basic RlhfV0pXX0FQUF8xMDA6MUZCOTIwMjA5QjJERTFBNzE5MDZGNUI2OENENTA0MTI='
    }
    // config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers['Content-Type'] = 'application/json';
    // config.headers['Accept'] = 'application/json';

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    debugger;
    console.log(response.status)
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // if (response.status !== 200) {
    if (res.status !== '0' || res.success == false) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 7: Illegal token; 6: Token expired;
      if (res.status === '6' || res.status === '7') {
        // to re-login
        MessageBox.confirm('您的账号在其他设备上登录，请重新登录', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: '提示'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      debugger;
      return res
    }
  },
  error => {
    debugger;
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
