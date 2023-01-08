<!--
 * @Date: 2023-01-08 08:53:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 13:48:04
 * @Description: 这是新冠疫苗预约文件
-->
<template>
  <view class="xinguan_view">
    <!-- S 表单填写 -->
    <view class="xinguan_flex">
      <text>姓名</text>
      <input v-model="submit_data.name" placeholder="请输入姓名" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>身份证</text>
      <input v-model="submit_data.id_card" placeholder="请输入身份证" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>手机号</text>
      <input v-model="submit_data.phone" placeholder="请输入手机号" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>现居地址</text>
      <picker mode="region" class="flex_left" @change="changeRegion">
        <view>
          <text>{{ submit_data.address || '请选择现居住地址' }}</text>
          <image src="/static/other/gengduo.svg"></image>
        </view>
      </picker>
    </view>
    <view class="xinguan_flex">
      <text>现居详细地址</text>
      <input v-model="submit_data.de_address" placeholder="请输入现居详细地址" placeholder-class="input_style" />
    </view>
    <view class="xinguan_flex">
      <text>疫苗人群分类</text>
      <picker mode="selector" class="flex_left" :range="selector_data" @change="changeSelector">
        <view>
          <text>{{ submit_data.crowd_sort || '请选择疫苗人群分类' }}</text>
          <image src="/static/other/gengduo.svg"></image>
        </view>
      </picker>
    </view>
    <!-- E 表单填写 -->
  </view>
  <!-- 预约内容 -->
  <VaccineContent :data="time_data" @toggleDate="handleToggleDate" @togglePeriod="handleTogglePeriod" />
  <!-- 底部按钮 -->
  <FooterBtn @cancel="handleCancel" @submit="handleSubmit" />
  <!-- 这个一个空盒子 占位用的 -->
  <view class="empty-box"></view>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref,toRefs } from 'vue'
import { newAppTime, rescovid } from '@/api/xinguan'
import { TimeData, SubmitData, Time } from '@/types/xinguan'
import { validatorName, validatorPhone, validatorIdNo } from '@/utils/validator'
// 组件
import VaccineContent from './components/VaccineContent.vue'
import FooterBtn from './components/FooterBtn.vue'

type Data = {
  time_data: TimeData,
  submit_data: SubmitData
}
const state = reactive<Data>({
  // 新冠疫苗预约-时间段数据
  time_data: {
    Hospital: "",
    address: "",
    company: [],
    lasting: [],
    week: []
  },
  // 新冠疫苗预约-提交预约数据
  submit_data: {
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

onMounted(async () => {
  // 获取新冠疫苗预约时间段
  const [ res ] = await newAppTime() as any
  state.time_data = res
})

// 选择现居地址
const changeRegion = (event: any) => {
  state.submit_data.address = event.detail.value.join(' ')
}

// 选择疫苗人群分类
// 疫苗人群分类
const selector_data = ref(['医疗卫生人员','卫生系统内工作的其他人员','因公出国人员',
'对外劳务派遣人员','留学生','因私出国人员','海关边检人员','公安系统,消防人员',
'党政机关,事业单位人员','社区工作者','教育工作者','小学和中学学生','其他人员'
])
const changeSelector = (event: any) => {
  state.submit_data.crowd_sort = selector_data.value[event.detail.value]
}

// 监听选中的日期
const handleToggleDate = (date: string) => {
  state.submit_data.date = date
}

// 监听选中的时间段
const handleTogglePeriod = (period: string, time: Time) => {
  state.submit_data.period = period
  state.submit_data.reserve_time = `${time.start_time}-${time.end_time}`
  state.submit_data.when = time.when
}

// 取消
const handleCancel = () => {

}

// 提交
// 定义必填字段的提示文案
const rulesMsg = {
  name: "请输入姓名",
  id_card: "请输入身份证",
  phone: "请输入手机号",
  address: "请选择现居住地址",
  de_address: "请输入现居详细地址",
  crowd_sort: "请选择疫苗人群分类",
  date: "请选择日期",
  reserve_time: "请选择时间段",
}
// 校验表单
const validate = () => {
  let flag = true
  // 非空校验
  for(const key in rulesMsg) {
    if(!state.submit_data[key]) {
      uni.showToast({ title: rulesMsg[key], icon: 'none' })
      return flag = false
    }
  }
  // 格式校验
  if(!validatorName(state.submit_data.name)) {
    uni.showToast({ title: '请输入正确的姓名', icon: 'none' })
    return flag = false
  }
  if(!validatorPhone(state.submit_data.phone)) {
    uni.showToast({ title: '请输入正确的手机号码', icon: 'none' })
    return flag = false
  }
  if(!validatorIdNo(state.submit_data.id_card)) {
    uni.showToast({ title: '请输入正确的身份证号码', icon: 'none' })
    return flag = false
  }
  return flag
}
const handleSubmit =  async () => {
  console.log(state.submit_data, 'submit_data')
  const flag = validate()
  // 校验未通过
  if(!flag) return
  try {
    uni.showLoading({ title: '提交中', mask: true })
    await rescovid(state.submit_data)
    // 跳转新冠疫苗订单页面
    uni.navigateTo({ url: '/page/my-service/xinguan/index' })
  } catch (error) {
    console.log(error, 'error')
  }finally {
    uni.hideLoading()
  }
}
const  { time_data, submit_data } = toRefs(state)
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