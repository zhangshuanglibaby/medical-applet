<!--
 * @Date: 2023-01-11 17:10:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-11 21:31:31
 * @Description: 这是首页-自定义的导航栏文件
-->
<template>
  <view class="navigation_bar">
    <!-- 这是一个空盒子占位 -->
    <view class="nav-top"></view>
    <view class="nav-title">某某省第一人民医院</view>
  </view>
  <image
    mode="aspectFill"
    src="https://diancan-1252107261.cos.accelerate.myqcloud.com/yiliao/nav-yiyu.png"></image>
</template>
<script setup lang="ts">
defineProps({
  top: [String, Number], //胶囊按钮距离顶部的高度
  height: [String, Number] //胶囊按钮的高度
})
</script>
<style lang="less" scoped>
.navigation_bar {
  .fixed_top(99);
  background-color: #5362e3;
  .nav-top {
    height: v-bind(top);
  }
  .nav-title {
    .hl(v-bind(height));
    .sc(35rpx, #fff);
    padding-left: 20rpx;
  }
}
image {
  .wh(100%, 550rpx);
}
</style>