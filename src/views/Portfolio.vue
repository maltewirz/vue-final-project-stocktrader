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
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Stock from './Stock.vue'
import StockType from '../StockType'

@Component({
  components: {
    Stock
  }
})

export default class Stocks extends Vue {
  @Getter('getStocks') private stocks!: StockType[];
  get stocksWithQuantity () {
    return this.stocks.filter((stock: StockType) => stock.quantity > 0)
  }
}
</script>
