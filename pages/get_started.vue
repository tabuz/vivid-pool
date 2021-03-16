<template>
  <v-main>
    <v-container fluid class="get-started pa-2 pa-md-4">
      <v-row>
        <v-col cols="6" class="pb-0 mb-0">
          <h1
            class="text-h3 text-md-h2 text-xl-h2 mb-1 mb-md-4 font-weight-thin"
          >
            <span class="vivid-decoration">{{ $t('get_started.title') }}</span>
          </h1>
          <p class="text-body-1 text-md-h6 mb-2 mb-md-4 blurp">
            {{ $t('get_started.subtitle') }}
          </p>
        </v-col>
        <v-col cols="10">
          <div class="blurp">
            <v-row>
              <v-col cols="3">
                <v-treeview
                  dark
                  activatable
                  color="purple"
                  hoverable
                  open-on-click
                  :items="steps"
                  :active.sync="active"
                  :open.sync="open"
                ></v-treeview>
              </v-col>
              <v-divider class="mt-4" color="white" vertical></v-divider>
              <v-col class="d-flex pa-6">
                <v-scroll-y-transition mode="out-in">
                  <div v-if="!content" :key="question">
                    <template v-if="question === 0">
                      <p class="text-h6">
                        Do you know what is Staking?
                      </p>
                      <button class="choice-btn mr-2" @click="question = 1">
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click="
                          ;(active = ['staking']), (open = ['general'])
                        "
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
                          ;(active = ['exchanges']), (open = ['purchase'])
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
                          ;(active = ['stake_with_yori']), (open = ['stake'])
                        "
                      >
                        Yes
                      </button>
                      <button
                        class="choice-btn"
                        @click=";(active = ['yori']), (open = ['wallets'])"
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
                          ;(active = ['stake_with_dedalus']), (open = ['stake'])
                        "
                      >
                        Dedalus
                      </button>
                      <button
                        class="choice-btn mr-2"
                        @click="
                          ;(active = ['stake_with_yori']), (open = ['stake'])
                        "
                      >
                        Yori
                      </button>
                      <button
                        class="choice-btn"
                        @click="
                          ;(active = ['about_wallets']), (open = ['wallets'])
                        "
                      >
                        None
                      </button>
                    </template>
                  </div>
                  <div v-else :key="active[0]">
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
  name: 'GetStarted',
  data() {
    return {
      active: [],
      open: [],
      question: 0,
      content: null,
    }
  },
  computed: {
    steps() {
      return [
        {
          id: 'general',
          name: 'FAQ',
          children: [
            { id: 'staking', name: 'What is Staking?' },
          ],
        },
        {
          id: 'purchase',
          name: 'Purchase ADA',
          children: [
            { id: 'exchanges', name: 'Cryptocurrency Exchange' },
            { id: 'binance', name: 'Binance' },
            { id: 'coinmama', name: 'Coinmama' },
            { id: 'etoro', name: 'EToro' },
          ],
        },
        {
          id: 'wallets',
          name: 'Digital Wallets',
          children: [
            { id: 'about_wallets', name: 'About' },
            { id: 'yori', name: 'Yori' },
            { id: 'dedalus', name: 'Dedalus' },
          ],
        },
        {
          id: 'stake',
          name: 'Stake with Vivid Pools',
          children: [
            { id: 'stake_with_yori', name: 'Yori' },
            { id: 'stake_with_dedalus', name: 'Dedalus' },
          ],
        },
      ]
    },
  },
  watch: {
    active: {
      handler(v) {
        v.length ? this.selected() : (this.content = null)
      },
    },
  },
  methods: {
    async selected() {
      if (!this.active.length) {
        this.content = null
        return
      }

      const [slug] = this.active

      const content = await this.$content(
        `${this.$i18n.locale}/get_started`,
        slug
      ).fetch()

      this.content = content
    },
  },
}
</script>

<style lang="scss" scoped>
.get-started {
  height: 100%;

  .socials {
    display: flex;
    justify-content: center;
    .icon {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      align-items: center;
      &:first-of-type {
        margin-right: 2rem;
      }
      i {
        font-size: 4rem !important;
      }
      span {
        color: white;
        font-weight: normal;
      }
    }
  }
}
</style>
