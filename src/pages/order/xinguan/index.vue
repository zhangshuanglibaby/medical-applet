<!--
 * @Date: 2023-01-12 22:32:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-01 23:49:19
 * @Description: 这是新冠疫苗预约订单文件
-->
<template>
  <view class="order_xinguan">
    <view class="order_item_group box_style" v-for="(item, index) in list" :key="index">
      <view class="name main_title">{{ item.name }}</view>
      <view class="info_item">
        <text>接种地点: </text>
        <text>{{ item.address }}</text>
      </view>
      <view class="info_item">
        <text>疫苗厂商: </text>
        <text>{{ item.company }}</text>
      </view>
      <view class="info_item">
        <text>接种时间: </text>
        <text>{{ item.time }} {{ item.date }} {{ item.period }}</text>
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
import { CoviduserOrder } from '@/types/xinguan'
import { coviduserOrder, covidCancel } from '@/api/xinguan'
import { useOrderList, useCancel } from '@/hook/useOrder'

// 使用组合式函数
const { list, showNoData } = useOrderList<CoviduserOrder>(coviduserOrder)

// const orderList = ref<CoviduserOrder[]>([])
// const showNoData = ref<boolean>(false)
// onShow(async () => {
//   const res = await coviduserOrder()
//   orderList.value = res
//   showNoData.value = !orderList.value.length
// })

// 取消预约
// const handleCancel = async (index: number, id: string) => {
//   await covidCancel({ _id: id })
//   // 更改状态
//   orderList.value[index].cancel = false
// }
const handleCancel = (index: number, id: string) => {
  useCancel(list.value, covidCancel, { index, id })
}
</script>
<style lang="less">
.order_xinguan {
  .order_item_group {
    .name {
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 20rpx
    }
    .info_item {
      .flex_center(flex-start);
      padding: 20rpx 0;
      text {
        &:first-child {
          width: 150rpx;
        }
        &:last-child {
          flex: 1;
        }
      }
    }
    .btn {
      .wh(160rpx, 60rpx);
      .flex_center;
      margin-top: 20rpx;
      color: @primary;
      border: 1px solid @primary;
      border-radius: 15rpx;
      font-size: 26rpx;
      margin-left: auto;
    }
  }
}
</style>