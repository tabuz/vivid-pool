<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :mini-variant="true"
    mini-variant-width="96"
    color="transparent"
  >
    <v-list>
      <v-list-item class="pt-4 pb-8 vivid-logo">
        <v-list-item-avatar>
          <v-img :src="require('@/static/vivid-pool-logo.png')" contain></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <div>
        <nuxt-link
          v-for="(destination, i) in destinations"
          :key="`nav_${i}`"
          :to="localePath(destination.page_name)"
          style="text-decoration: none"
        >
          <v-list-item class="text-center px-0 py-4">
            <span>
              <v-icon color="white">{{ destination.icon }}</v-icon>
              <v-subheader
                style="height: 28px"
                class="font-weight-bold white--text"
                >{{ destination.text }}</v-subheader
              >
            </span>
          </v-list-item>
        </nuxt-link>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import LocalesDropdown from '@/components/LocalesDropdown'

export default {
  name: 'Navbar',
  components: {
    // LocalesDropdown,
  },
  data: () => ({
    drawer: true,
    group: null,
  }),
  computed: {
    destinations() {
      return [
        {
          text: this.$t('nav.home'),
          page_name: 'index',
          icon: 'mdi-home-outline',
        },
        {
          text: this.$t('nav.guide'),
          page_name: 'guide',
          icon: 'mdi-school-outline',
        },
        {
          text: this.$t('nav.about_us'),
          page_name: 'about',
          icon: 'mdi-account-group-outline',
        },
        {
          text: this.$t('nav.contact'),
          page_name: 'contact',
          icon: 'mdi-chat-question-outline',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
nav {
  backdrop-filter: blur(4px);

  .v-list-item:not(.vivid-logo) {
    transition: all 0.25s ease;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: rgba(128, 0, 128, 0);
    margin-bottom: 4px;

    &:hover {
      background-color: rgba(61, 61, 61, 0.5);
    }
  }
  .nuxt-link-active:not([href='/']),
  .nuxt-link-active.nuxt-link-exact-active[href='/'] {
    .v-list-item {
      background-color: rgba(128, 0, 128, 0.5);
    }
  }
}
</style>
