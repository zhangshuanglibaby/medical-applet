<!--
 * @Date: 2023-01-06 16:16:58
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-17 22:35:54
 * @Description: 这是医生课堂文件
-->
<template>
  <view class="video" v-for="(item, index) in list" :key="item._id">
    <view class="video_area">
      <video
      :src="item.video_url"
      :id="item._id"
      object-fit="cover"
      :controls="item.controls"
      :title="item.video_title"
      :show-center-play-btn="false"></video>
      <view class="video_title">{{ item.video_title }}</view>
      <image
        v-if="item.play_but"
        class="player_image"
        src="/static/other/video-bofang.png"
        mode="aspectFill"
        @click="startPlay(index,item._id)"></image>
    </view>
    <view class="video_name">
      <image class="avatar" :src="item.avatar" mode="widthFix"></image>
      <view>{{ item.name }}</view>
    </view>
  </view>
  <!-- 加载图标 -->
  <view v-if="show_loading"  class="loading">
    <image class="load_image" src="/static/other/loading.svg"></image>
  </view>
</template>

<script setup lang="ts">
import { onShow, onReachBottom } from '@dcloudio/uni-app'
import { onMounted, ref } from 'vue'
import { videoList } from '@/api/video'
import { VideoList } from '@/types/video'

let list = ref<VideoList[]>([]) // 视频列表
let video_id = ref<string>('') // 视频id
let video_index = ref<number>(-1)
let page = ref<number>(0) // 页码
let show_loading = ref<boolean>(false)

onShow(() => {
  // 防止页面回退 还有视频播放
  if(video_id.value) {
    uni.createVideoContext(video_id.value).pause()
  }
})
// ---------------获取短视频数据-----------------
onMounted(() => {
  getVideoList()
})
const getVideoList = async () => {
  const res = await videoList({ page: page.value}) as any[]
  list.value = [...list.value, ...res]
  show_loading.value = false
}
// 监听往下滑加载
onReachBottom(() => {
  show_loading.value = true
  page.value++
  getVideoList()
})

// ---------------点击播放-----------------
const startPlay = (index: number, id: string) => {
  list.value[index].controls = true
  list.value[index].play_but = false
  playVideo(index, id)
}
// 处理视频的播放
const playVideo = (index: number, id: string) => {
  const videoCtx = uni.createVideoContext(id)
  // 第一次播放
  if(video_id.value === '') {
    video_id.value = id
    video_index.value = index
    videoCtx.play()
    return
  }
  // 存在已经播放的 需要把上一个视频停止
  if(video_id.value !== id) {
    pausePlay()
  }
  setTimeout(() => {
    videoCtx.play()
    video_id.value = id
    video_index.value = index  
  }, 700);
}

// 暂停视频
const pausePlay = () => {
  uni.createVideoContext(video_id.value).pause()
  list.value[video_index.value].controls = false
  list.value[video_index.value].play_but = true
}

</script>

<style lang="less" scoped>
.video {
  background-color: #ffffff;
  margin-bottom: 30rpx;
  .video_area {
    height: 400rpx;
    position: relative;
    video {
      .wh(100%, 100%);
    }
  }
  .video_title {
    .absolute_top_left(20rpx, 20rpx);
    z-index: 99;
    color: #ffffff;
    font-size: 35rpx;
    font-weight: bold;
  }
  .player_image {
    .wh(100rpx, 100rpx);
    .position_center;
  }
  .video_name {
    .flex_align;
    padding: 20rpx;
    .avatar {
      .wh(40rpx, 40rpx);
      border-radius: 50%;
      margin-right: 20rpx;
    }
  }
}
.loading {
  height: 150rpx;
  .flex_center;
}
.load_image {
  .wh(70rpx, 70rpx);
  animation: xuanzhuan 1s infinite linear;
}
@keyframes xuanzhuan {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>