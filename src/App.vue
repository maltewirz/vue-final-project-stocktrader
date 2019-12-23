<template>
  <v-app>
    <v-content>
      <Header/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/Header.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  })
})
</script>
