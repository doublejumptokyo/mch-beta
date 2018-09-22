<template lang="pug">
.noWallet
  fa-icon(:icon="['far', 'sad-tear']")
  h1 No wallet.
</template>

<style lang="scss" scoped>
.noWallet {
  align-items: center;
  color: #999;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .svg-inline--fa {
    color: #eeeeee;
    font-size: 8rem;
  }

  h1 {
    margin: 1rem 0;
  }
}
</style>
