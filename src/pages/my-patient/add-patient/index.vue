<!--
 * @Date: 2023-01-14 17:25:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 18:29:41
 * @Description: 这是添加就诊人文件
-->
<template>
  <view class="add_patient">
    <!-- 身份证识别 -->
    <view class="ai_card box_style" @click="handleUpload">
      <image class="icon_image" src="/static/other/AI-shibie.svg" mode="widthFix"></image>
      <text class="ai_card_label">身份证智能识别</text>
    </view>
    <!-- 表单填写 -->
    <MyInput title="真实姓名" :placeholder="message_tips.name" />
    <MyPicker title="性别" mode="selector" :range="['男', '女']">
      <text>请选择性别</text>
    </MyPicker>
    <MyPicker title="出生日期" mode="date">
      <text>请选择出生日期</text>
    </MyPicker>
    <MyPicker title="成员关系" mode="selector" :range="['自己','父母','兄妹']">
      <text>请选择与成员关系</text>
    </MyPicker>
    <MyInput title="身份证" :placeholder="message_tips.id_card" />
    <MyInput title="手机号" :placeholder="message_tips.phone" />
    <!-- 按钮 -->
    <footer-btn submit_label="确认添加"></footer-btn>
  </view>
</template>
<script setup lang="ts">
import { uploadImag } from '@/utils/common'
import { aiCard } from '@/api/graphics'
import MyInput from '@/components/modules/MyInput.vue'
import MyPicker from '@/components/modules/MyPicker.vue'

// 提示语
const message_tips = {
  name: '请输入姓名',
  sex: '请选择性别',
  born: '请选择出生日期',
  relation: '请选择成员关系',
  id_card: '请输入身份证',
  phone: '请输入手机号'
}


// ----------------身份证智能识别-----------------
const handleUpload = async () => {
  const res = await uploadImag({ url: aiCard, success_tips: '识别中', error_tips: '识别失败'})
  console.log(res, 'resre')
}

</script>
<style lang="less" scoped>
.add_patient {
  .ai_card {
    .flex_center(flex-start);
    .icon_image {
      .wh(80rpx, 80rpx);
      margin-right: 20rpx;
    }
    .ai_card_label {
      font-size: 34rpx;
    }
  }
}
</style>