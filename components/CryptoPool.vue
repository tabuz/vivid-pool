<template>
  <div class="pa-4 pool" :class="containerClass">
    <v-img
      :aspect-ratio="1 / 1"
      class="mb-3"
      contain
      max-height="130px"
      min-height="130px"
      max-width="200px"
      :src="require(`@/static/${image}`)"
    />
    <h2 class="font-weight-thin">{{ name }} Pools</h2>
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
  transition: 0.125s ease-in-out;
  border-bottom: 1px solid transparent;
  filter: grayscale(0.9);

  &:hover {
    filter: grayscale(0);
    border-bottom-color: white;
  }
}
</style>
