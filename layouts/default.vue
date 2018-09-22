<template lang="pug">
.container
  app-header.appHeader
  main.appMain
    nuxt.page
  app-footer.appFooter(:isFixedButtonShown="isFixedButtonShown")
  fixed-button.fixedButton(v-if="isFixedButtonShown")
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
import FixedButton from '~/components/FixedButton'
export default {
  components: { AppHeader, AppFooter, FixedButton },
  data() {
    return {
      isFixedButtonShown: true
    }
  },
  mounted() {
    this.$store.commit('user/SET_ADDRESS', this.getWalletAddress())
  },
  methods: {
    getWalletAddress() {
      if (
        process.browser &&
        window.web3 &&
        window.web3.eth &&
        window.web3.eth.defaultAccount
      ) {
        return window.web3.eth.defaultAccount
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.container {
  background: linear-gradient(
    to top right,
    map-get($colors, primary),
    map-get($colors, brand1)
  );
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 97px;
  position: relative;

  @media (min-width: $breakpoint) {
    align-items: center;
    padding-top: 104px;
  }

  &--modalShown {
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
}

.appHeader {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.appMain {
  display: flex;
  flex: 1;
  max-width: 1024px;
  width: 100%;
}

.page {
  background: #fff;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  width: 100%;

  &__title {
    font-size: 1.2rem;

    > * {
      font-size: 1.2rem;
    }
  }
}
</style>
