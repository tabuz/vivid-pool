<template>
  <v-main class="pt-8">
    <v-row :class="{ 'pl-10': $vuetify.breakpoint.mdAndUp }">
      <v-col cols="12" md="6" lg="5" style="max-width: 800px">
        <div class="hero-text white-elevation">
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
              <v-icon x-large color="#00acee">mdi-twitter</v-icon>
              <span>Twitter</span>
            </a>
            <a
              href="https://discord.gg/8Dw8s6Fm"
              target="_blank"
              class="icon discord"
            >
              <v-icon x-large color="#7289da">mdi-discord</v-icon>
              <span>Discord</span>
            </a>
            <a
              href="https://t.me/vivid_pool"
              target="_blank"
              class="icon telegram"
            >
              <v-icon x-large color="#0088cc">mdi-telegram</v-icon>
              <span>Telegram</span>
            </a>
          </div>
          <ContactForm />
        </div>
      </v-col>
    </v-row>
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
}
</script>

<style lang="scss" scoped>
.contact {
  height: 100%;

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
        margin-right: none;
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
