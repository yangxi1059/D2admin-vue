/*
 * @Author: 杨曦
 * @Date: 2019-10-12 09:47:48
 * @LastEditors: 杨曦
 * @LastEditTime: 2019-11-13 08:57:17
 * @Version: 
 * @Description: 
 */
// Vue
import Vue from 'vue'
import i18n from './i18n'
import App from './App'
// 过滤器
import addZero from '@/util/filter/addZero.js'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// store
import store from '@/store/index'
// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import {
  frameInRoutes
} from '@/router/routes'
// 引入editor富文本
import '../public/static/UE/themes/default/css/ueditor.css'
import '../public/static/UE/ueditor.config.js'
import '../public/static/UE/ueditor.all.min.js'
import '../public/static/UE/lang/zh-cn/zh-cn.js'
// 引入分享功能模块
import {
  shareConfig
} from './util/share/share.js'
Vue.prototype.shareConfig = shareConfig
// 核心插件
Vue.use(d2Admin)
// 引入全局的时间补零过滤器
Vue.filter('addZero', addZero)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created() {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted() {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')