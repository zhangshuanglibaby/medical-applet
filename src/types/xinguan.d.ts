/*
 * @Date: 2023-01-08 10:04:38
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 18:19:01
 * @Description: 这是新冠疫苗相关类型声明文件
 */

export interface Time {
  end_time: string,
  over: number,
  start_time: string,
  when: number
}

export interface Lasting {
  period: string,
  time: Time[]
}

export interface Week {
  Have: string,
  date: string,
  day: string
}

// 新冠疫苗预约时段
export interface TimeData {
  Hospital: string,
  address: string,
  company: string[],
  lasting: Lasting[],
  week: Week[]
}

// 新冠疫苗提交预约
export interface SubmitData {
  name: string,
  id_card: string,
  phone: string,
  address: string,
  de_address: string,
  crowd_sort: string,
  date: string,
  period: string,
  reserve_time: string,
  when: number
}