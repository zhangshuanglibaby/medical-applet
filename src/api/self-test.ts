/*
 * @Date: 2023-01-16 19:56:46
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 21:34:08
 * @Description: 这是健康自测相关请求文件
 */
import $http from "@/server"

// 获取抑郁症题目
export const depressionTopics = () => $http('/depression_topics', 'GET')

// 获取早泄题目
export const prematureTopics = () => $http('/premature_topics', 'GET')

// 获取失眠题目
export const insomniaTopics = () => $http('/insomnia_topics', 'GET')

// 抑郁症测试结果
export const depression = (data: { value: string[]}) => $http('/depression', 'GET', data)

// 早泄测试结果
export const premature = (data: { value: string[]}) => $http('/premature', 'GET', data)

// 获取失眠测试结果
export const insomnia = (data: { value: string[]}) => $http('/insomnia', 'GET', data)
