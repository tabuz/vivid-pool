<template>
  <div>
    <v-main class="pt-8">
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="12" class="pb-0 mb-0">
            <PageTitle :title="$t('guide.title')" />
          </v-col>
          <v-col cols="12" class="guide-container pb-0 mb-0">
            <div class="blurp blurred pl-10">
              <div class="mask"></div>
              <v-row>
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
      </v-container>
    </v-main>
    <ArticlesTreeDrawer
      v-if="!$vuetify.breakpoint.mdAndUp"
      :content="content"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PageTitle from '@/components/PageTitle'
import ArticlesTree from '@/components/guide/ArticlesTree'
import ArticlesTreeDrawer from '@/components/guide/ArticlesTreeDrawer'

export default {
  name: 'Guide',
  components: {
    PageTitle,
    ArticlesTree,
    ArticlesTreeDrawer,
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

<style lang="scss">
.guide-container {
  max-width: 1920px;
}
</style>
