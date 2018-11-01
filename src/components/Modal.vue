<template lang="pug">
transition(:name="transitionName")
  .modal(:class="{ 'modalBottom': type === 'bottom' }")
    .modal__mask
    .modal__wrapper(@click="$emit('modal-close')")
      .modal__container(@click.stop)
        .modal__header
          button.modal__close(@click="$emit('modal-close')") &times;
          slot(name="header")
        .modal__body
          .modal__bodyInner
            slot(name="body")
        .modal__footer
          slot(name="footer")
</template>

<script>
// なぜかimportでは動かない
const bodyScrollLock = require('body-scroll-lock')

export default {
  props: {
    type: { type: String, default: '' }
  },
  computed: {
    transitionName() {
      if (this.type === 'bottom') {
        return 'modalBottom'
      }
      return 'modal'
    }
  },
  mounted() {
    bodyScrollLock.disableBodyScroll(this.$el.querySelector('.modal__body'))
  },
  beforeDestroy() {
    bodyScrollLock.enableBodyScroll(this.$el.querySelector('.modal__body'))
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &__mask {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    -webkit-backdrop-filter: blur(4px);
  }

  &__wrapper {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__container {
    background-color: #444;
    border-radius: 1rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 100%;

    @media (min-width: $breakpoint) {
      margin: 0 auto;
      max-width: 640px;
    }
  }

  &__header {
    font-weight: bold;
    padding: 1rem;
    position: relative;
    text-align: center;

    /deep/ * {
      font-size: 1.2rem;
    }
  }

  &__body {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__bodyInner {
    height: 100%;
    padding: 1rem;
    width: 100%;
  }

  &__footer {
    /deep/ button {
      line-height: 1;
      padding: 0.5rem 1rem;

      @media (min-width: $breakpoint) {
        padding: 1rem 2rem;
      }
    }
  }

  &__close {
    appearance: none;
    background: transparent;
    border: 0;
    color: #ccc;
    font-size: 2rem;
    height: 2rem;
    line-height: 1;
    margin: 0.5rem;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
  }

  &Bottom {
    .modal__wrapper {
      padding: 1rem 0 0;
      align-items: flex-end;
    }

    .modal__container {
      border-radius: 1rem 1rem 0 0;
      box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.1);
    }

    .modal__header {
      border-bottom: 1px solid #666;
    }

    .modal__footer {
      background: #555;
      border-top: 1px solid #666;
    }
  }
}
</style>
