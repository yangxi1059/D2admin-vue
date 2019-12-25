var getdata
export default {
  namespaced: true,
  actions: {
    getdata ({ commit }, payload) {
      commit('getdata', payload)
    }
  },
  mutations: {
    'getdata': (state, payload) => state.getdata = payload
  },
  state: {
    getdata
  },
  getters: {
    getdata: (state) => { return state.getdata }
  }
}
