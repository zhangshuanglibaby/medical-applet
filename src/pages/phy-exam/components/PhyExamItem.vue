<!--
 * @Date: 2023-01-15 19:03:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 19:37:11
 * @Description: 这是体检套餐预约 -> 项目item文件
-->
<template>
  <view class="phy_item box_style" @click="$emit('clickItem')">
    <view class="main_title">{{ data.title }}</view>
    <view class="phy_exam_info">
      <image class="phy_exam_image" :src="data.image" mode="aspectFill"></image>
      <view class="phy_exam_desc">
        <view class="desc_title">{{ data.be_suit }}</view>
        <view class="desc_label">{{ data.describe }}</view>
      </view>
    </view>
    <view class="phy_exam_price">
      <text>已约 {{ data.sales }}</text>
      <text>¥ {{ data.price }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Physget } from '@/types/phy-exam'

type Props = {
  data: Physget
}
defineProps<Props>()
defineEmits(['clickItem'])

</script>
<style lang="less" scoped>
.phy_item {
  .phy_exam_info{
    display: flex;
    margin: 20rpx 0;
    .phy_exam_image {
      .wh(200rpx, 200rpx);
      margin-right: 20rpx;
    }
    .phy_exam_desc {
      flex: 1;
      .desc_title {
        font-weight: bold;
        padding-bottom: 20rpx;
      }
      .desc_label {
        color: #999;
      }
    }
  }
  .phy_exam_price {
    .flex_center(space-between);
    color: #ff5f2c;
    font-weight: bold;
  }
}
</style>