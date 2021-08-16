<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col
          cols="12"
          md="6"
          lg="5"
          style="max-width: 800px"
          class="px-md-6 pb-md-6"
        >
          <h1
            class="text-h4 text-md-h3 text-xl-h2 mb-1 font-weight-thin secondary--text"
          >
            Vivid Stake Pool
          </h1>
          <h2 class="text-h5 text-md-h4 mb-2 mb-md-4 slogan purple--text">
            {{ $t('index.slogan') }}
          </h2>
          <p
            class="text-body-1 pa-0 text-md-h6 mb-2 mb-md-6 blurp secondary--text"
          >
            {{ $t('index.blurp') }}
          </p>
          <div class="text-right mb-8">
            <nuxt-link :to="localePath('guide-category-article')">
              <button class="choice-btn --purple">
                {{ $t('index.get_started_front') }}
              </button>
            </nuxt-link>
          </div>
          <div class="d-flex flex-row justify-space-around mb-8">
            <div class="text-center px-2 mr-6">
              <p class="secondary--text font-weight-bold text-h4">
                #{{ pools[0].rank }}
              </p>
              <p class="secondary--text font-weight-bold mb-0">In Pools Rank</p>
            </div>
            <div class="text-center px-2 mr-6">
              <p class="secondary--text font-weight-bold text-h4">
                {{ blocks_lifetime }}
              </p>
              <p class="secondary--text font-weight-bold mb-0">
                Verified Block{{ blocks_lifetime > 1 ? 's' : '' }}
              </p>
            </div>
            <div class="text-center px-2 mr-6">
              <p class="secondary--text font-weight-bold text-h4">
                {{ delegators }}
              </p>
              <p class="secondary--text font-weight-bold mb-0">Delegators</p>
            </div>
          </div>

          <div class="pool-table-container mb-8">
            <table class="pool-table">
              <thead>
                <tr>
                  <th class="text-left">Ticker</th>
                  <th class="text-left">Fee</th>
                  <th class="text-left">Pledge</th>
                  <th class="text-left">Stake</th>
                  <th class="text-left">ROA</th>
                  <th class="text-left">Saturation</th>
                  <th class="text-left">Pool ID</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pool in pools" :key="pool.pool_id">
                  <td>{{ pool.ticker_orig }}</td>
                  <td>{{ format_percent(pool.tax_ratio) }}</td>
                  <td>{{ format_ada(pool.pledge) }}</td>
                  <td>{{ format_ada(pool.active_stake) }}</td>
                  <td>{{ format_percent(pool.roa_lifetime / 100) }}</td>
                  <td>
                    <v-progress-linear
                      color="purple"
                      height="25"
                      :value="pool.saturated * 100"
                    >
                      <span class="secondary--text">{{
                        format_percent(pool.saturated)
                      }}</span>
                    </v-progress-linear>
                  </td>
                  <td>
                    <v-btn
                      v-clipboard="() => pool.pool_id"
                      small
                      tile
                      elevation="0"
                      color="transparent"
                      @click="feedback_copied(pool.pool_id)"
                      ><span
                        v-if="!copied"
                        class="secondary--text font-weight-bold"
                        >Copy</span
                      ><v-icon
                        v-else-if="copied === pool.pool_id"
                        color="secondary"
                        class="mx-2"
                        >mdi-check</v-icon
                      ></v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <News :news="news" />
          <Videos :videos="videos" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Videos from '@/components/Videos'
import News from '@/components/News'
import Vue from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

export default {
  components: {
    News,
    Videos,
  },
  async asyncData({ $content, app }) {
    const locale = app.i18n.locale
    const pools = []
    const videos = await $content(locale, 'videos')
      .only([
        'name',
        'order',
        'thumbnail',
        'url',
        'date',
        'author',
        'author_url',
      ])
      .sortBy('date', 'desc')
      .fetch()
    const news = await $content(locale, 'news')
      .only(['title', 'slug', 'thumbnail', 'date', 'author'])
      .sortBy('date')
      .fetch()
    try {
      const response = await fetch(
        'https://js.adapools.org/pools/194430bee1245b2d7e19a33e52635e5328ef24431874a0cb191c0195/summary.json'
      )
      const { data: pool_data } = await response.json()
      pools.push(pool_data)
    } catch (e) {
      console.error('Failed fetching rom adapools.org')
    }

    const title = app.i18n.t('index._title')
    const description = app.i18n.t('index.blurp').trim().replace(/\s+/g, ' ')

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

    return { videos, pools, head, news }
  },
  data() {
    return {
      head: {},
      pools: [],
      videos: [],
      copied: false,
    }
  },
  head() {
    return this.head
  },
  computed: {
    blocks_lifetime() {
      return this.pools.reduce(
        (curr, pool) => curr + Number(pool.blocks_lifetime),
        0
      )
    },
    delegators() {
      return this.pools.reduce(
        (curr, pool) => curr + Number(pool.delegators),
        0
      )
    },
  },
  methods: {
    format_percent(value) {
      return `${(Number(value) * 100).toFixed(2)} %`
    },
    format_ada(value) {
      value = parseInt(value / 1000000)
      if (value / 1000 < 1000) return `${Number(value / 1000).toFixed(0)}k ₳`
      return '-'
    },
    feedback_copied(pool_id) {
      this.copied = pool_id
      setTimeout(() => {
        this.copied = null
      }, 1500)
    },
  },
}
</script>

<style lang="scss" scoped>
$purple: #581c7b;

.button {
  padding: 0.3rem 1.5rem;
  border: 0px solid $purple;
  border-left-width: 5px;
  border-right-width: 5px;
  color: var(--v-secondary-base);
  font-weight: 700;
  transition: all 0.125s ease;

  &:focus {
    outline: $purple 1px auto !important;
  }
  button:focus {
    outline: none;
  }

  &:hover {
    border-left-width: 5px;
  }
}
.pool-table-container {
  width: 100%;
  overflow-x: auto;
}
.pool-table {
  background-color: var(--v-primary-base);
  backdrop-filter: blur(8px);
  width: 100%;
  border-collapse: collapse;
  color: var(--v-secondary-base) !important;

  thead {
    border-bottom: 1px solid rgba(127, 127, 127, 0.3);
  }
  th {
    padding: 0.6em 1em;
  }
  td {
    padding: 0.6em 1em;
  }
  tr {
    white-space: nowrap;
    &:hover {
      background: inherit !important;
    }
  }
}

.hero-text {
  color: var(--v-secondary-base);
  border-radius: 16px;
}

.slogan {
  color: #89009b;
  display: inline-block;
}
</style>
