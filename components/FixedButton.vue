<template lang="pug">
.fixedButton
  a.discord(href="https://discord.gg/C66hByB")
    fa-icon(:icon="['fab', 'discord']" size="lg")
    span
      | Official
      br
      | Community
</template>

<style lang="scss" scoped>
.fixedButton {
  bottom: 0;
  line-height: 1;
  margin-left: auto;
  padding: 1rem;
  position: sticky;
  right: 0;
  z-index: 2;
  text-transform: capitalize;

  .discord {
    align-items: center;
    background: #7289da;
    border-radius: 9999px;
    color: rgba(255, 255, 255, 0.95);
    display: flex;
    padding: 0.5rem 1rem;
    text-decoration: none;

    svg {
      margin-right: 0.5rem;
    }

    span {
      font-size: 0.8rem;
      word-break: keep-all;
    }
  }
}
</style>
