<!--
 * @Date: 2023-01-12 19:10:29
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 22:36:15
 * @Description: 这是公用的底部按钮文件
-->
<template>
  <view class="footer_btn">
    <slot>
      <slot name="left">
        <button class="btn" size="small" @click="$emit('cancel')">{{ cancel_label }}</button>
      </slot>
      <button class="btn" size="small" @click="$emit('submit')">{{ submit_label }}</button>
    </slot>
  </view>
</template>
<script setup lang="ts">
type Props = {
  cancel_label?: string, // 取消文案
  submit_label?: string, // 确认文案
}
withDefaults(defineProps<Props>(), {
  cancel_label: '取消',
  submit_label: '提交'
})
defineEmits(['cancel', 'submit'])

</script>
<style lang="less" scoped>
.footer_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 20rpx 0 68rpx 0;
  z-index: 99;
  .flex_center(space-between);
  .btn {
    width: 40%;
    font-size: 33rpx;
    &:first-child {
      background-color: #e8f2fe;
      color: #3a75f3;
    }
    &:last-child {
      background-color: #2c76ef;
      color: #ffffff;
    }
  }
}
</style>