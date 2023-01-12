<!--
 * @Date: 2023-01-12 17:11:18
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 18:12:06
 * @Description: 这是新冠疫苗预约-医院地址文件
-->
<template>
  <view class="reserve_address box_style">
    <view class="title">{{ data.Hospital }}</view>
    <view class="detail">{{ data.address }}</view>
    <view class="tag">
      <text v-for="(item, index) in data.company" :key="index">{{ item }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { TimeData } from '@/types/xinguan'
type Props = {
  data: TimeData
}
defineProps<Props>()
</script>
<style lang="less">
.reserve_address {
  .title {
    font-weight: bold;
  }
  .detail {
    padding: 20rpx 0;
  }
  .tag {
    .flex_center(flex-start);
    text {
      background-color: #f7f7f7;
      padding: 5rpx 20rpx;
      font-size: 25rpx;
      margin-right: 10rpx;
    }
  }
}
</style>