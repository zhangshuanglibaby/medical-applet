<!--
 * @Date: 2023-01-15 13:46:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 19:26:55
 * @Description: 这是体检预约 -> 筛选标签文件
-->
<template>
  <view class="filter_tab">
    <!-- 筛选的tab -->
    <view class="filter_tab_list">
      <view class="tab_item"
        v-for="(item, index) in data"
        :key="index"
        @click="handleClick(index, item)">
        <text>{{ item.query_val }}</text>
        <image
          class="filter_image"
          :src="index === 0 ? '/static/other/shaixuan-jiantou.png' : '/static/other/shaixuan.png'"></image>
      </view>
    </view>
    <!-- 下拉的筛选选项 - 全部才展示 -->
    <view class="filter_content_list" :class="{content_list_show: show}">
      <view class="list_item"
        v-for="(item, index) in filterList"
        :key="index"
        @click="handleFilter(index, item)">
        <text :class="{ active: currentFilterIndex === index }">{{ item }}</text>
        <icon v-if="currentFilterIndex === index" type="success_no_circle" size="12" color="#0176ff"></icon>
      </view>
    </view>
    <!-- 遮罩层 -->
    <view class="mask" v-if="show" @click="show = false"></view>
  </view>
  <!-- 占位盒子 -->
  <view :style="{height: '100rpx'}"></view>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Phyterm } from '@/types/phy-exam'
type Props = {
  data: Phyterm[]
}
const props = defineProps<Props>()
const emit = defineEmits(['toggleTag', 'toggleType'])

// --------------展示的筛选选项------------------
const filterList = computed(() => {
  return props.data[0]?.filter_val || []
})


// --------------选择tab标签------------------
let show = ref<boolean>(false) // 控制展示筛选列表
let currentIndex = ref(-1)
const handleClick = (index: number, item: Phyterm) => {
  switch (index) {
    case 0:
      show.value = true
      break
    default:
      emit('toggleTag', item, index)
      show.value = false
  }
}

// ----------------选择筛选条件-------------------
let currentFilterIndex = ref<number>(0)
const handleFilter = (index: number, item: string) => {
  currentFilterIndex.value = index
  setTimeout(() => {
    show.value = false
    emit('toggleType', item)
  }, 100);
}
</script>
<style lang="less" scoped>
.filter_tab {
  .filter_tab_list {
    .fixed_top(10);
    .flex_center(space-between);
    height: 100rpx;
    background-color: #fff;
    padding: 0 50rpx;
    .tab_item {
      .flex_center(flex-start);
    }
    .filter_image {
      .wh(20rpx, 20rpx);
      margin-left: 10rpx;
    }
  }
  .filter_content_list {
    position: fixed;
    top: 100rpx;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 0 50rpx;
    height: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height .4s;
    z-index: 10;
    .list_item {
      .flex_center(space-between);
      padding: 20rpx 0;
    }
    .active {
      color: @primary;
    }
  }
  .content_list_show {
    height: auto;
    max-height: 900rpx;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
  }
}

</style>