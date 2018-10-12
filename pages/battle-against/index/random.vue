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
  beforeMount() {
    const from = Math.floor(Math.random() * TOTAL_USER_COUNT) + 1
    this.$emit('init', { from })
  }
}
</script>
