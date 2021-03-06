<template>
  <v-app>
    <DotGrid />
    <Navbar />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import DotGrid from '@/components/DotGrid'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    DotGrid,
    Footer,
  },
}
</script>
