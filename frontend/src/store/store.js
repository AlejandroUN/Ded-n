//import Vue from 'vue'
import { createApp } from 'vue'
import App from '../App.vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

createApp(App).use(Vuex).mount('#app')
//Vue.use(Vuex)

export default new Vuex.Store({
	// You can never modified the state
  strict: true,  
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // In mutation goes the same names that actions
  // To invoque a mutation you need an action
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {

    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
