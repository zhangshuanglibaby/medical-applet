<!--
 * @Date: 2023-01-07 15:52:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 16:32:09
 * @Description: 这是健康自测文件
-->
<template>
  <view class="self_test">
    <view class="online_title">健康自测</view>
    <view class="self_test_content" v-if="list.length">
      <!-- 这是上面一个 -->
      <view 
        class="self_top self_test_flex self_test_one self_test_back"
        v-for="(item, index) in [list[0]]"
        :key="index">
        <view class="self_test_view">
          <text class="top_title">{{ item.name }}</text>
          <text class="top_label">{{ item.describe }}</text>
          <view class="top_people">
            <text class="top_num">{{ item.number_of_people }}</text>
            <text class="top_min top_label">人测过 / {{ item.question }}题 / {{ item.minute }}分钟</text>
          </view>
        </view>
        <image class="top_img" mode="widthFix" :src="item.image"></image>
      </view>
      <!-- 这是下面两个 -->
      <view
        class="slef_test_top self_test_flex self_test_back"
        v-for="(item, index) in list.slice(1)"
        :key="index">
        <view class="self_test_view">
          <text class="top_title">{{ item.name }}</text>
          <text class="top_label top_min">{{ item.question }}题 / {{ item.minute }}分钟</text>
          <view class="top_people">
            <text class="top_num">{{ item.number_of_people }}</text>
            <text class="top_min top_label">人测过</text>
          </view>
        </view>
        <image class="top_img bottom_img" mode="widthFix" :src="item.image"></image>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { SelfTest } from '@/types/index'

defineProps({
  list: {
    type: Array<SelfTest>,
    default: () => []
  }
})

</script>
<style scoped>
.self_test .online_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40rpx 10rpx 10rpx 10rpx;
  font-weight: bold;
}
.self_test .self_test_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.self_test_content .self_top {
  display: flex;
  justify-content: space-between;
}
.self_test_content .self_test_flex {
  width: calc(50% - 10rpx*2);
  margin: 10rpx;
  border-radius: 20rpx;
  overflow: hidden;
  position: relative;
  height: 250rpx;
}
.self_test_content .self_test_one {
  width: 100%;
}
.self_test_content .self_test_back {
  background-color: #ffffff;
  box-shadow: #f7f7f7 0px 0px 20rpx 10rpx;
}
.self_test_content .top_label {
  color: #a6abb0;
}
.self_test_content .top_img {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  width:250rpx;
}
.self_test_content .bottom_img {
  width: 170rpx !important;
}
.self_test_content text {
  display: block;
}
.self_test_view {
  position: absolute;
  left: 20rpx;
  top: 35rpx;
}
.self_test_view .top_people{
  display: flex;
  align-items: baseline;
  padding-top: 30rpx;
}
.self_test_view .top_title{
  padding-bottom: 10rpx;
  font-size: 35rpx;
}
.self_test_view .top_num{
  font-size: 35rpx;
  padding-right: 10rpx;
}
.self_test_view .top_min{
  font-size: 25rpx;
}
</style>