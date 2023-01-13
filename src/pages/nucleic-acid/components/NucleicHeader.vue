<!--
 * @Date: 2023-01-13 20:44:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:26:00
 * @Description: 这是核酸检测预约 -> 头部文件
-->
<template>
  <view class="nucleic_header box_style">
    <view class="header_top">
      <image class="logo" :src="data.logo" mode="aspectFill"></image>
      <view class="header_top_left">
        <view class="name main_title">{{ data.name }}</view>
        <view class="price">¥{{ data.price }}</view>
      </view>
    </view>
    <view class="header_bottom">
      <view class="service_item" v-for="(item, index) in data.boon" :key="index">
        <icon type="success" size="15"></icon>
        <text class="service_name">{{ item }}</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { NuatagetData } from '@/types/nucleic'

type Props = {
  data: NuatagetData
}
defineProps<Props>()

</script>
<style lang="less" scoped>
.nucleic_header {
  .header_top {
    .flex_center(flex-start);
    .logo {
      .wh(100rpx, 100rpx);
    }
    .header_top_left {
      padding-left: 20rpx;
    }
    .price {
      color: #ff5f2c;
      font-weight: bold;
      margin-top: 20rpx
    }
  }
  .header_bottom {
    .flex_center(space-between);
    margin-top: 20rpx;
    font-size: 24rpx;
    .service_item {
      .flex_center(flex-start);
    }
    .service_name {
      padding-left: 20rpx;
    }
  }
}
</style>