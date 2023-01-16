<!--
 * @Date: 2023-01-16 14:21:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 17:43:44
 * @Description: 这是****文件
-->
<template>
  <view>
    <!-- 选择日期 -->
    <Filter :data="timeseleData" @all="handleAll" @select="handleSelect" />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { alldlist, timesele } from '@/api/registered'
import { Timesele } from '@/types/registered'
import Filter from './components/Filter.vue'

let dep_id = ref<string>('') // 子科室id
let timeseleData = ref<Timesele[]>([]) // 选择医生的日期
// let list = ref<>
onLoad(async (event: any) => {
  dep_id.value = event.id
  const res = await timesele({dep_id: dep_id.value}) as Timesele[]
  timeseleData.value = res
  // 加载全部医生列表
  await alldlist({ dep_id: dep_id.value})
})

// ---------------选择全部------------------
const handleAll = () => {

}

// ---------------选择日期------------------
const handleSelect = (date: string) => {
  
}



</script>
<style lang="less" scoped></style>