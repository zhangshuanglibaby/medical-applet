<!--
 * @Date: 2023-01-12 14:49:31
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 15:27:23
 * @Description: 这是****文件
-->
<template>
  <view class="my_picker">
    <view class="my_picker_body">
      <text>{{ title  }}</text>
      <picker :mode="mode" :range="range" class="flex_sub" @change="handleChange">
        <view class="content">
          <slot>请选择</slot>
          <image src="/static/other/gengduo.svg"></image>
        </view>
      </picker>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Event } from '@/types/common'
type Props = {
  modelValue?: string | number,
  mode: 'region' | 'selector',
  title: string,
  range?: any[]
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const handleChange = (event: Event) => {
  let value = event.detail.value
  if(props.mode === 'region') {
    emit('update:modelValue', value.join(' '))
    return
  }
  emit('update:modelValue', (props.range as any)[value])
}

</script>
<style lang="less" scoped>
.my_picker {
  padding: 0 20rpx;
  background-color: #fff;
  .my_picker_body {
    padding: 30rpx 0;
    .flex_center(flex-start);
    border-bottom: 1rpx solid #eee;
  }
  .content {
    .flex_center(flex-end);
    image {
      .wh(30rpx, 30rpx);
      margin-left: 20rpx;
    }
  }
}
</style>