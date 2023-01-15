<!--
 * @Date: 2023-01-15 19:48:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 20:27:11
 * @Description: 这是体检详情 -> 套餐项目文件
-->
<template>
  <view class="project box_style">
    <view class="sub_title">套餐项目</view>
    <view class="group" v-for="i in 3" :key="i">
      <view class="title box_class">1111</view>
      <view class="group_item" v-for="i in 2" :key="i">
        <view class="project_name box_class">1111111</view>
        <view class="project_content box_class">222222222</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.project {
  .box_class {
    background-color: #f0f2f8;
    border-radius: 10rpx;
  }
  .group {
    .title {
      padding: 20rpx 0;
      font-weight: bold;
      margin: 20rpx 0;
      text-align: center;
    }
    .group_item {
      .flex_center(space-between);
    }
    .project_name, .project_content {
      .flex_center;
      padding: 20rpx 10rpx;
      margin: 5rpx;
    }
    .project_name {
      width: 200rpx;
    }
    .project_content {
      flex: 1;
    }
  }
}

</style>