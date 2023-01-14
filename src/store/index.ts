/*
 * @Date: 2023-01-14 19:23:36
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 19:36:27
 * @Description: 这是****文件
 */
import { defineStore } from 'pinia'

type Patient = {
  name: string,
  _id: string
}
export const useStore = defineStore('main', {
  state: () => ({
    patient: {} as Patient
  }),
  actions: {
    // 添加就诊人信息
    addPatient(value: Patient) {
      this.patient = value
    }
  }
})