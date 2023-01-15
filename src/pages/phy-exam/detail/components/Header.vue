<!--
 * @Date: 2023-01-15 19:45:42
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 20:52:36
 * @Description: 这是体检套餐详情 -> 头部文件
-->
<template>
  <view class="header">
    <image class="bg_image" :src="data.image" mode="aspectFill"></image>
    <view class="price_wrap">
      <text class="price">¥ {{ data.price }}</text>
      <text class="sales">已约 {{ data.sales }}</text>
    </view>
    <view class="title main_title">{{ data.title }}</view>
  </view>
</template>
<script setup lang="ts">
import { Phydetail } from '@/types/phy-exam'

type Props = {
  data: Phydetail
}
defineProps<Props>()

</script>
<style lang="less" scoped>
.header {
  background-color: #fff;
  .bg_image {
    .wh(100%, 400rpx);
  }
  .price_wrap {
    .flex_center(space-between);
    padding: 20rpx;
    .price {
      color: #ff5f2c;
    }
    .sales {
      color: #999;
    }
  }
  .title {
    padding: 0 20rpx 20rpx;
  }
}
</style>