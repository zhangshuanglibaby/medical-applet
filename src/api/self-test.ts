/*
 * @Date: 2023-01-16 19:56:46
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 20:00:15
 * @Description: 这是健康自测相关请求文件
 */
import $http from "@/server"

// 获取抑郁症题目
export const depressionTopics = () => $http('/depression_topics', 'GET')

// 获取早泄题目
export const prematureTopics = () => $http('/premature_topics', 'GET')

// 获取失眠题目
export const insomniaTopics = () => $http('/insomnia_topics', 'GET')