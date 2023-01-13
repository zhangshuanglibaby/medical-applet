/*
 * @Date: 2023-01-13 22:11:22
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:44:03
 * @Description: 这是核酸检测相关类型声明文件
 */


export interface Date {
  date: string,
  week: string
}
export interface Style {
  desc: string[],
  title: string
}
// 核酸检测页面数据
export interface NuatagetData {
  address: string,
  boon: string[],
  date: Date[],
  hospital: string,
  logo: string,
  name: string,
  phone: string,
  price: number
  style: Style[]
}

// 提交核酸检测预约
export interface ResNuataData {
  name: string,
  phone: string,
  id_card: string,
  time: string
}