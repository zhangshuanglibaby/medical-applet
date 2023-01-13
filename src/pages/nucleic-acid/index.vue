<!--
 * @Date: 2023-01-13 20:38:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 21:59:29
 * @Description: 这是核酸检测预约文件
-->
<template>
  <view class="nucleic_acid">
    <!-- 头部 -->
    <NucleicHeadr />
    <!-- 医院地址 -->
    <Adress />
    <!-- 表单 -->
    <MyInput title="真实姓名" :placeholder="messageTips.name" />
    <MyInput title="手机号" :placeholder="messageTips.phone" />
    <MyInput title="身份证" :placeholder="messageTips.id_card" />
    <!-- 选择预约时段 -->
    <DatePicker />
    <!-- 咽拭子采样方式 -->
    <Sampling />
    <!-- 提交按钮 -->
    <FooterBtn>
      <view class="total_price">检测费用: ¥111</view>
      <view class="submit_btn">提交</view>
    </FooterBtn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import NucleicHeadr from './components/NucleicHeader.vue'
import Adress from './components/Adress.vue'
import MyInput from '@/components/modules/MyInput.vue'
import DatePicker from './components/DatePicker.vue'
import Sampling from './components/Sampling.vue'

// 提示
const messageTips = {
  name: '请输入真实姓名',
  phone: '请输入手机号',
  id_card: '请输入身份证'
}
</script>
<style lang="less">
.nucleic_acid {
  .total_price {
    margin-left: 20rpx;
    color: #ff5f2c;
    font-weight: bold;
  }
  .submit_btn {
    margin-right: 20rpx;
    background-color: @primary;
    padding: 15rpx 50rpx;
    color: #ffffff;
    border-radius: 10rpx;
  }
}
</style>