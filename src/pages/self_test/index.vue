<!--
 * @Date: 2023-01-16 19:01:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 19:51:25
 * @Description: 这是****文件
-->
<template>
  <view class="self_test">
    <!-- 测评进度 -->
    <view class="progress_box">
      <text>测试进度</text>
      <progress class="progress" 
        :stroke-width="9" 
        :border-radius="10"
        :percent="10"
        color="#cce3ff" 
        activeColor="#2d8dfe"></progress>
      <text>1/8</text>
    </view>

    <!-- 题目 -->
    <view class="question box_style main_title">1111</view>

    <!-- 选项 -->
    <view class="topic_view">
      <view class="topic_title">
        <view class="line"></view>
        <view class="title">单选题</view>
      </view>
      <view
        v-for="i in 5" :key="i"
        class="topic_item"
        hover-class="hover_style"
        :hover-start-time="10"
        :hover-stay-time="80">
        111
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.self_test {
  height: 100vh;
  background: linear-gradient(to bottom,#d6e8ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .progress_box {
    .flex_center(flex-start);
    padding: 0 20rpx;
    .progress {
      flex: 1;
      padding: 0 40rpx;
    }
  }
  .question {

  }
  .topic_view {
    background-color: #f3f8ff;
    padding: 20rpx;
    margin: 20rpx;
    border-radius: 10rpx;
    box-shadow: #d6e8ff 0px 0px 23rpx 5rpx;
    .topic_title {
      .flex_align;
      .line {
        .wh(8rpx, 27rpx);
        background-color: #0d7cff;
        margin-right: 10rpx;
      }
    }
    .topic_item {
      margin: 20rpx 0;
      padding: 20rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }
    .hover_style {
      background-color: #ebf4ff;
      color: @sub_primary;
    }
  }
}
</style>