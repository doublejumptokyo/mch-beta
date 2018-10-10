<template lang="pug">
.userPage
  .page__title
    div
      h1 {{ user.name }}
      p {{ address }}
    a(:href="mailAddress")
      fa-icon(icon="exclamation-triangle")
      span {{ $t('userId.reportButton') }}
  .userPage__user.team
    no-ssr
      ol
        template(v-for="(unit, index) in units")
          unit-list-item(
            v-if="unit"
            :unit="getUnit(unit)"
            :skillOrder="getSkillOrder(unit)"
          )
  .userPage__battleButton
    nuxt-link(:to="`/battle-against2/${$route.params.id}`")
      span Battle Start
      fa-icon(icon="arrow-right")
</template>

<script>
import UnitListItem from '~/components/UnitListItem'
export default {
  middleware: 'walletCheck',
  components: { UnitListItem },
  data() {
    return {
      address: '',
      user: {},
      units: []
    }
  },
  computed: {
    mailAddress() {
      const address = 'mch-support@doublejump.tokyo'
      const subject = encodeURIComponent(
        this.$t('userId.mail.subject', {
          userName: this.$store.state.user.name,
          userAddress: this.$store.state.loomAddress
        })
      )
      const body = encodeURIComponent(
        this.$t('userId.mail.body', {
          userName: this.user.name,
          userAddress: this.address
        })
      )
      return `mailto:${address}?subject=${subject}&body=${body}`
    }
  },
  async beforeMount() {
    this.address = this.$route.params.id
    this.user = await this.$user.get(this.address)
    const units = await this.$team.get(this.address)

    units.forEach(async unit => {
      let hero = await this.$hero.get(unit[0])
      hero = Object.assign(hero, this.$hero.getHeroType(hero.heroType))
      this.$store.commit('heroes/SET_HERO', hero)

      let extension1 = await this.$extension.get(unit[1])
      extension1 = Object.assign(
        extension1,
        this.$extension.getExtensionType(extension1.extensionType)
      )
      this.$store.commit('extensions/SET_EXTENSION', extension1)

      let extension2 = await this.$extension.get(unit[2])
      extension2 = Object.assign(
        extension2,
        this.$extension.getExtensionType(extension2.extensionType)
      )
      this.$store.commit('extensions/SET_EXTENSION', extension2)
    })

    this.units = units
  },
  destroyed() {
    // 緊急対応
    // ユーザーAがユーザーBのこのページを見たあとインベントリに行くと、ユーザーBのヒーローも見えてしまうため
    // [TODO] storeに入れるヒーローの管理方法検討
    location.reload()
  },
  methods: {
    getUnit(unit) {
      return unit.filter((num, index) => index < 3)
    },
    getSkillOrder(unit) {
      return unit.filter((num, index) => index > 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.userPage {
  .page__title {
    align-items: center;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.2rem;
    }

    p {
      color: #999;
      font-size: 0.8rem;
    }

    a {
      border: 1px solid #999;
      border-radius: 1rem;
      color: #999;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 1;
      margin-left: 1rem;
      padding: 0.5rem;
      text-decoration: none;
      white-space: nowrap;

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  &__user {
    margin: 1rem -1rem;
  }

  &__battleButton {
    background: #444;
    bottom: 0;
    left: 0;
    margin: 0 -1rem;
    padding: 1rem;
    position: sticky;
    text-align: center;
    width: calc(100% + 2rem);

    a {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #444;
      display: block;
      margin: 0 auto;
      padding: 1rem;
      text-decoration: none;
      max-width: 640px;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }

      svg {
        margin-left: 0.5rem;
      }
    }
  }
}

.team {
  font-size: 0.8rem;

  @media (min-width: $breakpoint) {
    font-size: 1rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 1rem;
    padding: 0 1rem;

    button {
      border: 1px solid map-get($colors, primary);
      border-radius: 1rem;
      color: map-get($colors, primary);
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;

      &.button__ok {
        background: map-get($colors, primary);
        color: #fff;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }

  > ol {
    background: #555;
    list-style-type: none;
    margin: 0;
    padding: 0;

    * {
      user-select: none;
    }
  }
}
</style>
