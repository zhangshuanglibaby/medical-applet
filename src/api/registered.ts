/*
 * @Date: 2023-01-16 13:53:00
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 18:38:27
 * @Description: 这是挂科预约相关请求文件
 */
import $http from "@/server"
import { ID } from '@/types/common'
import { Everydlist, DepId, Regappoin } from '@/types/registered'

// 获取父科室列表
export const department = () => $http('/department', 'GET')

// 获取父科室下的子科室
export const reglist = (id: { id: string}) => $http('/reglist', 'GET', id)

// 获取选择医生的日期
export const timesele = (data: DepId) => $http('/timesele', 'GET', data)

// 获取选择的科室下的全部医生列表
export const alldlist = (data: DepId) => $http('/alldlist', 'GET', data)

// 根据时间筛选挂号医生
export const everydlist = (data: Everydlist) => $http('/everydlist', 'GET', data)

// 挂号医生主页
export const doctorhome = (id: ID) => $http('/doctorhome', 'GET', id)

// 提交挂号预约
export const regappoin  = (data: Regappoin) => $http('/regappoin', 'POST', data)

// 用户的挂号记录
export const userRegistrat = () => $http('/user_registrat', 'GET')

// 取消预约挂号
export const registCancel = (id: ID) => $http('/regist_cancel', 'GET', id)