<!--
 * @Date: 2023-01-12 17:14:41
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 18:21:02
 * @Description: 这是****文件
-->
<template>
  <view class="period_time box_style">
    <view class="period_title">{{ data.period }}</view>
    <view class="period_list">
      <view class="period_item" v-for="(item, index) in data.time" :key="index">
        <view>{{ item.start_time }}-{{ item.end_time }}</view>
        <view>剩余{{ item.over }}</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Lasting } from '@/types/xinguan'

type Props = {
  data: Lasting
}
defineProps<Props>()
</script>
<style lang="less" scoped>
.period_time {
  .period_title {
    font-weight: bold;
    margin-bottom: 20rpx;
  }
  .period_list {
    .flex_center(flex-start);
    .period_item {
      width: 200rpx;
      background: #f7f7f7;
      text-align: center;
      padding: 20rpx 0;
      border-radius: 10rpx;
      &:not(:last-child) {
        margin-right: 20rpx;
      }
    }
  }
}
</style>