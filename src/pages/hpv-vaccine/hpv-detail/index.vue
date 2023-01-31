<!--
 * @Date: 2023-01-13 14:48:34
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-31 15:11:27
 * @Description: 这是****文件
-->
<template>
  <view>
    <!-- hpv套餐信息 -->
    <HpvInfo :data="hpv_info" />
    <!-- 表单填写 -->
    <MyInput v-model="submit_data.name" title="真实姓名" :placeholder="messageTis.name" />
    <MyInput v-model="submit_data.id_card" title="身份证" :placeholder="messageTis.id_card" />
    <MyPicker v-model="submit_data.gender" title="性别" mode="selector" :range="['男', '女']">
      <text>{{ submit_data.gender || '请选择性别' }}</text>
    </MyPicker>
    <MyPicker v-model="submit_data.born_date" title="出生日期" mode="date">
      <text>{{ submit_data.born_date || '请选择出生日期' }} </text>
    </MyPicker>
    <MyInput v-model="submit_data.phone" title="手机号" :placeholder="messageTis.phone" />
    <!-- 选择套餐 -->
    <HpvPackage :data="hpv_combo_name" attr="combo" @toggle="toggleComboName" />
    <HpvPackage :data="hpv_combo_time" attr="time" @toggle="toggleComboTime" />
    <!-- 提交按钮 -->
    <FooterBtn>
      <view class="total_price">合计: ¥{{ submit_data.price }}</view>
      <view class="submit_btn" @click="handleSubmit">提交</view>
    </FooterBtn>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive, watch } from 'vue'
import { hpvPack, hpvPrice, resHpv } from '@/api/hpv'
import { HpvComboNameData, HpvComboTimeData, ResHpvData } from '@/types/hpv'
import { validatorName, validatorIdNo, validatorPhone } from '@/utils/validator'
import HpvInfo from './components/HpvInfo.vue'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'
import HpvPackage from './components/HpvPackage.vue'

// 提交数据
const submit_data: ResHpvData = reactive({
  name: "",
  id_card: "",
  gender: "",
  born_date: "",
  phone: "",
  combo: "",
  ino_time: "",
  price: 0,
  hpv_name: ""
})
const messageTis = { // 文案提示
  name: "请输入姓名",
  id_card: "请输入身份证",
  gender: "请选择性别",
  born_date: "请选择出生日期",
  phone: "请输入手机号",
  combo: "请选择套餐名称",
  ino_time: "请选择接种时间"
}
// hpv信息
let hpv_info = reactive({
  id: "",
  name: "",
  describe: [''],
  price: ['']
})
let hpv_combo_name = ref<HpvComboNameData>() // 套餐名称
let hpv_combo_time = ref<HpvComboTimeData>() // 接种时间
type HpvPackResData = [HpvComboNameData, HpvComboTimeData]
onLoad(async (event: any) => {
  const { id, name, describe, price } = JSON.parse(event.value)
  hpv_info.id = id
  hpv_info.name = name
  hpv_info.describe = describe
  hpv_info.price = price
  const res = await hpvPack() as HpvPackResData
  hpv_combo_name.value = res[0]
  hpv_combo_time.value = res[1]
})

// -------------选择套餐名称 | 选择接种时间----------------------
let combo_id = ref<string>('')
let time_id = ref<string>('')
const toggleComboName = (record: any) => {
  combo_id.value = record.combo_id
  submit_data.combo = record.combo
}
const toggleComboTime = (record: any) => {
  time_id.value = record.time_id
  submit_data.ino_time = record.time
}
// 监听选中了套餐名称和接种时间 去请求套餐价格
watch([combo_id, time_id], ([combo_id, time_id]) => {
  if(!combo_id || !time_id) {
    return
  }
  getHpvPrice()
})
// 获取套餐价格
type HpvPriceResData = {
  price: number
}
const  getHpvPrice = async () => {
  let params = {
    hpv_id: "8d33255162dc5b22001ef71c302a450b",
    combo_id: combo_id.value,
    time_id: time_id.value
  }
  const res = await hpvPrice(params) as HpvPriceResData[]
  submit_data.price = res[0].price
}


// -----------------提交预约--------------------------
// 表单校验
const validate = () => {
  let flag = true
  // 非空校验
  for(const key of Object.keys(messageTis)) {
    if(!submit_data[key]) {
      flag = false
      uni.showToast({ title: messageTis[key], icon: 'none', duration: 600 })
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
const handleSubmit = async () => {
  if(!validate()) {
    return
  }
  submit_data.hpv_name = hpv_info.name
  uni.showLoading({ title: '提交中', mask: true })
  await resHpv(submit_data)
  setTimeout(() => {
    uni.hideLoading()
    uni.redirectTo({ url: '/pages/order/hpv/index'})
  }, 400)
}

</script>
<style lang="less" scoped>
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
</style>