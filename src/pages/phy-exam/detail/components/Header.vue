<!--
 * @Date: 2023-01-15 19:45:42
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 19:57:48
 * @Description: 这是体检套餐详情 -> 头部文件
-->
<template>
  <view class="header">
    <image class="bg_image" src="/static/other/kongshuju.jpg" mode="aspectFill"></image>
    <view class="price_wrap">
      <text class="price">¥ 11</text>
      <text class="sales">已约 2000</text>
    </view>
    <view class="title main_title">1111</view>
  </view>
</template>
<script setup lang="ts"></script>
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