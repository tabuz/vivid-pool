<template>
  <div class="pa-4 pool" :class="containerClass">
    <v-img
      :aspect-ratio="1 / 1"
      class="mb-3"
      contain
      :max-height="$vuetify.breakpoint.smAndDown ? '75px' : '130px'"
      :min-height="$vuetify.breakpoint.smAndDown ? '75px' : '130px'"
      :max-width="$vuetify.breakpoint.smAndDown ? '50%' : '200px'"
      :src="require(`@/static/${image}`)"
    />
    <h2 class="text-body-1 text-md-h5 font-weight-thin">{{ name }} Pools</h2>
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
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid transparent;
  filter: grayscale(0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: grayscale(0);
    border-bottom-color: white;
  }
}
</style>
