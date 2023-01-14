/*
 * @Date: 2023-01-14 17:01:45
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 19:12:54
 * @Description: 这是****文件
 */
import $http, { baseUrl } from "@/server"
import { PatientRes } from '@/types/patient'

// 身份证AI识别
export const aiCard = baseUrl + '/ai_card'

// 获取就诊人信息列表
export const getPatient = () => $http('/get_patient', 'GET')

// 提交就诊人
export const patientRes = (data: PatientRes) => $http('/patient_res', 'POST', data)