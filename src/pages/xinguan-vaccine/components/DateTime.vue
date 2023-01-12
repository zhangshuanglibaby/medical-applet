<!--
 * @Date: 2023-01-12 17:14:13
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 18:16:25
 * @Description: 这是新冠疫苗预约-选择日期文件
-->
<template>
  <view class="date_time box_style">
    <view class="date_item check_style" v-for="(item, index) in data" :key="index">
      <view>{{ item.day }}</view>
      <view>{{ item.date }}</view>
      <view>{{ item.Have }}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Week } from '@/types/xinguan'

type Props = {
  data: Week[]
}
defineProps<Props>()
</script>
<style lang="less" scoped>
.date_time {
  .flex_center(flex-start);
  .date_item {
    width: 150rpx;
    .felx_column_center;
    background: #f7f7f7;
    border-radius: 10rpx;
    padding: 20rpx 0;
    &:not(:last-child) {
      margin-right: 20rpx;
    }
    >view {
      padding: 3rpx 0;
    }
  }
}
</style>