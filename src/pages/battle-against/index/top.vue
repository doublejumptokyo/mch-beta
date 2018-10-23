<template lang="pug">
.battleTopPage
  user-list(:users="users.top")
</template>

<script>
import UserList from '~/components/UserList'

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
      const addresses = await this.$rank.list(1)
      this.$emit('init', { addresses })
    }
  }
}
</script>
