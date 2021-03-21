<template>
  <v-main>
    <v-container fluid class="home pa-2 pa-md-4">
      <v-row class="fill-height" align="center">
        <v-col cols="12" md="6" lg="5" xl="5">
          <h1
            class="text-h3 text-md-h2 text-xl-h1 mb-1 mb-md-4 font-weight-thin"
          >
            <span class="vivid-decoration">Vivid</span> Stake Pool
          </h1>
          <h2
            class="text-h4 text-md-h3 text-xl-h2 mb-2 mb-md-4 vivid-bg slogan"
          >
            {{ $t('index.slogan') }}
          </h2>
          <p class="text-body-1 text-md-h6 mb-2 mb-md-6 blurp">
            {{ $t('index.blurp') }}
          </p>
          <div class="text-right">
            <nuxt-link :to="localePath('guide-category-article')">
              <button
                class="btn-flip mb-12"
                :data-front="$t('index.get_started_front')"
                :data-back="$t('index.get_started_back')"
              ></button>
            </nuxt-link>
          </div>
          <div class="d-flex justify-center align-center">
            <CryptoPool
              name="Cardano"
              :container-class="
                $vuetify.breakpoint.smAndDown ? 'mr-2' : 'mr-16'
              "
              image="cardano-ada-logo.svg"
            />
            <CryptoPool name="Polkadot" image="polkadot-new-dot-logo.svg" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CryptoPool from '@/components/CryptoPool'

export default {
  components: {
    CryptoPool,
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.hero-text {
  color: white;
  border-radius: 16px;
}

.slogan {
  color: #000000;
  background: #89009b;
  display: inline-block;
}
</style>
