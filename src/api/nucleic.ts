/*
 * @Date: 2023-01-13 22:06:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:44:25
 * @Description: 这是核酸检测相关请求文件
 */
import $http from "@/server"
import { ResNuataData } from '@/types/nucleic'

// 获取核酸检测页面数据
export const nuataget = () => $http('/nuataget', 'GET')

// 提交核酸检测预约
export const resNuata = (data: ResNuataData) => $http('/resnuata', 'POST', data)