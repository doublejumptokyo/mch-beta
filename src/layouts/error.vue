<template lang="pug">
.errorPage
  no-wallet(v-if="error.statusCode === 401" :message="error.message")
  .errorPage__template(v-else-if="error.statusCode === 404")
    h2 404
    p {{ error.message }}
  .errorPage__template(v-else)
    h2 Error
    p {{ error.message }}
</template>

<script>
import NoWallet from '~/components/NoWallet'
export default {
  components: { NoWallet },
  props: {
    error: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.errorPage {
  &__template {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    h2 {
      color: #666;
      font-size: 6rem;
    }

    p {
      color: #999;
      font-size: 1.2rem;
    }
  }
}
</style>
