import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testData: '我是数据1'
  },
  mutations: {
    setTestDtaa(state, val){
      state.testData = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
