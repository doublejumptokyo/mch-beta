<template lang="pug">
.noWallet
  fa-icon(:icon="['far', 'sad-tear']")
  h1 {{ message }}
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default() {
        return ''
      }
    }
  }
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

  .svg-inline--fa {
    color: #555;
    font-size: 8rem;
  }

  h1 {
    margin: 1rem 0;
  }
}
</style>
