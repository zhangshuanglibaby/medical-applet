/*
 * @Date: 2023-01-17 20:05:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 20:09:04
 * @Description: 这是医师课堂文件
 */
import $http from "@/server"

export const videoList = (data: { page: number }) => $http('/video_list', 'GET', data)