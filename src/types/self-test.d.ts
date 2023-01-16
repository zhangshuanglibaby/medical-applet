/*
 * @Date: 2023-01-16 20:06:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 20:08:08
 * @Description: 这是健康自测相关类型声明文件
 */

export interface Options {
  son_id: string,
  title: string
}

export interface TopicData {
  options: Options[],
  topic: string,
  _id: string
}