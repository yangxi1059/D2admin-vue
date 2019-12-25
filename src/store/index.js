import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import product from './modules/product/modules/product'
import data from './modules/data/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    product,
    data
  }
})
