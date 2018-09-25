<template lang="pug">
.fixedButton
  a.medium(href="https://medium.com/mycryptoheroes")
    fa-icon(:icon="['fab', 'medium']")
  a.discord(href="https://discord.gg/")
    fa-icon(:icon="['fab', 'discord']")
</template>

<style lang="scss" scoped>
.fixedButton {
  align-items: flex-start;
  bottom: 0;
  display: flex;
  font-size: 3rem;
  line-height: 1;
  margin: 1rem;
  position: fixed;
  right: 0;
  z-index: 1;

  .discord {
    color: #7289da;
    margin-left: 1rem;
    position: relative;

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

  .medium {
    color: #222221;
    margin-left: 1rem;
    position: relative;

    &::before {
      background: #fff;
      content: '';
      height: 50%;
      left: 5%;
      position: absolute;
      top: 22%;
      width: 90%;
      z-index: -1;
    }
  }
}
</style>
