/*
 * @Date: 2023-01-06 22:02:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-06 22:13:47
 * @Description: 这是首页的接口文件
 */
import $http from '@/server/index'

// 获取首页数据
export const frontPage = () => $http('/frontPage', 'GET')
