<template>
  <v-app>
    <DotGrid v-if="true" />
    <div class="text-center">
      <Navbar />
    </div>
    <v-fade-transition>
      <nuxt />
    </v-fade-transition>
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
