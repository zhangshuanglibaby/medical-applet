<!--
 * @Date: 2023-01-06 13:06:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-06 22:12:58
 * @Description: 这是****文件
-->
### 环境安装
    通过vue-cli命令行下载项目：npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
    安装依赖 npm install
    运行：npm run dev:mp-weixin 会生成一个 dist文件夹
    打开微信开发者工具，导入/dist/dev/mp-weixin文件夹
登录微信公众平台，通过邮箱注册一个小程序 获取appid

### 开始搭建项目
搭建项目主界面，路由配置
设置底部tabbar
开发首页样式
    使用自定义导航栏
    使用wx.getMenuButtonBoundingClientRect api获取菜单按钮位置
封装request请求
    token需要下载js-base64加密携带在请求头中
设置tsconfig.json 配置，增加baseUrl，和path属性，paths用于设置模块名到基于baseUrl的路径映射