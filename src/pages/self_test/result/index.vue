<!--
 * @Date: 2023-01-16 21:04:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 21:56:17
 * @Description: 这是健康自测 -> 测评结果文件
-->
<template>
  <view class="result">
    <view class="header_label">
      <view class="main_title">结果分析</view>
      <view class="desc">本测试及结果由AI得出，仅供参考，不能作为诊断及诊疗的依据</view>
    </view>
    <!-- 测评结果 -->
    <view class="result_content box_style">
      <view class="result_title">1111</view>
      <view class="result_suggest">1111</view>
      <view class="title_bold">测评结果概述:</view>
      <view>111</view>
      <view class="title_bold">AI为你推荐以下科室:</view>
      <view class="recommend">
        <view class="recommend_info">
          <view class="title_bold">心理科</view>
          <view class="address">111</view>
        </view>
        <button size="small" class="btn">去挂号</button>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'


onLoad((event) => {
  let value = {
    type: "002",
    ids: ["D1","D1","D1","D1"]
  }
  console.log(event, 'eventeventevent')
})






</script>
<style lang="less" scoped>
.result {
  height: 100vh;
  background: linear-gradient(to bottom,#d6e8ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .header_label {
    padding: 20rpx;
    .desc {
      color: #333;
      margin-top: 20rpx;
    }
  }
  .result_content {
    > view {
      margin-bottom: 20rpx;
      line-height: 1.5;
    }
    .result_title {
      .sc(40rpx, @primary);
      font-weight: bold;
    }
    .result_suggest {
      color: @primary;
    }
    .title_bold {
      font-weight: bold;
    }
    .recommend {
      .flex_center(space-between);
      background-color: #f4f7fa;
      border-radius: 10rpx;
      padding: 30rpx 20rpx;
      .recommend_info {
        flex: 1;
        padding-right: 20rpx;
      }
      .address {
        color: #bac5cc;
      }
      .btn {
        background-color: #0176ff;
        color: #ffffff;
        font-size: 24rpx;
      }
    }
  }
}
</style>