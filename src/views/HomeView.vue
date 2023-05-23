<template>
  <v-container fluid width="90" class="d-flex justify-center">
  <v-col>
    <v-row>
      <v-alert width="90" type="error" :text="errorMessage" color="red darken-2"></v-alert>
    </v-row>
    <v-row>
      <v-container fluid >
        <v-row>
        <v-col class="d-flex justify-center">
          <v-card outlined width="90%" class="mx-2">
            <v-card-title class="d-flex justify-center">TITLE 1</v-card-title>
            <v-card-text>THIS IS SOME CARD TEXT LORUM IPSUM......</v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center">
        <v-card outlined width="90%" class="mx-2">
          <v-card-title class="d-flex justify-center">TITLE 2</v-card-title>
            <div class="d-flex justify-center">
              <v-card-text>THIS IS SOME CARD TEXT LORUM IPSUM......</v-card-text>
            </div>
        </v-card>
        </v-col>
        </v-row>
      </v-container>

    </v-row>
    <v-row>
      <post-card-list />
    </v-row>
  </v-col>




  </v-container>
</template>

<script>
// database import
import { getAllRandomNumbers } from '../../Database/Tables/randomNum.js'

// Component import
import postCardList from "@/components/postCardList.vue";


/**
 * Component Docs
 */
export default {
  name: 'HomeView',
  components: {postCardList},
  data() {
    return {
      response: undefined,
      errorMessage: "TEST",
      randomNum: undefined
    }
  },
  methods:{
    // this needs error handling
    async getData(){
      this.response = await getAllRandomNumbers()
    },
    getNewNum(){
      this.randomNum =  Math.floor(Math.random() * 100000)
    }
  }
}
</script>

<style scoped>
.debug {
  border: 1px solid red;
}
</style>
