<!--
 * @Date: 2023-01-14 13:18:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 16:37:43
 * @Description: 这是图文咨询文件
-->
<template>
  <view>
    <!-- 描述病情 -->
    <Description />
    <!-- 是否需要医生指导用药 -->
    <Guide />
    <!-- 上传照片 -->
    <view class="box_style">
      <view class="main_title">上传检查报告或患处照片</view>
      <MyUpload v-model="msg" />
    </view>
    {{ msg }}
    <!-- 选择就诊人 -->
    <Patient />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Description from './components/Description.vue'
import Guide from './components/Guide.vue'
import MyUpload from '@/components/modules/MyUpload.vue'
import Patient from './components/Patient.vue'

let msg = ref()
</script>
<style lang="less" scoped></style>