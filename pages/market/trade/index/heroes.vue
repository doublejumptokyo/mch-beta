<template lang="pug">
section.section.section__heroList
  header
    button.filterButton(@click="isHeroFilterModalShown = true")
      fa-icon(icon="filter")
      | Filter
  .heroList
    nuxt-link.heroItem(to="/heroes/6")
      img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
      p.heroItem__name Ryofu
      .statuses
        .status
          h3
            img(:src="require('~/assets/images/icons/status/hp.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/atk.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/def.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/int.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/res.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/agi.png')")
          p 9999
      p.heroItem__price 9999
    nuxt-link.heroItem(to="/heroes/7")
      img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
      p.heroItem__name Ryofu
      .statuses
        .status
          h3
            img(:src="require('~/assets/images/icons/status/hp.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/atk.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/def.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/int.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/res.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/agi.png')")
          p 9999
      p.heroItem__price 9999
    nuxt-link.heroItem(to="/heroes/8")
      img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
      p.heroItem__name Ryofu
      .statuses
        .status
          h3
            img(:src="require('~/assets/images/icons/status/hp.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/atk.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/def.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/int.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/res.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/agi.png')")
          p 9999
      p.heroItem__price 9999
    nuxt-link.heroItem(to="/heroes/9")
      img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
      p.heroItem__name Ryofu
      .statuses
        .status
          h3
            img(:src="require('~/assets/images/icons/status/hp.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/atk.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/def.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/int.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/res.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/agi.png')")
          p 9999
      p.heroItem__price 9999
    nuxt-link.heroItem(to="/heroes/10")
      img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
      p.heroItem__name Ryofu
      .statuses
        .status
          h3
            img(:src="require('~/assets/images/icons/status/hp.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/atk.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/def.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/int.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/res.png')")
          p 9999
        .status
          h3
            img(:src="require('~/assets/images/icons/status/agi.png')")
          p 9999
      p.heroItem__price 9999

  modal.heroFilterModal(v-if="isHeroFilterModalShown" @modal-close="isHeroFilterModalShown = false")
    h3.heroFilterModal__header(slot="header") Hero Filter
    .heroFilterModal__body(slot="body")
      | ※フィルター内容要検討
    .heroFilterModal__footer(slot="footer")
      button.heroFilterModal__cancelButton(@click="isHeroFilterModalShown = false") Cancel
      button.heroFilterModal__submitButton(@click="isHeroFilterModalShown = false") OK
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      isHeroFilterModalShown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__heroList,
  &__itemList {
    background: #f9f9f9;
    margin: 1rem -1rem;
    padding: 1rem;

    header {
      display: flex;
    }
  }
}

.heroList,
.itemList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1rem -1rem;
}

.heroItem,
.itemItem {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: inherit;
  margin: 1rem 0 0 1rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: calc((100% - 2rem) / 2);

  @media (min-width: $breakpoint) {
    width: calc((100% - 4rem) / 4);
  }

  &__image {
    image-rendering: pixelated;
    width: 100%;
  }

  &__price {
    background: map-get($colors, primary);
    border-radius: 0 0 1rem 1rem;
    color: map-get($colors, white);
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem -1rem -1rem;
    padding: 0.5rem;

    &::after {
      content: 'NovCoin';
      font-size: 0.8rem;
      font-weight: normal;
      margin-left: 0.5rem;
    }
  }
}

.statuses {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -1rem;
}

.status {
  margin: 1rem 0 0 1rem;
  text-align: center;
  width: calc((100% - 3rem) / 3);

  h3 {
    margin: 0;
  }

  img {
    opacity: 0.5;
    vertical-align: middle;
    width: 2rem;
  }

  p {
    font-size: 3.5vw;
    font-family: Oswald;
    white-space: nowrap;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
    }
  }
}

.filterButton {
  background: map-get($colors, white);
  border: 1px solid #999;
  border-radius: 1rem;
  color: #999;
  font-size: 0.8rem;
  margin-left: auto;
  padding: 0.5rem 1rem;

  svg {
    margin-right: 0.5rem;
  }
}

.heroFilterModal {
  &__footer {
    display: flex;
    padding: 1rem;
  }

  &__submitButton,
  &__cancelButton {
    border-radius: 1rem;
    padding: 0.5rem;
    width: 50%;
  }

  &__submitButton {
    background: map-get($colors, primary);
    color: map-get($colors, white);
  }
}
</style>
