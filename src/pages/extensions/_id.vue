<template lang="pug">
.assetPage

  .assetPage__left(v-if="item")

    .assetPage__image
      img(:src="require(`~/assets/images/extensions/${item.fileName}`)")
    .assetPage__rarity
      p {{ item.rarity }}
    .assetPage__name
      h1 {{ item.name[$i18n.locale] }}
      p {{ `#${item.id}` }}

  .assetPage__right(v-if="item")
    .assetPage__statuses
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/hp.png')")
          | HP
        p + {{ item.hp }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/agi.png')")
          | AGI
        p + {{ item.agi }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/atk.png')")
          | PHY
        p + {{ item.phy }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/int.png')")
          | INT
        p + {{ item.intl }}
      .assetPage__skill.assetPage__activeSkill
        .assetPage__skill--left
          span Active
          img(:src="require(`~/assets/images/icons/skill/${item.activeSkill.iconFileName}`)")
        .assetPage__skill--right
          p {{ item.activeSkill.name[$i18n.locale] }}
          p {{ item.activeSkill.description[$i18n.locale] }}
  div(v-else)
    p Loading ...
</template>

<script>
export default {
  validate({ params }) {
    return /^[0-9]{8}$/.test(params.id)
  },
  computed: {
    item() {
      return this.$store.state.extensions.find(
        extension => extension.id === Number(this.$route.params.id)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.assetPage {
  @media (min-width: $breakpoint) {
    // align-items: flex-end;
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

    img {
      image-rendering: pixelated;
      width: 100%;
    }
  }

  &__name {
    margin: 0 0 1rem;
    text-align: center;

    p {
      color: #999;
      font-weight: 100;
    }
  }

  &__rarity {
    color: #ccc;
    font-family: 'Merriweather Sans';
    font-size: 1.2rem;
    text-align: center;
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
}
</style>
