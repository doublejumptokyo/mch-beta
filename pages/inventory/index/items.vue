<template lang="pug">
section.section.section__itemList
  header
    form.searchForm
      input.searchForm__input(type="search" v-model="searchText.item" placeholder="Your Item Name")
      fa-icon(icon="search")
    button.sortButton
      fa-icon(icon="sort-alpha-down" size="lg")
      fa-icon(icon="sort")
  .itemList
    nuxt-link.itemItem(:to="`/items/${item.id}`" v-for="item in $store.state.items" :key="item.id")
      img.itemItem__image(:src="require(`~/assets/images/${item.imageFileName}`)")
      p.itemItem__name {{ item.name }}
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__itemList {
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

.itemList {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 1rem -1rem;
}

.itemItem {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: inherit;
  margin: 1rem 0 0 1rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;

  &__image {
    border-radius: 1rem 1rem 0 0;
    image-rendering: pixelated;
    margin: -1rem -1rem 0;
    max-width: calc(100% + 2rem);
    width: calc(100% + 2rem);
  }
}

.itemItem {
  width: calc((100% - 3rem) / 3);

  @media (min-width: $breakpoint) {
    width: calc((100% - 6rem) / 6);
  }
}
</style>
