<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px">
          <div class="hero-text px-md-6 pb-md-6">
            <div class="mb-4">
              <PageTitle :title="content.title" />
            </div>

            <nuxt-content :document="content" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: 'NewsPage',
  async asyncData({ $content, app, params }) {
    const locale = app.i18n.locale
    const content = await $content(locale, 'news', params.slug).fetch()

    return { content }
  },
}
</script>
