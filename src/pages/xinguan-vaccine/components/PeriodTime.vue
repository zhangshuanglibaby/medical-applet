<!--
 * @Date: 2023-01-12 17:14:41
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 20:31:30
 * @Description: 这是****文件
-->
<template>
  <view class="period_time box_style" v-for="(item, index) in data" :key="index">
    <view class="period_title">{{ item.period }}</view>
    <view class="period_list">
      <view class="period_item"
        :class="{check_style: currentIndex === `${index}_${period_index}`}"
        v-for="(period, period_index) in item.time"
        :key="period_index"
        @click="handleChoose(item.period, period, `${index}_${period_index}`)">
        <view>{{ period.start_time }}-{{ period.end_time }}</view>
        <view>剩余{{ period.over }}</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Lasting, Time } from '@/types/xinguan'

type Props = {
  data: Lasting[]
}
const props = defineProps<Props>()
const emit = defineEmits(['toggle'])
// 选择时段
let currentIndex = ref<number|string>()
const handleChoose = (period: string,item: Time, index: string) => {
  currentIndex.value = index
  emit('toggle', period, item)
}
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