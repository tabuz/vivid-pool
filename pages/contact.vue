<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px">
          <div class="hero-text">
            <PageTitle
              :title="$t('contact.title')"
              :subtitle="$t('contact.subtitle')"
            />
            <div class="socials blurp">
              <a
                href="https://twitter.com/Cryptoguys4"
                target="_blank"
                class="icon twitter"
              >
                <v-icon :x-large="$vuetify.breakpoint.mdAndUp" color="#00acee"
                  >mdi-twitter</v-icon
                >
                <span>Twitter</span>
              </a>
              <a
                href="https://discord.gg/8Dw8s6Fm"
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

    let head

    switch (locale) {
      case 'pl':
        head = {
          title: 'Kontakt',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content:
                'Jeżeli masz jakieś pytania, skontaktuj się z nami przez portal społecznościowy lub użyj formularza kontaktowego, a my postaramy się odpowiedzieć tak szybko jak to możliwe.',
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: 'Kontakt - Vivid Stake Pool',
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content:
                'Jeżeli masz jakieś pytania, skontaktuj się z nami przez portal społecznościowy lub użyj formularza kontaktowego, a my postaramy się odpowiedzieć tak szybko jak to możliwe.',
            },
            {
              hid: 'twitter:title',
              property: 'twitter:title',
              content: 'Kontakt - Vivid Stake Pool',
            },
            {
              hid: 'twitter:description',
              property: 'twitter:description',
              content:
                'Jeżeli masz jakieś pytania, skontaktuj się z nami przez portal społecznościowy lub użyj formularza kontaktowego, a my postaramy się odpowiedzieć tak szybko jak to możliwe.',
            },
          ],
        }
        break

      default:
        head = {
          title: 'Contact',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content:
                'If you have any questions please do not hesitate to contact us on socials or via contact form message. We will try to anwser you questions you as soon as possible.',
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: 'Contact - Vivid Stake Pool',
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content:
                'If you have any questions please do not hesitate to contact us on socials or via contact form message. We will try to anwser you questions you as soon as possible.',
            },
            {
              hid: 'twitter:title',
              property: 'twitter:title',
              content: 'Contact - Vivid Stake Pool',
            },
            {
              hid: 'twitter:description',
              property: 'twitter:description',
              content:
                'If you have any questions please do not hesitate to contact us on socials or via contact form message. We will try to anwser you questions you as soon as possible.',
            },
          ],
        }
        break
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
      color: white;
      font-weight: normal;
    }
  }
}
</style>
