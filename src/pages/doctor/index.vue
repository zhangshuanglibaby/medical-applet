<!--
 * @Date: 2023-01-16 14:21:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 13:50:51
 * @Description: 这是****文件
-->
<template>
  <view>
    <!-- 选择日期 -->
    <Filter :data="timeseleData" @all="handleAll" @select="handleSelect" />
    <!-- 医生列表 -->
    <view class="doctor_list"
      v-for="item in list"
      :key="item._id">
      <image class="doctor_image" :src="item.avatar" mode="aspectFill"></image>
      <view class="doctor_info">
        <view class="main_title">{{ item.name }}</view>
        <view class="doctor_label">{{ item.post }}</view>
        <view class="doctor_desc">{{ item.good_at }}</view>
      </view>
      <view class="btn" @click="jumpRoute(item._id)">预约</view>
    </view>
    <!-- 空 -->
    <no-data v-if="show" title="当日没有医生排班"></no-data>
  </view>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { alldlist, timesele, everydlist } from '@/api/registered'
import { Timesele, DoctorList } from '@/types/registered'
import Filter from './components/Filter.vue'

let dep_id = ref<string>('') // 子科室id
let timeseleData = ref<Timesele[]>([]) // 选择医生的日期
let list = ref<DoctorList[]>([]) // 医生列表
let show = ref<boolean>(false) // 是否为空


onLoad(async (event: any) => {
  dep_id.value = event.id
  // 加载选择日期  加载全部医生列表
  const res = await Promise.all([timesele({dep_id: dep_id.value}), alldlist({ dep_id: dep_id.value})])
  timeseleData.value = res[0]
  list.value = res[1]
  show.value = !list.value.length
})

// ---------------获取全部医生列表------------------
const getAllList = async () => {
  const res = await alldlist({ dep_id: dep_id.value}) as DoctorList[]
  list.value = res
  show.value = !list.value.length
}

// ---------------选择全部------------------
const handleAll = () => {
  getAllList()
}

// ---------------选择日期------------------
const handleSelect = async (date: string) => {
  // 按日期筛选医生列表
  const params = {
    dep_id: dep_id.value,
    week: date
  }
  const res = await everydlist(params) as DoctorList[]
  list.value = res
  show.value = !list.value.length
}

// ---------------点击预约------------------
const jumpRoute = (id: string) => {
  uni.navigateTo({
    url: '/pages/doctor/homePage/index?id=' + id
  })
}

</script>
<style lang="less" scoped>
.doctor_list {
  .flex_center(space-between);
  padding: 40rpx 20rpx;
  background-color: #fff;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .doctor_image {
    .wh(150rpx, 150rpx);
    border-radius: 50%;
  }
  .doctor_info {
    flex: 1;
    padding: 0 10rpx;
  }
  .doctor_label, .doctor_desc{
    padding: 5rpx 0;
    color: #b1b2b3;
  }
  .doctor_desc {
    display:-webkit-box;
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis;/*隐藏后添加省略号*/
    -webkit-box-orient:vertical; 
    -webkit-line-clamp:1;
  }
  .btn {
    padding: 8rpx 30rpx;
    border-radius: 30rpx;
    border: 1rpx solid #0176ff;
    color: #0176ff;
  }
}
</style>