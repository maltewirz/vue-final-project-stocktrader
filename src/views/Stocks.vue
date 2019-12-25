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
  @Getter('getFunds') funds:any // check later if funds sufficient
  // @Action('buyStockAction') buyStockAction:any

  // private quantity: number = 0;

  // private buyStock (id:number) {
  //   console.log('wauntity', this.quantity)
  //   this.buyStockAction(id)
  // }
}
</script>
