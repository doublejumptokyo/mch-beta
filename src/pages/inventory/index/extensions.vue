<template lang="pug">
section.section.section__extensionList
  .extensionList
    template(v-if="extensions.length")
      nuxt-link.extensionExtension(:to="`/extensions/${extension.id}`" v-for="extension in extensions" :key="extension.id")
        p.extensionExtension__rarity {{ extension.rarity }}
        img.extensionExtension__image(:src="require(`~/assets/images/extensions/${extension.fileName}`)")
        p.extensionExtension__name {{ extension.name[$i18n.locale] }}
    .extensionList__empty(v-else)
        fa-icon(icon="spinner" spin size="3x")
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchText: ''
    }
  },
  computed: mapState(['extensions'])
}
</script>

<style lang="scss" scoped>
.section {
  &__extensionList {
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

.extensionList {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 0 0 -1rem;

  @media (min-width: $breakpoint) {
    margin: -2rem 0 0 -2rem;
    padding: 1rem;
  }

  &__empty {
    align-items: center;
    color: #999;
    display: flex;
    justify-content: center;
    padding: 8rem 0;
    width: 100%;
  }
}

.extensionExtension {
  background: #666;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  margin: 1rem 0 0 1rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: calc((100% - 2rem) / 2);

  @media (min-width: $breakpoint) {
    margin: 2rem 0 0 2rem;
    width: calc((100% - 10rem) / 5);
  }

  &__rarity {
    color: #999;
    font-family: Oswald;
    font-size: 0.8rem;
    font-weight: bold;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
    }
  }

  &__image {
    border-radius: 1rem;
    image-rendering: pixelated;
    margin: 0.5rem 0;
    width: 100%;
  }
}
</style>
