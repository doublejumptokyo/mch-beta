<template lang="pug">
footer.appFooter
  ul
    li
      a(href="https://discord.gg/C66hByB") Official Community
    li
      a(href="https://medium.com/mycryptoheroes") Official Medium
    li
      a(href="http://www.doublejump.tokyo/") {{ $t('common.footer.company') }}
    li
      nuxt-link(to="/terms") {{ $t('common.footer.terms') }}
  p
    small &copy; {{ (new Date()).getFullYear() }} double jump.tokyo
</template>

<style lang="scss" scoped>
.appFooter {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  text-align: center;
  width: 100%;

  @media (min-width: $breakpoint) {
    flex-direction: row;
    font-size: 1rem;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 1rem;

      &::before {
        content: '/';
        margin: 0 0.5rem;
      }

      &:first-of-type {
        &::before {
          content: '';
          margin: 0;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  > p {
    small {
      color: #999;
      font-size: inherit;
    }
  }
}
</style>
