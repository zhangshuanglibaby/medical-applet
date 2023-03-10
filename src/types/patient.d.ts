/*
 * @Date: 2023-01-14 17:19:07
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:31:16
 * @Description: 这是****文件
 */

// 获取就诊人信息列表
export interface GetPatientRes {
  age: string,
  name: string,
  phone: string,
  relation: string,
  sex: string,
  _id: string
}

// 提交就诊人信息
export interface PatientRes { 
  name: string,
  sex: string,
  born: string,
  relation: string,
  id_card: string,
  phone: string
}