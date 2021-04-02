<template>
  <div>
    <p class="text-h6">
      {{ question.q }}
    </p>
    <nuxt-link
      v-for="(answer, i) in question.answers"
      :key="`ans_${i}`"
      :to="answer.url"
      @click.native="
        answer.next_step
          ? set_question_step({ question_step: answer.next_step })
          : null
      "
    >
      <button class="choice-btn mr-2 mb-2 d-block d-md-inline-block">
        {{ answer.text }}
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Quotestions',
  computed: {
    ...mapState('Guide', ['question_step']),
    question() {
      return this.questions[this.question_step]
    },
    questions() {
      return {
        // What is your level of knowledge about blockchain technology?
        0: {
          q: this.$t('guide.questions[0].q'),
          answers: [
            // Beginner
            {
              text: this.$t('guide.questions[0].a_1'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'essentials', article: 'beginner' },
              }),
              next_step: 1,
            },
            // Intermediate
            {
              text: this.$t('guide.questions[0].a_2'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'essentials', article: 'intermediate' },
              }),
              next_step: 1,
            },

            // Advance
            {
              text: this.$t('guide.questions[0].a_3'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'stake', article: 'stake_with_daedalus' },
              }),
            },
          ],
        },
        // Do you already have ADA cryptocurrency?
        1: {
          q: this.$t('guide.questions[1].q'),
          answers: [
            // Yes
            { text: this.$t('guide.questions[1].a_1'), url: '', next_step: 2 },
            // No
            {
              text: this.$t('guide.questions[1].a_2'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'exchanges', article: 'about_exchanges' },
              }),
              next_step: 2,
            },
          ],
        },
        // What is your preffered way of controling you digital wallet?
        2: {
          q: this.$t('guide.questions[2].q'),
          answers: [
            // Mobile
            { text: this.$t('guide.questions[2].a_1'), url: '', next_step: 3 },
            // Desktop
            { text: this.$t('guide.questions[2].a_2'), url: '', next_step: 4 },
          ],
        },
        // Do you have already have Yoroi wallet setup?
        3: {
          q: this.$t('guide.questions[3].q'),
          answers: [
            // Yes
            {
              text: this.$t('guide.questions[3].a_1'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'stake', article: 'stake_with_yoroi' },
              }),
            },
            // No
            {
              text: this.$t('guide.questions[3].a_2'),
              url: this.localePath({
                name: 'guide-category-article',
                params: {
                  category: 'wallets',
                  article: 'about_wallets',
                },
                hash: '#yoroi',
              }),
            },
          ],
        },
        4: {
          q: this.$t('guide.questions[4].q'),
          answers: [
            {
              text: this.$t('guide.questions[4].a_1'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'stake', article: 'stake_with_yoroi' },
              }),
            },
            {
              text: this.$t('guide.questions[4].a_2'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'wallets', article: 'stake_with_daedalus' },
              }),
            },
            {
              text: this.$t('guide.questions[4].a_3'),
              url: this.localePath({
                name: 'guide-category-article',
                params: { category: 'wallets', article: 'about_wallets' },
              }),
            },
          ],
        },
      }
    },
  },
  methods: {
    ...mapActions('Guide', ['set_question_step']),
  },
}
</script>
