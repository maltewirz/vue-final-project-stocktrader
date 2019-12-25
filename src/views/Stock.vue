<template>
  <v-col cols="6">
    <v-card>
        <v-card-title v-text="stock.title"></v-card-title>
        <v-card-text v-text="stock.price"></v-card-text>
        <v-card-actions>
          <v-text-field
            label="Solo"
            placeholder="Quantity"
            solo
            v-model="quantity"
          ></v-text-field>
          <v-btn text @click="buyStock(stock.id)">
            Buy
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Stocks extends Vue {
  @Prop() public stock: any;
  @Action('buyStockAction') buyStockAction:any

  private quantity: number = 0;

  private buyStock (id:number) {
    this.buyStockAction({ id: id, quantity: this.quantity })
    this.quantity = 0
  }
}
</script>
