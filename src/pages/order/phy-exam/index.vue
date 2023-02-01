<!--
 * @Date: 2023-01-15 22:29:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-01 23:51:55
 * @Description: 这是体检预约订单文件
-->
<template>
  <view class="order">
    <view class="order_item_group box_style" v-for="(item, index) in list" :key="index">
      <view class="info_item">
        <text>体检套餐: </text>
        <text>{{ item.phy_name }}</text>
      </view>
      <view class="info_item">
        <text>体检人: </text>
        <text>{{ item.name }}</text>
      </view>
      <view class="info_item">
        <text>体检时间: </text>
        <text>{{ item.phy_time }}</text>
      </view>
      <view class="info_item">
        <text>体检地点: </text>
        <text>{{ item.address }}</text>
      </view>
      <view class="info_item">
        <text>订单编号: </text>
        <text>{{ item.order_number }}</text>
      </view>
      <view class="price">¥ {{ item.price }}</view>
      <view class="btn" 
        :class="{ prevent_style: !item.cancel }"
        @click="handleCancel(index, item._id)">
        {{ item.cancel ? '取消预约' : '已取消预约' }}
      </view>
    </view>
    <no-data v-if="showNoData"></no-data>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
// import { onShow } from '@dcloudio/uni-app'
// import { ref } from 'vue'
import { phyuserOrder, phyCancel } from '@/api/phy-exam'
import { PhyuserOrder } from '@/types/phy-exam'
import { useOrderList, useCancel } from '@/hook/useOrder'

// 使用组合式函数
const { list, showNoData } = useOrderList<PhyuserOrder>(phyuserOrder)

// const orderList = ref<PhyuserOrder[]>([])
// const showNoData = ref<boolean>(false)
// onShow(async () => {
//   const res = await phyuserOrder()
//   orderList.value = res
//   showNoData.value === !orderList.value.length
// })

// 取消预约
// const handleCancel = async (index: number, id: string) => {
//   await phyCancel({ _id: id })
//   // 更改状态
//   orderList.value[index].cancel = false
// }
const handleCancel = async (index: number, id: string) => {
  useCancel(list.value, phyCancel, { index, id })
}

</script>
<style lang="less" scoped>
@import url('@/style/order.less');
</style>