<!--
 * @Date: 2023-01-17 16:52:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-01 23:56:17
 * @Description: 这是挂号记订单录列表文件
-->
<template>
  <view class="order">
    <view class="order_item_group box_style" v-for="(item, index) in list" :key="index">
      <view class="doctor_info">
        <image class="avatar" :src="item.avatar" mode="aspectFill"></image>
        <view class="doctor_detail flex_sub">
          <view class="name">{{ item.tre_doctor}}</view>
          <view class="label">{{ item.tre_place }}</view>
        </view>
      </view>
      <view class="info_item">
        <text>预约流水号: </text>
        <text>{{ item.se_number }}</text>
      </view>
      <view class="info_item">
        <text>就诊人: </text>
        <text>{{ item.patient_name  }}</text>
      </view>
      <view class="info_item">
        <text>就诊时间: </text>
        <text>{{ item.tre_time }} {{ item.the_time }}</text>
      </view>
      <view class="info_item">
        <text>科室: </text>
        <text>{{ item.dep_ment }}</text>
      </view>
      <view class="info_item">
        <text>排队号: </text>
        <text>{{ item.que_number }}</text>
      </view>
      <view class="info_item">
        <text>科室楼层: </text>
        <text>{{ item.remark }}</text>
      </view>
      <view class="info_item">
        <text>挂号费用: </text>
        <text>¥{{ item.reg_cost }}</text>
      </view>
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
import { userRegistrat, registCancel } from '@/api/registered'
import { UserRegistrat } from '@/types/registered'
import { useOrderList, useCancel } from '@/hook/useOrder'

// 使用组合式函数
const { list, showNoData } = useOrderList<UserRegistrat>(userRegistrat)

// const orderList = ref<UserRegistrat[]>([])
// const showNoData = ref<boolean>(false)

// onShow(async () => {
//   const res = await userRegistrat()
//   orderList.value = res
//   showNoData.value === !orderList.value.length
// })

// 取消预约
// const handleCancel = async (index: number, id: string) => {
//   await registCancel({ _id: id })
//   // 更改状态
//   orderList.value[index].cancel = false
// }
const handleCancel = async (index: number, id: string) => {
  useCancel(list.value, registCancel, { index, id })
}
</script>
<style lang="less" scoped>
@import url('@/style/order.less');
.doctor_info {
  .flex_center(space-between);
  padding-bottom: 30rpx;
  .avatar {
    .wh(100rpx, 100rpx);
    border-radius: 50%;
    margin-right: 20rpx;
  }
  .name {
    font-weight: bold;
    margin-bottom: 10rpx;
  }
  .label {
    font-size: 26rpx;

  }
}
</style>