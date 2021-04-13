<template>
  <v-app-bar
    v-if="!$vuetify.breakpoint.mdAndUp"
    class="appbar"
    color="#0b0b0b"
    app
    bottom
    hide-on-scroll
  >
    <v-icon color="white" @click="() => set_is_drawer_open(!is_drawer_open)"
      >mdi-menu</v-icon
    >
    <div v-if="$route.path.includes('/guide')" class="controls">
      <v-btn
        icon
        color="white"
        @click="set_is_article_tree_drawer_open(!is_article_tree_drawer_open)"
      >
        <v-icon color="white">mdi-chevron-left</v-icon>
      </v-btn>
      <nuxt-link :to="localePath('guide-category-article')">
        <v-btn icon color="white">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </nuxt-link>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Appbar',
  computed: {
    ...mapState('App', ['is_drawer_open', 'is_article_tree_drawer_open']),
  },
  methods: {
    ...mapMutations('App', [
      'set_is_drawer_open',
      'set_is_article_tree_drawer_open',
    ]),
  },
}
</script>

<style lang="scss">
.appbar {
  backdrop-filter: blur(8px);

  .controls {
    width: 100%;
    text-align: right;
  }
}
a {
  text-decoration: none;
}
</style>
