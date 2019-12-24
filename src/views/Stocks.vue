<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text v-text="card.price"></v-card-text>
              <v-card-actions>
                <v-text-field
                  label="Solo"
                  placeholder="Quantity"
                  solo
                ></v-text-field>
                <v-btn text>
                  Buy
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Stocks extends Vue {
  @Getter('getCards') public cards:any;

  private endDay () {
    console.log('day ended')
  }
}
</script>
