<template>
  <v-main class="pt-8 ml-4">
    <v-row>
      <v-col cols="12" class="pb-0 mb-0">
        <PageTitle :title="$t('guide.title')" />
      </v-col>
      <v-col cols="12" style="max-width: 1900px" class="pa-0">
        <div class="blurp blurred">
          <div class="mask"></div>
          <v-row no-gutters>
            <v-col cols="12" md="2">
              <ArticlesTree
                v-if="$vuetify.breakpoint.mdAndUp"
                :content="content"
              />
            </v-col>
            <v-col cols="12" md="10">
              <nuxt-child />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'
import PageTitle from '@/components/PageTitle'
import ArticlesTree from '@/components/guide/ArticlesTree'

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
  beforeDestroy() {
    this.set_question_step({ question_step: 0 })
  },
  methods: {
    ...mapActions('Guide', ['set_question_step']),
  },
}
</script>
