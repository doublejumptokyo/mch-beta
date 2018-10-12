<template lang="pug">
.battlePage
  .page__title
    div
      h1 {{ $i18n.t('pages.battles') }}
      p Select a user to play against.
    button(@click="refresh")
      fa-icon(icon="sync")
  ul.tabList
    li.tabItem
      nuxt-link(to="/battle-against/ranked") Ranked
    li.tabItem
      nuxt-link(to="/battle-against/random") Random
    li.tabItem
      nuxt-link(to="/battle-against/top") Top 20

  nuxt-child(:users="users" @init="init")
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: 'walletCheck',
  fetch({ route, redirect }) {
    if (route.name === 'battle-against') {
      return redirect('/battle-against/ranked')
    }
  },
  data() {
    return {
      users: [],
      from: 1
    }
  },
  computed: mapState(['loomAddress']),
  methods: {
    init({ from }) {
      this.from = from
      this.fetch(from)
    },
    refresh() {
      this.fetch(this.from)
    },
    async fetch(from) {
      const addresses = await this.$rank.list(from)
      let users = await this.fetchUsers(addresses)
      const myRank = await this.fetchMyRank()
      users = users.map((user, i) => ({
        name: user.name,
        address: addresses[i],
        isMe: this.loomAddress.toLowerCase() === addresses[i].toLowerCase()
      }))
      this.$set(this, 'users', users)
      const [ranks, teams] = await Promise.all([
        this.fetchRank(addresses),
        this.fetchTeams(addresses)
      ])
      users = ranks.map((rank, i) =>
        Object.assign(
          {},
          users[i],
          { address: addresses[i] },
          { rank, isRanked: myRank - 21 < rank && rank < myRank }
        )
      )
      users = teams.map((team, i) => Object.assign({}, users[i], { team }))
      this.$set(this, 'users', users)
    },
    async fetchMyRank() {
      return await this.$rank.rank(this.loomAddress)
    },
    async fetchUsers(addresses) {
      const userPromises = addresses
        .filter(address => address !== this.loomAddress)
        .map(address => this.$user.get(address))
      return await Promise.all(userPromises)
    },
    async fetchRank(addresses) {
      const rankPromises = addresses.map(address => this.$rank.rank(address))
      return await Promise.all(rankPromises)
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

.tabList {
  display: flex;
  list-style-type: none;
  margin: 0 -1rem -1rem;
  padding: 0;
  width: calc(100% + 2rem);
}

.tabItem {
  width: 50%;

  a {
    appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    display: block;
    font-size: 0.9rem;
    margin: 0;
    outline: none;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &.nuxt-link-active {
      border-bottom: 2px solid #ccc;
    }
  }
}
</style>
