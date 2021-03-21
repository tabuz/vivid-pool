<template>
  <div>
    <h1 class="text-h4 text-md-h2 text-xl-h2 mb-1 mb-md-4 font-weight-thin">
      <span class="vivid-decoration">{{ title }}</span>
    </h1>
    <p v-if="subtitle" class="text-body-1 text-md-h6 mb-2 mb-md-4 blurp">
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
