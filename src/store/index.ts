import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      { id: 1, title: 'BMW', price: 10, quantity: null },
      { id: 2, title: 'Google', price: 10, quantity: null },
      { id: 3, title: 'Apple', price: 10, quantity: null },
      { id: 4, title: 'Twitter', price: 10, quantity: null }
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
    buyStockAction: (state, boughtStock) => {
      let buyingPrice = 0
      state.stocks.forEach(stock => {
        if (stock.id === boughtStock.id) {
          stock.quantity = Number(stock.quantity) + Number(boughtStock.quantity)
          buyingPrice = Number(stock.price) * Number(boughtStock.quantity)
        }
      })
      state.funds = state.funds - buyingPrice
    },
    sellStockAction: (state, soldStock) => {
      let sellingPrice = 0
      state.stocks.forEach(stock => {
        if (stock.id === soldStock.id) {
          stock.quantity = Number(stock.quantity) - Number(soldStock.quantity)
          sellingPrice = Number(stock.price) * Number(soldStock.quantity)
        }
      })
      state.funds = state.funds + sellingPrice
    }
  },
  actions: {
    randomizeStockPrices: ({ commit }) => {
      commit('randomizeStockPrices')
    },
    buyStockAction: ({ commit }, boughtStock) => {
      commit('buyStockAction', boughtStock)
    },
    sellStockAction: ({ commit }, soldStock) => {
      commit('sellStockAction', soldStock)
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
