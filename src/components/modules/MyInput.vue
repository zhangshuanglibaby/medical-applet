<!--
 * @Date: 2023-01-12 14:19:25
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 15:27:34
 * @Description: 这是自定义输入框文件
-->
<template>
  <view class="my_input">
    <view class="my_input_body">
      <text>{{ title }}</text>
      <input
        :value="modelValue"
        :placeholder="placeholder"
        placeholder-class="input_style"
        @input="$emit('update:modelValue', ($event as any).detail.value)" />
    </view>
  </view>
</template>
<script setup lang="ts">
defineProps(['modelValue', 'title', 'placeholder'])
defineEmits(['update:modelValue'])
</script>
<style lang="less">
.my_input {
  padding: 0 20rpx;
  background-color: #fff;
  .my_input_body {
    padding: 30rpx 0;
    .flex_center(flex-start);
    border-bottom: 1rpx solid #eee;
  }
  input {
    flex: 1;
    text-align: right;
  }
  .input_style {
    color: #e4e4e4;
  }
}
</style>