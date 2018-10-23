<template lang="pug">
.adminPage
  h1 Admin Page
  section
    h2 Force Unset Ipfs
    form(@submit.prevent="forceUnset")
      input(placeholder="00000000" v-model="heroId")
      button(type="submit") Submit
  p ヒーローデータ
    form(@submit.prevent="getAddress")
      button(type="submit") Get
      table
        tr
          th 順位
          th ユーザ名
          th Loomアドレス
          th 所持数
          th 先頭
          th 中間
          th 後方
          th インベントリ
        tr(v-for="user in users")
          th {{ user.rank }}
          th {{ user.name }}
          th {{ user.address}}
          th {{ user.amount }}
          th {{ user.front }}
          th {{ user.middle }}
          th {{ user.back }}
          th {{ user.inventory }}
</template>

<script>
export default {
  layout: 'battle',
  data() {
    return {
      users: [],
      heroId: '',
      name: '',
      address: null,
      amount: '',
      front: '',
      middle: '',
      back: '',
      inventory: ''
    }
  },
  methods: {
    async forceUnset() {
      try {
        await this.$heroManager.forceUnset(Number(this.heroId))
        this.$toast.show('Success.')
        this.heroId = ''
      } catch (e) {
        console.error(e)
        this.$toast.error('Error.')
      }
    },
    async getAddress() {
      for (var i = 1; i <= 100; i++) {
        this.address = await this.$rank.address(i)
        const account = await this.$user.get(this.address)
        this.name = account[1]
        const deck = await this.$team.get(this.address)
        this.front = Math.floor(deck[0][0] / 10000)
        this.middle = Math.floor(deck[1][0] / 10000)
        this.back = Math.floor(deck[2][0] / 10000)
        // this.team.push(Math.floor(deck[0][0] / 10000))
        // this.team.push(Math.floor(deck[1][0] / 10000))
        // this.team.push(Math.floor(deck[2][0] / 10000))

        this.amount = await this.$hero.asset.getHeroCount(this.address)
        let inventory = []
        for (var n = 0; n < this.amount; n++) {
          let hero = await this.$hero.asset.getHeroId(this.address, n)
          hero = Math.floor(hero / 10000)
          inventory.push(hero)
        }
        console.log('順位  ' + i)
        this.users.push({
          rank: i,
          name: this.name,
          address: this.address,
          amount: this.amount,
          front: this.front,
          middle: this.middle,
          back: this.back,
          inventory: inventory
        })
      }
    }
  }
}
</script>
