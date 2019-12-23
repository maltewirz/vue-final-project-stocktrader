<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Stock Trader</v-toolbar-title>
      <v-toolbar-items>
        <v-btn text>Portfolio</v-btn>
        <v-btn text>Stocks</v-btn>
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
