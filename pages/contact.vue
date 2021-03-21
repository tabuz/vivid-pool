<template>
  <v-main>
    <v-container fluid class="contact pa-2 pa-md-4">
      <v-row class="fill-height">
        <v-col cols="12" md="6" lg="5">
          <div class="hero-text white-elevation">
            <PageTitle
              :title="$t('contact.title')"
              :subtitle="$t('contact.subtitle')"
            />
            <div class="socials blurp">
              <a href="https://twtter.com" target="_blank" class="icon twitter">
                <v-icon x-large color="#00acee">mdi-twitter</v-icon>
                <span>Twitter</span>
              </a>
              <a
                href="https://telegram.com"
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
