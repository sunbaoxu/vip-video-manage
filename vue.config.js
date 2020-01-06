const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

const address = require('address');
const localhost = address.ip() || 'localhost';

module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  
  publicPath: `/${process.env.VUE_APP_BASE_URL || 'vip-video-manage'}/`, // 构建好的文件输出到哪里

  outputDir: process.env.VUE_APP_BASE_URL || 'vip-video-manage', // 打包文件名称
  assetsDir :'static',
  lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

  runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖

  transpileDependencies: [
    /* string or regex */
  ], 
  // 是否为生产环境构建生成sourceMap?

  productionSourceMap: false, 
  // 调整内部的webpack配置. 

  chainWebpack: (config) => {    
    config.resolve.alias
    .set('$common',resolve('src/commons'))
    .set('$api',resolve('src/api'))

  },

  configureWebpack : {
    // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
    //   filename: path.posix.join('static',`js/[name].[hash].js`),
    //   chunkFilename: path.posix.join('static',`js/[name].[hash].js`)
    // },
  }, 
  css: {
    // 将组件内部的css提取到一个单独的css文件（生产环境:true  开发、测试环境：false）
    // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    extract: process.env.NODE_ENV==="production", 
    // extract: true, 
    // 允许生成 CSS source maps?
    sourceMap: false, 
    // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }

    loaderOptions: {
      sass :{
        data:`
          @import "@/assets/css/common.scss";
        `
        //@import "@/assets/css/vip-video-manage-testB.scss";
      }
    }, 

    modules: false
  }, 

  parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  pwa: {}, // configure webpack-dev-server behavior

  devServer: {
    open: process.platform === "darwin",

    disableHostCheck: false,

    host: localhost,

    port: 8088,

    https: false,

    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

    proxy: null // string | Object

    // before: app => {}
  }, // 第三方插件配置

  pluginOptions: {
    // ...
  }
};
