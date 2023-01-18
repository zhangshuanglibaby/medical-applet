/*
 * @Date: 2023-01-18 12:25:27
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-18 22:55:16
 * @Description: 这是我的页的常量文件
 */
export const serviceList = [
  { label: '健康分', value: 5 },
  { label: '优惠券', value: 5 },
  { label: '消息', value: 8 }
]

export const orderList = [
  { title: '就诊人管理', icon: '/static/mine/jiuzhenren.svg', path: '/pages/my-patient/index'},
  { title: '我的挂号', icon: '/static/mine/guahao.svg', path: '/pages/order/guahao/index'},
  { title: '新冠疫苗', icon: '/static/mine/xinguanyimiao.svg', path: '/pages/order/xinguan/index'},
  { title: 'HPV疫苗', icon: '/static/mine/hpvyimiao.svg', path: '/pages/order/hpv/index'},
  { title: '核酸检测', icon: '/static/mine/hesuan.svg', path: '/pages/order/nucleicAcid/index'},
  { title: '我的体检', icon: '/static/mine/jiuzhenren.svg', path: '/pages/phy-exam/index'},
]