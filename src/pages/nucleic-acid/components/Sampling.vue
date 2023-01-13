<!--
 * @Date: 2023-01-13 21:45:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 21:57:05
 * @Description: 这是核酸检测预约 -> 咽拭子采样方式文件
-->
<template>
  <view class="sampling box_style">
    <view class="title">咽拭子采样方式</view>
    <view class="group" v-for="i in 2" :key="i">
      <label class="group_title">11111</label>
      <view class="group_content">11111</view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.sampling {
  .title {
    font-weight: 32rpx;
    font-weight: bold;
  }
  .group {
    margin-top: 20rpx;
  }
  .group_title {
    background-color: @primary;
    color: #ffffff;
    border-radius: 10rpx;
    padding: 5rpx 10rpx;
  }
  .group_content {
    padding: 10rpx 0;
    line-height: 1.5;
  }
}
</style>