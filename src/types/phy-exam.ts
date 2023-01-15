/*
 * @Date: 2023-01-15 17:15:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 22:15:28
 * @Description: 这是体检套餐相关类型声明文件
 */

import { Date } from './nucleic'
// 获取体检筛选条件
export interface Phyterm {
  filter_val: string[],
  query_val: string
}

// 获取全部体检套餐
export interface Physget {
  be_suit: string,
  describe: string,
  image: string,
  price: number,
  sales: number,
  title: string,
  _id: string
}

// 筛选体检套餐
export interface PhyQuery {
  type: string,
  sales: string,
  price: string
}


export interface Crowd {
  image: string,
  name: string
}
interface Content {
  details: string
  thing: string
}
export interface Project {
  content: Content[],
  title: string
}
// 体检套餐详情页数据
export interface Phydetail {
  crowd: Crowd[],
  date: Date[],
  image: string,
  price: number,
  project: Project[],
  sales: number,
  title: string,
  _id: string
}

// 体检预约提交
export interface Resphy {
  phy_name: string,
  phy_time: string,
  patient_id: string
}