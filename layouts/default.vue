<template>
  <v-app>
    <Navbar />
    <nuxt />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>
