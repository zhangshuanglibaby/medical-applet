<!--
 * @Date: 2023-01-15 20:03:01
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 20:07:27
 * @Description: 这是****文件
-->
<template>
  <view class="date box_style">
    <view class="title">{{ title }}</view>
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
  data: Date[],
  title: string,
  modelValue: string
}
defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

// --------------选择时间-----------
let currentIndex = ref<number>()
const handleClick = (index: number, date: string) => {
  currentIndex.value = index
  // emit('toggle', date)
  emit('update:modelValue', date)
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