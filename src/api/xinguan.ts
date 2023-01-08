/*
 * @Date: 2023-01-08 10:00:46
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 10:02:44
 * @Description: 这是关于新冠疫苗接口的文件
 */
import $http  from "@/server";

// 获取新冠疫苗预约时段
export const newAppTime = () => $http('/newapptime', 'GET')