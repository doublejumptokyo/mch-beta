<template lang="pug">
.userPage
  .user
    h1.user__name User1
    ul.user__team
      li
        img(:src="require('~/assets/images/NAPOLEON05_BL.png')")
      li
        img(:src="require('~/assets/images/NAPOLEON05_BL.png')")
      li
        img(:src="require('~/assets/images/NAPOLEON05_BL.png')")
  p.userPage__battle
    nuxt-link(to="/battles/1" tag="button") バトル
</template>

<style lang="scss" scoped>
.userPage {
  &__battle {
    margin: 1rem 0;

    button {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #fff;
      padding: 1rem;
      width: 100%;
    }
  }
}
</style>
