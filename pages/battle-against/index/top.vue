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
  beforeMount() {
    this.$emit('init', { from: 1 })
  }
}
</script>
