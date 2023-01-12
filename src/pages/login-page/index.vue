<!--
 * @Date: 2023-01-08 13:50:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 22:08:30
 * @Description: 这是****文件
-->
<template>
  <view class="login_page">
    <image mode="aspectFill" src="https://diancan-1252107261.cos.accelerate.myqcloud.com/yiliao/denglu-yemian.jpg"></image>
    <button @click="handleGetuserinfo">授权登录</button>
  </view>
</template>
<script setup lang=ts>
import { wxLogin } from '@/api/login'

// 点击登陆
const handleGetuserinfo = () => {
  uni.getUserInfo({
    success: (value) => {
      const { avatarUrl, nickName } = value.userInfo
      uni.login({
        success: (res) => {
          handleLogin(avatarUrl, nickName, res.code)
        },
        fail: err => {
          uni.showToast({ title: '登录失败', icon: 'none', duration: 1000 })
        }
      })
    },
    fail: err => {
      uni.showToast({ title: '登录失败', icon: 'none', duration: 1000 })
    }
  })
}

// 登陆
const handleLogin = async (avatarUrl: string, nickName: string, code: string) => {
  const params = {
    appid: "wxf8610677fdc758ab",
    secret: "017c699d616244cd4814cb4f72b569db",
    avatarUrl,
    nickName,
    code
  }
  try {
    uni.showLoading({ title: '登陆中', mask:true })
    const res = await wxLogin(params)
    // 将登陆信息保存到本地 返回上一页
    uni.setStorageSync('wxuser', res)
    setTimeout(() => {
      uni.navigateBack({ delta: 1 })
      uni.hideLoading()
    }, 600);
  } catch (error) {
    uni.showToast({ title: '登录失败', icon: 'none', duration: 1000 })
  }
  
}
</script>
<style lang="less">
.login_page {
  position: relative;
  height: 100vh;
  image {
    .wh(100%, 100%);
  }
  button {
    .position_aline_center;
    bottom: 30%;
    background-color: #2c76ef;
    color: #ffffff;
    padding: 0 100rpx;
    font-size: 35rpx;
  }
}
</style>