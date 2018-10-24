<template lang="pug">
header.battleHeader(:class="{ 'battleHeader--opening': !isReady }")

  template(v-if="!isReady")
    .username.username1
      span {{ $store.state.user.name }}
    .versus vs
    .username.username2
      span {{ opponentName }}
    p.startButton
      span(v-if="isLoading") {{ $i18n.t('battle.loading') }}
      button(v-else @click="$emit('battle-start')") Ready!

  template(v-else)
    img.battleHeader__logo(:src="require('~/assets/images/logo.png')")
    .battleHeader__battleUsers
      span {{ $store.state.user.name }}
      span vs
      span {{ opponentName }}
    button.battleHeader__play(@click="$emit('toggle-bgm-pause')")
      img(:src="require('~/assets/images/volume-mute.svg')" v-if="isBgmMuted")
      img(:src="require('~/assets/images/volume.svg')" v-else)
    nuxt-link.battleHeader__close(to="/battle-against" tag="button")
      fa-icon(icon="times")
</template>

<script>
export default {
  props: {
    isReady: {
      type: Boolean,
      default() {
        return false
      }
    },
    isLoading: {
      type: Boolean,
      default() {
        return true
      }
    },
    isBgmMuted: {
      type: Boolean,
      default() {
        return true
      }
    },
    opponentName: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.battleHeader {
  align-items: center;
  background: #444;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  line-height: 1;
  padding: 0 1rem;
  transition: all 0.5s;

  &--opening {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0;

    .username {
      background: #444;
      font-size: 3rem;
      font-weight: bold;
      padding: 1rem;
      width: 100%;

      span {
        animation-name: marquee;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &1 span {
        animation-delay: -2s;
      }

      &2 span {
        animation-delay: -1s;
      }
    }

    .versus {
      color: #999;
      font-size: 2rem;
      margin: 2rem 0;
    }

    .startButton {
      align-self: stretch;
      margin-top: 6rem;
      padding: 1rem;
      text-align: center;

      span,
      button {
        font-size: 1rem;
      }

      button {
        background: map-get($colors, primary);
        border-radius: 1rem;
        color: #444;
        font-size: 1.3rem;
        max-width: 640px;
        padding: 1rem;
        width: 100%;
      }
    }
  }

  &__logo {
    height: auto;
    width: 2rem;
  }

  &__battleUsers {
    align-items: center;
    flex: 1;
    display: flex;
    margin: 0 1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      display: inline-block;
      flex: 1;
      font-weight: bold;

      &:nth-of-type(1),
      &:nth-of-type(3) {
        &::before {
          content: '●';
          margin-right: 0.5rem;
        }
      }

      &:nth-of-type(1) {
        &::before {
          color: $color-battle-user-1;
        }
      }

      &:nth-of-type(3) {
        &::before {
          color: $color-battle-user-2;
        }
      }

      &:nth-of-type(2) {
        flex: 0;
        font-weight: normal;
        margin: 0 0.5rem;
      }
    }
  }

  &__play,
  &__close {
    margin-left: 1rem;
  }

  &__play {
    display: flex;

    img {
      width: 1.2rem;
    }
  }
}
</style>
