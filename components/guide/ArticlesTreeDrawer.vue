<template>
  <v-navigation-drawer v-model="drawer" app right color="#0b0b0b" class="pl-4">
    <ArticleTree :content="content" />
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import ArticleTree from '@/components/guide/ArticlesTree'

export default {
  name: 'ArticlesTreeDrawer',
  components: {
    ArticleTree,
  },
  props: {
    content: { type: Array, default: () => [] },
  },
  computed: {
    ...mapState('App', ['is_article_tree_drawer_open']),
    drawer: {
      get() {
        return this.is_article_tree_drawer_open
      },
      set(v) {
        this.set_is_article_tree_drawer_open(v)
      },
    },
  },
  methods: {
    ...mapMutations('App', ['set_is_article_tree_drawer_open']),
  },
}
</script>
