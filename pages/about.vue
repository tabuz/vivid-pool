<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="8" lg="6" style="max-width: 800px" class="about">
          <div class="hero-text">
            <PageTitle :title="$t('about.title')" />
            <p class="text-body-1 text-body-1 pt-4">
              {{ $t('about.subtitle') }}
            </p>
            <div class="team blurp">
              <div
                v-for="(person, idx) in team"
                :key="person.name"
                class="person"
                :class="{
                  blur: selected_person && selected_person !== person,
                  active: selected_person === person,
                  [`person-${idx}`]: true,
                }"
                @click="on_click_person(person, idx)"
              >
                <div class="image mb-2">
                  <v-img
                    :width="$vuetify.breakpoint.mdAndUp ? 130 : 100"
                    :height="$vuetify.breakpoint.mdAndUp ? 130 : 100"
                    :src="person.image"
                    contain
                    aspect-ratio="1/1"
                    class="mb-2"
                  />
                  <p class="font-weight-bold mb-0">{{ person.name }}</p>
                </div>
                <div class="text px-4">
                  <p class="role mb-1">{{ person.role }}</p>
                  <p class="text-body-1 text-body-1 mb-0">
                    {{ $t(person.text) }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div
              class="blurp"
              :class="{
                [`person-${person_idx}`]: true,
              }"
            >
              <p class="text-body-1 text-body-1 mb-0">
                {{ subtitle_text }}
              </p>
            </div> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'About',
  components: {
    PageTitle,
  },
  asyncData({ app }) {
    const locale = app.i18n.locale

    let head

    switch (locale) {
      case 'pl':
        head = {
          title: 'Zespół',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content:
                "Jesteśmy przyjaciółmi ktorzy znają się już ponad 10 lat. Zaawansowana technologia zawsze była i będzie w centrum naszych zainteresowań. Koncept blockchain'u uzmysłowił nam ogrom możliwości i rozwiązań jakie niesie ze sobą cyfrowa era. Zainspirowani zadecydowaliśmy stać się częścią tego poruszenia. Dwa projekty o których myślimy najczęściej to Cardano i Polkadot - są one świetnym przykładem postępu jaki dokonał się w świecie krypto przez ostanie 12 lat.",
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: 'Zespół - Vivid Stake Pool',
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content:
                "Jesteśmy przyjaciółmi ktorzy znają się już ponad 10 lat. Zaawansowana technologia zawsze była i będzie w centrum naszych zainteresowań. Koncept blockchain'u uzmysłowił nam ogrom możliwości i rozwiązań jakie niesie ze sobą cyfrowa era. Zainspirowani zadecydowaliśmy stać się częścią tego poruszenia. Dwa projekty o których myślimy najczęściej to Cardano i Polkadot - są one świetnym przykładem postępu jaki dokonał się w świecie krypto przez ostanie 12 lat.",
            },
            {
              hid: 'twitter:title',
              property: 'twitter:title',
              content: 'Zespół - Vivid Stake Pool',
            },
            {
              hid: 'twitter:description',
              property: 'twitter:description',
              content:
                "Jesteśmy przyjaciółmi ktorzy znają się już ponad 10 lat. Zaawansowana technologia zawsze była i będzie w centrum naszych zainteresowań. Koncept blockchain'u uzmysłowił nam ogrom możliwości i rozwiązań jakie niesie ze sobą cyfrowa era. Zainspirowani zadecydowaliśmy stać się częścią tego poruszenia. Dwa projekty o których myślimy najczęściej to Cardano i Polkadot - są one świetnym przykładem postępu jaki dokonał się w świecie krypto przez ostanie 12 lat.",
            },
          ],
        }
        break

      default:
        head = {
          title: 'Team',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content:
                'We have been friends who know each other for over 10 years. The cutting edge technologies have always been our main point of interest. The concept of the block chain showed all of us new possibilities and solutions to problems created by the digital age. Inspired by that we decided to be a part of the decentralization movement. The two projects about which we are mostly excited are Cardano and Polkadot. ',
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: 'Team - Vivid Stake Pool',
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content:
                'We have been friends who know each other for over 10 years. The cutting edge technologies have always been our main point of interest. The concept of the block chain showed all of us new possibilities and solutions to problems created by the digital age. Inspired by that we decided to be a part of the decentralization movement. The two projects about which we are mostly excited are Cardano and Polkadot. ',
            },
            {
              hid: 'twitter:title',
              property: 'twitter:title',
              content: 'Team - Vivid Stake Pool',
            },
            {
              hid: 'twitter:description',
              property: 'twitter:description',
              content:
                'We have been friends who know each other for over 10 years. The cutting edge technologies have always been our main point of interest. The concept of the block chain showed all of us new possibilities and solutions to problems created by the digital age. Inspired by that we decided to be a part of the decentralization movement. The two projects about which we are mostly excited are Cardano and Polkadot. ',
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
      selected_person: null,
      person_idx: null,
      team: [
        {
          name: 'Rafał',
          text: 'about.rafal',
          role: 'Founder, Stake Pool Operator',
          image: require('@/static/rafal.png'),
        },
        {
          name: 'Patryk',
          text: 'about.patryk',
          role: 'Co-Founder, Social Media',
          image: require('@/static/patryk.png'),
        },
        {
          name: 'Hubert',
          text: 'about.hubert',
          role: 'Co-Founder, Web Developer',
          image: require('@/static/hubert.jpeg'),
        },
      ],
    }
  },
  head() {
    return this.head
  },
  computed: {
    subtitle_text() {
      const person = this.selected_person
      if (!person) return ''
      return this.$t(person.text)
    },
  },
  methods: {
    on_click_person(person, idx) {
      const selected_person = this.selected_person

      if (selected_person === person) {
        this.selected_person = null
        this.person_idx = null
      } else {
        this.selected_person = person
        this.person_idx = idx
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  .team {
    flex-direction: row;

    .person {
      display: flex;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s ease-in-out;
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }

      .image {
        transition: filter 0.125s ease-in-out;
        filter: saturate(0.6);
      }

      .role {
        font-size: 0.8em;
        font-weight: bold;
      }
    }
  }
}
</style>
