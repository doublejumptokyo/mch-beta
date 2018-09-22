<template lang="pug">
.indexPage
  .indexPage__keyVisual
    img(:src="require('~/assets/images/key_visual.jpg')")
  section.indexPage__section
    h2 What's My Crypto Heroes
    .indexPage__features
      .indexPage__feature
        fa-icon(icon="award" size="6x")
        h3 Proof of Play
        p 基本無料のゲームをプレイしてブロックチェーンアセットを獲得！
      .indexPage__feature
        fa-icon(icon="trophy" size="6x")
        h3 Proof of Victory
        p プレイヤー同士の対戦に勝利してブロックチェーンアセットを獲得！
      .indexPage__feature
        fa-icon(icon="exchange-alt" size="6x")
        h3 Trading Asset
        p 獲得したブロックチェーンアセットをトレードして自軍を増強！
      .indexPage__feature
        fa-icon(icon="pen-nib" size="6x")
        h3 Editable Asset
        p ブロックチェーンアセットの価値を自ら創造！
</template>

<style lang="scss" scoped>
.indexPage {
  &__keyVisual {
    height: 0;
    margin: -1rem -1rem 1rem;
    padding-top: 100%;
    position: relative;

    @media (min-width: $breakpoint) {
      height: auto;
      padding-top: 0;
      position: static;
    }

    img {
      left: 0;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 100%;

      @media (min-width: $breakpoint) {
        object-fit: inherit;
        position: static;
      }
    }
  }

  &__section {
    h2 {
      border-bottom: 2px solid map-get($colors, primary);
    }
  }

  &__features {
  }

  &__feature {
    margin: 3rem 1rem;
    text-align: center;

    svg {
      color: rgba(64, 189, 118, 0.25);
    }

    h3 {
      color: #fff;
      font-family: Oswald;
      font-size: 2.5rem;
      margin-top: -2.5rem;
      -webkit-text-stroke: 1px rgba(64, 189, 118, 1);
      // text-shadow: 0 1px 2px rgba(64, 189, 118, .5);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    p {
      margin: 1rem 0;
    }
  }
}

h1,
ul {
  margin: 1rem 0;
}
</style>
