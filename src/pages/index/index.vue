<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-06 22:13:39
 * @Description: 这是首页文件
-->
<template>
  <view class="index">
    <view class="nav-gation">
       <view class="nav-top"></view>
       <view class="nav-height">某某省第一人民医院</view>
    </view>
    <view class="yuyue">
      <image mode="scaleToFill" src="https://diancan-1252107261.cos.ap-chengdu.myqcloud.com/tianqi/tianqi-top.png"></image>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref} from 'vue'
import { frontPage } from '@/api/index'

let menuTop = ref<String>('') // 按钮距离顶部的距离
let menuHeight = ref<String>('') // 按钮距高度

// 获取页面数据
const pageData = async () => {
  const res = await frontPage()
  console.log(res, 'resrsers')
}

onMounted(() => {
  const { top, height } = uni.getStorageSync('menuButton')
  menuTop.value = top + 'px'
  menuHeight.value = height + 'px'
  pageData()
})
</script>

<style scoped>
.nav-gation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.nav-gation .nav-top{
  height: v-bind('menuTop');
}
.nav-gation .nav-height {
  height: v-bind('menuHeight');
  line-height: v-bind('menuHeight');
  padding-left: 20rpx;
  color: #fff;
  font-weight: bold;
  font-size: 35rpx;
}

.yuyue {
  height: 700rpx;
  position: relative;
  color: #ffffff;
}

.yuyue image {
  display: block;
  width: 100%;
  height: 700rpx;
}
</style>
