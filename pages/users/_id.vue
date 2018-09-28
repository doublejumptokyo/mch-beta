<template lang="pug">
.userPage
  .page__title
    h1 {{ user.name }}
    p {{ address }}
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
    nuxt-link(:to="`/battle-against/${$route.params.id}`") Battle Start
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
  .page__title p {
    color: #999;
    font-size: 0.8rem;
  }

  &__user {
    margin: 1rem -1rem;
  }

  &__battleButton {
    a {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #444;
      display: block;
      margin: 0 auto;
      padding: 1rem;
      text-align: center;
      text-decoration: none;
      max-width: 640px;
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
