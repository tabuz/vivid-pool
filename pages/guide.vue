<template>
  <div>
    <v-main class="pt-4">
      <v-container fluid>
        <v-row
          no-gutters
          class="blurp blurred pt-0"
          :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }"
        >
          <div class="mask"></div>
          <v-col cols="12" md="6" lg="5">
            <div class="hero-text">
              <PageTitle :title="$t('guide.title')" />
            </div>
          </v-col>
          <v-col cols="12" class="guide-container pb-0 mb-0">
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
