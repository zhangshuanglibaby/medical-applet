<!--
 * @Date: 2023-01-15 19:29:44
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-31 15:13:45
 * @Description: 这是体检套餐详情文件
-->
<template>
  <view>
    <!-- 头部 -->
    <Header :data="phydateil_data" />
    <!-- 体检时间选择 -->
    <MyDate v-model="submit_data.phy_time" title="体检时间选择" :data="phydateil_data.date" />
    <!-- 适用人群 -->
    <Crowd :data="phydateil_data.crowd" />
    <!-- 套餐项目 -->
    <Project :data="phydateil_data.project" />
    <!-- 按钮 -->
    <footer-btn>
      <text class="left_price">检测费用: ¥{{ phydateil_data.price }}</text>
      <text class="right_label" @click="handleClickMember">选择成员</text>
    </footer-btn>
    <!-- 选择成员 -->
    <Member
      v-model="submit_data.patient_id"
      ref="memberRef"
      @submit="handleSubmit" />
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive } from 'vue'
import { phydateil, resphy } from '@/api/phy-exam'
import { Phydetail, Resphy } from '@/types/phy-exam'

import Header from './components/Header.vue'
import MyDate from '@/components/modules/MyDate.vue'
import Crowd from './components/Crowd.vue'
import Project from './components/Project.vue'
import Member from './components/Member.vue'


let id = ref<string>('') // 体检套餐的id
// 体检套餐详情数据
let phydateil_data = ref<Phydetail>({
  crowd: [],
  date: [],
  image: '',
  price: 0,
  project: [],
  sales: 0,
  title: '',
  _id: ''
})
// 体检预约提交数据
let submit_data: Resphy = reactive({
  phy_name: '',
  phy_time: '',
  patient_id: ''
})

onLoad(async (event: any) => {
  id.value = event.id
  const res = await phydateil({id: id.value}) as any[]
  phydateil_data.value = res[0]
})

// -----------------点击选择成员-------------------
let memberRef = ref() // 获取member实例
const handleClickMember = () => {
  // 展示弹窗
  memberRef.value.open()
}

// -----------------提交预约-------------------
// 提示
const message_tips = {
  phy_time: '请选择体检时间',
  patient_id: '选择就诊人'
}
// 校验
const validate = () => {
  let flag = true
  for(const key of Object.keys(message_tips)) {
    if(!submit_data[key]) {
      flag = false
      uni.showToast({ title: message_tips[key], icon: 'none', duration: 600 })
      return
    }
  }
  return flag
}
const handleSubmit = async () => {
  if(!validate()) {
    return
  }
  submit_data.phy_name = phydateil_data.value.title
  uni.showLoading({ title: '提交中', mask: true })
  await resphy(submit_data)
  setTimeout(() => {
    uni.hideLoading()
    uni.redirectTo({
      url: '/pages/order/phy-exam/index'
    })
  }, 400);
  console.log(submit_data, 'submit_datasubmit_data')
}


</script>
<style lang="less" scoped>
.left_price {
  font-weight: bold;
  color: #ff5f2c;
  margin-left: 20rpx;
}
.right_label {
  background-color: @primary;
  padding: 15rpx 50rpx;
  color: #fff;
  border-radius: 10rpx;
  margin-right: 20rpx;
}
</style>