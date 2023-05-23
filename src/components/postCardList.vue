<template>
  <v-container fluid>
    <div v-if="databaseResponse === undefined">
      <v-alert width="90" type="error" text="No posts were able to be displayed" color="red darken-2"></v-alert>
    </div>
    <v-card v-for="post in databaseResponse" :key="post.id" class="ma-2">
      <v-col>
        <v-row class="d-flex justify-space-between align-center">
          <v-card-title>{{post.title}}</v-card-title>
          <v-chip color="blue" class="mr-2 chip-text">{{new Date(post.created_at).toISOString()}}</v-chip>
        </v-row>
        <v-row>
          <v-card-text class="ma-1 pa-1">{{post.description}}</v-card-text>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
// Database Imports
import { getAllPosts } from "../../Database/Tables/posts";

/**
 * Component Docs go here
 */
export default {
  name: "postCardList",
  // Data stores the default variables
  data(){
    return {
      databaseResponse: {},
      errorMessage: undefined
    }
  },
  // mounted is a lifecycle hook that runs when the component is mounted in the DOM
  async mounted(){
    let response = await getAllPosts()

    // Handle the database if an error is returned
    if (!response.data){
      this.errorMessage = response.error
      return {}
    }
    this.databaseResponse = response.data

  },
  methods: {

  }
}
</script>

<style scoped>
.chip-text {
  background-color: #0074D9;
  color: white !important;
}
</style>