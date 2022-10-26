
import axios from 'axios'
import { Toast } from 'vant'

// 克隆一份新的 axios
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000 // 超时时间，超过5秒，如果请求还没有完成，则取消
})

request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  if (error.response) {
    Toast(error.response.data.message)
  }
  return Promise.reject(error)
  // 对响应错误做点什么
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config === https://www.axios-http.cn/docs/req_config === 请求的配置对象
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('mobile-token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default request
