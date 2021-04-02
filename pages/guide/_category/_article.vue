<template>
  <v-col cols="12" md="8">
    <v-row>
      <v-col cols="12" md="8" order="12" order-md="1">
        <v-scroll-y-transition mode="out-in">
          <div v-if="!content" :key="question_step" class="max-width-800">
            <Questions />
          </div>
          <div v-else>
            <div class="text-right">
              <nuxt-link :to="localePath('guide-category-article')">
                <v-btn icon>
                  <v-icon color="white">mdi-close</v-icon>
                </v-btn>
              </nuxt-link>
            </div>
            <nuxt-content :document="content" />
          </div>
        </v-scroll-y-transition>
      </v-col>
      <v-col cols="12" md="4" order="1" order-md="12">
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
import TableOfContent from '@/components/guide/TableOfContent'
import Questions from '@/components/guide/Questions'

export default {
  name: 'GuideCategoryArticle',
  components: {
    TableOfContent,
    Questions,
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
    ...mapState('Guide', ['question_step']),
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
