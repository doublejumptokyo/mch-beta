<template lang="pug">
.battlePage
  user-list(:users="users")
</template>

<script>
import UserList from '~/components/UserList'

const RANDOM_MAX_RANK = 200

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
    this.fetch()
  },
  methods: {
    async fetch() {
      const addresses = await Promise.all(
        Array.from(Array(20).keys())
          .map(() => Math.floor(Math.random() * RANDOM_MAX_RANK) + 1)
          .map(rank => this.$rank.address(rank))
      )
      this.$emit('init', { addresses })
    }
  }
}
</script>
