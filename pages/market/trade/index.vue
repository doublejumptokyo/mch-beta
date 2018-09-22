<template lang="pug">
.marketPage
  .page__title
    h1 {{ $i18n.t('pages.market') }}

  ul.tabList
    li.tabItem
      nuxt-link(to="/market/trade/heroes") Heroes
    li.tabItem
      nuxt-link(to="/market/trade/items") Items

  nuxt-child
</template>

<script>
export default {
  fetch({ route, redirect }) {
    console.log(route.name)
    if (route.name === 'market-trade') {
      return redirect('/market/trade/heroes')
    }
  }
}
</script>

<style lang="scss" scoped>
.tabList {
  display: flex;
  list-style-type: none;
  margin: 0 -1rem -1rem;
  padding: 0;
  width: calc(100% + 2rem);
}

.tabItem {
  width: 50%;

  a {
    appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    display: block;
    font-size: 0.9rem;
    margin: 0;
    outline: none;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &.nuxt-link-active {
      border-bottom: 2px solid map-get($colors, primary);
    }
  }
}
</style>
