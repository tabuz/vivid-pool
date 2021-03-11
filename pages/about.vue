<template>
  <v-main>
    <v-container fluid class="about pa-2 pa-md-4">
      <v-row class="fill-height" align="center">
        <v-col cols="12" md="7" lg="6" xl="5">
          <div class="hero-text white-elevation">
            <h1
              class="text-h3 text-md-h2 text-xl-h1 mb-1 mb-md-4 font-weight-thin"
            >
              <span class="vivid-decoration">{{ $t('about.title') }}</span>
            </h1>
            <div class="team blurp mb-2 mb-md-6">
              <div
                v-for="person in team"
                :key="person.name"
                class="person rounded pt-2"
                :class="{
                  blur: selected_person && selected_person !== person,
                  active: selected_person === person,
                }"
                @click="on_click_person(person)"
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
            <div class="blurp with-decoration">
              <span class="mask"></span>
              <p class="text-body-1 text-md-h6">
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
export default {
  name: 'About',
  data() {
    return {
      selected_person: null,
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
    on_click_person(person) {
      const selected_person = this.selected_person

      if (selected_person === person) this.selected_person = null
      else this.selected_person = person
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;

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
