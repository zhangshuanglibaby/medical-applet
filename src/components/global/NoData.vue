<!--
 * @Date: 2023-01-12 22:44:07
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 22:49:19
 * @Description: 这是空数据文件
-->
<template>
  <view class="no_data">
    <image src="/static/other/kongshuju.jpg" mode="widthFix"></image>
    <view>{{ title }}</view>
  </view>
</template>
<script setup lang="ts">
type Props = {
  title: string
}
withDefaults(defineProps<Props>(), {
  title: '没有数据'
})
</script>
<style lang="less">
.no_data {
  .felx_column_center;
  padding-top: 200rpx;
  color: #858585;
  image {
    .wh(230rpx, 230rpx);
  }
}
</style>