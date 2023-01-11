<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-11 15:43:45
 * @Description: 这是****文件
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  // 先从本地获取
  const menuButton = uni.getStorageSync('menuButton')
  if(!menuButton) {
    // 无数据 再获取
    const res = uni.getMenuButtonBoundingClientRect()
    // 存储
    uni.setStorageSync('menuButton', res)
  }
  
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="less">
// @import url('@/syle/mixin.less');
</style>
