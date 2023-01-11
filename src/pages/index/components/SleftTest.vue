<!--
 * @Date: 2023-01-11 20:51:24
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-11 23:56:46
 * @Description: 这是首页-健康自测文件
-->
<template>
  <view class="self_test">
    <view class="main_title">健康自测</view>
    <view class="content">
      <!-- 上面第一个 -->
      <view class="content_item content_top">
        <view class="test_info">
          <view class="test_title">{{ firstData.name }}</view>
          <view class="test_label">{{ firstData.describe }}</view>
          <view class="test_detail">
            <text class="test_num">{{ firstData.number_of_people }}</text>
            <text class="test_min test_label">人通过 / {{ firstData.question}}题 / {{ firstData.minute }}分钟</text>
          </view>
        </view>
        <image :src="firstData.image" mode="widthFix"></image>
      </view>
      <!-- 下面两个 -->
      <view class="content_item" v-for="(item, index) in reaminData" :key="index">
        <view class="test_info">
          <view class="test_title">{{ item.name }}</view>
          <view class="test_label test_min">{{ item.question }}题 / {{ item.minute }}分钟</view>
          <view class="test_detail">
            <text class="test_num">{{ item.number_of_people }}</text>
            <text class="test_min test_label">人通过</text>
          </view>
        </view>
        <image :src="item.image" mode="widthFix"></image>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { SelfTest } from '@/types/index'

type Props = {
  data: SelfTest[]
}
const props = defineProps<Props>()

// 取出第一条数据
const firstData = computed(() => {
  return props.data && props.data[0] || {}
})
// 下面两条数据
const reaminData = computed(() => {
  return props.data &&  props.data.slice(1) || []
})
</script>
<style lang="less" scoped>
.self_test {
  padding: 40rpx 10rpx 0;
  .content {
    .flex_center(space-between);
    flex-wrap: wrap;
  }
  .content_item {
    width: 49%;
    height: 250rpx;
    margin: 10rpx 0;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: #f7f7f7 0px 0px 20rpx 10rpx;
    border-radius: 20rpx;
    image {
      .absolute_bottom_right(0, 0);
      width: 170rpx;
    }
  }
  .content_top {
    width: 100%;
    image {
      width: 250rpx;
    }
  }
  .test_info {
    .absolute_top_left(35rpx, 20rpx);
  }
  .test_title {
    font-size: 35rpx;
  }
  .test_label {
    color: #a6abb0;
    padding: 10rpx 0 30rpx;
  }
  .test_min {
    font-size: 25rpx;
  }
  .test_detail {
    display: flex;
    .flex_center(flex-start, baseline);
    .test_num {
      font-size: 35rpx;
      padding-right: 10rpx;
    }
  }
}
</style>