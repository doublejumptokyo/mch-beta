<template lang="pug">
.accountPage
  .accountPage__userData
    img(:src="require('~/assets/images/mary.png')")
    p
      span {{ $store.state.user.name }}
      button
        fa-icon(:icon="['far', 'edit']")
    .userData
      .userData__ether
        fa-icon(:icon="['fab', 'ethereum']")
        | 999,999,999
      .userData__gm
        fa-icon(icon="coins")
        | 999,999,999
  section.accountPage__links
    h2 {{ $i18n.t('others.other') }}
    ul.links
      li
        nuxt-link.links__item(to="/help")
          fa-icon.links__icon(icon="question" fixed-width)
          span {{ $i18n.t('pages.help') }}
          fa-icon.links__arrow(icon="angle-right")
      li
        nuxt-link.links__item(to="/terms")
          fa-icon.links__icon(icon="info" fixed-width)
          span {{ $i18n.t('pages.terms') }}
          fa-icon.links__arrow(icon="angle-right")
      li
        button.links__item(@click="logout")
          fa-icon.links__icon(icon="sign-out-alt" fixed-width)
          span Sign out
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>


<style lang="scss" scoped>
.links {
  background: #fff;
  border-bottom: 1px solid #eee;
  list-style-type: none;
  margin: 1rem -1rem;
  padding: 0;

  li {
    border-top: 1px solid #eee;
  }

  &__item {
    align-items: center;
    color: inherit;
    display: flex;
    min-height: 40px;
    padding: 0.5rem 1rem;
    text-decoration: none;
    width: 100%;
  }

  &__icon {
    color: #999;
    margin-right: 0.5rem;
  }

  &__arrow {
    color: #eee;
    margin-left: auto;
  }
}

.userData {
  display: flex;

  > * {
    text-align: center;
    width: 50%;
  }

  svg {
    color: #999;
    display: block;
    font-size: 1.5rem;
    margin: 0.5rem auto;
  }
}

.accountPage {
  background: #f9f9f9;

  h2 {
    font-size: 0.9rem;
    font-weight: normal;
    margin: 0 0 -0.75rem;
  }

  &__userData {
    background: #fff;
    border-bottom: 1px solid #eee;
    margin: -1rem -1rem 1rem;
    padding: 1rem;

    img {
      display: block;
      image-rendering: pixelated;
      margin: 1rem auto;
      width: 128px;
    }

    p {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 1rem 0;

      span {
        font-size: 1.2rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
        white-space: nowrap;
      }

      button {
        background: #eee;
        border-radius: 9999px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-left: 0.5rem;
        padding: 0.5rem;
      }
    }
  }
}
</style>
