<template>
  <div class="guide-sticky">
    <nuxt-link
      v-if="$vuetify.breakpoint.mdAndUp"
      :to="localePath('guide-category-article')"
    >
      <v-btn icon color="secondary" class="mb-4">
        <v-icon color="secondary">mdi-close</v-icon>
      </v-btn>
    </nuxt-link>
    <ul v-if="toc.length">
      <p>{{ $t('guide.on_this_page') }}</p>
      <li v-for="el in toc" :key="el.id" class="table-of-content">
        <nuxt-link
          :to="
            localePath({
              name: 'guide-category-article',
              params: { category, article },
              hash: `#${el.id}`,
            })
          "
          >{{ el.text }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TableOfContent',
  props: {
    category: { type: String, default: null },
    article: { type: String, default: null },
    toc: { type: Array, default: null },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  color: var(--v-secondary-base) !important;
}
p {
  font-weight: 700;
}
a {
  color: var(--v-secondary-base) !important;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    font-weight: bold;
  }
}
.toc {
  height: 0px;
  overflow: hidden;

  &.active {
    height: auto;
  }
}
</style>
