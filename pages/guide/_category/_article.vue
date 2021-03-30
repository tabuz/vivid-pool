<template>
  <v-main>
    <v-container fluid class="docs pa-2 pa-md-4">
      <v-row>
        <v-col cols="12" md="6" class="pb-0 mb-0">
          <PageTitle
            :title="$t('docs.title')"
            :subtitle="$t('docs.subtitle')"
          />
        </v-col>
        <v-col cols="12">
          <div class="blurp blurred">
            <div class="mask"></div>
            <v-row>
              <v-col cols="12" md="3">
                <v-treeview
                  dark
                  activatable
                  color="purple"
                  hoverable
                  open-on-click
                  item-text="text"
                  item-key="id"
                  item-children="toc"
                  :items="docs_categories"
                  :active.sync="active"
                  :open.sync="open"
                  return-object
                  @update:active="select_article"
                ></v-treeview>
              </v-col>
              <!-- <v-divider class="mt-4" color="white" vertical></v-divider> -->
              <v-col cols="12" md="9" class="d-flex pa-6">
                <v-scroll-y-transition mode="out-in">
                  <div v-if="!content" :key="question">
                    <template v-if="question === 0">
                      <p class="text-h6">
                        What is your level of knowledge about blockchain
                        technology?
                      </p>
                      <button
                        class="choice-btn mr-2"
                        @click="open_article('essentials', 'beginner')"
                      >
                        Beginner
                      </button>
                      <button
                        class="choice-btn mr-2"
                        @click="open_article('essentials', 'intermediate')"
                      >
                        Intermediate
                      </button>
                      <button class="choice-btn mr-2" @click="question = 1">
                        Advanced
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
                        @click="open_article('exchanges', 'about_exchanges')"
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
                        Do you have already have Yoroi wallet setup?
                      </p>
                      <button
                        class="choice-btn mr-2"
                        @click="open_article('stake', 'stake_with_yoroi')"
                      >
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click="open_article('wallets', 'yoroi')"
                      >
                        No
                      </button>
                    </template>

                    <template v-if="question === 4">
                      <p class="text-h6">
                        Do you already have have Yoroi or Dedalus wallet?
                      </p>
                      <button
                        class="choice-btn mr-2"
                        @click="open_article('stake', 'stake_with_daedalus')"
                      >
                        Dedalus
                      </button>
                      <button
                        class="choice-btn mr-2"
                        @click="open_article('stake', 'stake_with_yoroi')"
                      >
                        Yoroi
                      </button>
                      <button
                        class="choice-btn"
                        @click="open_article('wallets', 'about_wallets')"
                      >
                        None
                      </button>
                    </template>
                  </div>
                  <div v-else :key="active[0].slug" class="max-width-800">
                    <div class="text-right" @click="content = null">
                      <v-btn icon>
                        <v-icon color="white">mdi-close</v-icon>
                      </v-btn>
                    </div>
                    <nuxt-content
                      :document="content"
                      @open="
                        (category, article) => open_article(category, article)
                      "
                    />
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
import { mapState } from 'vuex'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'GuideCategoryArticle',
  components: {
    PageTitle,
  },
  async asyncData({ app, params, payload }) {
    const category = params.category
    const article = params.article
    let content

    if (category && article) {
      try {
        content = await app
          .$content(`${app.i18n.locale}/guide/${article}`)
          .fetch()
      } catch (error) {}
    }

    if (!payload || !Object.keys(payload).length) {
      payload = await app
        .$content(app.i18n.locale, 'guide')
        .only(['name', 'order', 'slug', 'category', 'toc'])
        .fetch()
    }

    payload = payload.map((_) => ({ ..._, id: _.slug, text: _.name }))

    return {
      content,
      docs_content: payload,
      open: [{ id: category }],
      active: [{ category, id: article }],
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
    ...mapState('Guide', ['next_category', 'next_article']),
    docs_categories() {
      return [
        {
          id: 'essentials',
          text: 'Essentials',
          toc: this.filter_content('essentials'),
        },
        {
          id: 'exchanges',
          text: 'Purchase ADA',
          toc: this.filter_content('exchanges'),
        },
        {
          id: 'wallets',
          text: 'Digital Wallets',
          toc: this.filter_content('wallets'),
        },
        {
          id: 'stake',
          text: 'Stake with Vivid Pools',
          toc: this.filter_content('stake'),
        },
      ]
    },
  },
  watch: {
    next_article: {
      handler(article) {
        const next_category = this.next_category
        this.open_article(next_category, article)
      },
    },
  },
  methods: {
    open_article(category, article) {
      this.open = [{ id: category }]
      this.active = [{ category, id: article }]
    },
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
        `${this.$i18n.locale}/guide/${article}`
      ).fetch()

      this.content = content

      window.history.replaceState(
        window.history.state,
        '',
        `/guide/${category}/${article}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.docs {
  height: 100%;
}
.max-width-800 {
  max-width: 800px;
  width: 100%;
}
</style>
