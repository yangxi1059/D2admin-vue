import { getProducts, getPageProducts, getProductComments } from '@/api/product'

export default {
  namespaced: true,
  actions: {
    getProducts ({ commit }, payload) {
      commit('getProducts', payload)
    },
    getPageProducts ({ commit }, payload) {
      commit('getPageProducts', payload)
    },
    getComments ({ commit }, payload) {
      commit('getComments', payload)
    }
  },
  mutations: {
    getProducts (state, payload) {
      state.loading = true
      getProducts(payload).then(res => {
        console.log('getProducts:  ', res)
        state.loading = false
        state.products = res.products
      }).catch(err => {
        console.log('err', err)
        state.loading = false
      })
    },
    getComments (state, payload) {
      // 获取全部评价信息或者分页评价信息
      state.loading = true
      console.log(payload)
      getProductComments(payload).then(res => {
        console.log('getComments:  ', res)
        if (res.status === 0) {
          state.loading = false
          state.total = res.total
          if (payload.page) {
            state.pageComments = res.data
          } else {
            state.comments = res.data
          }
        }
      }).catch(err => {
        console.log('err', err)
        state.loading = false
      })
    },
    getPageProducts (state, payload) {
      console.log('page_params: ', payload)
      state.loading = true
      getPageProducts(payload).then(res => {
        console.log('res:  ', res)
        state.loading = false
        state.total = res.total
        state.pageProducts = res.products
      }).catch(err => {
        console.log('err', err)
        state.loading = false
      })
    }
  },
  state: {
    products: [],
    pageProducts: [],
    comments: [],
    pageComments: [],
    loading: false,
    total: 0
  },
  getters: {
    products: (state) => { return state.products },
    pageProducts: (state) => { return state.pageProducts },
    comments: (state) => { return state.comments },
    pageComments: (state) => { return state.pageComments },
    loading: (state) => { return state.loading },
    total: (state) => { return state.total }
  }
}
