<!--
 * @Date: 2023-01-08 09:37:48
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 09:43:54
 * @Description: 这是新冠疫苗预约 -> 底部按钮文件
-->
<template>
  <view class="submit">
    <button>取消</button>
    <button>提价预约</button>
  </view>
</template>
<style scoped>
.submit {
  background-color: #ffffff;
  padding: 20rpx 0 68rpx 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  z-index: 99;
}
.submit button {
  width: 40%;
  text-align: center;
}
.submit button:nth-child(1){
  background-color: #e8f2fe;
  color: #3a75f3;
}
.submit button:nth-child(2){
  background-color: #2c76ef;
  color: #ffffff;
}
</style>