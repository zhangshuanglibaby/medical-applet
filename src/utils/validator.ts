/*
 * @Date: 2023-01-08 12:03:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 13:36:27
 * @Description: 这是关于校验文件
 */
import { compose, curry } from '@/utils/common'

const dmcValidator = {
  // 手机号
  phone: /^1\d{10}$/,
  // 校验手机号号段
  exPhone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[2-3,5-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
  // 中文姓名
  name: /^[\u9FA6-\u9FCB\u3400-\u4DB5\u4E00-\u9FA5·]{2,30}$/,
  // 身份证
  IDCard:
      /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,
  // 银行卡号
  backCard: /^[0-9]{16,}$/,
  // 邮箱
  email: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,5})$/
}

const validator = (reg:RegExp, val: string) => {
  return reg.test(val) ? val : null
}

const validatorCurry = curry(validator)

// 非空校验
export const validatorNull = (val: string) => {
  return val !== null && val !== undefined && val.trim() !== "";
}

// 校验手机号
export const validatorPhone = (val: string) => {
  return compose(validatorCurry(dmcValidator.phone), validatorNull)(val)
}

//校验姓名
export const validatorName = (val: string) => {
  return compose(validatorCurry(dmcValidator.name), validatorNull)(val)
}

//校验身份证
export const validatorIdNo = (val: string) => {
  return compose(validatorCurry(dmcValidator.IDCard), validatorNull)(val)
}