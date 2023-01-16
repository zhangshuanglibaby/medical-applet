/*
 * @Date: 2023-01-16 13:55:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 14:10:02
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