<!--
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 22:35:38
 * @Description: 这是****文件
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { MenuButton } from '@/types/common'
onLaunch(() => {
  console.log("App Launch");
  // 先从本地获取
  const menu_button = uni.getStorageSync('menuButton') as MenuButton
  if(!menu_button) {
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
page {
  background: #f7f7f7;
}
</style>
