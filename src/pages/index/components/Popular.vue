<!--
 * @Date: 2023-01-11 18:50:07
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-11 22:44:31
 * @Description: 这是首页-热门挂号文件
-->
<template>
  <view class="popular">
    <!-- 标题 -->
    <view class="title_wrap">
      <text class="main_title">热门挂号</text>
      <view class="more">
        <text>查看更多</text>
        <image src="/static/other/gengduo.svg"></image>
      </view>
    </view>
    <!-- 主体 -->
    <view class="content">
      <view class="item"
        v-for="(item, index) in data"
        :key="index"
        :style="{ backgroundColor: item.background }">
        <text>{{ item.title }}</text>
        <image :src="item.image" mode="aspectFit"></image>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Popular } from '@/types/index'

type Props = {
  data: Popular[]
}
defineProps<Props>()

</script>
<style lang="less" scoped>
.popular {
  padding: 40rpx 10rpx 0;
  .title_wrap {
    .flex_center(space-between);
    .more {
      .flex_center;
      image {
        .wh(40rpx, 40rpx);
        margin-left: 10rpx;
      }
    }
  }
  .content {
    margin-top: 20rpx;
    .flex_center(space-around);
    flex-wrap: wrap;
    .item {
      width: calc(33.33% - 10rpx*2);
      margin: 10rpx;
      padding: 20rpx;
      .flex_center(space-between);
      border-radius: 10rpx;
      box-sizing: border-box;
      font-size: 26rpx;
      background: pink;
      image {
        .wh(50rpx, 70rpx);
      }
    }
  }
}
</style>