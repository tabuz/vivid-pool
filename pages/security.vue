<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px">
          <div class="hero-text blurp px-md-6 pb-md-6">
            <PageTitle
              :title="$t('security.title')"
              :subtitle="$t('security.subtitle')"
            />
            <v-expansion-panels class="pl-0">
              <v-expansion-panel
                v-for="(el, i) in $t('security.measures')"
                :key="i"
              >
                <v-expansion-panel-header
                  :expand-icon="el.text ? '$expand' : ''"
                >
                  <b>{{ el.title }}</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content v-if="el.text">
                  {{ el.text }}</v-expansion-panel-content
                >
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'Security',
  components: {
    PageTitle,
  },
  asyncData({ app }) {
    const locale = app.i18n.locale
    const title = app.i18n.t('security.title')
    const description = app.i18n
      .t('security.subtitle')
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

<style lang="scss" scoped></style>
