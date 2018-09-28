<template lang="pug">
.battlePage
  .page__title
    h1 {{ $i18n.t('pages.battles') }}
  p Select a user to play against.
  user-list(:users="users")
</template>

<script>
import UserList from '~/components/UserList'

const TOTAL_USER_COUNT = 415 - 20

export default {
  components: { UserList },
  middleware: 'walletCheck',
  data() {
    return {
      users: []
    }
  },
  async beforeMount() {
    const from = Math.floor(Math.random() * TOTAL_USER_COUNT) + 1
    const addresses = await this.$rank.list(from)
    const users = []
    await Promise.all(
      addresses.map(async address => {
        const user = await this.$user.get(address)
        users.push({ name: user.name, address })
      })
    )
    this.$set(this, 'users', users)
  }
}
</script>
