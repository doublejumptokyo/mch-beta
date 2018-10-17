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
      const addresses = await this.fetchAddresses()
      let users = await this.fetchUsers(addresses)
      users = users.map((user, i) => ({
        name: user.name,
        address: addresses[i]
      }))
      this.$set(this, 'users', users)
      const teams = await this.fetchTeams(addresses)
      users = teams.map((team, i) =>
        Object.assign({}, users[i], { address: addresses[i] }, { team })
      )
      this.$set(this, 'users', users)
    },
    async fetchAddresses() {
      const from = Math.floor(Math.random() * TOTAL_USER_COUNT) + 1
      return await this.$rank.list(from)
    },
    async fetchUsers(addresses) {
      const userPromises = addresses
        .filter(address => address !== this.loomAddress)
        .map(address => this.$user.get(address))
      return await Promise.all(userPromises)
    },
    async fetchTeams(addresses) {
      const teamPromises = addresses.map(address => this.$team.get(address))
      const teams = await Promise.all(teamPromises)
      return await Promise.all(
        teams.map(team => Promise.all(this.getHeroPromises(team)))
      )
    },
    getHeroPromises(team) {
      return team.map(unit => this.$hero.get(unit[0]))
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
