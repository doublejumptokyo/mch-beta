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

  nuxt-child(ref="userList" :users="users" @init="init")
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
      users: []
    }
  },
  computed: mapState(['loomAddress']),
  watch: {
    $route() {
      // タブ切り替え時にリストがチラつくため
      this.users = []
    }
  },
  methods: {
    init({ addresses }) {
      this.fetch(addresses)
    },
    refresh() {
      this.users = []
      this.$refs.userList.fetch()
    },
    async fetch(addresses) {
      const myRank = await this.$rank.rank(this.loomAddress)
      addresses.forEach(async address => {
        const [user, rank, teamIds] = await Promise.all([
          this.$user.get(address),
          this.$rank.rank(address),
          this.$team.get(address)
        ])
        const team = await Promise.all(
          teamIds.map(unit => this.$hero.get(unit[0]))
        )
        const name = user.name
        const isMe = this.loomAddress.toLowerCase() === address.toLowerCase()
        const isRanked = myRank - 21 < rank && rank < myRank
        this.users.push({ address, rank, team, name, isMe, isRanked })
      })
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
