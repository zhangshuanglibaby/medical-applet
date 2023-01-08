<!--
 * @Date: 2023-01-08 09:14:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 09:38:08
 * @Description: 这是新冠疫苗预约 -> 预约内容文件
-->
<template>
  <view>
    <!-- S 医院地址 -->
    <view class="reserve_address">
      <text class="reserve_name">第一任命医院</text>
      <text class="reserve_road">昆明市</text>
      <view class="reserve_title">
        <text>北京生物</text>
      </view>
    </view>
    <!-- E 医院地址 -->

    <!-- S 选择星期 -->
    <view class="week">
      <view class="week_style week_sup">
        <text>周三</text>
        <text>08-31</text>
        <text>有号</text>
      </view>
    </view>
    <!-- E 选择星期 -->

    <!-- S 选择时段 -->
    <view class="period_view">
      <text class="period_title">上午时段</text>
      <view class="week_flex">
        <view class="week_style week_Down">
          <text>08:00-12:00</text>
          <text>剩余199</text>
        </view>
      </view>
    </view>
    <view class="period_view">
      <text class="period_title">下午时段</text>
      <view class="week_flex">
        <view class="week_style week_Down" v-for="i in 2" :key="2">
          <text>08:00-12:00</text>
          <text>剩余199</text>
        </view>
      </view>
    </view>
    <!-- E 选择时段 -->
  </view>
</template>
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