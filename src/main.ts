/*
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 19:11:40
 * @Description: 这是****文件
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
// import globalComponents from '@/components/global/index'
import EmptyBox from '@/components/global/EmptyBox.vue'
import FooterBtn from '@/components/global/FooterBtn.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('empty-box', EmptyBox)
  app.component('footer-btn', FooterBtn)
  return {
    app,
  };
}
