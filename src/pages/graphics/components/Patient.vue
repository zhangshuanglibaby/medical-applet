<!--
 * @Date: 2023-01-14 16:36:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:39:23
 * @Description: 这是****文件
-->
<template>
  <view class="patient box_style">
    <view class="main_title">选择就诊人</view>
    <view class="patient_view">
      <image class="avator" src="/static/other/touxiang.svg" mode="widthFix"></image>
      <text class="name">{{ name }}</text>
      <text class="desc" @click="handleClick">{{ name ? '重新选择' : '选择就诊人'}}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const store = useStore()
let name = ref<string>('')

// --------------监听store改变------------------
store.$subscribe(() => {
  name.value = store.patient.name
  emit('update:modelValue', store.patient._id)
})


// --------------选择就诊人------------------
const handleClick = () => {
  uni.navigateTo({
    url: '/pages/my-patient/index'
  })
}

</script>
<style lang="less" scoped>
.patient {
  .patient_view {
    margin-top: 20rpx;
    .flex_center(spaec-between);
    .avator {
      .wh(120rpx, 120rpx);
    }
    .name {
      flex: 1;
      padding: 0 50rpx;
    }
    .desc {
      color: @sub_primary;
    }
  }
}
</style>