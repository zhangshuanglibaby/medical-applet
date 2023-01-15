<!--
 * @Date: 2023-01-15 19:48:12
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 21:03:33
 * @Description: 这是体检详情 -> 套餐项目文件
-->
<template>
  <view class="project box_style">
    <view class="sub_title">套餐项目</view>
    <view class="group" v-for="(group, index) in data" :key="index">
      <view class="title box_class">{{ group.title }}</view>
      <view class="group_item" v-for="(item, item_index) in group.content" :key="item_index">
        <view class="project_name box_class">{{ item.thing }}</view>
        <view class="project_content box_class">{{ item.details }}</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { Project } from '@/types/phy-exam'

type Props ={
  data: Project[]
}
defineProps<Props>()


</script>
<style lang="less" scoped>
.project {
  .box_class {
    background-color: #f0f2f8;
    border-radius: 10rpx;
  }
  .group {
    .title {
      padding: 20rpx 0;
      font-weight: bold;
      margin: 20rpx 0;
      text-align: center;
    }
    .group_item {
      display: flex;
      justify-content: space-between;
    }
    .project_name, .project_content {
      .flex_center;
      padding: 20rpx 10rpx;
      margin: 5rpx;
    }
    .project_name {
      width: 200rpx;
    }
    .project_content {
      flex: 1;
    }
  }
}

</style>