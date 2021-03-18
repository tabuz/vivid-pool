<template>
  <nav>
    <v-app-bar flat color="transparent">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        color="purple"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <LocalesDropdown v-if="$vuetify.breakpoint.smAndDown" />

      <v-fade-transition>
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <nuxt-link
            v-for="(destination, i) in destinations"
            :key="`nav_${i}`"
            :to="localePath(destination.page_name)"
            style="text-decoration: none"
          >
            <button
              class="mr-4 btn-flip subtle"
              :class="{ active: $nuxt.$route.name === destination.page_name }"
              :data-front="destination.text"
              :data-back="destination.text"
            ></button>
          </nuxt-link>
          <LocalesDropdown />
        </div>
      </v-fade-transition>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <nuxt-link
        v-for="(destination, i) in destinations"
        :key="`nav_${i}`"
        :to="localePath(destination.page_name)"
        style="text-decoration: none"
        ><v-btn text x-large outlined color="white" class="mr-4"
          ><span class="font-weight-bold">{{ destination.text }}</span></v-btn
        >
      </nuxt-link>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import LocalesDropdown from '@/components/LocalesDropdown'

export default {
  name: 'Navbar',
  components: {
    LocalesDropdown,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    destinations() {
      return [
        {
          text: this.$t('nav.home'),
          page_name: 'index',
        },
        {
          text: this.$t('nav.docs'),
          page_name: 'docs-category-article',
        },
        {
          text: this.$t('nav.about_us'),
          page_name: 'about',
        },
        {
          text: this.$t('nav.contact'),
          page_name: 'contact',
        },
      ]
    },
  },
}
</script>
