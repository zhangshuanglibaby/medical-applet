<!--
 * @Date: 2023-01-15 21:39:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 22:13:41
 * @Description: 这是****文件
-->
<template>
  <page-container :show="show" @clickoverlay = "show = false">
    <view class="member">
      <view class="main_title title">选择成员</view>
      <view class="member_info">
        <image class="avator" src="/static/other/touxiang.svg" mode="widthFix"></image>
        <text class="name">{{ store.patient.name }}</text>
        <text class="label" @click="handleClickPatient">{{ store.patient.name ? '重新选择' : '选择就诊人'}}</text>
      </view>
      <button class="btn" size="small" @click="handleSubmit">提交预约</button>
    </view>
  </page-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'submit'])

// ---------------展示弹窗-----------------
let show = ref<boolean>(false)
const open = () => {
  show.value = true
}
defineExpose({ open })

// -----------------监听选择成员-------------------
const store = useStore() // 获取store的数据
store.$subscribe(() => {
  emit('update:modelValue', store.patient._id)

})

// ---------------点击选择成员-----------------
const handleClickPatient = () => {
  uni.navigateTo({
    url: '/pages/my-patient/index'
  })
}

// ---------------点击选择成员-----------------
const handleSubmit = () => {
  emit('submit')
}

</script>
<style lang="less" scoped>
.member {
  height: 400rpx;
  .title {
    padding: 20rpx;
    text-align: center;
  }
  .member_info {
    .flex_center(flex-start);
    padding: 20rpx;
    .avator {
      .wh(80rpx, 80rpx);
    }
    .name {
      flex: 1;
      padding: 0 40rpx;
    }
    .label {
      color: @sub_primary;
    }
  }
  .btn {
    background-color: @primary;
    color: #fff;
    margin: 20rpx;
    font-size: 30rpx;
  }
}


</style>