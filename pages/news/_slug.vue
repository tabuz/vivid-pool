<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" class="blurp" style="max-width: 800px">
          <div class="hero-text px-md-6 pb-md-6">
            <div class="mb-6">
              <PageTitle :title="$t('news.title')" class="news" />
            </div>

            <nuxt-content :document="content" class="news mb-4" />
            <nuxt-link to="/" class="secondary--text mb-4"
              >Back to Home</nuxt-link
            >
            <News
              v-if="related.length"
              :news="related"
              :title="$t('news.other_news')"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import News from '@/components/News'

export default {
  name: 'NewsPage',
  components: {
    News,
  },
  async asyncData({ $content, app, params }) {
    const locale = app.i18n.locale
    const content = await $content(locale, 'news', params.slug).fetch()
    let related = []
    if (content.related) {
      related = await $content(locale, 'news')
        .where({ slug: { $in: content.related } })
        .fetch()
    }
    return { content, related }
  },
}
</script>
