<template>
  <v-main>
    <v-container fluid class="contact pa-2 pa-md-4">
      <v-row class="fill-height" align="center">
        <v-col cols="12" md="6" lg="5" xl="5">
          <div class="hero-text white-elevation">
            <h1
              class="text-h3 text-md-h2 text-xl-h1 mb-1 mb-md-4 font-weight-thin"
            >
              <span class="vivid-decoration">{{ $t('contact.title') }}</span>
            </h1>
            <p class="text-body-1 text-md-h6 mb-2 mb-md-6 blurp">
              {{ $t('contact.subtitle') }}
            </p>
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

export default {
  name: 'Contact',
  components: {
    ContactForm,
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
