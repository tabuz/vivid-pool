<template>
  <ol>
    <li v-for="depth_1 in content_by_category" :key="depth_1.id">
      <p class="mb-0">{{ depth_1.text }}</p>
      <ul v-if="depth_1.toc" class="mb-4">
        <li v-for="depth_2 in depth_1.toc" :key="depth_2.id">
          <nuxt-link
            :to="
              localePath({
                name: 'guide-category-article',
                params: { category: depth_1.id, article: depth_2.id },
              })
            "
            >{{ depth_2.text }}</nuxt-link
          >
        </li>
      </ul>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'ArticleTree',
  props: {
    content: { type: Array, default: () => [] },
  },
  computed: {
    content_by_category() {
      const categories = [
        { id: 'essentials', text: 'Essentials' },
        { id: 'exchanges', text: 'Exchanges' },
        { id: 'wallets', text: 'Digital Wallets' },
        { id: 'stake', text: 'Stake With Vivid' },
      ]
      return categories.map((c) => ({
        ...c,
        toc: this.filter_content(c.id),
      }))
    },
  },
  methods: {
    filter_content(category) {
      return this.content
        .filter((c) => c.category === category)
        .sort((a, b) => (a.order > b.order ? 1 : -1))
    },
  },
}
</script>

<style lang="scss" scoped>
ol,
ul {
  list-style-type: none;
}
ol {
  position: sticky;
  top: 50px;
  padding: 0;
  color: white;
}
p {
  font-weight: 700;
}
a {
  color: white;
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
