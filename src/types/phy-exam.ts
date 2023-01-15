/*
 * @Date: 2023-01-15 17:15:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 18:49:04
 * @Description: 这是体检套餐相关类型声明文件
 */

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