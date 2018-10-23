<template lang="pug">
.assetPage
  .assetPage__left(v-if="hero")
    .assetPage__image
      img(:src="hero.imageUrl")
      nuxt-link(v-if="isOwner" to="edit" append)
        fa-icon(:icon="['far', 'edit']")
        span Art Edit
    .assetPage__rarity
      p {{ hero.rarity }}
    .assetPage__name
      h1 {{ hero.name[$i18n.locale] }}
      p {{ `#${hero.id}` }}
    .assetPage__wikipedia
      button(v-if="hero.wikipediaUrl" @click="isWikiModalShown = true") Wikipedia
    .assetPage__owner(v-if="!isOwner")
      h2 Owner
      p {{ ownerAddress }}

  .assetPage__right(v-if="hero")

    .assetPage__actionButton(v-if="isSellable")
      button(@click="isActionsShown = true")
        fa-icon(:icon="['far', 'edit']")

    modal(v-if="isActionsShown" @modal-close="isActionsShown = false")
      .assetPage__actions(slot="body")
        button.assetPage__sellButton
          span Sell
        button.assetPage__sellButton
          span Send to ETH Main Network

    .assetPage__statuses(:style="{ 'padding-top': isSellable ? '2rem' : '1rem' }")
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/hp.png')")
          | HP
        p {{ hero.hp }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/agi.png')")
          | AGI
        p {{ hero.agi }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/atk.png')")
          | PHY
        p {{ hero.phy }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/int.png')")
          | INT
        p {{ hero.intl }}
      .assetPage__skill.assetPage__activeSkill
        .assetPage__skill--left
          span Active
          img(:src="require(`~/assets/images/icons/skill/${hero.activeSkill.iconFileName}`)")
        .assetPage__skill--right
          p {{ hero.activeSkill.name[$i18n.locale] }}
          p {{ hero.activeSkill.description[$i18n.locale] }}
      .assetPage__skill.assetPage__passiveSkill
        .assetPage__skill--left
          span Passive
          img(:src="require(`~/assets/images/icons/skill/${hero.passiveSkill.iconFileName}`)")
        .assetPage__skill--right
          p {{ hero.passiveSkill.name[$i18n.locale] }}
          p {{ hero.passiveSkill.description[$i18n.locale] }}

    modal.wikiModal(type="bottom" v-if="isWikiModalShown" @modal-close="isWikiModalShown = false")
      h2(slot="header") Wikipedia
      .wikiModal__body(slot="body")
        iframe(:src="hero.wikipediaUrl[$i18n.locale]")
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  validate({ params }) {
    return /^[0-9]{8}$/.test(params.id)
  },
  data() {
    return {
      hero: null,
      isModalShown: false,
      isActionsShown: false,
      isWikiModalShown: false,
      ownerAddress: ''
    }
  },
  computed: {
    isOwner() {
      return (
        this.ownerAddress.toLowerCase() ===
        this.$store.state.loomAddress.toLowerCase()
      )
    },
    isSellable() {
      return this.$route.params.id < 6
    },
    isBuyable() {
      return this.$route.params.id > 5
    }
  },
  async mounted() {
    const heroId = Number(this.$route.params.id)
    this.hero = await this.$hero.get(heroId)
    this.ownerAddress = await this.$hero.asset.getOwnerAddress(heroId)
  }
}
</script>

<style lang="scss" scoped>
.assetPage {
  @media (min-width: $breakpoint) {
    display: flex;

    &__left {
      flex: 2;
      margin: 1rem;
    }

    &__right {
      flex: 3;
      margin: 1rem;
    }
  }

  &__image {
    margin-bottom: 1rem;
    padding: 1rem;
    position: relative;

    img {
      border-radius: 1rem;
      image-rendering: pixelated;
      width: 100%;
    }

    a {
      align-items: center;
      background: #666;
      border-radius: 9999px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      color: #ccc;
      display: flex;
      padding: 0.5rem 1rem;
      position: absolute;
      right: 0;
      text-align: center;
      text-decoration: none;
      top: 0;

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  &__rarity {
    color: #ccc;
    font-family: 'Merriweather Sans';
    font-size: 1.2rem;
    text-align: center;
  }

  &__name {
    margin: 0 0 1rem;
    text-align: center;

    div {
      align-items: center;
      display: flex;
      justify-content: center;

      button {
        margin-left: 1rem;
        background: #eee;
        border-radius: 9999px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
      }
    }

    p {
      color: #999;
      font-weight: 100;
    }
  }

  &__owner {
    border: 1px solid #999;
    border-radius: 1rem;
    color: #999;
    padding: 1rem;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  &__actionButton {
    position: relative;

    button {
      appearance: none;
      background: map-get($colors, primary);
      border: none;
      border-radius: 50%;
      bottom: -2rem;
      color: map-get($colors, white);
      font-size: 1.2rem;
      height: 4rem;
      line-height: 4rem;
      padding: 0;
      position: absolute;
      right: 0;
      width: 4rem;

      @media (min-width: $breakpoint) {
        bottom: -3rem;
        right: -1rem;
      }
    }
  }

  &__statuses {
    background: #555;
    color: #555;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem -1rem 1rem;
    padding: 1rem 1rem 2rem 0;

    @media (min-width: $breakpoint) {
      margin: 1rem 0;
    }
  }

  &__status {
    background: #666;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    color: #fff;
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    text-align: center;
    width: calc((100% - 4rem) / 4);

    h3 {
      align-items: center;
      display: flex;
      font-size: 1rem;
      justify-content: center;
      margin-left: -0.5rem;
      white-space: nowrap;
    }

    img {
      margin-right: 0.25rem;
      opacity: 0.5;
      width: 1.2rem;

      @media (min-width: $breakpoint) {
        width: 2rem;
      }
    }

    p {
      font-size: 5vw;
      font-family: Oswald;
      white-space: nowrap;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }
    }
  }

  &__skill {
    align-items: center;
    background: #666;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    color: #fff;
    display: flex;
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    width: 100%;

    &--left {
      flex: 0 0 auto;
      margin-right: 1rem;
      min-width: 58px;
      text-align: center;
    }

    img {
      display: inline-block;
      height: auto;
      width: 2rem;
    }

    span {
      border: 1px solid #999;
      border-radius: 0.5rem;
      color: #999;
      display: block;
      font-family: 'Merriweather Sans';
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
      padding: 0.25rem 0.5rem;
    }

    p {
      &:first-of-type {
        font-weight: bold;
      }
    }
  }

  &__chart {
    height: 0;
    margin: 1rem 0;
    padding-top: calc(100% * 9 / 16);
    position: relative;

    .vue-highcharts {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &__chartSummary {
    display: flex;
    margin: 1rem 0;

    > * {
      text-align: center;
      width: calc(100% / 3);
    }

    h4 {
      font-size: 0.9rem;
    }

    span {
      font-size: 1.2rem;
      font-family: Oswald;
    }

    > *:not(:last-of-type) {
      span {
        &::after {
          content: 'NovCoin';
          font-size: 0.9rem;
          font-family: inherit;
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__buyButton {
    appearance: none;
    background: map-get($colors, primary);
    border: none;
    border-radius: 1rem;
    color: map-get($colors, white);
    cursor: pointer;
    font-size: inherit;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;

    span:nth-of-type(1) {
      margin-right: 0.5rem;
    }

    span:nth-of-type(2) {
      font-size: 1.5rem;
      font-weight: bold;
    }

    span:nth-of-type(3) {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }

  &__sellButton {
    appearance: none;
    background: map-get($colors, white);
    border: 1px solid map-get($colors, primary);
    border-radius: 1rem;
    color: map-get($colors, primary);
    cursor: pointer;
    font-size: inherit;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
  }

  &__wikipedia {
    margin: 1rem 0;
    text-align: center;

    button {
      border: 1px solid #999;
      border-radius: 1rem;
      color: #999;
      font-size: 0.8rem;
      line-height: 1;
      padding: 0.5rem 1rem;
    }
  }
}

.buyModal {
  &__body {
    table {
      background: #f9f9f9;
      border-collapse: collapse;
      border-radius: 1rem;
      text-align: right;
      width: 100%;

      tr:last-of-type {
        border-top: 1px solid #eee;
      }

      th,
      td {
        padding: 1rem;
      }

      th {
        font-weight: normal;
      }

      td {
        font-weight: bold;

        &::after {
          content: 'NovCoin';
          font-size: 0.8rem;
          font-weight: normal;
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__footer {
    display: flex;
    padding: 1rem;
  }

  &__buyButton,
  &__cancelButton {
    appearance: none;
    background: inherit;
    border: none;
    border-radius: 1rem;
    color: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0.5rem 1rem;
    width: 100%;
  }

  &__buyButton {
    background: map-get($colors, primary);
    color: map-get($colors, white);
  }
}

.wikiModal {
  &__body {
    height: 0;
    margin: -1rem;
    padding-top: 80vh;
    position: relative;
    width: calc(100% + 2rem);
  }

  iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
