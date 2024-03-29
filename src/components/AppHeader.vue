<template lang="pug">
header.appHeader

  .appHeader__brand
    a(href="https://www.mycryptoheroes.net/") mycryptoheroes

  .appHeader__beta
    span Beta

  .appHeader__lang.dropdown(:class="{ 'is-active': isLangDropdownShown }")
    .dropdown-trigger(@click="isLangDropdownShown = true")
      .button(aria-haspopup="true" aria-controls="dropdown-menu")
        span {{ $i18n.messages[$i18n.locale].label }}
        .icon.is-small
          fa-icon(icon="angle-down")
    .dropdown-menu#dropdown-menu(role="menu")
      .dropdown-content
        a.dropdown-item(
          href="#"
          v-for="lang in Object.keys($i18n.messages)"
          :class="{ 'is-active': $i18n.locale === lang }"
          @click.prevent.self="setLang(lang)"
        ) {{ $i18n.messages[lang].label }}

  .appHeader__userData.userData
    no-ssr
      nuxt-link.userData__name(v-if="isLoggedIn" to="/account")
        fa-icon(icon="user")
        span {{ address }}
      button(v-else-if="hasWallet" @click="login")
        fa-icon(icon="sign-in-alt")
        span Login
      span(v-else)
        fa-icon(:icon="['far', 'sad-tear']")
        span No wallet.

  .appHeader__globalNavi
    ul
      li
        nuxt-link(to="/" exact)
          fa-icon(icon="home")
          span {{ $i18n.t('pages.home') }}
      li
        nuxt-link(to="/inventory")
          fa-icon(:icon="['far', 'gem']")
          span {{ $i18n.t('pages.inventory') }}
      li
        nuxt-link(to="/team")
          fa-icon(:icon="['fas', 'users']")
          span {{ $i18n.t('pages.team') }}
      li
        nuxt-link(to="/battle-against/random")
          fa-icon(icon="fire")
          span {{ $i18n.t('pages.battles') }}
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isLangDropdownShown: false,
      isMenuShown: false
    }
  },
  computed: {
    ...mapState(['hasWallet']),
    ...mapGetters(['isLoggedIn']),
    address() {
      return this.$store.state.user.name
    }
  },
  methods: {
    ...mapActions(['login']),
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown
    },
    setLang(lang) {
      this.$i18n.locale = lang
      this.isLangDropdownShown = false
      window.localStorage.setItem('mch-beta:lang', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
.appHeader {
  align-items: center;
  background: #333;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  @media (min-width: $breakpoint) {
    padding: 1rem 2rem;
  }

  a {
    color: #666;
    text-decoration: none;
  }

  &__brand {
    a {
      background: url('~/assets/images/mch_mark_128_w.png') no-repeat center
        center / contain;
      display: block;
      height: 32px;
      text-indent: -9999px;
      width: 32px;

      @media (min-width: $breakpoint) {
        background: url('~/assets/images/mch_logo_yoko_w.png') no-repeat center
          center / contain;
        width: 135px;
      }
    }
  }

  &__beta {
    margin-left: 0.5rem;
  }

  &__lang {
    margin: auto auto auto 1rem;

    @media (min-width: $breakpoint) {
      margin-left: 2rem;
    }

    .dropdown-trigger .button,
    .dropdown-menu {
      font-size: 0.8rem;
    }

    .button {
      background: transparent;
      color: #dbdbdb;
    }
  }

  &__notificationsButton {
    display: block;
    margin: -0.5rem 0;
    padding: 0.5rem;

    .fa-layers-counter {
      margin: -0.75rem;
      transform: scale(0.75);
    }
  }

  &__globalNavi {
    margin: 0.5rem -1rem -0.5rem;
    width: calc(100% + 2rem);

    @media (min-width: $breakpoint) {
      margin: 0.5rem -2rem -1rem;
      width: calc(100% + 4rem);
    }

    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      width: calc(100% / 3);
    }

    a {
      align-items: center;
      color: #ccc;
      display: flex;
      flex-direction: column;
      font-size: 0.6rem;
      justify-content: center;
      line-height: 1;
      padding: 0.5rem;
      position: relative;
      text-align: center;

      @media (min-width: $breakpoint) {
        flex-direction: row;
        font-size: 1rem;
        padding: 1rem;
      }

      &.nuxt-link-active {
        color: #fff;
        pointer-events: none;

        &::after {
          // background: map-get($colors, primary);
          background: #fff;
          bottom: 0;
          content: '';
          height: 2px;
          left: 0;
          position: absolute;
          width: 100%;
        }

        svg {
          opacity: 1;
        }
      }

      &.disabled {
        opacity: 0.25;
        pointer-events: none;
      }
    }

    svg {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
      opacity: 0.75;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
        margin: 0 1rem 0 0;
      }
    }
  }

  &__userData {
    margin-left: 1rem;

    a {
      color: #dbdbdb;
    }

    @media (min-width: $breakpoint) {
      max-width: 16rem;
    }
  }
}

.userData {
  > a,
  > button {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    max-width: 8rem;
  }

  > span {
    color: #999;

    svg {
      font-size: 1.2rem;
    }
  }

  svg {
    margin-right: 0.5rem;
  }

  > * {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__lang {
    button {
      appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      font-size: inherit;
      margin: 0;
      padding: 0 1rem;
    }
  }
}
</style>
