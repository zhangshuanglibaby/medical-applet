/*
 * @Date: 2023-01-13 22:06:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 13:15:30
 * @Description: 这是核酸检测相关请求文件
 */
import $http from "@/server"
import { ResNuataData } from '@/types/nucleic'
import { ID } from '@/types/common'

// 获取核酸检测页面数据
export const nuataget = () => $http('/nuataget', 'GET')

// 提交核酸检测预约
export const resNuata = (data: ResNuataData) => $http('/resnuata', 'POST', data)

// 核酸检测订单
export const nuatauserOrder = () => $http('/nuatauser_order', 'GET')

// 取消核酸检测预约
export const nuatacancel = (id: ID) => $http('/nuatacancel', 'GET', id)