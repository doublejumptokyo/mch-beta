<template lang="pug">
header.appHeader

  .appHeader__brand
    nuxt-link(to="/") MCH

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
        | Login
      span(v-else) No wallet

  .appHeader__globalNavi
    ul
      li
        nuxt-link(to="/home")
          fa-icon(icon="home")
          span {{ $i18n.t('pages.home') }}
      li
        nuxt-link(to="/team")
          fa-icon(:icon="['fas', 'users']")
          span {{ $i18n.t('pages.team') }}
      li
        nuxt-link(to="/battles")
          fa-icon(icon="fire")
          span {{ $i18n.t('pages.battles') }}
      li
        nuxt-link.disabled(to="/dungeons")
          fa-icon(:icon="['far', 'compass']")
          span {{ $i18n.t('pages.dungeons') }}
      li
        nuxt-link.disabled(to="/market")
          fa-icon(icon="store")
          span {{ $i18n.t('pages.market') }}
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
    }
  }
}
</script>

<style lang="scss" scoped>
.appHeader {
  align-items: center;
  background: map-get($colors, white);
  border-top: 4px solid map-get($colors, primary);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  a {
    color: #666;
    text-decoration: none;
  }

  &__brand {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
  }

  &__lang {
    margin: auto auto auto 1rem;

    .dropdown-trigger .button,
    .dropdown-menu {
      font-size: 0.8rem;
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

    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      width: calc(100% / 5);
    }

    a {
      align-items: center;
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
        color: map-get($colors, primary);

        &::after {
          background: map-get($colors, primary);
          bottom: 0;
          content: '';
          height: 2px;
          left: 0;
          position: absolute;
          width: 100%;
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
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    margin-left: 1rem;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    max-width: 8rem;

    @media (min-width: $breakpoint) {
      max-width: 16rem;
    }
  }
}

.userData {
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
