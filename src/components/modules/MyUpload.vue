<!--
 * @Date: 2023-01-14 14:59:39
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 00:37:43
 * @Description: 这是上传图片文件
-->
<template>
  <view class="upload">
    <!-- 图片 -->
    <view class="upload_image" v-for="(item, index) in fileList" :key="index">
      <image :src="item" mode="aspectFill"></image>
      <icon class="icon_cancel" type="cancel" size="20" @click="handleDelete(item)"></icon>
    </view>
    <!-- 添加按钮 -->
    <view class="upload_image" @click="handleUpload">
      <image src="/static/other/shuxing-img.png"></image>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { uploadPictureURl } from '@/api/graphics'
import { uploadImag } from '@/utils/common'
type Props = {
  modelValue: string[],
  url?: string
}
const props = withDefaults(defineProps<Props>(), {
  url: uploadPictureURl
})
const emit =  defineEmits(['update:modelValue'])

let fileList = ref<string[]>([])

// --------------点击上传---------------
const handleUpload = async () => {
  const res = await uploadImag({ url: props.url, success_tips: '上传中', error_tips: '上传失败'}) as string
  fileList.value.push(res)
  emit('update:modelValue', fileList.value)
}

// --------------点击删除---------------
const handleDelete = (file: string) => {
  // 找到对应的文件
  const index = fileList.value.findIndex(item => item === file)
  fileList.value.splice(index, 1)
}

</script>
<style lang="less" scoped>
.upload {
  display: flex;
  flex-wrap: wrap;
  .upload_image {
    position: relative;
    width: calc(33.33% - 10rpx*2);
    height: 200rpx;
    margin: 10rpx;
    > image {
      .wh(100%, 100%);
    }
    .icon_cancel {
      position: absolute;
      top: -14rpx;
      right: -20rpx;
      z-index: 10;
    }
  }
}
</style>