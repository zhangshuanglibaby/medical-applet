/*
 * @Date: 2023-01-14 15:47:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:17:03
 * @Description: 这是图文咨询相关请求文件
 */
import $http, { baseUrl } from "@/server"
import { graphicsData } from '@/types/graphics'

// 图片上传接口
export const uploadPictureURl = baseUrl + '/upload_picture'

// 提交图文咨询
export const graphics = (data: graphicsData) => $http('/graphics', 'POST', data)

