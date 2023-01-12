/*
 * @Date: 2023-01-12 21:25:01
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 21:30:45
 * @Description: 这是登陆相关的类型声明文件
 */
export interface LoginData {
	appid: string,
	secret: string,
	nickName: string,
	avatarUrl: string,
	code: string
}