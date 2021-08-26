<template>
  <v-app>
    <DotGrid />
    <Navbar />
    <Appbar />
    <v-fade-transition>
      <nuxt />
    </v-fade-transition>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Appbar from '@/components/Appbar'
import DotGrid from '@/components/DotGrid'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    DotGrid,
    Appbar,
    Footer,
  },
}
</script>
