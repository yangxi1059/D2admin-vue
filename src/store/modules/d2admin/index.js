/*
 * @Author: 杨曦
 * @Date: 2019-10-12 09:47:48
 * @LastEditors: 杨曦
 * @LastEditTime: 2019-11-12 19:22:24
 * @Version: 
 * @Description: 
 */
/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
// require.context自动化获取./modules    只遍历一层
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
  namespaced: true,
  modules // 解构了所有模块
}