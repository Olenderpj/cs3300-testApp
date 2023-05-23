<template>
  <v-app>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
    <home-view/>
  </v-app>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import { useTheme } from 'vuetify'

export default {
  name: 'App',
  components: {
    HomeView
  },
  setup () {
    const theme = useTheme()
    theme.global.name.value = 'dark'

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}
</script>