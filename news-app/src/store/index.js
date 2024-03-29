import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import news from './news'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  paths: ['news']
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    news: {
      namespaced: true,
      ...news
    }
  }
})
