<!--
 * @Date: 2023-01-17 14:27:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 16:31:23
 * @Description: 这是医生主页 -> 预约挂号文件
-->
<template>
  <view class="guahao box_style">
    <view class="main_title">预约挂号</view>
    <view class="table">
      <!-- 左侧固定 -->
      <view class="table_left">
        <view class="td">日期</view>
        <view class="td">上午 </view>
        <view class="td">下午</view>
      </view>
      <scroll-view scroll-x class="scroll_view">
        <view class="guahao_item" v-for="(item, index) in data" :key="index">
          <!-- 表头 -->
          <view class="td t_head">
            <view class="week">{{ item.day }}</view>
            <view>{{ item.week }}</view>
          </view>
          <!-- 上午 -->
          <view
            class="td" 
            :class="item.time[0].nu_source? 'source':'disable'"
            @click="selectTime(item.week, item.time[0])">{{ item.time[0].nu_source ? '预约' : ''}}</view>
          <!-- 下午 -->
          <view 
          class="td source"
          :class="item.time[1].nu_source? 'source':'disable'"
          @click="selectTime(item.week, item.time[1])">{{ item.time[1].nu_source ? '预约' : ''}}</view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Appment, Time } from '@/types/registered'

type Props = {
  data: Appment[]
}
defineProps<Props>()
const emit = defineEmits(['select'])
// --------------点击预约-----------------
const selectTime = (week: string, time: Time) => {
  const value = {
    week,
    time
  }
  emit('select', value)
}


</script>
<style lang="less" scoped>
.guahao {
  .table {
    display: flex;
    margin-top: 20rpx
  }
  .td {
    .felx_column_center;
    width: 100%;
    height: 140rpx;
    border: 0.5rpx solid #dfdfdf;
    text-align: center;
  }
  .table_left {
    width: 100rpx;
  }
  .scroll_view {
    width: calc(100% - 100rpx);
    white-space: nowrap;
  }
  .guahao_item {
    display: inline-block;
    width: 130rpx;
    .t_head {
      .week {
        color: #8c8c8c;
      }
    }
    .source {
      background-color: #0075ff;
      color: #fff;
    }
    .disable {
      pointer-events: none;
      background-color: #fff;
      color: #fff;
    }
  }
}
</style>