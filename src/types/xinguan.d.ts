/*
 * @Date: 2023-01-08 10:04:38
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 10:11:04
 * @Description: 这是新冠疫苗相关类型声明文件
 */

interface Time {
  end_time: string,
  over: number,
  start_time: string,
  when: number
}

interface Lasting {
  period: string,
  time: Time[]
}

interface Week {
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