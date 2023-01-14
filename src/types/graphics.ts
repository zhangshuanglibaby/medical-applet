/*
 * @Date: 2023-01-15 00:14:28
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:19:42
 * @Description: 这是图文咨询相关类型声明文件
 */

// 提交图文咨询
export interface graphicsData {
  illness: string,
  guide: boolean,
  ins_report: string[],
  patient_id: string
}