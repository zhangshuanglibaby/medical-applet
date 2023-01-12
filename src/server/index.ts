/*
 * @Date: 2023-01-06 21:45:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 22:07:45
 * @Description: 这是封装请求的文件
 */

import { encode } from 'js-base64'

const baseUrl:string = 'https://meituan.thexxdd.cn/api' // 请求域名

// 获取token
const getToken = (): String => {
  // 获取本地的token
  const token = uni.getStorageSync('wxuser').user_Token || ''
  const key = token + ':' // 密钥
  const base64_token = encode(key) // 加密
  return 'Basic ' + base64_token
}

const $http = (
  url: string,
  method: 'GET' | 'POST',
  data?: Object | String | ArrayBuffer
) => {
  return new Promise<any[]>((resolve, reject) => {
    uni.request({
      url: `${baseUrl}${url}`,
      method,
      data,
      header: { Authorization: getToken() },
      success: (res: any) => { // 成功的回调
        if(res.statusCode === 200) {
          resolve(res.data.data)
          return
        }
        if(res.statusCode === 401) {
          // 没有权限 跳转登陆
          uni.showModal({
            title: '请先登录',
            showCancel:false,
            success: () => {
              uni.navigateTo({ url: '/pages/login-page/index' })
            }
          })
        }else if(res.statusCode === 500) {
          uni.showToast({ title: '服务器发生位置错误', duration: 1000, icon: 'error' })
        }else if(res.statusCode === 202) {
          uni.showToast({ title: '参数错误', duration: 1000, icon: 'error' })
        }else {
          uni.showToast({ title: '其他错误', duration: 1000, icon: 'error' })
        }
        reject(res)
      },
      fail: (err: any) => { // 失败的回调
        uni.showToast({ title: '服务器发生位置错误', duration: 1000, icon: 'error' })
        reject(err)
      }
    })
  })
}

export default $http