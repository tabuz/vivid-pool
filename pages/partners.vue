<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px">
          <div class="hero-text">
            <PageTitle
              :title="$t('partners.title')"
              :subtitle="$t('partners.subtitle')"
            />
            <PartnersComp />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import PartnersComp from '@/components/PartnersComp'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'Partners',
  components: {
    PartnersComp,
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
