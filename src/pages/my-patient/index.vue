<!--
 * @Date: 2023-01-14 16:58:22
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 19:19:28
 * @Description: 这是****文件
-->
<template>
  <view class="my_patient">
    <view class="patient_item box_style" v-for="(item, index) in list" :key="index">
      <view class="top_wrap">
        <text class="name main_title">{{ item.name }}</text>
        <text class="label">{{ item.relation }}</text>
      </view>
      <view class="bottom_wrap">
        <text>{{ item.sex }}</text>
        <text>{{ item.age }}岁</text>
        <text>{{ item.phone }}</text>
      </view>
    </view>
    <!-- 按钮 -->
    <footer-btn
      submit_label="添加就诊人"
      @cancel="handleCancel"
      @submit="handleSubmit"></footer-btn>
    <!-- 没有数据 -->
    <no-data v-if="showNoData" title="还没有就诊人"></no-data>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { getPatient } from '@/api/patient'
import { GetPatientRes } from '@/types/patient'

let showNoData = ref<boolean>(false)
let list = ref<GetPatientRes[]>([])
// -----------------获取就诊人列表--------------------
onShow(async () => {
  const res = await getPatient() as any[]
  list.value = res
  showNoData.value = !list.value.length
})


// -----------------添加就诊人--------------------
const handleSubmit = () => {
  uni.navigateTo({
    url: '/pages/my-patient/add-patient/index'
  })
}

// -----------------取消--------------------
const handleCancel = () => {
  // 返回上一页
  uni.navigateBack({ delta: 1 })
}

</script>
<style lang="less" scoped>
.my_patient {
  .patient_item {
    text {
      margin-right: 15rpx;
    }
  }
  .top_wrap, .bottom_wrap{
    .flex_center(flex-start);
  }
  .label {
    background-color: #d6f3ff;
    color: #78beff;
    padding: 2rpx 15rpx;
  }
  .bottom_wrap { 
    color: #7c96af;
    margin-top: 20rpx;
  }
}
</style>