<!--
 * @Date: 2023-01-06 13:06:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 13:06:12
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
    样式用到了v-bind新的语法
封装request请求
    token需要下载js-base64加密携带在请求头中
设置tsconfig.json 配置，增加baseUrl，和path属性，paths用于设置模块名到基于baseUrl的路径映射

### 完成首页开发

### 新冠疫苗预约表单提交

### 引入全局的less样式
下载less less-loader依赖
在vite.config.ts 配置
`
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${path.resolve(__dirname, 'src/style/mixin.less')}";`
      }
    }
  }
`
### 登陆页
  调用uni.getUserInfo 获取用户信息
  调用uni.login 获取code
  将返回的登陆信息缓存到本地 返回上一页

### 需要优化的地方
封装按钮公共组件
封装空的公共组件
封装订单的item组件
二次封装表单的 input、picker组件
整理下样式 抽离公用的
封装图片上传的组件
体检套餐的筛选条件样式需要优化
可以从组件中 export导出类型声明
订单列表的样式可以抽离组件
取消预约功能 可以使用hook