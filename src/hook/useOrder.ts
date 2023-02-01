/*
 * @Date: 2023-02-01 23:00:20
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-01 23:47:31
 * @Description: 这是订单页面相关的组合函数文件
 */
import { onShow } from '@dcloudio/uni-app'
import { ref, unref } from 'vue'


// 获取订单列表
export function useOrderList<T> (apiMethod: Function) {
  const list = ref<T[]>([])
  const showNoData = ref<boolean>(false)
  onShow(async () => {
    const res = await apiMethod()
    list.value = res
    showNoData.value = !list.value.length
  })
  return {
    list,
    showNoData
  }
}

// 取消预约
type CancelParam = {
  index: number,
  id: string
}
export async function useCancel (dataSource: Array<any>, apiMethod: Function, param: CancelParam) {
  await apiMethod({ _id: param.id })
  unref(dataSource)[param.index].cancel = false
}