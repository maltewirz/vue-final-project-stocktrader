import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      { id: 1, title: 'BMW', price: 10, flex: 6 },
      { id: 2, title: 'Google', price: 10, flex: 6 },
      { id: 3, title: 'Apple', price: 10, flex: 6 },
      { id: 4, title: 'Twitter', price: 10, flex: 6 }
    ],
    portfolio: [],
    funds: 10000
  },
  mutations: {
    randomizeStockPrices: state => {
      state.stocks.forEach(stock => {
        stock.price = Math.floor(Math.random() * 100)
      })
    },
    buyStockAction: (state, id) => {
      state.stocks.forEach(stock => {
        if (stock.id === id) {
          state.portfolio.push(stock)
          state.funds = state.funds - stock.price
        }
      })
    }
  },
  actions: {
    randomizeStockPrices: ({ commit }) => {
      commit('randomizeStockPrices')
    },
    buyStockAction: ({ commit }, id) => {
      commit('buyStockAction', id)
    }
  },
  modules: {
  },
  getters: {
    getStocks: state => {
      return state.stocks
    },
    getFunds: state => {
      return state.funds
    }
  }
})
