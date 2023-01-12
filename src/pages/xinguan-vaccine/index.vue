<!--
 * @Date: 2023-01-08 08:53:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 15:26:56
 * @Description: 这是新冠疫苗预约文件
-->
<template>
  <view>
    <MyInput title="姓名" placeholder="请输入姓名" />
    <MyInput title="身份证" placeholder="请输入身份证" />
    <MyInput title="手机号" placeholder="请输入手机号" />
    <MyInput title="姓名" placeholder="请输入姓名" />
    <MyPicker mode="region" title="现居住地址">
      <text>请选择现居住地址</text>
    </MyPicker>
    <MyInput title="现居住详细地址" placeholder="请输入现居住详细地址" />
    <MyPicker mode="selector" title="疫苗人群分类" :range="selector_data">
      <text>请选择疫苗人群分类</text>
    </MyPicker>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'


//选择疫苗人群分类
let selector_data = ref(['医疗卫生人员','卫生系统内工作的其他人员','因公出国人员',
'对外劳务派遣人员','留学生','因私出国人员','海关边检人员','公安系统,消防人员',
'党政机关,事业单位人员','社区工作者','教育工作者','小学和中学学生','其他人员'
])
</script>
<style>
</style>