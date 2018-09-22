<template lang="pug">
.fixedButton
  a.discord(href="https://discord.gg/")
    fa-icon(:icon="['fab', 'discord']")
</template>

<style lang="scss" scoped>
.fixedButton {
  bottom: 0;
  font-size: 3rem;
  line-height: 1;
  margin: 1rem;
  position: fixed;
  right: 0;
  z-index: 1;

  .discord {
    color: #7289da;

    &::before {
      background: #fff;
      content: '';
      height: 50%;
      left: 5%;
      position: absolute;
      top: 15%;
      width: 90%;
      z-index: -1;
    }
  }
}
</style>
