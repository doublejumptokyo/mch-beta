<template lang="pug">
.battleRandomPage
  user-list(:users="users.random")
</template>

<script>
import UserList from '~/components/UserList'

const RANDOM_MAX_RANK = 1000

export default {
  components: { UserList },
  props: {
    users: {
      type: Object,
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
        this.getRanks().map(rank => this.$rank.address(rank))
      )
      this.$emit('init', { addresses })
    },
    getRanks() {
      const ranks = []
      while (ranks.length < 20) {
        const rank = this.getRandomRank()
        if (!ranks.includes(rank)) {
          ranks.push(rank)
        }
      }
      return ranks
    },
    getRandomRank() {
      return Math.floor(Math.random() * RANDOM_MAX_RANK) + 1
    }
  }
}
</script>
