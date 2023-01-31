<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-31 15:10:20
 * @Description: 这是首页文件
-->
<template>
  <view class="index">
    <!-- 自定义导航栏 -->
    <NavigationBar v-bind="menu_button" />
    <!-- 疫苗预约 -->
    <VaccineCom :data="vaccine" />
    <!-- 挂号和体检 -->
    <ReserveCom :data="reserve" />
    <!-- 热门挂号 -->
    <PopularCom :data="popular" />
    <!-- 健康自测 -->
    <SleftTestCom :data="self_test" />
    <!-- 占位盒子 -->
    <empty-box></empty-box>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive ,onMounted } from 'vue'
import { frontPage } from '@/api/index'
import { MenuButton } from '@/types/common'
import { Vaccine, Reserve, Popular, SelfTest } from '@/types/index'
import NavigationBar from './components/NavigationBar.vue'
import VaccineCom from './components/Vaccine.vue'
import ReserveCom from './components/Reserve.vue'
import PopularCom from './components/Popular.vue'
import SleftTestCom from './components/SleftTest.vue'

const menu_button: MenuButton = reactive({
  top: 0, //胶囊按钮距离顶部的高度
  height: 0 //胶囊按钮的高度
})

let vaccine = ref<Vaccine[]>([]) // 疫苗预约数据
let reserve = ref<Reserve[]>([]) // 挂号和体检
let popular = ref<Popular[]>([]) // 热门挂号
let self_test = ref<SelfTest[]>([]) // 健康自测

// 处理自定义导航栏位置
const getMenuButtonInfo = () => {
  // 从本地获取右上角按钮的微信信息
  const info = uni.getStorageSync('menuButton') as MenuButton
  menu_button.top = info.top + 'px'
  menu_button.height = info.height + 'px'
}

// 获取首页数据
const getFrontPage = async () => {
  const [res1, res2, res3, res4 ] = await frontPage()
  vaccine.value = res1.vaccine
  reserve.value = res2.reserve
  popular.value = res3.popular
  self_test.value = res4.self_test
}

onMounted(() => {
  getMenuButtonInfo()
  getFrontPage()
})
</script>

<style scoped>
</style>
