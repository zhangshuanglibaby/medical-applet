/*
 * @Date: 2023-01-16 13:55:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 17:16:04
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