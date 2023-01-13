<!--
 * @Date: 2023-01-13 21:45:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:36:03
 * @Description: 这是核酸检测预约 -> 咽拭子采样方式文件
-->
<template>
  <view class="sampling box_style">
    <view class="title">咽拭子采样方式</view>
    <view class="group" v-for="(item, index) in data" :key="index">
      <label class="group_title">{{ item.title }}</label>
      <view class="group_content" v-for="(desc, descIndex) in item.desc" :key="descIndex">
       {{ desc }}
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Style } from '@/types/nucleic'

type Props = {
  data: Style[]
}
defineProps<Props>()

</script>
<style lang="less" scoped>
.sampling {
  .title {
    font-weight: 32rpx;
    font-weight: bold;
  }
  .group {
    margin-top: 20rpx;
  }
  .group_title {
    display: inline-block;
    background-color: @primary;
    color: #ffffff;
    border-radius: 10rpx;
    padding: 5rpx 10rpx;
    margin-bottom: 14rpx;
  }
  .group_content {
    line-height: 1.5;
  }
}
</style>