<!--
 * @Date: 2023-01-06 16:17:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-31 15:12:49
 * @Description: 这是个人中心文件
-->
<template>
  <view class="mine">
    <!-- 个人头像 昵称 -->
    <view class="user_info">
      <image class="avatar" :src="user_info.avatarUrl || '/static/other/touxiang.svg'"></image>
      <view
        :class="user_info.nickName ? 'main_title disabled' : 'btn' "
        @click="toLogin">{{ user_info.nickName || '去登陆'}}</view>
    </view>
    <!-- 消息栏 -->
    <view class="service">
      <view class="service_item" v-for="(item, index) in serviceList" :key="index">        
        <view class="label">{{ item.value}}</view>
        <view class="count">{{ item.label }}</view>
      </view>
    </view>
    <!-- 订单管理 -->
    <view class="order_wrap">
      <view class="order_item"
        v-for="(item, index) in orderList"
        :key="index"
        @click="jumpRoute(item.path)">
        <image class="icon_image" :src="item.icon" mode="aspectFill"></image>
        <view class="label">{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { reactive } from 'vue'
import { serviceList, orderList } from './constant/index'

type UserInfo = {
  avatarUrl: string,
  nickName: string
}
// 用户信息
const user_info: UserInfo = reactive({ avatarUrl: '', nickName: ''})
onShow(() => {
  let wxuser = uni.getStorageSync('wxuser') as UserInfo
  if(!wxuser) {
    return
  }
  user_info.avatarUrl = wxuser.avatarUrl
  user_info.nickName = wxuser.nickName
})

// -------------去登陆---------------
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login-page/index'
  })
}

// -------------点击订单管理---------------
const jumpRoute = (url: string) => {
  uni.navigateTo({ url })
}





</script>

<style lang="less" scoped>
.mine {
  height: 100vh;
  background: linear-gradient(to bottom,#e3efff 30%, #f6f6f6 40%);
  .user_info {
    .felx_column_center;
    .avatar {
      .wh(80rpx, 80rpx);
      border-radius: 50%;
      border: 5rpx solid #fff;
      margin-bottom: 10rpx;
    }
  }
  .service {
    .flex_center(space-around);
    margin: 50rpx 0;
    text-align: center;
    font-weight: bold;
    .count {
      margin-bottom: 15rpx;
    }
  }
  .order_wrap {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin: 0 20rpx 20rpx;
    border-radius: 20rpx;
    font-size: 26rpx;
    .order_item {
      width: calc(25% - 20rpx*2);
      margin: 20rpx;
      .felx_column_center;
    }
    .icon_image {
      .wh(60rpx, 60rpx);
      margin-bottom: 25rpx;
    }
  }
  // 未登陆样式
  .btn {
    background: #0176ff;
    color: #ffffff;
    border-radius: 10rpx;
    padding: 10rpx 50rpx;
  }
  // 登陆不允许点击
  .disabled {
    pointer-events: none;
  }
}
</style>