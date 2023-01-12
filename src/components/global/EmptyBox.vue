<!--
 * @Date: 2023-01-12 00:04:07
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 14:15:48
 * @Description: 这是全局组件-占位的空盒子文件
-->
<template>
  <view class="empty_box" :style="{ height: height + 'rpx'}"></view>
</template>
<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 300
  }
})
</script>
<style lang="less" scoped>
.empty_box {
  // background: pink;
}
</style>