<template>
  <v-col cols="6">
    <v-card>
        <v-card-title v-text="stock.title"></v-card-title>
        <v-card-text>
          <div>Price: {{stock.price}}</div>
          <div v-if="type === 'portfolio'">Quantity: {{stock.quantity}}</div>
        </v-card-text>
        <v-card-actions>
          <v-text-field
            label="Solo"
            placeholder="Quantity"
            solo
            v-model="quantity"
          ></v-text-field>
          <v-btn text
            @click="buyStock(stock.id)"
            v-if="type === 'stocks'"
            :disabled="quantity <= 0">
              Buy
          </v-btn>
          <v-btn text
            @click="sellStock(stock.id)"
            v-if="type === 'portfolio'"
            :disabled="quantity <= 0">
              Sell
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import StockType from '../StockType'

@Component
export default class Stocks extends Vue {
  @Prop() private stock!: StockType;
  @Prop() private type!: string;
  @Action('buyStockAction') buyStockAction:any
  @Action('sellStockAction') sellStockAction:any

  private quantity: number = 0;

  private buyStock (id:number) {
    this.buyStockAction({ id: id, quantity: this.quantity })
    this.quantity = 0
  }

  private sellStock (id:number) {
    this.sellStockAction({ id: id, quantity: this.quantity })
    this.quantity = 0
  }
}
</script>
