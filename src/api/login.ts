/*
 * @Date: 2023-01-12 21:22:33
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 21:27:32
 * @Description: 这是****文件
 */
import $http from "@/server/index"
import { LoginData } from '@/types/login'

export const wxLogin = (data: LoginData) => $http('/wx_login', 'POST', data)