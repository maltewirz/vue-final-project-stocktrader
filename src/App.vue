<template>
  <v-app>
    <v-content>
      <Header/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import Header from './components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
  @Action('randomizeStockPrices') randomizeStockPrices:any
  private created () {
    this.randomizeStockPrices()
  }
}

</script>
