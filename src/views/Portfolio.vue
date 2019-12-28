<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense >
        <div v-if="stocksWithQuantity.length == 0">Buy stocks to view them here.</div>
        <Stock
          v-for="stock in stocksWithQuantity"
          :stock="stock"
          :key="stock.title"
          type="portfolio"
        />
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import Stock from './Stock.vue'

@Component({
  components: {
    Stock
  }
})
export default class Stocks extends Vue {
  @Getter('getStocks') public stocks:any;
  get stocksWithQuantity () {
    return this.stocks.filter(stock => stock.quantity > 0)
  }
}
</script>
