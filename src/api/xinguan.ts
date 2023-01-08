/*
 * @Date: 2023-01-08 10:00:46
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 13:44:07
 * @Description: 这是关于新冠疫苗接口的文件
 */
import $http  from "@/server";
import { SubmitData } from '@/types/xinguan'

// 获取新冠疫苗预约时段
export const newAppTime = () => $http('/newapptime', 'GET')

// 新冠疫苗提交预约
export const rescovid = (data: SubmitData) => $http('/rescovid', 'POST', data)