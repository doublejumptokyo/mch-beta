<template lang="pug">
.noWallet
  fa-icon(:icon="['far', 'sad-tear']")
  h1 {{ message }}
  .noWallet__notLoggedIn(v-if="isNotLoggedIn")
    button(@click="login")
      fa-icon(icon="sign-in-alt")
      span Login
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    message: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    isNotLoggedIn() {
      return this.message === 'Not logged in.'
    }
  },
  methods: mapActions(['login'])
}
</script>

<style lang="scss" scoped>
.noWallet {
  align-items: center;
  color: #ccc;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 3rem 0;

  > .svg-inline--fa {
    color: #555;
    font-size: 8rem;
  }

  > h1 {
    margin: 1rem 0;
  }

  &__notLoggedIn {
    margin: 1rem 0;

    button {
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      padding-bottom: calc(0.375em - 1px);
      padding-left: 0.75em;
      padding-right: 0.75em;
      padding-top: calc(0.375em - 1px);
      max-width: 8rem;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
