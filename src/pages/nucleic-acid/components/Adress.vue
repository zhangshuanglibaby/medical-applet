<!--
 * @Date: 2023-01-13 21:04:26
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 22:41:58
 * @Description: 这是核酸检测预约 -> 地址文件
-->
<template>
  <view class="address box_style">
    <view class="left">
      <view class="main_title">{{ hospital }}</view>
      <view class="sub_text">{{ address }}</view>
    </view>
    <view class="right" @click="handleClick">
      <image class="icon_image" src="/static/other/dianhua.svg" mode="widhtFix"></image>
      <view class="sub_text">电话</view>
    </view>
  </view>
</template>
<script setup lang="ts">
type Props = {
  hospital: string,
  address: string,
  phone: string
}
const props = defineProps<Props>()

// -------------点击电话----------------------
const handleClick = () => {
  uni.makePhoneCall({
    phoneNumber: props.phone
  })
}

</script>
<style lang="less" scoped>
.address {
  .flex_center(space-between);
  .sub_text {
    padding-top: 20rpx;
    font-size: 25rpx;
  }
  .right {
    .felx_column_center;
    .icon_image {
      .wh(40rpx, 40rpx);
    }
  }
}
</style>