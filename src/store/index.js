import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import inquiry from './modules/inquiry'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user, 
    inquiry
  },
  getters
})

export default store
