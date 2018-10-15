<template lang="pug">
.battlePage
  user-list(:users="users")
</template>

<script>
import UserList from '~/components/UserList'

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
      const addresses = await this.$rank.list(1)
      this.$emit('init', { addresses })
    }
  }
}
</script>
