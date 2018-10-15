<template lang="pug">
.battlePage
  user-list(:users="users")
</template>

<script>
import { mapState } from 'vuex'
import UserList from '~/components/UserList'

export default {
  components: { UserList },
  middleware: 'walletCheck',
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: mapState(['loomAddress']),
  async beforeMount() {
    const myRank = await this.$rank.rank(this.loomAddress)
    const addresses = await this.$rank.list(myRank - 20)
    this.$emit('init', { addresses })
  }
}
</script>
