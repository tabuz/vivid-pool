<template>
  <v-main>
    <v-container fluid class="home pa-8">
      <v-row class="fill-height" align="center">
        <v-col cols="12" md="6">
          <div class="px-10 py-10 hero-text white-elevation">
            <h1 class="text-h1 mb-2 font-weight-thin">Vivid Stake Pool</h1>
            <h3 class="text-h3 mb-6 green--text text--darken-4">
              The future is here.
            </h3>
            <p class="text-h6 mb-12 blurp">
              We are an international staking pools validator for Cardano and
              Polkadot network. Offering cutting edge technology for today and
              tommorows cryptocurrencry technology. Join us today in this
              exciting journey.
            </p>
            <v-spacer class="mb-8" />
            <div class="text-right">
              <v-btn x-large elevation="2" color="green darken-4" class="mb-12"
                ><span class="white--text font-weight-bold"
                  >Get Started</span
                ></v-btn
              >
            </div>
            <div class="d-flex justify-center align-center">
              <CryptoPool
                name="Cardano"
                container-class="mr-16"
                image="cardano-ada-logo.svg"
              />
              <CryptoPool name="Polkadot" image="polkadot-new-dot-logo.svg" />
            </div>
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

<style lang="scss">
.home {
  height: 100%;
}

.blurp {
  text-align: justify;
  background: #3c3c3c8f;
  border-radius: 5px;
  padding: 1rem 1.2rem;
  color: white;
  line-height: 1.6em;
  font-size: 1.6em !important;
}

.hero-text {
  color: white;
  border-radius: 16px;
}
</style>
