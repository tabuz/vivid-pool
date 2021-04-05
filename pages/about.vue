<template>
  <v-main class="pt-8 ml-4">
    <v-row>
      <v-col cols="12" md="6" lg="5" style="max-width: 800px" class="about">
        <div class="hero-text white-elevation">
          <PageTitle :title="$t('about.title')" />
          <div class="team blurp mb-2 mb-md-6">
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
                  width="150px"
                  height="150px"
                  :src="require('@/static/patryk.png')"
                  contain
                  aspect-ratio="1/1"
                />
              </div>
              <p class="font-weight-bold mb-0">{{ person.name }}</p>
              <p class="role">{{ person.role }}</p>
            </div>
          </div>
          <div
            class="blurp with-decoration"
            :class="{
              [`person-${person_idx}`]: true,
            }"
          >
            <span class="mask"></span>
            <p class="text-body-1 text-md-h6">
              {{ subtitle_text }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
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
        },
        { name: 'Patryk', text: 'about.patryk', role: 'Social Media & PR' },
        {
          name: 'Hubert',
          text: 'about.hubert',
          role: 'Web, Automation & Integrations',
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
      width: 200px;

      &:hover,
      &.active {
        .image {
          filter: saturate(0.5);
        }
      }
      &.blur {
        filter: blur(1px);
      }

      .image {
        width: 150px;
        height: 150px;
        transition: filter 0.125s ease-in-out;
        filter: saturate(0);

        .v-image {
          border-radius: 16px;
          border: 1px solid white;
        }
      }

      .role {
        font-size: 0.8em;
      }
    }
  }
}
</style>
