/*
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 14:14:53
 * @Description: 这是****文件
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
// import globalComponents from '@/components/global/index'
import EmptyBox from '@/components/global/EmptyBox.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('empty-box', EmptyBox)
  return {
    app,
  };
}
