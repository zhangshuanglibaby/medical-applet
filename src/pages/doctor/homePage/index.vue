<!--
 * @Date: 2023-01-17 13:44:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 15:04:17
 * @Description: 这是选择医生 -> 医生主页文件
-->
<template>
  <view class="home_page">
    <!-- 医生信息 -->
    <DoctorInfo />

    <!-- 挂号 -->
    <Guahao />

    <!-- 提交预约弹窗 -->
    <GuahaoPopup />

    <!-- 提示 -->
    <view class="prompt">
      <text>重要提示:</text>
      <text>1.本次预约就诊当天不可取消预约,如需取消,请在就诊前一天的24:00之前操作,累计取消或爽约三次可能会被列入医院黑名单,请按需预约</text>
      <text>2.预约挂号暂不支持医保支付,若本次挂号使用手机在线支付,就诊过程中的门诊检验检查,处方费用可能不支持医保支付</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import DoctorInfo from './components/DoctorInfo.vue'
import Guahao from './components/Guahao.vue'
import GuahaoPopup from './components/GuahaoPopup.vue'
</script>
<style lang="less" scoped>
.home_page {
  height: 100vh;
  background: linear-gradient(to bottom,#e8f4ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .prompt text {
    display: block;
    .sc(26rpx, #636468);
    padding: 10rpx 20rpx;
    line-height: 1.5;
  }
}


</style>