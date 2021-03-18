<template>
  <v-app>
    <DotGrid />
    <Navbar />
    <v-fade-transition>
      <nuxt />
    </v-fade-transition>
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
