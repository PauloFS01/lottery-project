import Vue from 'vue'
import Vuex from 'vuex'

import utils from './module/util'
import drawn from './module/drawn'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    utils,
    drawn
  }
})