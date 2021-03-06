<template>
  <v-main>
    <v-container fluid class="home pa-2 pa-md-4">
      <v-row class="fill-height" align="center">
        <v-col cols="12" md="6" lg="5" xl="5">
          <div class="hero-text white-elevation">
            <h1
              class="text-h3 text-md-h2 text-xl-h1 mb-1 mb-md-4 font-weight-thin"
            >
              <span class="vivid-decoration">Vivid</span> Stake Pool
            </h1>
            <h3 class="text-h4 text-md-h3 text-lg-h3 mb-2 mb-md-6 slogan">
              The future is here.
            </h3>
            <p class="text-body-1 text-md-h6 mb-2 mb-md-6 blurp">
              We are an international staking pools validator for Cardano and
              Polkadot network. Offering cutting edge technology for today and
              tommorows cryptocurrencry technology. Join us today in this
              exciting journey.
            </p>
            <div class="text-right">
              <button
                class="btn-flip mb-12"
                data-front="Get started"
                data-back="Now"
              ></button>
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
@import '~vuetify/src/styles/styles.sass';
.home {
  height: 100%;
}

.blurp {
  text-align: justify;
  background: #3c3c3ca2;
  // border-radius: 5px;
  padding: 1rem 1.2rem;
  color: white;
  line-height: 1.6em;
  font-size: 1.6em !important;
}

.hero-text {
  color: white;
  border-radius: 16px;
}
@keyframes rainbow {
  0% {
    background-position-x: 0;
  }
  to {
    background-position-x: 10240px;
  }
}
.vivid-decoration {
  color: white;
  font-weight: normal;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 5px;
    background: linear-gradient(
      90deg,
      hsl(30, 92%, 58%),
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6dba82,
      #07b39b,
      #1098ad,
      #5073b8,
      #a166ab,
      #ef4e7b,
      #f37055,
      #f79533
    );

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 1px;
      bottom: 4px;
    }
  }
}
.slogan {
  color: #000000;
  background: #89009b;
  display: inline-block;
}
.btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  // font-family: 'Open Sans';
  text-transform: uppercase;

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    will-change: transform;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #323237;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #adadaf;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }

  &:before {
    will-change: transform;
    top: 0;
    left: 0;
    opacity: 1;
    color: #f7f7f7;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: 0.5s;
    position: relative;
    background: #868686;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
  }
}
</style>
