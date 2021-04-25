<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :mini-variant="true"
    mini-variant-width="96"
    color="black"
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
          <v-list-item class="nav-item text-center px-0 py-4">
            <span>
              <v-icon :class="destination.icon" color="white">{{
                destination.icon
              }}</v-icon>
              <v-subheader
                style="height: 28px"
                class="font-weight-thin white--text"
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
$yellow: #f2e600;
$orange: #e64a03;
$purple: #581c7b;
$blue: #0084b1;

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
    transition: all 0.2s ease;
    font-weight: thin;
    margin-bottom: 4px;
    border-right: 1px solid transparent;
    position: relative;
    left: -1px;

    &:hover {
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
  &.en {
    .nuxt-link-active:not([href='/']),
    .nuxt-link-active.nuxt-link-exact-active[href='/'] {
      &:nth-of-type(4) {
        .v-list-item {
          border-right: 1px solid $blue;
          &:before {
            background-color: $blue;
          }
        }
      }
      &:nth-of-type(3) {
        .v-list-item {
          border-right: 1px solid $yellow;
        }
      }
      &:nth-of-type(2) {
        .v-list-item {
          border-right: 1px solid $orange;
        }
      }
      &:nth-of-type(1) {
        .v-list-item {
          border-right: 1px solid $purple;
        }
      }
    }
  }
  &.pl {
    .mdi-home-outline {
      margin-bottom: 0.5rem;
    }
    .nuxt-link-active:not([href='/pl']),
    .nuxt-link-active.nuxt-link-exact-active[href='/pl'] {
      &:nth-of-type(4) {
        .v-list-item {
          border-right: 1px solid $blue;
          &:before {
            background-color: $blue;
          }
        }
      }
      &:nth-of-type(3) {
        .v-list-item {
          border-right: 1px solid $yellow;
        }
      }
      &:nth-of-type(2) {
        .v-list-item {
          border-right: 1px solid $orange;
        }
      }
      &:nth-of-type(1) {
        .v-list-item {
          border-right: 1px solid $purple;
        }
      }
    }
  }
}

.nav-item {
}
</style>
