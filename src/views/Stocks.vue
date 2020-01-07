<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <Stock
          v-for="stock in stocks"
          :stock="stock"
          :key="stock.title"
          type="stocks"
        />
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import Stock from './Stock.vue'
import StockType from '../StockType'

@Component({
  components: {
    Stock
  }
})
export default class Stocks extends Vue {
  @Getter('getStocks') public stocks:any;
}
</script>
