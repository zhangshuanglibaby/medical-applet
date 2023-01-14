<!--
 * @Date: 2023-01-14 13:18:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:54:58
 * @Description: 这是图文咨询文件
-->
<template>
  <view>
    <!-- 描述病情 -->
    <Description v-model="submit_data.illness" />
    <!-- 是否需要医生指导用药 -->
    <Guide v-model="submit_data.guide" />
    <!-- 上传照片 -->
    <view class="box_style">
      <view class="main_title">上传检查报告或患处照片</view>
      <MyUpload v-model="submit_data.ins_report" />
    </view>
    <!-- 选择就诊人 -->
    <Patient v-model="submit_data.patient_id" />
    <!-- 底部按钮 -->
    <footer-btn @cancel="handleCancel" @submit="handleSubmit"></footer-btn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { graphics } from '@/api/graphics'
import { graphicsData } from '@/types/graphics'

import Description from './components/Description.vue'
import Guide from './components/Guide.vue'
import MyUpload from '@/components/modules/MyUpload.vue'
import Patient from './components/Patient.vue'


// 提示
const message_tips = {
  illness: '请输入病情描述',
  patient_id: '请选择就诊人',
}
// 提交图文咨询数据
const submit_data = reactive<graphicsData>({
  illness: '',
  guide: false,
  ins_report: [],
  patient_id: ''
})


// ---------------点击取消-------------------
const handleCancel = () => {
  uni.navigateBack({ delta: 1 })
}

// ---------------点击提交-------------------
// 表单校验
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
// 提交
const handleSubmit = async () => {
  if(!validate()) {
    return
  }
  uni.showLoading({ title: '提交中', mask: true })
  await graphics(submit_data)
  uni.hideLoading()
  uni.showToast({ title: '提交成功', icon: 'success', duration: 200 })
  setTimeout(() => {
    uni.switchTab({
      url: '/pages/index/index'
    })
  }, 400)
}
</script>
<style lang="less" scoped></style>