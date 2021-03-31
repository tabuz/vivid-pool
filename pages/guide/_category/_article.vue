<template>
  <v-col cols="12" md="10">
    <v-row>
      <v-col cols="12" md="10">
        <v-scroll-y-transition mode="out-in">
          <div v-if="!content" :key="question" class="max-width-800">
            <template v-if="question === 0">
              <p>{{ $t('docs.subtitle') }}</p>
              <p class="text-h6">
                What is your level of knowledge about blockchain technology?
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
              <p class="text-h6">Do you already have ADA cryptocurrency?</p>
              <button class="choice-btn mr-2" @click="question = 2">Yes</button>
              <button
                class="choice-btn"
                @click="open_article('exchanges', 'about_exchanges')"
              >
                No
              </button>
            </template>

            <template v-if="question === 2">
              <p class="text-h6">
                What is your preffered way of controling you digital wallet?
              </p>
              <button class="choice-btn mr-2" @click="question = 3">
                Mobile
              </button>
              <button class="choice-btn" @click="question = 4">Desktop</button>
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
          <div v-else>
            <div class="text-right" @click="content = null">
              <v-btn icon>
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
            <nuxt-content
              :document="content"
              @open="(category, article) => open_article(category, article)"
            />
          </div>
        </v-scroll-y-transition>
      </v-col>
      <v-col cols="12" md="2">
        <TableOfContent
          v-if="content && content.toc"
          :category="$route.params.category"
          :article="$route.params.article"
          :toc="content.toc"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapState } from 'vuex'
import TableOfContent from '@/components/TableOfContent'

export default {
  name: 'GuideCategoryArticle',
  components: {
    TableOfContent,
  },
  async asyncData({ app, params }) {
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

    return {
      content,
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
  },
  watch: {
    next_article: {
      handler(article) {
        const next_category = this.next_category
        this.open_article(next_category, article)
      },
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
