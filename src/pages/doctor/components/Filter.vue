<!--
 * @Date: 2023-01-16 15:52:00
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 17:42:29
 * @Description: 这是****文件
-->
<template>
  <view class="filter">
    <view class="all" :class="{ check_style: !currentDate }" @click="handleAll">全部</view>
    <scroll-view scroll-x class="scroll_view">
      <view class="item" 
        v-for="item in data" 
        :key="item.dep_id"
        :class="{ check_style: currentDate === item.date }"
        @click="handleSelect(item.date)">
        <view>{{ item.date }}</view>
        <view>{{ item.week }}</view>
        <view>{{ item.nu_source ? '可约' : '无号'}}</view>
      </view>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Timesele } from '@/types/registered'

type Props = {
  data: Timesele[]
}
defineProps<Props>()
const emit = defineEmits(['all', 'select'])

let currentDate = ref<string>('')
// ---------------选择全部------------------
const handleAll = () => {
  currentDate.value = ''
  emit('all')
}

// ---------------选择日期------------------
const handleSelect = (date: string) => {
  currentDate.value = date
  emit('select', date)
}


</script>
<style lang="less" scoped>
.filter {
  display: flex;
  background-color: #fff;
  .all {
    .wh(100rpx, 150rpx);
    line-height: 150rpx;
    text-align: center;
    border-right: 1px solid #f2f2f2;
  }
  .scroll_view {
    width: calc(100% - 100rpx);
    white-space: nowrap;
    height: 150rpx;
  }
  .item {
    display: inline-block;
    padding: 0 30rpx;
    text-align: center;
    line-height: 50rpx;
  }
}
</style>