const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');//自动导入组件无需在main.js中配置
const ComponentsPlugin = require('unplugin-vue-components/webpack');//自动导入组件无需在main.js中配置
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    host:'localhost',
    port:8080
  },
  //自动导入组件无需在main.js中配置
  /* configureWebpack:{
    plugins:[
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  } */
})
