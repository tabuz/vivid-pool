<template>
  <v-main>
    <v-container fluid class="docs pa-2 pa-md-4">
      <v-row>
        <v-col cols="12" md="6" class="pb-0 mb-0">
          <PageTitle :title="$t('docs.title')" />
        </v-col>
        <v-col cols="12">
          <div class="blurp blurred">
            <div class="mask"></div>
            <v-row>
              <v-col cols="12" md="2">
                <ArticlesTree :content="content" />
              </v-col>
              <nuxt-child />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ArticlesTree from '@/components/ArticlesTree'

export default {
  name: 'Guide',
  components: {
    PageTitle,
    ArticlesTree,
  },
  async asyncData({ app, payload }) {
    if (!payload || !Object.keys(payload).length) {
      payload = await app
        .$content(app.i18n.locale, 'guide')
        .only(['name', 'order', 'slug', 'category', 'toc'])
        .fetch()
    }

    payload = payload.map((_) => ({
      ..._,
      id: _.slug,
      text: _.name,
      toc: _.toc.map((__) => ({ ...__, category: _.category })),
    }))

    return {
      content: payload,
    }
  },
  data() {
    return {
      content: [],
    }
  },
}
</script>
