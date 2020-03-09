<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-card-text>
          <v-form @submit.prevent="userSignUp">
                <v-text-field
                id="email"
                name="email"
                type="email"
                v-model="email"
              ></v-text-field>
                <v-text-field
                id="password"
                name="password"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-btn type="submit">Register</v-btn>
          </v-form>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import * as firebase from 'firebase/app'
import 'firebase/auth'

@Component({
  components: {
  }
})
export default class Registration extends Vue {
  public email: string = '';
  public password: string = '';

  public userSignUp () {
    firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .catch(err => console.log(err))
  }
}
</script>
