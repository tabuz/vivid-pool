<template>
  <v-main class="pt-4">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="8" lg="6" style="max-width: 800px" class="about">
          <div class="hero-text">
            <PageTitle :title="$t('about.title')" />
            <p class="text-body-1 text-body-1 pt-4 secondary--text">
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
                  <p class="font-weight-bold mb-0 secondary--text">
                    {{ person.name }}
                  </p>
                </div>
                <div class="text px-4">
                  <p class="role mb-1 secondary--text">{{ person.role }}</p>
                  <p
                    class="text-body-1 secondary--text text-body-1 mb-0 text-left"
                  >
                    {{ $t(person.text) }}
                  </p>
                </div>
              </div>
            </div>
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
    const title = app.i18n.t('about._title')
    const description = app.i18n.t('about.subtitle').trim().replace(/\s+/g, ' ')

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
