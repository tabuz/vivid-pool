<template>
  <v-main>
    <v-container fluid class="home pa-8">
      <v-row align="center" style="height: 100%">
        <v-col cols="12" md="5">
          <div class="px-6 py-10 hero-text">
            <h1 class="text-h2 mb-0 font-weight-bold">Vivid Stake Pool</h1>
            <h3 class="text-h4 mb-6">The future is here.</h3>
            <p class="text-h6">
              We are an international staking pools validator for Cardano and
              Polkadot network. Offering cutting edge technology for today and
              tommorows cryptocurrencry technology. Join us today in this
              exciting journey.
            </p>
            <v-divider class="mb-6" color="white"></v-divider>
            <v-btn rounded x-large elevation="6"
              ><span class="font-weight-bold">Get Started</span></v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="7" class="px-6 pb-10 hero-text">
          <h1 class="text-h3 font-weight-bold pt-4 pb-10">
            Discover our active pools
          </h1>
          <div class="d-flex justify-center align-center">
            <CryptoPool
              name="Cardano"
              container-class="mr-12"
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

<style lang="scss">
main {
  color: white;
  background: linear-gradient(
    130deg,
    rgba(65, 27, 143, 1) 0%,
    rgba(66, 46, 199, 1) 100%
  );
}
.home {
  height: 100%;
}
.pool {
  cursor: pointer;
  border-radius: 16px;
  transition: 0.125s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.hero-text {
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
