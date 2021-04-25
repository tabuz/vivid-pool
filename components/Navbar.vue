<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :mini-variant="true"
    mini-variant-width="96"
    color="#030303"
    class="vivid-navbar"
    :class="{
      [$i18n.locale]: true,
      cropped: $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-list>
      <v-list-item class="pb-8 vivid-logo">
        <v-list-item-avatar class="img">
          <img :src="require('@/static/vivid-pool-logo.png')" />
        </v-list-item-avatar>
      </v-list-item>
      <div class="mb-4">
        <nuxt-link
          v-for="(destination, i) in destinations"
          :key="`nav_${i}`"
          :to="localePath(destination.page_name)"
          style="text-decoration: none"
        >
          <v-list-item class="text-center px-0 py-4">
            <span>
              <v-icon :class="destination.icon" color="white">{{
                destination.icon
              }}</v-icon>
              <v-subheader
                style="height: 28px"
                class="font-weight-bold white--text"
                >{{ destination.text }}</v-subheader
              >
            </span>
          </v-list-item>
        </nuxt-link>
      </div>
      <div class="d-flex justify-center align-center">
        <LocalesDropdown />
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LocalesDropdown from '@/components/LocalesDropdown'

export default {
  name: 'Navbar',
  components: {
    LocalesDropdown,
  },
  computed: {
    ...mapState('App', ['is_drawer_open']),
    drawer: {
      get() {
        return this.is_drawer_open
      },
      set(v) {
        this.set_is_drawer_open(v)
      },
    },
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
  methods: {
    ...mapMutations('App', ['set_is_drawer_open']),
  },
}
</script>

<style lang="scss">
$logo-size: 80px;

.vivid-navbar {
  border-bottom-right-radius: 8px;
  padding-bottom: 1rem;

  &.cropped {
    height: auto !important;
  }
}

.vivid-logo {
  .img {
    min-height: $logo-size;
    min-width: $logo-size !important;

    img {
      height: $logo-size;
      width: $logo-size;
    }
  }
}
nav {
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
  &.en {
    .nuxt-link-active:not([href='/']),
    .nuxt-link-active.nuxt-link-exact-active[href='/'] {
      .v-list-item {
        background-color: rgba(128, 0, 128, 0.5);
      }
    }
  }
  &.pl {
    .mdi-home-outline {
      margin-bottom: 0.5rem;
    }
    .nuxt-link-active:not([href='/pl']),
    .nuxt-link-active.nuxt-link-exact-active[href='/pl'] {
      .v-list-item {
        background-color: rgba(128, 0, 128, 0.5);
      }
    }
  }
}
</style>
