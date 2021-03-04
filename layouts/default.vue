<template>
  <v-app>
    <DotGrid />
    <Navbar />
    <nuxt />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import DotGrid from '@/components/DotGrid'

export default {
  components: {
    Navbar,
    DotGrid,
  },
}
</script>
