<!--
 * @Date: 2023-01-13 21:04:26
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 21:15:08
 * @Description: 这是核酸检测预约 -> 地址文件
-->
<template>
  <view class="address box_style">
    <view class="left">
      <view class="main_title">1111</view>
      <view class="sub_text">222</view>
    </view>
    <view class="right">
      <image class="icon_image" src="/static/other/kongshuju.jpg" mode="widhtFix"></image>
      <view class="sub_text">111</view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.address {
  .flex_center(space-between);
  .sub_text {
    padding-top: 20rpx;
    font-size: 25rpx;
  }
  .right {
    .felx_column_center;
    .icon_image {
      .wh(40rpx, 40rpx);
    }
  }
}
</style>