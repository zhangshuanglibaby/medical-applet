<!--
 * @Date: 2023-01-15 19:29:44
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 20:08:51
 * @Description: 这是体检套餐详情文件
-->
<template>
  <view>
    <!-- 头部 -->
    <Header />
    <!-- 体检时间选择 -->
    <!-- <Date /> -->
    <!-- 适用人群 -->
    <Crowd />
    <!-- 套餐项目 -->
    <Project />
  </view>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
// import Date from './components/Date.vue'
import Crowd from './components/Crowd.vue'
import Project from './components/Project.vue'
</script>
<style lang="less" scoped></style>