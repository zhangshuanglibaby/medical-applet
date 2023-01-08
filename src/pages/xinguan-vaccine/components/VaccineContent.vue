<!--
 * @Date: 2023-01-08 09:14:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 11:03:52
 * @Description: 这是新冠疫苗预约 -> 预约内容文件
-->
<template>
  <view>
    <!-- S 医院地址 -->
    <view class="reserve_address">
      <text class="reserve_name">{{ data.Hospital}}</text>
      <text class="reserve_road">{{ data.address }}</text>
      <view class="reserve_title" v-for="(item, index) in data.company" :key="index">
        <text>{{ item }}</text>
      </view>
    </view>
    <!-- E 医院地址 -->

    <!-- S 选择星期 -->
    <view class="week">
      <view 
        class="week_style week_sup"
        v-for="(item, index) in data.week"
        :key="index">
        <text>{{ item.day }}</text>
        <text>{{ item.date}}</text>
        <text>{{ item.Have }}</text>
      </view>
    </view>
    <!-- E 选择星期 -->

    <!-- S 选择时段 -->
    <view class="period_view" v-for="(item, index) in data.lasting" :key="index">
      <text class="period_title">{{ item.period }}</text>
      <view class="week_flex">
        <view
          class="week_style week_Down"
          v-for="(time, index) in item.time"
          :key="index">
          <text>{{ time.start_time }}-{{ time.end_time}}</text>
          <text>剩余{{ time.over }}</text>
        </view>
      </view>
    </view>
    <!-- E 选择时段 -->
  </view>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { TimeData } from '@/types/xinguan'
defineProps({
  data: {
    // 提供相对 `Object` 更确定的类型
    type: Object as PropType<TimeData>,
    default: () => {}
  }
})
</script>
<style scoped>
/* 预约地址 */
.reserve_address{
  background-color: #fff;
  padding: 20rpx;
  margin: 20rpx;
  border-radius: 10rpx;
}
.reserve_address text{
  display: block;
}
.reserve_name{
  font-weight: bold;
}
.reserve_road{
  padding: 20rpx 0;
}
.reserve_title{
  display: flex;
  align-items: center;
}
.reserve_title text{
  background-color: #f7f7f7;
  padding: 5rpx 20rpx;
  font-size: 25rpx;
  margin-right: 10rpx;
}
.week{
  background-color: #ffffff;
  padding: 20rpx;
  border-radius: 10rpx;
  margin: 20rpx;
  display: flex;
  align-items: center;
}
.week_flex{
  display: flex;
}
.week_style{
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  text-align: center;
  padding: 20rpx 0;
  border-radius: 10rpx;
  margin-right: 20rpx;
}
.week_style text{
  padding: 3rpx;
}
.week_sup{
  width: 150rpx;
}
.period_view{
  background-color: #ffffff;
  padding: 20rpx;
  border-radius: 10rpx;
  margin: 20rpx;
}
.period_title{
  font-weight: bold;
  margin-bottom: 20rpx;
  display: block;
}
.week_Down{
  width: 200rpx;
}
/* 选中加上样式 */
.checkstyle{
  background-color: #2c76ef !important;
  color: #ffffff !important;
}
</style>