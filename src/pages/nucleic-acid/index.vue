<!--
 * @Date: 2023-01-13 20:38:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 23:04:39
 * @Description: 这是核酸检测预约文件
-->
<template>
  <view class="nucleic_acid">
    <!-- 头部 -->
    <NucleicHeadr :data="nuataget_data" />
    <!-- 医院地址 -->
    <Adress :hospital="nuataget_data.hospital" :address="nuataget_data.address" :phone="nuataget_data.phone" />
    <!-- 表单 -->
    <MyInput v-model="submit_data.name" title="真实姓名" :placeholder="messageTips.name" />
    <MyInput v-model="submit_data.phone" title="手机号" :placeholder="messageTips.phone" />
    <MyInput v-model="submit_data.id_card" title="身份证" :placeholder="messageTips.id_card" />
    <!-- 选择预约时段 -->
    <DatePicker :data="nuataget_data.date" @toggle="toggleDate" />
    <!-- 咽拭子采样方式 -->
    <Sampling :data="nuataget_data.style" />
    <!-- 提交按钮 -->
    <FooterBtn>
      <view class="total_price">检测费用: ¥{{ nuataget_data.price }}</view>
      <view class="submit_btn" @click="handleSubmit">提交</view>
    </FooterBtn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { nuataget, resNuata } from '@/api/nucleic'
import { NuatagetData, ResNuataData } from '@/types/nucleic'
import { validatorName, validatorIdNo, validatorPhone } from '@/utils/validator'
import NucleicHeadr from './components/NucleicHeader.vue'
import Adress from './components/Adress.vue'
import MyInput from '@/components/modules/MyInput.vue'
import DatePicker from './components/DatePicker.vue'
import Sampling from './components/Sampling.vue'

// 提示
const messageTips = {
  name: '请输入真实姓名',
  phone: '请输入手机号',
  id_card: '请输入身份证',
  time: "请选择预约时段"
}

type Data = {
  nuataget_data: NuatagetData,
  submit_data: ResNuataData
}
const state = reactive<Data>({
  nuataget_data: { // 核酸检测页面数据
    address: "",
    boon: [],
    date: [],
    hospital: "",
    logo: "",
    name: "",
    phone: "",
    price: 0,
    style: []
  },
  submit_data: { // 提交核酸检测预约
    name: "",
    phone: "",
    id_card: "",
    time: ""
  }
})
onMounted(async () => {
  const res = await nuataget() as any[]
  state.nuataget_data = res[0]
})

//--------------选择预约时间段--------------------
const toggleDate = (date: string) => {
  state.submit_data.time = date
}


//--------------提交核酸检测预约--------------------
// 表单校验
const validate = () => {
  let flag = true
  // 非空校验
  for(let key of Object.keys(messageTips)) {
    if(!state.submit_data[key]) {
      uni.showToast({ title: messageTips[key], icon: 'none', duration: 600 })
      return flag = false
    }
  }
  // 姓名格式校验
  if(!validatorName(state.submit_data.name)) {
    uni.showToast({ title: "请输入正确格式的名字", icon: 'none', duration: 600 })
    return flag = false
  }
  // 生份证式校验
  if(!validatorIdNo(state.submit_data.id_card)) {
    uni.showToast({ title: "请输入正确格式的身份证", icon: 'none', duration: 600 })
    return flag = false
  }
  // 手机号码式校验
  if(!validatorPhone(state.submit_data.phone)) {
    uni.showToast({ title: "请输入正确格式的手机号码", icon: 'none', duration: 600 })
    return flag = false
  }
  return flag
}
// 提交
const handleSubmit = async() => {
  if(!validate()) {
    return
  }
  try {
    uni.showLoading({ title: '提交中' })
    await resNuata(state.submit_data)
    setTimeout(() => {
      uni.hideLoading()
      uni.redirectTo({ url: '/pages/order/nucleicAcid/index'})
    }, 400)
  } catch (error) {
    console.log(error)
  }
}

const { nuataget_data, submit_data } = toRefs(state)

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