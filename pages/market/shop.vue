<template lang="pug">
.shopPage
  .page__title
    h1 {{ $i18n.t('pages.shop') }}
    .shopPage__buyButton
      button
        fa-icon(:icon="['fab', 'ethereum']")
        span Buy NovCoin
  section.section.section__heroList
    .heroList
      nuxt-link.heroItem(to="/heroes/6")
        .heroItem__top
          .heroItem__data
            img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
            h2.heroItem__name Ryofu
          .heroItem__statuses
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
        p.heroItem__bottom.heroItem__price 9999
      nuxt-link.heroItem(to="/heroes/7")
        .heroItem__top
          .heroItem__data
            img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
            h2.heroItem__name Ryofu
          .heroItem__statuses
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
        p.heroItem__bottom.heroItem__price 9999
      nuxt-link.heroItem(to="/heroes/8")
        .heroItem__top
          .heroItem__data
            img.heroItem__image(:src="require('~/assets/images/ryofu_sample64.gif')")
            h2.heroItem__name Ryofu
          .heroItem__statuses
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
        p.heroItem__bottom.heroItem__price 9999
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      currentTab: 'heroes',
      searchText: {
        hero: '',
        item: ''
      }
    }
  },
  methods: {
    selectTab(tabName) {
      this.currentTab = tabName
    }
  }
}
</script>

<style lang="scss" scoped>
.shopPage {
  .page__title {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .shopPage__buyButton {
      svg {
        margin-right: 0.5rem;
      }

      button {
        appearance: none;
        background: map-get($colors, white);
        border: 1px solid map-get($colors, primary);
        border-radius: 1rem;
        color: map-get($colors, primary);
        cursor: pointer;
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
      }
    }
  }
}

.section {
  &__heroList {
    background: #f9f9f9;
    margin: 1rem -1rem;
    padding: 1rem;

    header {
      display: flex;
      margin: 1rem 0;
    }
  }
}

.searchForm {
  flex: 1;
  position: relative;

  &__input {
    appearance: none;
    background: #fff;
    border: none;
    border-radius: 9999px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    margin: 0;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    width: 100%;
  }

  svg {
    color: #ccc;
    left: 1rem;
    position: absolute;
    top: 0.75rem;
  }
}

.sortButton {
  appearance: none;
  background: #fff;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: inherit;
  font-size: inherit;
  margin: 0 0 0 1rem;
  padding: 0.5rem;
}

.heroList {
  // display: flex;
  // flex-wrap: wrap;
  // margin: 1rem 0 1rem -1rem;

  @media (min-width: $breakpoint) {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0 1rem -1rem;
  }
}

.heroItem {
  background: #fff;
  border-radius: 1rem;
  // box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  color: inherit;
  display: block;
  // margin: 1rem 0 0 1rem;
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  // width: calc((100% - 2rem) / 2);

  @media (min-width: $breakpoint) {
    margin: 1rem 0 0 1rem;
    width: calc((100% - 2rem) / 2);
  }

  &__top {
    // align-items: flex-end;
    align-items: center;
    display: flex;
  }

  &__data,
  &__statuses {
    width: 50%;
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
  // margin: 0 0 0 -1rem;
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
    font-size: 4vw;
    font-family: Oswald;
    white-space: nowrap;

    @media (min-width: $breakpoint) {
      font-size: 0.9rem;
    }
  }
}
</style>
