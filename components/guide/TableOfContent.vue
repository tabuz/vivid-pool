<template>
  <ul v-if="toc.length">
    <p>On this page</p>
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
  position: sticky;
  top: 74px;
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
