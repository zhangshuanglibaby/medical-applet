/*
 * @Date: 2022-12-30 17:51:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-11 15:45:25
 * @Description: 这是****文件
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${path.resolve(__dirname, 'src/style/mixin.less')}";`
      }
    }
  }
});
