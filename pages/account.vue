<template lang="pug">
.accountPage
  .accountPage__userData
    p
      input(v-model="userName" v-if="isRenaming")
      span(v-else) {{ $store.state.user.name }}
      button(@click="rename" v-if="isRenaming" :class="{ 'active': isRenaming }")
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
    //- h2 {{ $i18n.t('others.other') }}
    ul.links
      li
        button.links__item(@click="logout")
          fa-icon.links__icon(icon="sign-out-alt" fixed-width)
          span Sign out
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

    > p {
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
        line-height: 1;
        margin-left: 0.75rem;
        padding: 0.75rem;

        &.active {
          background: map-get($colors, primary);
          color: #444;
        }
      }

      input {
        appearance: none;
        background: #fff;
        border: none;
        border-radius: 4px;
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.5);
        color: #444;
        font-size: 16px;
        padding: 0.75rem;
      }
    }

    > dl {
      dt {
        color: #999;
        font-weight: bold;
        margin-top: 1rem;
      }

      dd {
        color: #ccc;
        font-size: 0.8rem;
      }
    }
  }
}

.links {
  margin: 1rem -1rem;
}
</style>
