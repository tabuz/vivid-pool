<template>
  <v-main>
    <v-container fluid class="docs pa-2 pa-md-4">
      <v-row>
        <v-col cols="6" class="pb-0 mb-0">
          <h1
            class="text-h3 text-md-h2 text-xl-h2 mb-1 mb-md-4 pl-md-8 font-weight-thin"
          >
            <span class="vivid-decoration">{{ $t('docs.title') }}</span>
          </h1>
          <p class="text-body-1 text-md-h6 mb-2 mb-md-4 blurp">
            {{ $t('docs.subtitle') }}
          </p>
        </v-col>
        <v-col cols="12">
          <div class="blurp blurred">
            <div class="mask"></div>
            <v-row>
              <v-col cols="3">
                <v-treeview
                  dark
                  activatable
                  color="purple"
                  hoverable
                  open-on-click
                  item-key="slug"
                  :items="docs_categories"
                  :active.sync="active"
                  :open.sync="open"
                  return-object
                  @update:active="select_article"
                ></v-treeview>
              </v-col>
              <v-divider class="mt-4" color="white" vertical></v-divider>
              <v-col class="d-flex pa-6">
                <v-scroll-y-transition mode="out-in">
                  <div v-if="!content" :key="question">
                    <template v-if="question === 0">
                      <p class="text-h6">Do you know what is Staking?</p>
                      <button class="choice-btn mr-2" @click="question = 1">
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click=";(open = ['faq']), (active = ['staking'])"
                      >
                        No
                      </button>
                    </template>
                    <template v-if="question === 1">
                      <p class="text-h6">
                        Do you already have ADA cryptocurrency?
                      </p>
                      <button class="choice-btn mr-2" @click="question = 2">
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click="
                          ;(open = ['exchanges']),
                            (active = ['about_exchanges'])
                        "
                      >
                        No
                      </button>
                    </template>

                    <template v-if="question === 2">
                      <p class="text-h6">
                        What is your preffered way of controling you digital
                        wallet?
                      </p>
                      <button class="choice-btn mr-2" @click="question = 3">
                        Mobile
                      </button>
                      <button class="choice-btn" @click="question = 4">
                        Desktop
                      </button>
                    </template>

                    <template v-if="question === 3">
                      <p class="text-h6">
                        Do you have already have Yori wallet setup?
                      </p>
                      <button
                        class="choice-btn mr-2"
                        @click="
                          ;(open = ['stake']), (active = ['stake_with_yori'])
                        "
                      >
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click=";(open = ['wallets']), (active = ['yori'])"
                      >
                        No
                      </button>
                    </template>

                    <template v-if="question === 4">
                      <p class="text-h6">
                        Do you already have have Yori or Dedalus wallet?
                      </p>
                      <button
                        class="choice-btn mr-2"
                        @click="
                          ;(open = ['stake']), (active = ['stake_with_dedalus'])
                        "
                      >
                        Dedalus
                      </button>
                      <button
                        class="choice-btn mr-2"
                        @click="
                          ;(open = ['stake']), (active = ['stake_with_yori'])
                        "
                      >
                        Yori
                      </button>
                      <button
                        class="choice-btn"
                        @click=";(open = ['about']), (active = ['wallets'])"
                      >
                        None
                      </button>
                    </template>
                  </div>
                  <div v-else :key="active[0].slug">
                    <nuxt-content :document="content" />
                  </div>
                </v-scroll-y-transition>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'DocsCategoryArticle',
  async asyncData({ app, params, payload }) {
    const category = params.category
    const article = params.article
    let content

    if (category && article) {
      try {
        content = await app
          .$content(`${app.i18n.locale}/docs/${article}`)
          .fetch()
      } catch (error) {}
    }
    console.log({ payload }, app.i18n.locale)
    if (!payload || !Object.keys(payload).length) {
      console.log('lookin')
      payload = await app
        .$content(app.i18n.locale, 'docs')
        .only(['name', 'order', 'slug', 'category'])
        .fetch()
    }

    console.log({ payload })

    return {
      content,
      docs_content: payload,
      open: [{ slug: category }],
      active: [{ category, slug: article }],
    }
  },
  data() {
    return {
      active: [],
      open: [],
      question: 0,
      content: null,
      docs_content: [],
    }
  },
  computed: {
    docs_categories() {
      return [
        {
          slug: 'faq',
          name: 'FAQ',
          children: this.filter_content('faq'),
        },
        {
          slug: 'exchanges',
          name: 'Purchase ADA',
          children: this.filter_content('exchanges'),
        },
        {
          slug: 'wallets',
          name: 'Digital Wallets',
          children: this.filter_content('wallets'),
        },
        {
          slug: 'stake',
          name: 'Stake with Vivid Pools',
          children: this.filter_content('stake'),
        },
      ]
    },
  },
  methods: {
    filter_content(category) {
      return this.docs_content
        .filter((c) => c.category === category)
        .sort((a, b) => (a.order > b.order ? 1 : -1))
    },
    async select_article() {
      if (!this.active.length) {
        this.content = null
        return
      }

      const { category, slug: article } = this.active[0]

      const content = await this.$content(
        `${this.$i18n.locale}/docs/${article}`
      ).fetch()

      this.content = content

      window.history.replaceState(
        window.history.state,
        '',
        `/docs/${category}/${article}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.docs {
  height: 100%;
}
</style>
