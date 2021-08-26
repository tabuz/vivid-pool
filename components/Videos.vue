<template>
  <v-container class="pb-4 pt-4">
    <p class="text-h5 mt-0 d-block font-weight-bold secondary--text">
      {{ $t('video.title') }}
    </p>
    <v-row>
      <v-col v-for="(video, idx) in videos" :key="idx" cols="12" class="video">
        <a
          :href="video.url"
          class="video-img video-link mr-4"
          target="_blank"
          :style="`background-image: url('${video.thumbnail}')`"
        >
        </a>
        <div>
          <a :href="video.url" class="video-link" target="_blank">
            <p class="text-body-1 font-weight-bold">{{ video.name }}</p>
          </a>

          <a :href="video.author_url" class="video-link" target="_blank">
            <p class="text-body-1 mb-0">{{ video.author }}</p>
          </a>
          <p class="text-body-1 mb-0 secondary--text">
            {{ $dayjs(video.date).locale($i18n.locale).fromNow() }}
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
    videos: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.video {
  color: var(--v-primary-base);
  display: flex;
  flex-direction: row;
}
.video-link {
  display: block;
  cursor: pointer;
  color: var(--v-secondary-base);
}
.video-img {
  height: 60px;
  min-width: 120px;
  border-radius: 4px;

  @media (min-width: 920px) {
    height: 94px;
    width: 183px;
  }

  position: relative;
  background-size: cover;

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    border-radius: 4px;
    opacity: 0;
    color: white;
    font-size: 3em;
    content: '⏵';
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
