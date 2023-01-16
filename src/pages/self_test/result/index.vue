<!--
 * @Date: 2023-01-16 21:04:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 23:05:01
 * @Description: 这是健康自测 -> 测评结果文件
-->
<template>
  <view class="result">
    <view class="header_label">
      <view class="main_title">结果分析</view>
      <view class="desc">本测试及结果由AI得出，仅供参考，不能作为诊断及诊疗的依据</view>
    </view>

    <!-- 测评结果 -->
    <view class="result_content box_style">
      <view class="result_title">{{ result?.scope }} : {{ result?.result }}</view>
      <view class="result_suggest">{{ result?.suggest }}</view>
      <view class="title_bold">测评结果概述:</view>
      <view v-for="(item, index) in result?.outline" :key="index">
        {{ index + 1 }}. {{ item }}
      </view>
      <block v-if="result?.recommend.length">
        <view class="title_bold">AI为你推荐以下科室:</view>
        <view class="recommend" v-for="item in result?.recommend" :key="item.dep_id">
          <view class="recommend_info">
            <view class="title_bold">{{ item.dep_name }}</view>
            <view class="address">{{ item.hospital }}</view>
          </view>
          <button size="small" class="btn" @click="clickGuahao(item.dep_id)">去挂号</button>
        </view>
      </block>
    </view>

    <!-- 底部按钮 -->
    <footer-btn submit_label="再测一次" @submit="handleAgain">
      <template #left>
        <button class="footer_btn" size="small" open-type="share">邀请朋友测一测</button>
      </template>
    </footer-btn>
    <empty-box></empty-box>
  </view>
</template>
<script setup lang="ts">
import { onLoad, onShareAppMessage } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import { depression, premature, insomnia } from '@/api/self-test'
import { Result, ShareData } from '@/types/self-test'
import { shareMessage } from './constant/index'

const typeMaps = new Map([
  ['001', depression],
  ['002', premature],
  ['003', insomnia]
])

let result = ref<Result>() // 存储测评结果
let share_data = ref<ShareData>() // 存储分享内容
onLoad(async (event: any) => {
  const params = JSON.parse(event.params)
  const method = typeMaps.get(params.type)
  if(!method) return
  // 获取测评结果
  const res = await method({value: params.ids}) as Result[]
  result.value = res[0] || {}
  // 赋值分享内容
  share_data.value = shareMessage.find(item => item.type === params.type)
})


// ---------------去挂号------------------
const clickGuahao = (id: string) => {
  uni.redirectTo({
    url: '/pages/doctor/index?id=' + id
  })
}

// ---------------邀请朋友测一测------------------
onShareAppMessage(() => {
  return {
    title: share_data.value?.share_title,
    path: share_data.value?.share_path,
    imageUrl: share_data.value?.share_url
  }
})

// ---------------再测一次------------------
const handleAgain = () => {
  uni.navigateBack({ delta: 1 })
}

</script>
<style lang="less" scoped>
.result {
  height: 100vh;
  background: linear-gradient(to bottom,#d6e8ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .header_label {
    padding: 20rpx;
    .desc {
      color: #333;
      margin-top: 20rpx;
    }
  }
  .result_content {
    > view {
      margin-bottom: 20rpx;
      line-height: 1.5;
    }
    .result_title {
      .sc(40rpx, @primary);
      font-weight: bold;
    }
    .result_suggest {
      color: @primary;
    }
    .title_bold {
      font-weight: bold;
    }
    .recommend {
      .flex_center(space-between);
      background-color: #f4f7fa;
      border-radius: 10rpx;
      padding: 30rpx 20rpx;
      .recommend_info {
        flex: 1;
        padding-right: 20rpx;
      }
      .address {
        color: #bac5cc;
      }
      .btn {
        background-color: #0176ff;
        color: #ffffff;
        font-size: 24rpx;
      }
    }
  }
  .footer_btn {
    width: 40%;
    font-size: 33rpx;
    background-color: #e8f2fe;
    color: #3a75f3;
  }
}
</style>