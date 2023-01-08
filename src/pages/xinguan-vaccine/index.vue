<!--
 * @Date: 2023-01-08 08:53:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 10:28:14
 * @Description: 这是新冠疫苗预约文件
-->
<template>
  <view class="xinguan_view">
    <!-- S 表单填写 -->
    <view class="xinguan_flex">
      <text>姓名</text>
      <input placeholder="请输入姓名" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>身份证</text>
      <input placeholder="请输入身份证" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>手机号</text>
      <input placeholder="请输入手机号" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>现居地址</text>
      <picker mode="region" class="flex_left">
        <view>
          <text>请选择现居住地址</text>
          <image src="/static/other/gengduo.svg"></image>
        </view>
      </picker>
    </view>
    <view class="xinguan_flex">
      <text>现居详细地址</text>
      <input placeholder="请输入现居详细地址" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>疫苗人群分类</text>
      <picker mode="selector" class="flex_left" :range="[1, 2, 3]">
        <view>
          <text>请选择疫苗人群分类</text>
          <image src="/static/other/gengduo.svg"></image>
        </view>
      </picker>
    </view>
    <!-- E 表单填写 -->
  </view>
  <!-- 预约内容 -->
  <VaccineContent :data="timeData" />
  <!-- 底部按钮 -->
  <FooterBtn />
  <!-- 这个一个空盒子 占位用的 -->
  <view class="empty-box"></view>
</template>
<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { newAppTime } from '@/api/xinguan'
import { TimeData } from '@/types/xinguan'
// 组件
import VaccineContent from './components/VaccineContent.vue'
import FooterBtn from './components/FooterBtn.vue'

type Data = {
  timeData: TimeData
}
const state = reactive<Data>({
  // 新冠疫苗预约时间段数据
  timeData: {
    Hospital: "",
    address: "",
    company: [],
    lasting: [],
    week: []
  }
})
onMounted(async () => {
  // 获取新冠疫苗预约时间段
  const [ res ] = await newAppTime() as any
  state.timeData = res
})

const  { timeData } = toRefs(state)
</script>
<style>
@import url(@/common-style/form.css);

page {
  background-color: #f7f7f7;
}
.empty-box {
  height: 300rpx;
}
</style>