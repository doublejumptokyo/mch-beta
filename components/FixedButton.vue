<template lang="pug">
.fixedButton
  a.discord(href="https://discord.gg/C66hByB")
    div
      img(:src="require('~/assets/images/icons/icon_discord.png')" width="60")
    span Official Community
</template>

<style lang="scss" scoped>
.fixedButton {
  bottom: 0.5rem;
  line-height: 1;
  margin-left: auto;
  position: sticky;
  right: 0.5rem;
  width: 108px;
  z-index: 2;
  text-transform: capitalize;
  cursor: pointer;

  .discord {
    height: 36px;
    display: flex;
    text-decoration: none;
    background-color: #7289da;
    padding: 0.3rem;
    padding-left: 0;
    border-radius: 100px;
    // &::before {
    //   background: #fff;
    //   content: '';
    //   height: 50%;
    //   left: 20%;
    //   position: absolute;
    //   top: 20%;
    //   width: 60%;
    //   z-index: -1;
    // }

    img {
      margin: auto;
      width: 48px;
      z-index: 2;
    }

    span {
      margin: auto;
      color: hsla(0, 0%, 100%, 0.95);
      font-weight: 600;
      font-size: 12px;
      word-break: keep-all;
    }
  }
}
</style>
