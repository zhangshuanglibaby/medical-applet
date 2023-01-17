<!--
 * @Date: 2023-01-17 14:26:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 16:03:56
 * @Description: 这是医生主页 -> 医生信息文件
-->
<template>
  <view class="doctor_info box_style">
    <view class="top">
      <image class="doctor_image" :src="data.avatar" mode="aspectFill"></image>
      <view class="doctor_intro">
        <view class="doctor_post">
          <text class="main_title">{{ data.name}}</text>{{ data.post}}
        </view>
        <view>{{ data.hospital }}</view>
      </view>
    </view>
    <view class="good_at">{{ data.good_at }}</view>
  </view>
</template>
<script setup lang="ts">
import { DoctorHome } from '@/types/registered'

type Props = {
  data: DoctorHome
}
defineProps<Props>()




</script>
<style lang="less" scoped>
.doctor_info {
  .top {
    .flex_center(space-between);
    .doctor_image {
      .wh(150rpx, 150rpx);
      margin-right: 20rpx;
    }
    .doctor_intro {
      flex: 1;
    }
    .main_title {
      padding-right: 10rpx;
    }
    .doctor_post {
      margin-bottom: 20rpx;
    }
  }
  .good_at {
    line-height: 1.5;
    margin-top: 20rpx;
  }
}
</style>