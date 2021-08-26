<template>
  <v-container class="pb-4 pt-4">
    <p class="text-h5 mt-0 d-block font-weight-bold secondary--text">
      {{ _title }}
    </p>
    <v-row>
      <v-col v-for="(n, idx) in news" :key="idx" cols="12" class="news">
        <nuxt-link
          :to="{ path: localePath(`/news/${n.slug}`) }"
          class="news-img news-link mr-4"
          :style="`background-image: url('${n.thumbnail}')`"
        >
        </nuxt-link>
        <div>
          <nuxt-link :to="`/news/${n.slug}`" class="news-link">
            <p class="text-body-1 font-weight-bold">{{ n.title }}</p>
          </nuxt-link>

          <nuxt-link :to="`/news/${n.slug}`" class="news-link">
            <p class="text-body-1 mb-0">{{ n.author }}</p>
          </nuxt-link>
          <p class="text-body-1 mb-0 secondary--text">
            {{ $dayjs(n.date).locale($i18n.locale).fromNow() }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Videos',
  props: {
    news: { type: Array, default: () => [] },
    title: { type: String, default: null },
  },
  computed: {
    _title() {
      if (this.title) return this.title
      return this.$t('news.title')
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  color: var(--v-primary-base);
  display: flex;
  flex-direction: row;
}
.news-link {
  display: block;
  cursor: pointer;
  color: var(--v-secondary-base);
}
.news-img {
  height: 60px;
  min-width: 120px;
  border-radius: 4px;
  background-size: contain;

  @media (min-width: 920px) {
    height: 94px;
    width: 183px;
  }

  position: relative;
  background-size: contain;
  background-position: center;

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    border-radius: 4px;
    opacity: 0;
    color: white;
    font-size: 1.5em;
    content: 'Open';
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    transition: opacity 0.125s ease-in-out;
  }
}
</style>
