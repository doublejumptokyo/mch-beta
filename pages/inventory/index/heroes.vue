<template lang="pug">
section.section.section__heroList
  header
    form.searchForm
      input.searchForm__input(type="search" v-model="searchText" placeholder="Your Hero Name")
      fa-icon(icon="search")
    button.sortButton
      fa-icon(icon="sort-alpha-down" size="lg")
      fa-icon(icon="sort")
  .heroList
    nuxt-link.heroItem(:to="`/heroes/${hero.id}`" v-for="hero in $store.state.heroes" :key="hero.id")
      img.heroItem__image(:src="require(`~/assets/images/${hero.imageFileName}`)")
      p.heroItem__name {{ hero.name }}
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
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 1rem -1rem;
}

.heroItem {
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

.heroItem {
  width: calc((100% - 2rem) / 2);

  @media (min-width: $breakpoint) {
    width: calc((100% - 4rem) / 4);
  }
}
</style>
