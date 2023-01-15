<!--
 * @Date: 2023-01-15 13:40:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 19:37:28
 * @Description: 这是体检预约文件
-->
<template>
  <view>
    <!-- 筛选 -->
    <FilterTab :data="phytermData" @toggle-tag="handleToggleTag" @toggle-type="handleToggleType" />
    <!-- 列表 -->
    <block v-for="item in physgetData" :key="item._id">
      <PhyExamItem :data="item" @click-item="handleJump(item._id)" />
    </block>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { phyterm, physget, phyquery } from '@/api/phy-exam'
import { Phyterm, Physget, PhyQuery } from '@/types/phy-exam'
import FilterTab from './components/FilterTab.vue'
import PhyExamItem from './components/PhyExamItem.vue'

let phytermData = ref<Phyterm[]>([]) // 体检筛选条件
let physgetData = ref<Physget[]>([]) // 全部体检套餐
onMounted(async () => {
  const [res1, res2] = await Promise.all([phyterm(), physget()]) as [Phyterm[], Physget[]]
  phytermData.value = res1
  physgetData.value = res2
})

// 筛选体检套餐
const query_data = reactive<PhyQuery>({
  type: '',
  sales: '',
  price: ''
})
const state = {
  DESC: 'desc', // 由高到低
  ASC: 'asc' // 由低到高
}

// -----------------筛选体检套餐--------------------
const getPhyquery = async () => {
  const res = await phyquery(query_data) as any[]
  physgetData.value = res
}

// -----------------切换标签--------------------
const handleToggleTag = (record: Phyterm, index: number) => {
  phytermData.value[index].filter_val[0] = record.filter_val [0] === state.DESC ? state.ASC : state.DESC
  switch(record.query_val) {
    case '销量':    
      query_data.sales = record.filter_val[0]
      break
    case '价格':
      query_data.price = record.filter_val[0]
      break
  }
  getPhyquery()
}

// -----------------切换体检套餐类型--------------------
const handleToggleType = (value: string) => {
  query_data.type = value
  phytermData.value[0].query_val = value
  getPhyquery()
}

// -----------------跳转套餐详情页--------------------
const handleJump = (id: string) => {
  uni.navigateTo({
    url: '/pages/phy-exam/detail/index?id=' + id
  })
}



</script>
<style lang="less" scoped>

</style>