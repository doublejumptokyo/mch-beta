<template lang="pug">
.battlePage
  user-list(:users="users")
</template>

<script>
import UserList from '~/components/UserList'

const TOTAL_USER_COUNT = 415 - 20

export default {
  components: { UserList },
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    }
  },
  async beforeMount() {
    const addresses = await Promise.all(
      Array.from(Array(20).keys())
        .map(() => Math.floor(Math.random() * TOTAL_USER_COUNT) + 1)
        .map(rank => this.$rank.address(rank))
    )
    this.$emit('init', { addresses })
  }
}
</script>
