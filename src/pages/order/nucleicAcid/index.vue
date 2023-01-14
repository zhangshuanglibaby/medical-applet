<!--
 * @Date: 2023-01-13 22:58:50
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 13:15:46
 * @Description: 这是核酸检测预约订单文件
-->
<template>
  <view class="order_nucleic">
    <view class="order_item_group box_style" v-for="(item, index) in orderList" :key="index">
      <view class="name main_title">{{ item.phy_name }}</view>
      <view class="info_item">
        <text>检测人: </text>
        <text>{{ item.name }}</text>
      </view>
      <view class="info_item">
        <text>检测地点: </text>
        <text>{{ item.address }}</text>
      </view>
      <view class="info_item">
        <text>检测时间: </text>
        <text>{{ item.phy_time }}</text>
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
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { nuatauserOrder, nuatacancel } from '@/api/nucleic'
import { NuatauserOrder } from '@/types/nucleic'

const orderList = ref<NuatauserOrder[]>([])
const showNoData = ref<boolean>(false)

onShow(async () => {
  const res = await nuatauserOrder()
  orderList.value = res
  showNoData.value === !orderList.value.length
})

// 取消预约
const handleCancel = async (index: number, id: string) => {
  await nuatacancel({ _id: id })
  // 更改状态
  orderList.value[index].cancel = false
}
</script>
<style lang="less" scoped>
.order_nucleic {
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
    .price {
      text-align: right;
      font-weight: bold;
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