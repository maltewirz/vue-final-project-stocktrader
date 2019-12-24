import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { id: 1, title: 'BMW', price: 10, flex: 6 },
      { id: 2, title: 'Google', price: 10, flex: 6 },
      { id: 3, title: 'Apple', price: 10, flex: 6 },
      { id: 4, title: 'Twitter', price: 10, flex: 6 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCards: state => {
      return state.cards
    }
  }
})
