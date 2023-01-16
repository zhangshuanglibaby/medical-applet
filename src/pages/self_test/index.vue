<!--
 * @Date: 2023-01-16 19:01:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-16 23:02:24
 * @Description: 这是****文件
-->
<template>
  <view class="self_test">
    <!-- 测评进度 -->
    <view class="progress_box">
      <text>测试进度</text>
      <progress class="progress" 
        :stroke-width="9" 
        :border-radius="10"
        :percent="progress"
        color="#cce3ff" 
        activeColor="#2d8dfe"></progress>
      <text>{{currentQuestion }}/{{ list.length }}</text>
    </view>

    <!-- 题目 -->
    <view class="question box_style main_title">{{ question_data.topic }}</view>

    <!-- 选项 -->
    <view class="topic_view">
      <view class="topic_title">
        <view class="line"></view>
        <view class="title">单选题</view>
      </view>
      <view
        v-for="(item, index) in question_data.options"
        :key="item.son_id"
        class="topic_item"
        hover-class="hover_style"
        :hover-start-time="10"
        :hover-stay-time="80"
        @click="clickTopic(item.son_id)">
        {{ item.title }}
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { onLoad,onShow } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { depressionTopics, prematureTopics, insomniaTopics } from '@/api/self-test'
import { TopicData } from '@/types/self-test'
/**
 * 这个页面包括：抑郁测评、男性功能测评、失眠测评
 */
const typeMap = new Map([
  ['001', { title: '抑郁症', method: depressionTopics}],
  ['002', { title: '早泄', method: prematureTopics}],
  ['003', { title: '失眠', method: insomniaTopics}],
])
let currentType = ref<string>('') // 记录当前的页面类型
let list = ref<TopicData[]>([]) // 存储题目列表
let currentIndex = ref<number>(0) // 记录当前展示题目索引
let topic_ids = ref<string[]>([]) // 存储答题的选项
 onLoad(() => {
  let event = {
    type: '002'
  }
  currentType.value = event.type
  const title = typeMap.get(currentType.value)?.title + '专业测评'
  // 动态设置当前页面的标题
  title && uni.setNavigationBarTitle({ title })
 })

 // ----------初始化--------------
 const init = () => {
  list.value = []
  currentIndex.value = 0
  topic_ids.value = []
 }
 onShow(async () => {
  init()
  const method = typeMap.get(currentType.value)?.method
  if(!method) return
  const res = await method() as TopicData[]
  list.value = res
 })

// ----------当前展示的题目--------------
const question_data = computed(() => {
  return list.value[currentIndex.value] || {}
})

// ----------当前题目的序号--------------
const currentQuestion = computed(() => {
  return currentIndex.value + 1
})

// ----------进度条展示--------------
const progress = computed(() => {
  return (currentQuestion.value / list.value.length ) * 100
})



// ----------点击选项--------------
const clickTopic = (id: string) => {
  if(currentQuestion.value === list.value.length) {
    uni.showLoading({ title: '分析中...', mask: true})
    setTimeout(() => {
      uni.hideLoading()
      // 跳转到结果页
      const params = JSON.stringify({ type: currentType.value, ids: topic_ids.value})
      uni.navigateTo({
        url: '/pages/self_test/result/index?params=' + params
      })
    }, 400)
    console.log('答完题了')
    return
  }
  // 切换下一题
  currentIndex.value ++
  topic_ids.value.push(id)
}

</script>
<style lang="less" scoped>
.self_test {
  height: 100vh;
  background: linear-gradient(to bottom,#d6e8ff 30%,#f2f7fb 55%, #f0f5f9 90%);
  .progress_box {
    .flex_center(flex-start);
    padding: 0 20rpx;
    .progress {
      flex: 1;
      padding: 0 40rpx;
    }
  }
  .question {

  }
  .topic_view {
    background-color: #f3f8ff;
    padding: 20rpx;
    margin: 20rpx;
    border-radius: 10rpx;
    box-shadow: #d6e8ff 0px 0px 23rpx 5rpx;
    .topic_title {
      .flex_align;
      .line {
        .wh(8rpx, 27rpx);
        background-color: #0d7cff;
        margin-right: 10rpx;
      }
    }
    .topic_item {
      margin: 20rpx 0;
      padding: 40rpx 20rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }
    .hover_style {
      background-color: #ebf4ff;
      color: @sub_primary;
    }
  }
}
</style>