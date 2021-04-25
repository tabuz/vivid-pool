<template>
  <v-main class="pt-8">
    <v-container fluid>
      <v-row no-gutters :class="{ 'pl-5': $vuetify.breakpoint.mdAndUp }">
        <v-col cols="12" md="6" lg="5" style="max-width: 800px" class="about">
          <div class="hero-text">
            <PageTitle :title="$t('about.title')" />
            <div class="team blurp mb-2">
              <div
                v-for="(person, idx) in team"
                :key="person.name"
                class="person rounded pt-2"
                :class="{
                  blur: selected_person && selected_person !== person,
                  active: selected_person === person,
                  [`person-${idx}`]: true,
                }"
                @click="on_click_person(person, idx)"
              >
                <div class="image mb-2">
                  <v-img
                    :width="$vuetify.breakpoint.mdAndUp ? 150 : 100"
                    :height="$vuetify.breakpoint.mdAndUp ? 150 : 100"
                    :src="person.image"
                    contain
                    aspect-ratio="1/1"
                  />
                </div>
                <p class="font-weight-bold mb-0">{{ person.name }}</p>
                <p class="role">{{ person.role }}</p>
              </div>
            </div>
            <div
              class="blurp"
              :class="{
                [`person-${person_idx}`]: true,
              }"
            >
              <p class="text-body-1 pa-2 pa-md-6 text-body-1 mb-0">
                {{ subtitle_text }}
              </p>
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
  data() {
    return {
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
  computed: {
    subtitle_text() {
      const person = this.selected_person
      if (!person) return this.$t('about.subtitle')
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
    display: flex;
    justify-content: space-around;

    .person {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s ease-in-out;

      &:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      &.active {
        border-bottom: 1px solid white;
      }

      .image {
        transition: filter 0.125s ease-in-out;
        filter: saturate(0.6);

        .v-image {
          border-radius: 8px;
        }
      }

      .role {
        font-size: 0.8em;
      }
    }
  }
}
</style>
