<template lang="pug">
.accountPage
  .accountPage__userData
    p
      input(v-model="userName" v-if="isRenaming")
      span(v-else) {{ $store.state.user.name }}
      button(@click="rename" v-if="isRenaming")
        fa-icon(:icon="['fas', 'check']")
      button(@click="isRenaming = true" v-else)
        fa-icon(:icon="['far', 'edit']")
    dl
      dt Ether Address
      dd
        code {{ ethAddress }}
      dt Loom Address
      dd
        code {{ loomAddress }}
  section.accountPage__links
    h2 {{ $i18n.t('others.other') }}
    ul.links
      li
        a.links__item(href="https://discord.gg/")
          fa-icon.links__icon(:icon="['fab', 'discord']" fixed-width)
          span Official Discord
          fa-icon.links__arrow(icon="angle-right")
      li
        a.links__item(href="https://medium.com/mycryptoheroes")
          fa-icon.links__icon(:icon="['fab', 'medium']" fixed-width)
          span Official Medium
          fa-icon.links__arrow(icon="angle-right")
      li
        nuxt-link.links__item(to="/terms")
          fa-icon.links__icon(icon="info" fixed-width)
          span {{ $i18n.t('pages.terms') }}
          fa-icon.links__arrow(icon="angle-right")
      li
        button.links__item(@click="logout")
          fa-icon.links__icon(icon="sign-out-alt" fixed-width)
          span Sign out
          fa-icon.links__arrow(icon="angle-right")
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isRenaming: false
    }
  },
  computed: {
    ...mapState(['ethAddress', 'loomAddress']),
    userName: {
      get() {
        return this.$store.state.user.name
      },
      set(name) {
        this.$store.commit('user/SET_NAME', name)
      }
    }
  },
  methods: {
    async rename() {
      await this.$store.dispatch('user/rename', this.userName)
      this.isRenaming = false
      this.$toast.show('Player name Changed.')
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>


<style lang="scss" scoped>
.links {
  background: #555;
  border-bottom: 1px solid #666;
  list-style-type: none;
  margin: 1rem -1rem;
  padding: 0;

  li {
    border-top: 1px solid #666;
  }

  &__item {
    align-items: center;
    color: inherit;
    display: flex;
    min-height: 40px;
    padding: 0.5rem 1rem;
    text-decoration: none;
    width: 100%;
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

.userData {
  display: flex;

  > * {
    text-align: center;
    width: 50%;
  }

  svg {
    color: #999;
    display: block;
    font-size: 1.5rem;
    margin: 0.5rem auto;
  }
}

.accountPage {
  background: #444;

  h2 {
    font-size: 0.9rem;
    font-weight: normal;
    margin: 0 0 -0.75rem;
  }

  &__userData {
    background: #555;
    border-bottom: 1px solid #555;
    margin: -1rem -1rem 1rem;
    padding: 1rem;

    img {
      display: block;
      image-rendering: pixelated;
      margin: 1rem auto;
      width: 128px;
    }

    p {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 1rem 0;

      span {
        font-size: 1.2rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
        white-space: nowrap;
      }

      button {
        background: #666;
        border-radius: 9999px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-left: 0.5rem;
        padding: 0.5rem;
      }
    }

    dl {
      dt {
        font-weight: bold;
      }

      dd {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
