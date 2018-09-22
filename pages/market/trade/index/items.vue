<template lang="pug">
section.section.section__itemList
  header
    button.filterButton(@click="isItemFilterModalShown = true")
      fa-icon(icon="filter")
      | Filter
  .itemList
    nuxt-link.itemItem(to="/items/1")
      img.itemItem__image(:src="require('~/assets/images/ItemIcon.png')")
      p.itemItem__name Excalibur
      p.itemItem__price 9999
    nuxt-link.itemItem(to="/items/2")
      img.itemItem__image(:src="require('~/assets/images/ItemIcon.png')")
      p.itemItem__name Excalibur
      p.itemItem__price 9999
    nuxt-link.itemItem(to="/items/3")
      img.itemItem__image(:src="require('~/assets/images/ItemIcon.png')")
      p.itemItem__name Excalibur
      p.itemItem__price 9999
    nuxt-link.itemItem(to="/items/4")
      img.itemItem__image(:src="require('~/assets/images/ItemIcon.png')")
      p.itemItem__name Excalibur
      p.itemItem__price 9999
    nuxt-link.itemItem(to="/items/5")
      img.itemItem__image(:src="require('~/assets/images/ItemIcon.png')")
      p.itemItem__name Excalibur
      p.itemItem__price 9999

  modal.heroFilterModal(v-if="isItemFilterModalShown" @modal-close="isItemFilterModalShown = false")
    h3.heroFilterModal__header(slot="header") Hero Filter
    .heroFilterModal__body(slot="body")
      | ※フィルター内容要検討
    .heroFilterModal__footer(slot="footer")
      button.heroFilterModal__cancelButton(@click="isItemFilterModalShown = false") Cancel
      button.heroFilterModal__submitButton(@click="isItemFilterModalShown = false") OK
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      isItemFilterModalShown: false
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
