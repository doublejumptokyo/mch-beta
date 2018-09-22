<template lang="pug">
.errorPage
  no-wallet(v-if="error.statusCode === 401")
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
