<template>
  <div class="pa-4 pool" :class="containerClass">
    <v-img
      :aspect-ratio="1 / 1"
      class="mb-3"
      contain
      max-height="200px"
      max-width="200px"
      :src="require(`@/static/${image}`)"
    />
    <h2>{{ name }} Pools</h2>
  </div>
</template>

<script>
export default {
  name: 'CryptoPool',
  props: {
    name: {
      type: String,
      default: 'name',
    },
    image: {
      type: String,
      default: 'image',
    },
    containerClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.pool {
  cursor: pointer;
  border-radius: 16px;
  transition: 0.125s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
