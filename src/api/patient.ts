/*
 * @Date: 2023-01-14 17:01:45
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 17:02:43
 * @Description: 这是****文件
 */
import $http from "@/server"

// 获取就诊人信息列表
export const getPatient = () => $http('/get_patient', 'GET')