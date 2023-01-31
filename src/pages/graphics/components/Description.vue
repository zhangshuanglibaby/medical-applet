<!--
 * @Date: 2023-01-14 14:20:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-31 23:29:44
 * @Description: 这是图文咨询 -> 描述病情文件
-->
<template>
  <view class="description box_style">
    <view class="main_title title">请详细描述你的病情</view>
    <textarea 
      placeholder="为了更好获得医生帮助,请尽可能详细描述病情"
      :maxlength="300"
      placeholder-class="textarea_color"
      @input="$emit('update:modelValue', ($event as any).detail.value)"></textarea>
  </view>
</template>
<script setup lang="ts">
defineProps(['modelValue'])

</script>
<style lang="less" scoped>
.description {
  .title {
    padding-bottom: 20rpx;
  }
  /deep/.textarea_color {
    color: #00c8c8;
  }
}
</style>