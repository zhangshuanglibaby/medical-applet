<!--
 * @Date: 2023-01-07 15:35:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 16:31:16
 * @Description: 这是热门挂号文件
-->
<template>
  <view class="popular">
    <!-- 标题 -->
    <view class="online_title">
      <view>热门挂号</view>
      <view class="online_more">
        <text>查看更多</text>
        <image src="/static/other/gengduo.svg"></image>
      </view>
    </view>
    <view class="online_reg">
      <view v-for="item in list" :key="item.id" :style="{ backgroundColor: item.background}">
        <text>{{ item.title }}</text>
        <image :src="item.image" mode="aspectFit"></image>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { Popular } from '@/types/index'

defineProps({
  list: Array<Popular>
})

</script>
<style scoped>
.popular .online_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40rpx 10rpx 10rpx;
  font-weight: bold;
}
.online_title view:first-child {
  font-size: 35rpx;
}
.online_title .online_more {
  display: flex;
  align-items: center;
  font-size: 28rpx;
}
.online_title .online_more image {
  display: block;
  width: 30rpx;
  height: 30rpx;
  margin-left: 10rpx;
}
.popular .online_reg {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10rpx 0;
}
.online_reg text {
  font-size: 26rpx;
}
.online_reg image {
  width: 50rpx;
  height: 70rpx;
}
.online_reg view {
  width: calc(33% - 30rpx*2);
  margin: 10rpx;
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28rpx;
  border-radius: 10rpx;
}
</style>