<template lang="pug">
.battlePage
  page-header.battlePage__header
    template
      h1 {{ $i18n.t('pages.battles') }}
      //- .battlePage__myRank(v-if="myRank")
      //-   span Your current rank:
      //-   span {{ `#${myRank}` }} {{ `/ ${participants}` }}
    button(slot="right" @click="refresh")
      fa-icon(icon="sync")

  .battlePage__info
    template(v-if="termStatus === 'IN_RANKING_TERM'")
      p
        a(href="https://medium.com/mycryptoheroes/rules-of-beta-battle-ranked-match-ae8bb455ce4d") {{ $t('battle.info.newRule') }}
        //- a(href="https://medium.com/mycryptoheroes/rules-of-beta-battle-ranked-match-ae8bb455ce4d") [beta battle] バトルβランキング戦ルール / Rules of beta battle ranked match
      p.div
        span.rankedButton Ranked
        span.rankedText {{ $t('battle.info.rankHow') }}
    template(v-else-if="termStatus === 'IN_AGGREGATING_TERM'")
      p {{ $t('battle.info.inAggregatingTerm') }}
    template(v-else-if="termStatus === 'AFTER_AGGREGATING_TERM'")
      p {{ $t('battle.info.afterAggregatingTerm') }}
      p
        a(href="https://medium.com/mycryptoheroes/beta-battle-ranked-match-result-e1deeada31db") [beta battle]バトルβランキング戦結果発表 / Beta Battle Ranked Match result
  //- ul.tabList
  //-   li.tabItem
  //-     nuxt-link(to="/battle-against/ranked") Ranked
  //-   li.tabItem
  //-     nuxt-link(to="/battle-against/random") Random
  //-   li.tabItem
  //-     nuxt-link(to="/battle-against/top") Top 20

  nuxt-child(
    ref="userList"
    :users="users"
    :my-rank="myRank"
    :will-change-rank="willChangeRank"
    @init="init"
  )
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '~/components/PageHeader'

const END_OF_RANKING_TERM = new Date(Date.UTC(2018, 10 - 1, 21, 6))
const END_OF_AGGREGATING_TERM = new Date(Date.UTC(2018, 10 - 1, 22, 6))
const END_OF_RANKING_TERM_MS = END_OF_RANKING_TERM.getTime()
const END_OF_AGGREGATING_TERM_MS = END_OF_AGGREGATING_TERM.getTime()
const WILL_CHANGE_RANK = 9

export default {
  middleware: 'walletCheck',
  components: { PageHeader },
  async asyncData({ $axios }) {
    const now = await $axios
      .$get('/now.json')
      .then(now => now.unixMsec * 1000)
      .catch(() => new Date().getTime())
    let termStatus
    const isRankingTerm = now < END_OF_RANKING_TERM_MS
    const isAfterRankingTerm = END_OF_RANKING_TERM_MS < now
    const isBeforeAggregatingTerm = now < END_OF_AGGREGATING_TERM_MS
    const isAggregatingTerm = isAfterRankingTerm && isBeforeAggregatingTerm
    if (isRankingTerm) {
      termStatus = 'IN_RANKING_TERM'
    } else if (isAggregatingTerm) {
      termStatus = 'IN_AGGREGATING_TERM'
    } else {
      termStatus = 'AFTER_AGGREGATING_TERM'
    }

    return { termStatus }
  },
  fetch({ route, redirect }) {
    if (route.name === 'battle-against') {
      return redirect('/battle-against/ranked')
    }
  },
  data() {
    return {
      users: {
        ranked: [],
        random: [],
        top: []
      },
      isFetchings: {
        ranked: false,
        random: false,
        top: false
      },
      myRank: null,
      participants: null
    }
  },
  computed: {
    ...mapState(['loomAddress']),
    willChangeRank() {
      return WILL_CHANGE_RANK
    },
    routeName() {
      return this.$route.name !== 'battle-against'
        ? this.$route.name.split('-').pop()
        : null
    }
  },
  async beforeMount() {
    this.myRank = await this.$rank.rank(this.loomAddress)
    this.participants = await this.$rank.participants()
  },
  methods: {
    init({ addresses }) {
      this.fetch(addresses)
    },
    refresh() {
      // this.isFetchings[this.routeName] = false
      // this.myRank = await this.$rank.rank(this.loomAddress)
      // this.$refs.userList.fetch()
      location.reload()
    },
    async fetch(addresses) {
      const routeName = this.routeName
      if (this.isFetchings[routeName]) return
      this.isFetchings[routeName] = true
      const noUserAddress = '0x0000000000000000000000000000000000000000'
      addresses
        .filter(address => address !== noUserAddress)
        .forEach(async address => {
          // const [user, rank, teamIds] = await Promise.all([
          const [user, rank] = await Promise.all([
            this.$user.get(address),
            this.$rank.rank(address)
            // this.$team.get(address)
          ])
          // const team = await Promise.all(
          //   teamIds.map(unit => this.$hero.get(unit[0]))
          // )
          const name = user.name
          const isMe = this.loomAddress.toLowerCase() === address.toLowerCase()
          const isRanked =
            this.myRank - WILL_CHANGE_RANK <= rank && rank < this.myRank
          this.users[routeName].push({
            address,
            rank,
            // team,
            name,
            isMe,
            isRanked
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.battlePage {
  &__header {
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

  &__myRank {
    span {
      &:first-of-type {
        color: #999;
        font-size: 0.9rem;

        @media (min-width: $breakpoint) {
          font-size: 1rem;
        }
      }

      &:last-of-type {
        font-family: Oswald;
        font-weight: bold;
        margin-left: 0.5rem;

        @media (min-width: $breakpoint) {
          font-size: 1.8rem;
        }
      }
    }
  }

  &__info {
    background: #555;
    border-radius: 1rem;
    color: #ccc;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    padding: 1rem;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
      margin: 0 1rem 1rem;
    }

    .div {
      margin-top: 0.5rem;
    }

    .rankedButton {
      border-radius: 0.25rem;
      display: inline-block;
      font-family: Oswald;
      font-size: 0.8rem;
      font-weight: bold;
      line-height: 1;
      padding: 0.25rem 0.5rem;
      color: white;
      background: map-get($colors, primary);
    }

    .rankedText {
      color: white;
      margin-left: 0.8rem;
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

    @media (min-width: $breakpoint) {
      font-size: 1rem;
      padding: 1rem;
    }

    &.nuxt-link-active {
      border-bottom: 2px solid #ccc;
    }
  }
}
</style>
