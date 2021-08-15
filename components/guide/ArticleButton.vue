<template>
  <button
    v-if="!href"
    class="choice-btn mr-4"
    @click="set_props({ next_category, next_article })"
  >
    {{ text }}
  </button>
  <a v-else @click.stop.prevent="set_props({ next_category, next_article })">{{
    text
  }}</a>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ArticleButton',
  props: {
    next_category: { type: String, default: null },
    next_article: { type: String, default: null },
    text: { type: String, default: null },
    href: { type: Boolean, default: false },
  },
  methods: {
    ...mapMutations('Guide', ['set_props']),
  },
}
</script>
