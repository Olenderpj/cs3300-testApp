<template>
  <p>This is a test</p>
  <v-alert>{{errorMessage}}</v-alert>
  <v-card>
    <v-card-text> {{ response }}</v-card-text>
    <v-btn @click="fetchData">Get Server Data</v-btn>
    <v-card-text> {{ randomNum }}</v-card-text>
    <v-row>
      <v-col><v-btn @click="getNewNum">Get new integer</v-btn></v-col>
      <v-col><v-btn @click="pushData">Push data to DB</v-btn></v-col>
    </v-row>
    <v-btn @click="clearData">Clear all data in the database</v-btn>
  </v-card>
</template>

<script>

import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient('https://njgrneffovjfbuwoatqo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZ3JuZWZmb3ZqZmJ1d29hdHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3MjIyMzEsImV4cCI6MjAwMDI5ODIzMX0.WRxf7UrgshyN_O6IZSoFRI8K2xPCi6ifm1NTPEVRjLc')


export default {
  name: 'HomeView',
  data() {
    return {
      response: undefined,
      errorMessage: undefined,
      randomNum: undefined
    }
  },
  methods:{
    async fetchData() {
      const {data, error} = await supabase
          .from('randomNum')
          .select()

      if (!data){
        this.response = {}
        this.errorMessage = error
      }
        this.response = data
    },
    async pushData(){
      if (!this.randomNum) {
        this.errorMessage = "No VALUE exists for randomNum"
      }
      const { error } = await supabase
          .from('randomNum')
          .insert({ randomNum: this.randomNum })
      this.errorMessage = error
    },
    async clearData(){
      const { error } = await supabase
          .from('randomNum')
          .delete().neq('randomNum', 0)
      this.errorMessage = error

    },
    getNewNum(){
      this.randomNum =  Math.floor(Math.random() * 100000)
    }
  }
}
</script>
