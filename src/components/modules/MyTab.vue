<!--
 * @Date: 2023-01-13 13:54:06
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 14:30:46
 * @Description: 这是****文件
-->
<template>
  <view class="my_tab">
    <view class="tab_item"
      v-for="(item, index) in list"
      :key="index"
      @click="handleToggle(index, item)">
      <view>{{ item[attr] }}</view>
      <view :class="{ checked: currentIndex === index }"></view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  list: any[],
  attr: string
}
defineProps<Props>()
const emit = defineEmits(['toggle'])
// 选中的标签
let currentIndex = ref<number>(0)
const handleToggle = (index: number, item: any) => {
  currentIndex.value = index
  emit('toggle', item)
}

</script>
<style lang="less">
 .my_tab {
  .flex_center(space-around);
  background: #fff;
  .tab_item {
    .felx_column_center;
    position: relative;
    height: 100rpx;
  }
  .checked {
    width: 100%;
    height: 8rpx;
    background: #0d7cff;
    position: absolute;
    bottom: 0;
  }
}
</style>