<!--
 * @Date: 2023-01-14 17:25:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 19:19:33
 * @Description: 这是添加就诊人文件
-->
<template>
  <view class="add_patient">
    <!-- 身份证识别 -->
    <view class="ai_card box_style" @click="handleUpload">
      <image class="icon_image" src="/static/other/AI-shibie.svg" mode="widthFix"></image>
      <text class="ai_card_label">身份证智能识别</text>
    </view>
    <!-- 表单填写 -->
    <MyInput v-model="submit_data.name" title="真实姓名" :placeholder="message_tips.name" />
    <MyPicker v-model="submit_data.sex" title="性别" mode="selector" :range="['男', '女']">
      <text>{{ submit_data.sex || '请选择性别' }}</text>
    </MyPicker>
    <MyPicker v-model="submit_data.born" title="出生日期" mode="date">
      <text>{{ submit_data.born || '请选择出生日期' }}</text>
    </MyPicker>
    <MyPicker v-model="submit_data.relation" title="成员关系" mode="selector" :range="['自己','父母','兄妹']">
      <text>{{ submit_data.relation || '请选择与成员关系' }}</text>
    </MyPicker>
    <MyInput v-model="submit_data.id_card" title="身份证" :placeholder="message_tips.id_card" />
    <MyInput v-model="submit_data.phone" title="手机号" :placeholder="message_tips.phone" />
    <!-- 按钮 -->
    <footer-btn submit_label="确认添加" @cancel="handleCanel" @submit="handleSubmit"></footer-btn>
  </view>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { uploadImag } from '@/utils/common'
import { aiCard, patientRes } from '@/api/patient'
import { PatientRes } from '@/types/patient'
import { validatorName, validatorIdNo, validatorPhone } from '@/utils/validator'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'

// 提示语
const message_tips = {
  name: '请输入姓名',
  sex: '请选择性别',
  born: '请选择出生日期',
  relation: '请选择成员关系',
  id_card: '请输入身份证',
  phone: '请输入手机号'
}

// 就诊人信息数据
const submit_data = reactive<PatientRes>({
  name: '',
  sex: '',
  born: '',
  relation: '',
  id_card: '',
  phone: ''
})

// ----------------身份证智能识别-----------------
const handleUpload = async () => {
  const res = await uploadImag({ url: aiCard, success_tips: '识别中', error_tips: '识别失败'}) as any
  submit_data.name = res.name
  submit_data.sex = res.sex
  submit_data.born = `${res.born.slice(0, 4)}-${res.born.slice(4, 6)}-${res.born.slice(6)}`
  submit_data.id_card = res.id_card
}

// ----------------取消-----------------
const handleCanel = () => {
  uni.navigateBack({ delta: 1 })
}

// ----------------添加就诊人-----------------
// 表单校验
const validate = () => {
  let flag = true
  // 非空校验
  for(const key of Object.keys(message_tips)) {
    if(!submit_data[key]) {
      flag = false
      uni.showToast({ title: message_tips[key], icon: 'none', duration: 600 })
      return
    }
  }
  // 姓名格式校验
  if(!validatorName(submit_data.name)) {
    flag = false
    uni.showToast({ title: '请输入正确格式的姓名', icon: 'none', duration: 600 })
    return
  }
  // 身份证格式校验
  if(!validatorIdNo(submit_data.id_card)) {
    flag = false
    uni.showToast({ title: '请输入正确格式的身份证', icon: 'none', duration: 600 })
    return
  }
  // 手机号码格式校验
  if(!validatorPhone(submit_data.phone)) {
    flag = false
    uni.showToast({ title: '请输入正确格式的手机号', icon: 'none', duration: 600 })
    return
  }
  return flag
}
// 提交
const handleSubmit = async () => {
  if(!validate()) {
    return
  }
  uni.showLoading({ title: '提交中', mask: true })
  await patientRes(submit_data)
  setTimeout(() => {
    uni.hideLoading()
    // 返回上一页
    uni.navigateBack({ delta: 1 })
  }, 400)
}

</script>
<style lang="less" scoped>
.add_patient {
  .ai_card {
    .flex_center(flex-start);
    .icon_image {
      .wh(80rpx, 80rpx);
      margin-right: 20rpx;
    }
    .ai_card_label {
      font-size: 34rpx;
    }
  }
}
</style>