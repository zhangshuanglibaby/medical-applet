<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-18 23:24:24
 * @Description: 这是首页-挂号和体检文件
-->
<template>
  <view class="reserve">
    <view class="reserve_item"
      v-for="(item, index) in data"
      :key="index"
      @click="jumpRoute(index)">
      <view class="reserve_item_title">{{ item.title }}</view>
      <view class="reserve_item_label">{{ item.describe }}</view>
      <image mode="widthFix" :src="item.image"></image>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Reserve } from '@/types/index'

type Props = {
  data: Reserve[]
}
defineProps<Props>()

// ------------点击跳转----------------
const jumpRoute = (index: number) => {
  switch (index) {
    case 0: // 预约挂号
      uni.switchTab({ url: '/pages/registered/index' })
    break
    case 1: // 健康体检
      uni.navigateTo({ url: '/pages/phy-exam/index' })
    break
  }
}


</script>
<style lang="less" scoped>
.reserve {
  .flex_center(space-between);
  padding: 0 10rpx;
  .reserve_item {
    position: relative;
    .wh(48%, 200rpx);
    border-radius: 20rpx;
    &:nth-child(1) {
      background-image: linear-gradient(to right, #d7dfff 10%, #5a9fff 100%);
      .reserve_item_title {
        color: #0042ff;
      }
    }
    &:nth-child(2) {
      background-image: linear-gradient(to right, #ffdbb4 10%, #ffc56b 100%);
      .reserve_item_title {
        color: #dc6200;
      }
    }
    image {
      width: 150rpx;
      .absolute_bottom_right(0, 20rpx);
    }
  }
  .reserve_item_title {
    position: absolute;
    .absolute_top_left(20rpx, 20rpx);
    font-size: 40rpx;
  }
  .reserve_item_label {
    .sc(30rpx, #fff);
    .absolute_top_left(90rpx, 20rpx);
  }
}
</style>