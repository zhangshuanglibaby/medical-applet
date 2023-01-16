<!--
 * @Date: 2023-01-06 16:16:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 14:26:14
 * @Description: 这是科室列表文件
-->
<template>
  <view class="registered">
    <!-- 左列表 -->
    <scroll-view scroll-y="true" class="scroll_left">
      <view class="item"
        :class="{ active: currentId === item._id }"
        v-for="item in list"
        :key="item._id"
        @click="clickDepartment(item._id)">{{ item.dep_ment }}</view>
      </scroll-view>
    <!-- 右列表 -->
    <scroll-view scroll-y="true" class="scroll_right">
       <view class="item"
        v-for="item in children_list"
        :key="item.dep_id"
        @click="clickDepName(item.dep_id)">{{ item.dep_name }}</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { department, reglist } from '@/api/registered'
import { Department, Reglist } from '@/types/registered'

let list = ref<Department[]>([]) // 父科室列表
let currentId = ref<string>('') // 记录当前选中的父科室
let children_list = ref<Reglist[]>() // 父科室下的子科室

onMounted(() => {
  getDepartment()
})

// --------------获取父科室列表---------------------
const getDepartment = async () => {
  const res = await department() as any[]
  list.value = res
  // 请求父科室列表下的子项
  clickDepartment(list.value[0]._id)
}

// --------------点击父科室---------------------
const clickDepartment = async (id: string) => {
  currentId.value = id
  const res = await reglist({ id }) as any[]
  children_list.value = res[0].dep_ment_list
}


// --------------点击子科室---------------------
const clickDepName = (id: string) => {
  uni.navigateTo({
    url: '/pages/doctor/index?id=' + id
  })
}
</script>

<style lang="less" scoped>
.registered {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  .scroll_left {
    width: 200rpx;
    background-color: #f5f5f5;
  }
  .scroll_right {
    flex: 1;
    background-color: #fff;
  }
  .item {
    padding: 25rpx;
  }
  .active {
    background-color: #fff;
    color: @primary;
  }
}
</style>