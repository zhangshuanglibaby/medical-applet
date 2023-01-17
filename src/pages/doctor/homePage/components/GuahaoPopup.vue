<!--
 * @Date: 2023-01-17 15:02:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 15:19:06
 * @Description: 这是医生主页 -> 提交预约弹窗文件
-->
<template>
  <page-container :show="show">
    <view class="content">
      <view class="main_title">请选择预约时间段</view>
      <view class="time">
        <view class="time_item check_style">2222</view>
      </view>
      <view class="main_title">选择成员</view>
      <view class="member_view">
        <image class="avator" src="/static/other/kongshuju.jpg" mode="aspectFill"></image>
        <text class="name">111</text>
        <text class="label">选择成员</text>
      </view>
      <button class="btn" @click="handleSubmit">提交预约</button>
    </view>
  </page-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['submit'])
// --------------显示弹窗----------------
let show = ref<boolean>(false)
const open = () => {
  show.value = true
}
defineExpose({ open })

// --------------提交预约----------------
const handleSubmit = () => {
  emit('submit')
}


</script>
<style lang="less" scoped>
.content {
  padding: 20rpx;
  .main_title {
    text-align: center;
    margin-bottom: 40rpx;
  }
  .time {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40rpx;
    .time_item {
      width: 33.3%;
      text-align: center;
      padding: 20rpx 0;
      box-sizing: border-box;
      color: #0176ff;
      border: 1rpx solid #dfdfdf;
    }
  }
  .member_view {
    .flex_center(space-between);
    margin-bottom: 20rpx;
    .avator {
      .wh(80rpx, 80rpx);
    }
    .name {
      flex: 1;
      padding: 0 40rpx;
      font-weight: bold;
    }
    .label {
      color: #0176ff;
    }
  }
  .btn {
    color: #ffffff;
    background-color: #0176ff;
    border: 1rpx solid #0176ff;
    font-size: 30rpx;
  }
}



</style>