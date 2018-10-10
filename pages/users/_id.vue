<template lang="pug">
.userPage
  .page__title
    div
      h1 {{ user.name }}
      p {{ address }}
    button(@click="isReportModalShown = true")
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
            :to="`/heroes/${unit[0]}`"
          )
  .userPage__battleButton
    nuxt-link(:to="`/battle-against2/${$route.params.id}`")
      span Battle Start
      fa-icon(icon="arrow-right")

  modal.modal(v-if="isReportModalShown" @modal-close="isReportModalShown = false")
    h2.modal__header(slot="header") Report User
    .modal__body(slot="body")
      .report
        .report__group
          h3 Mail Address
          p
            input(readonly :value="mailAddress")
        .report__group
          h3 Title
          p
            input(readonly :value="mailTitle")
        .report__group
          h3 Body
          p
            textarea(readonly) {{ mailBody }}
    .modal__footer(slot="footer")
      button.cancelButton(@click="isReportModalShown = false") Cancel
      a.submitButton(:href="mailTo") Open Mailer
</template>

<script>
import UnitListItem from '~/components/UnitListItem'
import Modal from '~/components/Modal'
export default {
  middleware: 'walletCheck',
  components: { UnitListItem, Modal },
  data() {
    return {
      address: '',
      user: {},
      units: [],
      isReportModalShown: false
    }
  },
  computed: {
    mailAddress() {
      return 'mch-support@doublejump.tokyo'
    },
    mailTitle() {
      return this.$t('userId.mail.subject', {
        userName: this.$store.state.user.name,
        userAddress: this.$store.state.loomAddress
      })
    },
    mailBody() {
      return this.$t('userId.mail.body', {
        userName: this.user.name,
        userAddress: this.address
      })
    },
    mailTo() {
      return `mailto:${this.mailAddress}?subject=${encodeURIComponent(
        this.mailTitle
      )}&body=${encodeURIComponent(this.mailBody)}`
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

    button {
      border: 1px solid #999;
      border-radius: 1rem;
      color: #999;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 1;
      margin-left: 1rem;
      padding: 0.5rem;
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

    > li {
      cursor: pointer;
      opacity: 1;
      transition: all 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}

.report {
  &__group {
    margin: 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    h3 {
      color: #999;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    input,
    textarea {
      appearance: none;
      background: transparent;
      border: 1px solid #666;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 0.8rem;
      padding: 0.75rem;
      width: 100%;
    }

    textarea {
      height: 6rem;

      @media (min-width: $breakpoint) {
        height: 12rem;
      }
    }
  }
}

.modal {
  &__footer {
    display: flex;
    padding: 1rem;

    > button {
      color: #999;
      padding: 0.5rem;
      width: 100%;
    }

    > a {
      border: 1px solid map-get($colors, primary);
      border-radius: 1rem;
      color: map-get($colors, primary);
      display: block;
      line-height: 1;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      width: 100%;

      @media (min-width: $breakpoint) {
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
