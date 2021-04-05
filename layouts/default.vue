<template>
  <v-app>
    <DotGrid v-if="true" />
    <Navbar />
    <Appbar />
    <v-fade-transition>
      <nuxt />
    </v-fade-transition>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Appbar from '@/components/Appbar'
import DotGrid from '@/components/DotGrid'

export default {
  components: {
    Navbar,
    DotGrid,
    Appbar,
  },
}
</script>
