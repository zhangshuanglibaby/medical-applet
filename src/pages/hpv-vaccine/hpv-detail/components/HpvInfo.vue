<!--
 * @Date: 2023-01-13 15:53:18
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 18:10:02
 * @Description: 这是hpv套餐详情-hpv信息文件
-->
<template>
  <view class="hpv_info">
    <view class="hpv_detail">
      <view class="main_title">{{ data.name }}</view>
      <view class="hpv_tag">
        <text v-for="(item, index) in data.describe" :key="index">{{ item }}</text>
      </view>
    </view>
    <view class="hpv_price">¥{{ data.price[0] }}-¥{{ data.price[1] }}</view>
  </view>
</template>
<script setup lang="ts">
type Props = {
  data: {
    describe: string[],
    name: string,
    price: string[]
  }
}
defineProps<Props>()

</script>
<style lang="less">
.hpv_info {
  .flex_center(space-between, flex-start);
  background-color: #ffffff;
  padding: 20rpx;
  margin-bottom: 40rpx;
  .hpv_tag {
    .flex_center(flex-start);
    > text{
      background-color: #f4f6fa;
      padding: 7rpx;
      font-size: 25rpx;
      margin: 10rpx 10rpx 10rpx 0;
    }
  }
  .hpv_price {
    font-weight: bold;
    color: #ff5f2c;
  }
}
</style>