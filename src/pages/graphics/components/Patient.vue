<!--
 * @Date: 2023-01-14 16:36:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 16:47:50
 * @Description: 这是****文件
-->
<template>
  <view class="patient box_style">
    <view class="main_title">选择就诊人</view>
    <view class="patient_view">
      <image class="avator" src="/static/other/touxiang.svg" mode="widthFix"></image>
      <text class="name">1111</text>
      <text class="desc">选择就诊人</text>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.patient {
  .patient_view {
    margin-top: 20rpx;
    .flex_center(spaec-between);
    .avator {
      .wh(120rpx, 120rpx);
    }
    .name {
      flex: 1;
      padding: 0 50rpx;
    }
    .desc {
      color: @sub_primary;
    }
  }
}
</style>