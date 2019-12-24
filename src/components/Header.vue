<template>
  <div>
    <v-toolbar class="ma-2">
      <v-toolbar-items>
        <router-link to="/" tag="button" exact>
          <v-btn text>Stock Trader</v-btn>
        </router-link>
        <router-link to="/" tag="button" exact>
          <v-btn text>Portfolio</v-btn>
        </router-link>
        <router-link to="/stocks" tag="button" exact>
          <v-btn text>Stocks</v-btn>
        </router-link>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>End Day</v-btn>
        <v-btn text>Save/Load</v-btn>
        <v-btn text>Funds: </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  data: () => ({
  })
})
</script>
