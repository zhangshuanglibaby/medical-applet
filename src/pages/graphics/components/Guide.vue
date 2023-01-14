<!--
 * @Date: 2023-01-14 13:18:08
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 14:55:46
 * @Description: 这是图文咨询 -> 需要医生指导用药文件
-->
<template>
  <view class="guide box_style">
    <checkbox-group @change="handleChange">
      <label>
        <checkbox value="guide" checked="true" color="#0176ff" />需要医生指导用药
      </label>
    </checkbox-group>
  </view>
</template>
<script setup lang="ts">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

// 勾选
const handleChange = (event: { detail: { value: []}}) => {
  emit('update:modelValue', !!event.detail.value.length)
}
</script>
<style lang="less" scoped>
</style>