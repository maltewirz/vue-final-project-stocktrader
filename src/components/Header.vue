<template>
  <div>
    <v-toolbar class="ma-2">
      <v-toolbar-items>
        <router-link to="/" tag="button" exact>
          <v-btn text>Stock Trader</v-btn>
        </router-link>
        <router-link to="/portfolio" tag="button" exact>
          <v-btn text>Portfolio</v-btn>
        </router-link>
        <router-link to="/stocks" tag="button" exact>
          <v-btn text>Stocks</v-btn>
        </router-link>
        <router-link to="/registration" tag="button" exact>
          <v-btn text>Registration</v-btn>
        </router-link>
        <router-link to="/login" tag="button" exact>
          <v-btn text>Login</v-btn>
        </router-link>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="randomizeStockPrices">End Day</v-btn>
        <v-btn text @click="saveToDatabase">Save</v-btn>
        <v-btn text @click="loadFromDatabase">Load</v-btn>
        <v-btn text>Funds: {{ funds | currency }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Header extends Vue {
  @Action('randomizeStockPrices') randomizeStockPrices:any
  @Action('saveToDatabase') saveToDatabase:any
  @Action('loadFromDatabase') loadFromDatabase:any
  @Getter('getFunds') funds:any
}
</script>
