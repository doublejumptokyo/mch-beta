<template lang="pug">
.inventoryPage
  page-header
    h1 {{ $i18n.t('pages.inventory') }}

  ul.tabList
    li.tabItem
      nuxt-link(to="/inventory/heroes") Heroes
    li.tabItem
      nuxt-link(to="/inventory/extensions") Extensions

  nuxt-child
</template>

<script>
import Modal from '~/components/Modal'
import PageHeader from '~/components/PageHeader'
export default {
  components: { Modal, PageHeader },
  middleware: 'walletCheck',
  data() {
    return {
      isModalShown: false
    }
  },
  fetch({ route, redirect }) {
    if (route.name === 'inventory') {
      return redirect('/inventory/heroes')
    }
  }
}
</script>

<style lang="scss" scoped>
.inventoryPage {
  position: relative;

  &__partyLink {
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    margin: 1rem -1rem;

    a {
      align-items: center;
      color: inherit;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      text-decoration: none;
    }

    &__icon {
      color: #999;
      margin-right: 0.5rem;
    }

    &__arrow {
      color: #eee;
      margin-left: auto;
    }
  }
}

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
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &.nuxt-link-active {
      border-bottom: 2px solid #ccc;
    }
  }
}
</style>
