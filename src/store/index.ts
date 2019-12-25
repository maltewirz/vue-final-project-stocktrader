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
    randomizeStockPrices: state => {
      state.cards.forEach(element => {
        element.price = Math.floor(Math.random() * 100)
      })
    }
  },
  actions: {
    randomizeStockPrices: ({ commit }) => {
      commit('randomizeStockPrices')
    }
  },
  modules: {
  },
  getters: {
    getCards: state => {
      return state.cards
    }
  }
})
