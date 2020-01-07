<template>
  <v-card class="ma-2 pa-3" outlined>
    <h2>Trade or View your Portofolio</h2>
    <hr>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <h3>Your Funds: {{ funds | currency }}</h3>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class Stocks extends Vue {
  @Getter('getFunds') private funds!: number
}
</script>
