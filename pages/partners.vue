<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" class="blurp" style="max-width: 800px">
          <div class="hero-text px-md-6 pb-md-6">
            <PageTitle
              :title="$t('partners.title')"
              :subtitle="$t('partners.subtitle')"
            />
            <Partner>
              <template #header>
                <div class="d-flex align-center mb-8">
                  <img
                    :src="require('@/assets/images/open-chia.png')"
                    alt="Open Chia Logo"
                    width="64px"
                    class="mr-4"
                  />

                  <p class="mb-0 text-h5 secondary--text">
                    {{ $t('partners.chia.title') }}
                  </p>
                </div>
              </template>
              <template #main>
                <p class="secondary--text">
                  {{ $t('partners.chia.main_1') }}
                  <a
                    href="https://openchia.io"
                    target="_blank"
                    style="color: #129b00"
                    >openchia.io</a
                  >
                  {{ $t('partners.chia.main_2') }}
                </p>
                <ul class="ml-8 mb-8 secondary--text">
                  <li
                    v-for="(point, idx) in $t('partners.chia.points')"
                    :key="`chia_${idx}`"
                  >
                    {{ point }}
                  </li>
                </ul>
                <div class="text-center mb-8">
                  <a href="https://openchia.io" target="_blank">
                    <img
                      :src="require('@/assets/images/chia-website.png')"
                      alt="Open Chia Logo"
                      :style="{
                        'max-width': $vuetify.breakpoint.mdAndUp
                          ? '600px'
                          : '300px',
                      }"
                      class="mr-4"
                  /></a>
                </div>
                <p class="secondary--text px-2">
                  {{ $t('partners.chia.main_3') }}
                </p>
              </template>
            </Partner>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Partner from '@/components/Partner'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'Partners',
  components: {
    Partner,
    PageTitle,
  },
  asyncData({ app }) {
    const locale = app.i18n.locale
    const title = app.i18n.t('partners.title')
    const description = app.i18n
      .t('partners.subtitle')
      .trim()
      .replace(/\s+/g, ' ')

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

    return { head }
  },
  data() {
    return {
      head: {},
    }
  },
  head() {
    return this.head
  },
}
</script>

<style lang="scss" scoped>
// .socials {
//   display: flex;
//   justify-content: center;

//   .icon {
//     display: flex;
//     flex-direction: column;
//     text-decoration: none;
//     align-items: center;
//     margin-right: 2rem;

//     &:last-of-type {
//       margin-right: 0 !important;
//     }
//     span {
//       color: var(--v-secondary-base);
//       font-weight: normal;
//     }
//   }
// }
</style>
