<template lang="pug">
.battlePage
  .page__title
    div
      h1 {{ $i18n.t('pages.battles') }}
      p Select a user to play against.
    button(@click="fetch")
      fa-icon(icon="sync")
  user-list(:users="users")
</template>

<script>
import { mapState } from 'vuex'
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
  computed: mapState(['loomAddress']),
  beforeMount() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const from = Math.floor(Math.random() * TOTAL_USER_COUNT) + 1
      const addresses = await this.$rank.list(from)
      const userPromises = addresses
        .filter(address => address !== this.loomAddress)
        .map(address => this.$user.get(address))
      let users = await Promise.all(userPromises)
      const teamPromises = users
        .map((user, i) => ({ name: user.name, address: addresses[i] }))
        .map(user => this.$team.get(user.address))
      let teams = await Promise.all(teamPromises)
      teams = await Promise.all(
        teams.map(team =>
          Promise.all(team.map(unit => this.$hero.get(unit[0])))
        )
      )
      users = teams.map((team, i) =>
        Object.assign({}, users[i], { address: addresses[i] }, { team })
      )
      this.$set(this, 'users', users)
    }
  }
}
</script>

<style lang="scss" scoped>
.battlePage {
  .page__title {
    align-items: center;
    display: flex;

    > div {
      flex: 1;
    }

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
      }
    }

    button {
      border: 1px solid map-get($colors, primary);
      border-radius: 9999px;
      color: map-get($colors, primary);
      font-size: 0.8rem;
      line-height: 1;
      padding: 0.5rem;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
        padding: 1rem;
      }
    }
  }
}
</style>
