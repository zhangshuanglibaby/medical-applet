/*
 * @Date: 2023-01-11 17:02:59
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 15:22:43
 * @Description: 这是公用的声明文件
 */
// 小程序右上角胶囊按钮
export interface MenuButton {
  top: number | string,
  height: number | string
}

export interface ID {
  _id: string
}

export interface Event {
  detail: {
    value: any
  }
}