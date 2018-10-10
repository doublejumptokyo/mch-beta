<template lang="pug">
.teamPage
  .page__title
    h1 {{ $i18n.t('pages.team') }}
    button(@click="isShareModalShown = true") {{ $i18n.t('team.button') }}
  .teamPage__team.team
    no-ssr
      ol
        template(v-for="(unit, index) in units")
          unit-list-item.team__listItem(
            v-if="unit"
            :to="`/team/${index + 1}`"
            :unit="getUnit(unit)"
            :skillOrder="getSkillOrder(unit)"
          )

  modal.shareModal(v-if="isShareModalShown" @modal-close="isShareModalShown = false")
    h2.shareModal__header(slot="header") Share
    .shareModal__body(slot="body")
      ul
        li
          button(v-clipboard:copy="myUrl" v-clipboard:success="onCopySucceeded")
            fa-icon(:icon="['far', 'copy']" size="2x")
            span Copy URL
        no-ssr
          li
            a(:href="`https://twitter.com/share?url=${myUrl}&hashtags=MCH,MyCryptoHeroes&text=${text}`")
              fa-icon(:icon="['fab', 'twitter']" size="2x")
              span Twitter
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
import UnitListItem from '~/components/UnitListItem'
import Modal from '~/components/Modal'
export default {
  middleware: 'walletCheck',
  components: { draggable, UnitListItem, Modal },
  data() {
    return {
      units: [],
      isShareModalShown: false
    }
  },
  computed: {
    ...mapState(['env', 'loomAddress']),
    myUrl() {
      return `${this.env.siteUrl}users/${this.loomAddress}`
    },
    text() {
      return encodeURIComponent("Let's battle with me!")
    }
  },
  async mounted() {
    const address = this.$store.state.loomAddress
    this.units = await this.$team.get(address)
  },
  methods: {
    getUnit(unit) {
      return unit.filter((num, index) => index < 3)
    },
    getSkillOrder(unit) {
      return unit.filter((num, index) => index > 2)
    },
    onCopySucceeded() {
      window.alert(`Copied!\nURL: ${this.myUrl}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.teamPage {
  &__team {
    margin: 1rem -1rem;
  }

  .page__title {
    align-items: center;
    display: flex;
    justify-content: space-between;

    button {
      border: 1px solid map-get($colors, primary);
      border-radius: 1rem;
      color: map-get($colors, primary);
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
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

  &__listItem {
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
}

// .swiper-container {
//   -webkit-tap-highlight-color: transparent;
// }

// .swiper-container-horizontal > .swiper-pagination-bullets {
//   bottom: auto;
//   top: 0;

//   /deep/ .swiper-pagination-bullet-active {
//     background: map-get($colors, primary);
//   }
// }

.shareModal {
  &__body {
    ul {
      align-items: center;
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      margin: 1rem 0;
      padding: 0;
      width: 100%;

      li {
        button,
        a {
          align-items: center;
          color: inherit;
          display: flex;
          flex-direction: column;
          text-decoration: none;

          .svg-inline--fa {
            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
