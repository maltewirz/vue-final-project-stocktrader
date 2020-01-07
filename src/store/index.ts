import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../../firebaseConfig'
import StockType from '../StockType'
import StateType from '../StateType'

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      { id: 1, title: 'BMW', price: 10, quantity: null },
      { id: 2, title: 'Google', price: 10, quantity: null },
      { id: 3, title: 'Apple', price: 10, quantity: null },
      { id: 4, title: 'Twitter', price: 10, quantity: null }
    ],
    funds: 10000
  },

  mutations: {
    randomizeStockPrices: state => {
      state.stocks.forEach((stock: StockType) => {
        stock.price = Math.floor(Math.random() * 100)
      })
    },
    buyStockAction: (state, boughtStock: StockType) => {
      let buyingPrice = 0
      state.stocks.forEach((stock: StockType) => {
        if (stock.id === boughtStock.id) {
          buyingPrice = Number(stock.price) * Number(boughtStock.quantity)
          if (state.funds > buyingPrice) {
            stock.quantity = Number(stock.quantity) + Number(boughtStock.quantity)
            state.funds = state.funds - buyingPrice
          } else {
            alert('Funds not sufficient!')
          }
        }
      })
    },
    sellStockAction: (state, soldStock: StockType) => {
      let sellingPrice = 0
      state.stocks.forEach((stock: StockType) => {
        if (stock.id === soldStock.id) {
          if (stock.quantity >= Number(soldStock.quantity)) {
            stock.quantity = Number(stock.quantity) - Number(soldStock.quantity)
            sellingPrice = Number(stock.price) * Number(soldStock.quantity)
            state.funds = state.funds + sellingPrice
          } else {
            alert(`You can only sell up to ${stock.quantity} stocks`)
          }
        }
      })
    },
    saveInVuex: (state, stocksFromDB: StateType) => {
      state.stocks = stocksFromDB.stocks
      state.funds = stocksFromDB.funds
    }
  },

  actions: {
    randomizeStockPrices: ({ commit }) => {
      commit('randomizeStockPrices')
    },
    buyStockAction: ({ commit }, boughtStock: StockType) => {
      commit('buyStockAction', boughtStock)
    },
    sellStockAction: ({ commit }, soldStock: StockType) => {
      commit('sellStockAction', soldStock)
    },
    saveToDatabase: state => {
      db.collection('stocks')
        .doc('state')
        .set(state.state)
        .then(function () {
          alert('State saved successfully')
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    loadFromDatabase: ({ commit }) => {
      db.collection('stocks')
        .doc('state')
        .get()
        .then(querySnapshot => {
          commit('saveInVuex', querySnapshot.data())
          alert('State loaded successfully')
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
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
