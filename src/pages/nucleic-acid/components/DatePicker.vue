<!--
 * @Date: 2023-01-13 21:14:33
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:38:52
 * @Description: 这是核酸检测预约 -> 选择预约时段文件
-->
<template>
  <view class="date_picker box_style">
    <view class="title">选择预约时段</view>
    <scroll-view scroll-x class="date_list_scroll">
      <view class="date_list">
        <view 
          class="date_item" 
          :class="{ check_style: currentIndex === index }"
          v-for="(item, index) in data" 
          :key="index"
          @click="handleClick(index, item.date)">
          <view>{{ item.date }}</view>
          <view>{{ item.week }}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Date } from '@/types/nucleic'
type Props = {
  data: Date[]
}
defineProps<Props>()
const emit = defineEmits(['toggle'])

// --------------选择预约时段-----------
let currentIndex = ref<number>()
const handleClick = (index: number, date: string) => {
  currentIndex.value = index
  emit('toggle', date)
}

</script>
<style lang="less" scoped>
.date_picker {
  .title {
    font-weight: 32rpx;
    font-weight: bold;
  }
  .date_list_scroll {
    white-space: nowrap;
    margin-top: 20rpx;
    .date_list {
      .flex_center(flex-start);
    }
    .date_item {
      padding: 10rpx 20rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      text-align: center;
    }
  }
}
</style>