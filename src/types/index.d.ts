/*
 * @Date: 2023-01-07 14:53:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 15:55:12
 * @Description: 这是首页的类型声明文件
 */
// -----------首页的类型声明文件--------------

// 首页第一项数据：疫苗预约
export interface Vaccine {
  image: string,
  title: string
}

// 首页第二项数据 挂号和体检 - 有两个字段和疫苗预约一样的 可以继承
export interface Reserve extends Vaccine {
  describe: string
}

// 首页第三项数据 热门挂号
export interface Popular extends Vaccine {
  background: string,
  id: string
}

// 首页第四项数据 健康自测
export interface SelfTest {
  describe: string,
  image: string,
  minute: number,
  name: string,
  number_of_people: number,
  question: number
}