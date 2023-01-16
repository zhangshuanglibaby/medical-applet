/*
 * @Date: 2023-01-16 13:53:00
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 14:00:02
 * @Description: 这是挂科预约相关请求文件
 */
import $http from "@/server"

// 获取父科室列表
export const department = () => $http('/department', 'GET')

// 获取父科室下的子科室
export const reglist = (id: { id: string}) => $http('/reglist', 'GET', id)