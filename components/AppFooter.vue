<template lang="pug">
footer.appFooter(:class="{ isFixedButtonShown: isFixedButtonShown }")
  ul
    li
      a(href="http://www.doublejump.tokyo/") {{ $t('common.footer.company') }}
    li
      nuxt-link(to="/terms") {{ $t('common.footer.terms') }}
  p
    small &copy; {{ (new Date()).getFullYear() }} double jump.tokyo
</template>

<script>
export default {
  props: {
    isFixedButtonShown: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.appFooter {
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  text-align: center;
  width: 100%;

  &.isFixedButtonShown {
    padding: 1rem 1rem 5rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 1rem;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  p {
    small {
      font-size: inherit;
    }
  }
}
</style>
