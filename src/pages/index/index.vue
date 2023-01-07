<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-07 17:39:29
 * @Description: 这是首页文件
-->
<template>
  <view class="index">
    <!-- 自定义导航 -->
    <view class="nav-gation">
       <view class="nav-top"></view>
       <view class="nav-height">某某省第一人民医院</view>
    </view>
    <view class="yuyue">
      <image mode="aspectFill" src="https://diancan-1252107261.cos.accelerate.myqcloud.com/yiliao/nav-yiyu.png"></image>
    </view>
    <!-- 疫苗预约 -->
    <VaccineCom :list="vaccine" />
    <!-- 挂号和体检 -->
    <ReserveCom :list="reserve" />
    <!-- 热门挂号 -->
    <PopularCom :list="popular" />
    <!-- 健康自测 -->
    <SelfTestCom :list="self_test" />
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref} from 'vue'
import { frontPage } from '@/api/index'
import { Vaccine, Reserve, Popular, SelfTest } from '@/types/index'
// 组件
import VaccineCom from './components/Vaccine.vue'
import ReserveCom from './components/Reserve.vue'
import PopularCom from './components/Popular.vue'
import SelfTestCom from './components/SelfTest.vue'

let menu_top = ref<string>('') // 按钮距离顶部的距离
let menu_height = ref<string>('') // 按钮距高度
let vaccine  = ref<Vaccine[]>([]) // 首页第一项数据 疫苗预约
let reserve  = ref<Reserve[]>([]) // 首页第二项数据 挂号和体检
let popular  = ref<Popular[]>([]) // 首页第三项数据 热门挂号
let self_test  = ref<SelfTest[]>([]) // 首页第四项数据 健康自测

// 获取页面数据
const pageData = async () => {
  const [ res1, res2, res3, res4 ] = await frontPage() as any
  vaccine.value = res1.vaccine
  reserve.value = res2.reserve
  popular.value = res3.popular
  self_test.value = res4.self_test
}

onMounted(() => {
  const { top, height } = uni.getStorageSync('menuButton') as { top: number, height: number}
  menu_top.value = top + 'px'
  menu_height.value = height + 'px'
  pageData()
})

</script>

<style scoped>
.index {
  padding-bottom: 40rpx;
}
.nav-gation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.nav-gation .nav-top{
  height: v-bind('menu_top');
}
.nav-gation .nav-height {
  height: v-bind('menu_height');
  line-height: v-bind('menu_height');
  padding-left: 20rpx;
  color: #fff;
  font-weight: bold;
  font-size: 35rpx;
}

.yuyue image {
  display: block;
  width: 100%;
  height: 550rpx;
}
</style>
