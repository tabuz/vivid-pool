<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px">
          <div class="hero-text px-md-6 pb-md-6">
            <PageTitle
              :title="$t('contact.title')"
              :subtitle="$t('contact.subtitle')"
            />
            <div class="socials blurp">
              <a
                href="https://twitter.com/VividPool"
                target="_blank"
                class="icon twitter"
              >
                <v-icon :x-large="$vuetify.breakpoint.mdAndUp" color="#00acee"
                  >mdi-twitter</v-icon
                >
                <span>Twitter</span>
              </a>
              <a
                href="https://discord.gg/p7gWpQwKQR"
                target="_blank"
                class="icon discord"
              >
                <v-icon :x-large="$vuetify.breakpoint.mdAndUp" color="#7289da"
                  >mdi-discord</v-icon
                >
                <span>Discord</span>
              </a>
              <a
                href="https://t.me/vivid_pool"
                target="_blank"
                class="icon telegram"
              >
                <v-icon :x-large="$vuetify.breakpoint.mdAndUp" color="#0088cc"
                  >mdi-telegram</v-icon
                >
                <span>Telegram</span>
              </a>
            </div>
            <ContactForm />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    PageTitle,
  },
  asyncData({ app }) {
    const locale = app.i18n.locale
    const title = app.i18n.t('contact.title')
    const description = app.i18n
      .t('contact.subtitle')
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
.socials {
  display: flex;
  justify-content: center;

  .icon {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0 !important;
    }
    span {
      color: var(--v-secondary-base);
      font-weight: normal;
    }
  }
}
</style>
