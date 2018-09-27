<template lang="pug">
.battlePage
  .page__title
    h1 {{ $i18n.t('pages.battles') }}
  p 対戦するユーザーを選択してください
  user-list(:users="users")
</template>

<script>
import UserList from '~/components/UserList'

const TOTAL_USER_COUNT = 560 - 20

export default {
  components: { UserList },
  data() {
    return {
      users: []
    }
  },
  async beforeMount() {
    if (process.server) return
    const from = Math.floor(Math.random() * TOTAL_USER_COUNT) + 1
    const addresses = await this.$rank.list(from)
    const users = []
    await Promise.all(
      addresses.map(async address => {
        const user = await this.$user.get(address)
        users.push({ name: user.name, address })
      })
    )
    console.log(users)
    this.$set(this, 'users', users)
  }
}
</script>
