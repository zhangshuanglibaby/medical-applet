<!--
 * @Date: 2023-01-08 08:53:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 23:04:00
 * @Description: 这是新冠疫苗预约文件
-->
<template>
  <view class="xinguan_vaccine">
    <MyInput title="姓名" :placeholder="messageTips.name" v-model="submit_data.name"/>
    <MyInput title="身份证" :placeholder="messageTips.id_card" v-model="submit_data.id_card" />
    <MyInput title="手机号" :placeholder="messageTips.phone" v-model="submit_data.phone" />
    <MyPicker mode="region" title="现居住地址" v-model="submit_data.address">
      <text>{{ submit_data.address || messageTips.address }}</text>
    </MyPicker>
    <MyInput title="现居住详细地址" :placeholder="messageTips.de_address" v-model="submit_data.de_address" />
    <MyPicker mode="selector" title="疫苗人群分类" :range="selector_data" v-model="submit_data.crowd_sort">
      <text>{{ submit_data.crowd_sort || messageTips.crowd_sort }}</text>
    </MyPicker>
    <!-- 医院地址 -->
    <ReserveAddress :data="time_data" />
    <!-- 选择日期 -->
    <DateTime :data="time_data.week"  @toggle="handleToggleDate" />
    <!-- 选择时间段 -->
    <PeriodTime :data="time_data.lasting" @toggle="handleTogglePeriod"/>
    <!-- 按钮 -->
    <footer-btn submit_label="提交预约" @submit="handleSubmit"></footer-btn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
import { newAppTime, rescovid } from "@/api/xinguan"
import { TimeData, SubmitData, Time } from '@/types/xinguan'
import { validatorName, validatorIdNo, validatorPhone } from '@/utils/validator'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'
import ReserveAddress from './components/ReserveAddress.vue'
import DateTime from './components/DateTime.vue'
import PeriodTime from './components/PeriodTime.vue'

//选择疫苗人群分类
let selector_data = ['医疗卫生人员','卫生系统内工作的其他人员','因公出国人员',
'对外劳务派遣人员','留学生','因私出国人员','海关边检人员','公安系统,消防人员',
'党政机关,事业单位人员','社区工作者','教育工作者','小学和中学学生','其他人员'
]
const messageTips = { // 文案提示
  name: "请输入姓名",
  id_card: "请输入身份证",
  phone: "请输入手机号",
  address: "请选择现居住地址",
  de_address: "请输入现居住详细地址",
  crowd_sort: "请选择疫苗人群分类",
  date: "请选择日期",
  reserve_time: "请选择时间段"
}
type Data = {
  time_data: TimeData,
  submit_data: SubmitData
}
const state = reactive<Data>({
  time_data: { // 新冠疫苗预约时段
    Hospital: "",
    address: "",
    company: [],
    lasting: [],
    week: []
  },
  submit_data: { // 新冠疫苗提交预约
    name: "",
    id_card: "",
    phone: "",
    address: "",
    de_address: "",
    crowd_sort: "",
    date: "",
    period: "",
    reserve_time: "",
    when: 0
  }
})

// 获取新冠疫苗预约时段
const getNewAppTime = async () => {
  const res = await newAppTime()
  state.time_data = res[0]
}
onMounted(() => {
  getNewAppTime()
})

// 选择日期
const handleToggleDate = (value: string)  => {
  state.submit_data.date = value
}

// 选择时间段
const handleTogglePeriod = (period: string, value: Time) => {
  state.submit_data.period = period
  state.submit_data.reserve_time = value.start_time + '-' + value.end_time
  state.submit_data.when = value.when
}

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
// 提交预约
const handleSubmit = async () => {
  if(!validate()) {
    return
  }
  try {
    uni.showLoading({ title: '提交中' })
   await rescovid(state.submit_data)
   setTimeout(() => {
    uni.hideLoading()
    uni.redirectTo({ url: '/pages/order/xinguan/index'})
  }, 400)
  } catch (error) {
    console.log(error)
  }
}
const { time_data, submit_data } = toRefs(state)
</script>
<style>
</style>