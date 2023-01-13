/*
 * @Date: 2023-01-13 14:11:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 14:16:30
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