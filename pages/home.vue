<template lang="pug">
.homePage
  nuxt-link.homePage__notification(to="/notifications")
    fa-icon(icon="info-circle")
    span There are 3 completed explorations
  .homePage__userData
    template(v-if="address")
      .userData
        .userData__ether
          fa-icon(:icon="['fab', 'ethereum']")
          | 999,999,999
        .userData__gm
          fa-icon(icon="coins")
          | 999,999,999
    template(v-else)
      .appHeader__userData.userData No Wallet.
  .homePage__menuList
    nuxt-link.homePage__menuItem(to="/inventory")
      fa-icon(:icon="['far', 'gem']")
      span {{ $i18n.t('pages.inventory') }}
    nuxt-link.homePage__menuItem(to="/battle")
      fa-icon(icon="fire")
      span {{ $i18n.t('pages.battles') }}
    nuxt-link.homePage__menuItem(to="/dungeons")
      fa-icon(:icon="['far', 'compass']")
      span {{ $i18n.t('pages.dungeons') }}
    nuxt-link.homePage__menuItem(to="/market")
      fa-icon(icon="store")
      span {{ $i18n.t('pages.market') }}
</template>

<script>
export default {
  computed: {
    address() {
      return this.$store.state.user.walletAddress
    }
  }
}
</script>

<style lang="scss" scoped>
.homePage {
  &__menuList {
    margin: 2rem 0;
  }

  &__menuItem {
    background: linear-gradient(
      to right bottom,
      map-get($colors, primary),
      map-get($colors, brand1)
    );
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    color: #fff;
    display: block;
    font-size: 1.8rem;
    margin: 2rem 0;
    overflow: hidden;
    padding: 3rem;
    position: relative;
    text-decoration: none;

    svg {
      font-size: 10rem;
      margin-right: 1rem;
      opacity: 0.25;
      position: absolute;
      right: -3rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__notification {
    align-items: center;
    background: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 1rem;
    color: inherit;
    display: flex;
    padding: 1rem;
    text-decoration: none;

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
      opacity: 0.5;
    }
  }
}

.userData {
  display: flex;
  margin: 2rem 0;

  > * {
    font-size: 1.5rem;
    font-family: Oswald;
    text-align: center;
    width: 50%;

    svg {
      color: #ccc;
      display: block;
      font-size: 3rem;
      margin: 0 auto 1rem;
    }
  }
}
</style>
