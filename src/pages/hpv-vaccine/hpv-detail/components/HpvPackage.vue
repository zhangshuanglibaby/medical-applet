<!--
 * @Date: 2023-01-13 16:16:36
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 13:54:24
 * @Description: 这是hpv套餐详情->hpv套餐名称文件
-->
<template>
  <view class="hpv_package">
    <view class="combo_group">
      <view class="combo_title">{{ data?.title }}</view>
      <view class="combo_list">
        <text
          class="combo_item"
          :class="{ check_style: currentIndex === index }"
          v-for="(item, index) in data?.name"
          :key="index"
          @click="handleClick(index, item)">{{ item[attr] }}</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HpvComboNameData, HpvComboTimeData } from '@/types/hpv'
type Props = {
  data: HpvComboNameData | HpvComboTimeData | undefined,
  attr: string
}
defineProps<Props>()
const emit = defineEmits(['toggle'])

// 选择
let currentIndex = ref<number>()
const handleClick = (index: number, item: any) => {
  currentIndex.value = index
  emit('toggle', item)
}
</script>
<style lang="less">
.hpv_package {
  background-color: #ffffff;
  padding: 20rpx;
  margin: 20rpx 0;
  .combo_group {
    .combo_title {
      font-weight: bold;
      margin-bottom: 20rpx;
    }
    .combo_list {
      .flex_center(flex-start);
      flex-wrap: wrap;
    }
    .combo_item {
      padding: 20rpx 40rpx;
      background-color: #f5f5f5;
      margin: 0 20rpx 20rpx 0;
      border-radius: 10rpx;
    }
  }
}
</style>