<template>
  <div>
    <h1
      class="text-h4 text-md-h3 text-xl-h2 mb-1 secondary--text font-weight-thin"
    >
      {{ title }}
    </h1>
    <p
      v-if="subtitle"
      class="text-body-1 text-md-h6 mb-2 mb-md-4 blurp secondary--text pl-0"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
  },
}
</script>
