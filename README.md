## taro-init-template

基于@taro/next vue 版本的一个项目初始模板

### 版本

- @taro/next 3.0.0-rc.6
- vuex 3.0.0
- vue 2.5.0

### 修改

- 引入 vuex-persistedstate 数据本地持久化
- 新增一些文件夹
- config 添加 alias 快捷路径
- 引入 tabbar 示例
- 引入 taro-axios，解决异步获取 openId 问题
- 引入上报接口错误接口
- 页面使用 onLoad、onReady 生命周期，组件使用 created、mounted 生命周期
- 封装微信一些基本api

