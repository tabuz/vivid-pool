<template>
  <v-container class="blurp pt-0">
    <p class="text-h5 mt-0 d-block font-weight-bold">{{ $t('video.title') }}</p>
    <v-row>
      <v-col v-for="(video, idx) in videos" :key="idx" cols="12" md="6">
        <a :href="video.url" class="video-link" target="_blank">
          <v-img
            :src="video.thumbnail"
            :alt="video.name"
            aspect-ratio="1.7"
            contain
            max-height="200"
            class="mb-6"
            content-class="video-img"
          />
        </a>
        <a :href="video.url" class="video-link" target="_blank"
          ><p class="text-body-1 font-weight-bold mb-0">{{ video.name }}</p>
        </a>
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
.video-link {
  cursor: pointer;
  color: white;
}
::v-deep .video-img {
  position: relative;
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &:after {
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
