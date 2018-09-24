<template lang="pug">
section.section.section__heroList
  //- header
    form.searchForm
      input.searchForm__input(type="search" v-model="searchText" placeholder="Your Hero Name")
      fa-icon(icon="search")
    button.sortButton
      fa-icon(icon="sort-alpha-down" size="lg")
      fa-icon(icon="sort")
  .heroList
    nuxt-link.heroItem(:to="`/heroes/${hero.id}`" v-for="hero in heroes" :key="hero.id")
      img.heroItem__image(:src="require(`~/assets/images/heroes/${hero.fileName}`)")
      p.heroItem__name {{ hero.name[$i18n.locale] }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchText: ''
    }
  },
  computed: mapState(['heroes'])
}
</script>

<style lang="scss" scoped>
.section {
  &__heroList {
    background: #555;
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
  margin: -1rem 0 0 -1rem;

  @media (min-width: $breakpoint) {
    margin: -2rem 0 0 -2rem;
    padding: 1rem;
  }
}

.heroItem {
  background: #666;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  margin: 1rem 0 0 1rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;

  @media (min-width: $breakpoint) {
    margin: 2rem 0 0 2rem;
  }

  &__image {
    border-radius: 1rem;
    image-rendering: pixelated;
    margin-bottom: 1rem;
    width: 100%;
  }
}

.heroItem {
  width: calc((100% - 2rem) / 2);

  @media (min-width: $breakpoint) {
    width: calc((100% - 8rem) / 4);
  }
}
</style>
