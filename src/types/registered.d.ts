/*
 * @Date: 2023-01-16 13:55:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 15:45:14
 * @Description: 这是挂科预约相关的类型声明文件文件
 */

// 父科室列表
export interface Department {
  dep_ment: string,
  _id: string
}

// 父科室下的子科室
export interface Reglist {
  dep_id: string, 
  dep_name: string
}

// 根据时间筛选挂号医生
export interface Everydlist {
  dep_id: string,
  week: string
}

export interface DepId {
  dep_id: string
}

// 选择医生的日期
export interface Timesele {
  date: string,
  dep_id: string,
  nu_source: number,
  week: string
}

// 医生列表
export interface DoctorList {
  avatar: string,
  good_at: string,
  name: string,
  post: string,
  _id: string
}

export interface Time {
  already: number,
  nu_source: number,
  the_time: string[]
  when: number
}
export interface Appment {
  day: string,
  time: Time[],
  total_source: number,
  week: string
}
// 挂号医生主页
export interface DoctorHome {
  App_ment: Appment[],
  avatar: string,
  cost: number,
  good_at: string,
  hospital: string,
  name: string,
  post: string,
  _id: string
}

// 提交预约挂号
export interface Regappoin {
  week: string,
  the_time: string,
  when: number,
  _id: string,
  patient_id: string
}