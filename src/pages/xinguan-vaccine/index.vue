<!--
 * @Date: 2023-01-08 08:53:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 19:07:14
 * @Description: 这是新冠疫苗预约文件
-->
<template>
  <view class="xinguan_vaccine">
    <MyInput title="姓名" placeholder="请输入姓名" />
    <MyInput title="身份证" placeholder="请输入身份证" />
    <MyInput title="手机号" placeholder="请输入手机号" />
    <MyInput title="姓名" placeholder="请输入姓名" />
    <MyPicker mode="region" title="现居住地址">
      <text>请选择现居住地址</text>
    </MyPicker>
    <MyInput title="现居住详细地址" placeholder="请输入现居住详细地址" />
    <MyPicker mode="selector" title="疫苗人群分类" :range="selector_data">
      <text>请选择疫苗人群分类</text>
    </MyPicker>
    <!-- 医院地址 -->
    <ReserveAddress :data="time_data" />
    <!-- 选择日期 -->
    <DateTime :data="time_data.week" />
    <!-- 选择时间段 -->
    <PeriodTime
      v-for="(item, index) in time_data.lasting"
      :key="index"
      :data="item"/>
    <!-- 按钮 -->
    <footer-btn></footer-btn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { newAppTime } from "@/api/xinguan"
import { TimeData } from '@/types/xinguan'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'
import ReserveAddress from './components/ReserveAddress.vue'
import DateTime from './components/DateTime.vue'
import PeriodTime from './components/PeriodTime.vue'

//选择疫苗人群分类
let selector_data = ref(['医疗卫生人员','卫生系统内工作的其他人员','因公出国人员',
'对外劳务派遣人员','留学生','因私出国人员','海关边检人员','公安系统,消防人员',
'党政机关,事业单位人员','社区工作者','教育工作者','小学和中学学生','其他人员'
])

type Data = {
  time_data: TimeData
}
const state = reactive<Data>({
  time_data: {
    Hospital: "",
    address: "",
    company: [],
    lasting: [],
    week: []
  }
})

// 获取新冠疫苗预约时段
const getNewAppTime = async () => {
  const res = await newAppTime()
  console.log(res, 'resresres')
  state.time_data = res[0]
}
onMounted(() => {
  getNewAppTime()
})

const { time_data } = toRefs(state)
</script>
<style>
</style>