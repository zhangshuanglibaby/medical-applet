<!--
 * @Date: 2023-01-15 19:47:34
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 20:13:28
 * @Description: 这是体检详情 -> 适用人群文件
-->
<template>
  <view class="crowd box_style">
    <view class="sub_title">入职体检套餐</view>
    <view class="list">
      <view class="item" v-for="i in 3" :key="i">
        <image class="image" src="/static/other/kongshuju.jpg" mode="widthFix"></image>
        <view>1111</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.crowd {
  .list {
    margin-top: 20rpx;
    .flex_center(space-between);
  }
  .item {
    text-align: center;
    .image {
      .wh(100rpx, 100rpx);
      margin-bottom: 10rpx;
      border-radius: 10rpx;
    }
  }
}


</style>