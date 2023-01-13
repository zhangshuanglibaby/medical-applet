/*
 * @Date: 2023-01-13 14:07:24
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 14:10:46
 * @Description: 这是hpv疫苗相关接口文件
 */
import $http from "@/server"

// hpv疫苗列表
export const otuhpv = () => $http('/otuhpv', 'GET')