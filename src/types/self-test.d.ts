/*
 * @Date: 2023-01-16 20:06:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 22:45:41
 * @Description: 这是健康自测相关类型声明文件
 */

export interface Options {
  son_id: string,
  title: string
}

// 健康自测题目
export interface TopicData {
  options: Options[],
  topic: string,
  _id: string
}

export interface Recommend {
  dep_id: string,
  dep_name: string,
  hospital:string
}

// 测评结果
export interface Result {
  outline: string[],
  recommend: Recommend[]
  result: string,
  scope: string,
  suggest: string,
  _id: string
}

// 分享
export interface ShareData {
  type: string,
  name: string,
  share_title: string,
  share_path: string,
  share_url: string
}