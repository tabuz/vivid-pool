<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.mdAndDown"
    class="appbar"
    color="primary"
    app
  >
    <v-btn
      icon
      color="secondary"
      @click="() => set_is_drawer_open(!is_drawer_open)"
    >
      <v-icon color="secondary">mdi-menu</v-icon></v-btn
    >
    <div v-if="$route.path.includes('/guide')" class="controls">
      <v-btn
        icon
        color="secondary"
        @click="set_is_article_tree_drawer_open(!is_article_tree_drawer_open)"
      >
        <v-icon color="secondary">mdi-chevron-left</v-icon>
      </v-btn>
      <nuxt-link :to="localePath('guide-category-article')">
        <v-btn icon color="secondary">
          <v-icon color="secondary">mdi-close</v-icon>
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
  .controls {
    width: 100%;
    text-align: right;
  }
}
a {
  text-decoration: none;
}
</style>
