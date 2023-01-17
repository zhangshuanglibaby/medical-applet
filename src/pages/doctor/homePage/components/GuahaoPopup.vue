<!--
 * @Date: 2023-01-17 15:02:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 16:50:26
 * @Description: 这是医生主页 -> 提交预约弹窗文件
-->
<template>
  <page-container :show="show" @clickoverlay="show = false">
    <view class="content">
      <view class="main_title">请选择预约时间段</view>
      <view class="time">
        <view class="time_item"
          :class="{ check_style: currentIndex === index }"
          v-for="(item, index) in time_arr"
          :key="index"
          @click="clickTime(index)">{{ item }}</view>
      </view>
      <view class="main_title">选择成员</view>
      <view class="member_view">
        <image class="avator" src="/static/other/touxiang.svg" mode="aspectFill"></image>
        <text class="name">{{ name }}</text>
        <text class="label" @click="jumpRoute">{{ name ? '重新选择' : '选择就诊人'}}</text>
      </view>
      <button class="btn" @click="handleSubmit">提交预约</button>
    </view>
  </page-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'

const emit = defineEmits(['submit'])
// --------------显示弹窗----------------
let show = ref<boolean>(false) // 控制弹窗显现
let time_arr = ref<string[]>([]) // 展示时间段
let currentIndex = ref<number>(0)
let name = ref<string>('') // 就诊人姓名
const open = (timeArr: string[]) => {
  show.value = true
  time_arr.value = timeArr
}
defineExpose({ open })

// --------------选择时间段----------------
const clickTime = (index: number) => {
  currentIndex.value = index
}

// --------------选择就诊人----------------
const jumpRoute = () => {
  uni.navigateTo({
    url: '/pages/my-patient/index'
  })
}

// --------------监听store改变------------------
const store = useStore()
store.$subscribe(() => {
  name.value = store.patient.name
})

// --------------提交预约----------------
const handleSubmit = () => {
  const value = {
    the_time: time_arr.value[currentIndex.value],
    patient_id: store.patient._id
  }
  emit('submit', value)
}


</script>
<style lang="less" scoped>
.content {
  padding: 20rpx;
  .main_title {
    text-align: center;
    margin-bottom: 40rpx;
  }
  .time {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40rpx;
    .time_item {
      width: 33.3%;
      text-align: center;
      padding: 20rpx 0;
      box-sizing: border-box;
      color: #0176ff;
      border: 1rpx solid #dfdfdf;
    }
  }
  .member_view {
    .flex_center(space-between);
    margin-bottom: 20rpx;
    .avator {
      .wh(80rpx, 80rpx);
    }
    .name {
      flex: 1;
      padding: 0 40rpx;
      font-weight: bold;
    }
    .label {
      color: #0176ff;
    }
  }
  .btn {
    color: #ffffff;
    background-color: #0176ff;
    border: 1rpx solid #0176ff;
    font-size: 30rpx;
  }
}



</style>