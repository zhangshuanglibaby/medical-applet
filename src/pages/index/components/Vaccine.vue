<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-18 23:22:31
 * @Description: 这是首页-疫苗预约文件
-->
<template>
  <view class="vaccine">
    <view class="vaccine-item"
      v-for="(item, index) in data"
      :key="index"
      @click="jumpRoute(index)">
      <image :src="item.image" mode="aspectFit"></image>
      <text>{{ item.title }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Vaccine } from '@/types/index'
type Props = {
  data: Vaccine[]
}
defineProps<Props>()

// ------------点击跳转----------------
const jumpRoute = (index: number) => {
  switch (index) {
    case 0: // 新冠疫苗
      uni.navigateTo({ url: '/pages/xinguan-vaccine/index' })
    break
    case 1: // hpv疫苗
      uni.navigateTo({ url: '/pages/hpv-vaccine/index' })
    break
    case 2: // 核酸检测
      uni.navigateTo({ url: '/pages/nucleic-acid/index' })
    break
    case 3: // 图文咨询
      uni.navigateTo({ url: '/pages/graphics/index' })
    break
  }
}

</script>
<style lang="less" scoped>
.vaccine {
  .flex_center(space-between);
  margin: 40rpx 30rpx;
  .vaccine-item {
    .sc(28rpx, #333);
    .felx_column_center;
    image {
      .wh(50rpx, 50rpx);
      margin-bottom: 20rpx;
    }
  }
}
</style>