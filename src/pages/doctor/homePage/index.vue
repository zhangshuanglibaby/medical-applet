<!--
 * @Date: 2023-01-17 13:44:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 16:54:34
 * @Description: 这是选择医生 -> 医生主页文件
-->
<template>
  <view class="home_page">
    <!-- 医生信息 -->
    <DoctorInfo :data="state.doctorhome_data" />
    <!-- 挂号 -->
    <Guahao :data="state.doctorhome_data.App_ment" @select="handleSelect" />
    <!-- 提交预约弹窗 -->
    <GuahaoPopup ref="guahaoPopup" @submit="handleSubmit" />
    <!-- 提示 -->
    <view class="prompt">
      <text>重要提示:</text>
      <text>1.本次预约就诊当天不可取消预约,如需取消,请在就诊前一天的24:00之前操作,累计取消或爽约三次可能会被列入医院黑名单,请按需预约</text>
      <text>2.预约挂号暂不支持医保支付,若本次挂号使用手机在线支付,就诊过程中的门诊检验检查,处方费用可能不支持医保支付</text>
    </view>
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive } from 'vue'
import { doctorhome, regappoin } from '@/api/registered'
import { DoctorHome, Regappoin, Time } from '@/types/registered'
import DoctorInfo from './components/DoctorInfo.vue'
import Guahao from './components/Guahao.vue'
import GuahaoPopup from './components/GuahaoPopup.vue'
type Data = {
  doctorhome_data: DoctorHome
  submit_data: Regappoin
}
const state = reactive<Data>({
  doctorhome_data: { // 挂号医生主页信息
    App_ment: [],
    avatar: '',
    cost: 0,
    good_at: '',
    hospital: '',
    name: '',
    post: '',
    _id: ''
  },
  submit_data: { // 提交挂号预约
    week: "", // 就诊日期
    the_time: "", // 时间段
    when: 0, // 上午/下午
    _id: "", // 医生id标识
    patient_id: "" // 就诊人id标识
  }
})
onLoad(async (event: any) => {
  state.submit_data._id = event.id
  const res = await doctorhome({_id: event.id}) as DoctorHome[]
  state.doctorhome_data = res[0]
})


// -------------点击挂号预约----------------
const guahaoPopup = ref()
const handleSelect = (value: { week: string, time: Time}) => {
  state.submit_data.week = value.week
  state.submit_data.when = value.time.when
  // 打开提交预约弹窗
  guahaoPopup.value.open(value.time.the_time)
}

// -------------提交预约----------------
const handleSubmit = async (value: { the_time: string, patient_id: string }) => {
  state.submit_data.the_time = value.the_time
  state.submit_data.patient_id = value.patient_id
  uni.showLoading({ title: '提交中', mask: true})
  await regappoin(state.submit_data)
  uni.hideLoading()
  setTimeout(() => {
    uni.redirectTo({
      url: '/pages/order/guahao/index'
    })
  }, 400)
}

</script>
<style lang="less" scoped>
.home_page {
  height: 100vh;
  background: linear-gradient(to bottom,#e8f4ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .prompt text {
    display: block;
    .sc(26rpx, #636468);
    padding: 10rpx 20rpx;
    line-height: 1.5;
  }
}


</style>