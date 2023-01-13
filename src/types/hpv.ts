/*
 * @Date: 2023-01-13 14:11:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 18:19:59
 * @Description: 这是hpv疫苗相关类型声明文件
 */

// 导航栏筛选
export interface HpvSelectData {
  name: string,
  _id: string
}

// 全部疫苗列表
export interface HpvListData {
  describe: string[],
  hpv_id: string,
  name: string,
  price: string[],
  _id: string
}

interface HpvPackBase {
  title: string,
  _id: string
}

export interface NameData {
  combo: string,
  combo_id: string
}

export interface TimeData {
  time: string,
  time_id: string
}

// 套餐名称
export interface HpvComboNameData extends HpvPackBase {
  name: NameData[]
}

// 接种时间
export interface HpvComboTimeData extends HpvPackBase {
  name: TimeData[]
}

// 查询hpv套餐价格api
export interface HpvPrice {
  hpv_id: string,
  combo_id: string,
  time_id: string
}

// 提交hpv疫苗预约
export interface ResHpvData {
  name: string,
  id_card: string,
  gender: string,
  born_date: string,
  phone: string,
  combo: string,
  ino_time: string,
  price: number,
  hpv_name: string
}