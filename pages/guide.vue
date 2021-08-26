<template>
  <div>
    <v-main class="pt-md-4">
      <v-container fluid>
        <v-row
          no-gutters
          class="blurp blurred pt-0"
          :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }"
        >
          <div class="mask"></div>
          <v-col cols="12" md="6" lg="5">
            <div class="hero-text px-md-6 pb-md-6">
              <PageTitle :title="$t('guide.title')" />
              <p
                v-if="question_step === 0"
                class="text-body-1 text-body-1 pt-4 secondary--text"
              >
                {{ $t('guide.subtitle') }}
              </p>
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
import { mapActions, mapState } from 'vuex'
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
    const locale = app.i18n.locale

    if (!payload || !Object.keys(payload).length) {
      payload = await app
        .$content(locale, 'guide')
        .only(['name', 'order', 'slug', 'category', 'toc'])
        .fetch()
    }

    payload = payload.map((_) => ({
      ..._,
      id: _.slug,
      text: _.name,
      toc: _.toc.map((__) => ({ ...__, category: _.category })),
    }))

    const title = app.i18n.t('guide.title')
    const description = app.i18n.t('guide.subtitle').trim().replace(/\s+/g, ' ')

    const head = {
      htmlAttrs: {
        lang: locale,
      },
      title,
      meta: [
        {
          hid: 'description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title} - Vivid Stake Pool`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${title} - Vivid Stake Pool`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: description,
        },
      ],
    }

    return {
      content: payload,
      head,
    }
  },
  data() {
    return {
      head: {},
      content: [],
    }
  },
  head() {
    return this.head
  },
  computed: {
    ...mapState('Guide', ['question_step']),
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
