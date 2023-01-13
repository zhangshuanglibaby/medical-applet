<!--
 * @Date: 2023-01-13 13:41:48
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-13 14:51:10
 * @Description: 这是****文件
-->
<template>
  <view class="hpv_vaccine">
    <image src="https://qita-1252107261.cos.ap-chengdu.myqcloud.com/yiliao/gongjinai.jpg" mode="aspectFill"></image>
    <!-- 筛选导航 -->
    <MyTab :list="hpv_select" attr="name" @toggle="handleToggle" />
    <!-- 疫苗列表 -->
    <view class="hpv_item box_style" v-for="item in show_hpv_list" :key="item._id">
      <view class="_hpv_info">
        <text class="main_title">{{ item.name }}</text>
        <view class="hpv_tag" v-for="(tag, tagIndex) in item.describe" :key="tagIndex">
          <text>{{ tag }}</text>
        </view>
        <view class="hpv_price">¥{{ item.price[0] }}-¥{{ item.price[1] }}</view>
      </view>
      <view class="reserve_btn" @click="handleReserve(item)">去预约</view>
    </view>
    <!-- 空盒子 -->
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onMounted, ref, computed} from 'vue'
import { otuhpv } from '@/api/hpv'
import { HpvListData, HpvSelectData } from '@/types/hpv'
import MyTab from '@/components/modules/MyTab.vue'

// 导航栏筛选
let hpv_select = ref<HpvSelectData[]>([])
// 全部疫苗列表
let hpv_list = ref<HpvListData[]>([])
type ResData = {
  hpv_list: any[],
  hpv_select: any[]
}
onMounted(async () => {
  const res = await otuhpv() as ResData[]
  hpv_select.value = res[0].hpv_select
  hpv_list.value = res[0].hpv_list
})

// 筛选导航
let currentTag = ref<HpvSelectData>()
const handleToggle = (record: HpvSelectData) => {
  currentTag.value = record
}
// 展示的列表
const show_hpv_list = computed(() => {
  // 如果是全部 则不做筛选
  if(currentTag.value?.name === '全部' || !currentTag.value?.name) {
    return hpv_list.value
  }
  // 筛选
  return hpv_list.value.filter(item => item.hpv_id === currentTag.value?._id)
})

// 去预约
const handleReserve = (record:HpvListData ) => {
  let params = {
    id: record._id,
    name: record.name,
    price: record.price,
    describe: record.describe
  }
  uni.navigateTo({
    url: '/pages/hpv-vaccine/hpv-detail/index?value=' + JSON.stringify(params)
  })
}

</script>
<style lang="less">
.hpv_vaccine {
  image {
    .wh(100%, 350rpx);
  }
  .hpv_item {
    .flex_center(space-between);
    .hpv_tag {
      .flex_center(flex-start);
      > text {
        background-color: #f4f6fa;
        padding: 7rpx;
        font-size: 25rpx;
        margin: 10rpx 10rpx 10rpx 0;
      }
    }
    .hpv_price {
      font-weight: bold;
      color: #ff5f2c;
    }
    .reserve_btn {
      align-self: flex-end;
      background-color: #0d7cff;
      padding: 15rpx 30rpx;
      border-radius: 40rpx;
      color: #ffffff;
    }
  }
}
</style>