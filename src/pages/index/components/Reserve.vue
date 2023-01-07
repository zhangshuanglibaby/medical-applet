<!--
 * @Date: 2023-01-07 15:13:18
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 16:26:09
 * @Description: 这是挂号和体检文件
-->
<template>
  <view class="reserve">
    <view class="reserve_item" v-for="(item, index) in list" :key="index">
      <text class="reserve_title">{{ item.title }}</text>
      <text class="reserve_label">{{ item.describe }}</text>
      <image :src="item.image" mode="widthFix"></image>
    </view>
  </view>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { Reserve } from '@/types/index'

defineProps(({
  list: Array<Reserve>
}))

</script>
<style scoped>
.reserve {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rpx;
}
.reserve .reserve_item {
  position: relative;
  width: 48%;
  height: 200rpx;
  border-radius: 20rpx;
}
.reserve .reserve_item image {
  display: block;
  width: 150rpx;
  position: absolute;
  bottom: 0;
  right: 20rpx;
}
.reserve_item:first-child text:first-child {
  color: #0042ff;
}
.reserve_item:nth-child(2) text:first-child {
  color: #dc6200;
}
.reserve_item:first-child {
  background-image: linear-gradient(to right, #d7dfff 10%, #5a9fff 100%);
}
.reserve_item:nth-child(2) {
  background-image: linear-gradient(to right, #ffdbb4 10%, #ffc56b 100%);
}
.reserve_item .reserve_title {
  position: absolute;
  top: 20rpx;
  left: 20rpx;
  font-size: 40rpx;
}
.reserve_item .reserve_label {
  position: absolute;
  top: 90rpx;
  left: 20rpx;
  font-size: 30rpx;
  color: #fff;
}
</style>