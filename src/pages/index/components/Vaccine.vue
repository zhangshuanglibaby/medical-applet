<!--
 * @Date: 2023-01-07 14:42:24
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 15:35:31
 * @Description: 这是疫苗预约文件
-->
<template>
  <view class="vaccine">
    <view v-for="(item, index) in list" :key="index">
      <image :src="item.image" mode="aspectFit"></image>
      <text>{{ item.title }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { Vaccine } from '@/types/index'

defineProps({
  list: Array<Vaccine>
})

</script>
<style scoped>
.vaccine {
  display: flex;
  justify-content: space-between;
  margin: 40rpx 30px;
}
.vaccine image {
  display: block;
  width: 50rpx;
  height: 50rpx;
  padding-bottom: 20rpx;
}
.vaccine view {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
}
</style>