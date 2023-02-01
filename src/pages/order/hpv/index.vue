<!--
 * @Date: 2023-01-13 18:48:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-01 23:55:25
 * @Description: 这是hpv疫苗预约订单文件
-->
<template>
  <view class="order">
    <view class="order_item_group box_style" v-for="(item, index) in list" :key="index">
      <view class="name main_title">{{ item.hpv_name }}</view>
      <view class="info_item">
        <text>接种人: </text>
        <text>{{ item.name }}</text>
      </view>
      <view class="info_item">
        <text>接种地点: </text>
        <text>{{ item.address }}</text>
      </view>
      <view class="info_item">
        <text>疫苗套餐: </text>
        <text>{{ item.combo }} {{ item.ino_time }}</text>
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
// import { ref } from 'vue'
// import { onShow } from '@dcloudio/uni-app'
import { hpvUserOrder, hpvCancel } from '@/api/hpv'
import { HpvUserOrder } from '@/types/hpv'
import { useOrderList, useCancel } from '@/hook/useOrder'

// 使用组合式函数
const { list, showNoData } = useOrderList<HpvUserOrder>(hpvUserOrder)

// const orderList = ref<HpvUserOrder[]>([])
// const showNoData = ref<boolean>(false)

// onShow(async () => {
//   const res = await hpvUserOrder()
//   orderList.value = res
//   showNoData.value === !orderList.value.length
// })

// 取消预约
// const handleCancel = async (index: number, id: string) => {
//   await hpvCancel({ _id: id })
//   // 更改状态
//   orderList.value[index].cancel = false
// }
const handleCancel = async (index: number, id: string) => {
  useCancel(list.value, hpvCancel, { index, id })
}
</script>
<style lang="less" scoped>
@import url('@/style/order.less');
</style>