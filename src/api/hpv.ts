/*
 * @Date: 2023-01-13 14:07:24
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 13:54:29
 * @Description: 这是hpv疫苗相关接口文件
 */
import $http from "@/server"
import { HpvPrice, ResHpvData } from '@/types/hpv'
import { ID } from '@/types/common'

// hpv疫苗列表
export const otuhpv = () => $http('/otuhpv', 'GET')

// hpv套餐疫苗
export const hpvPack = () => $http('/hpv_pack', 'GET')

// 查询hpv套餐价格
export const hpvPrice = (data: HpvPrice) => $http('/hpv_price', 'POST', data)

// 提交hpv疫苗预约
export const resHpv = (data: ResHpvData) => $http('/reshpv', 'POST', data)

// hpv疫苗预约订单
export const hpvUserOrder = () => $http('/hpvuser_order', 'GET')

// 取消hpv预约
export const hpvCancel = (id: ID) => $http('/hpvcancel', 'GET', id)