<template lang="pug">
footer.appFooter(:class="{ isFixedButtonShown: isFixedButtonShown }")
  ul
    li
      a(href="http://www.doublejump.tokyo/") 運営会社
    li
      nuxt-link(to="/terms") 利用規約
    li
      button(@click="logout") CO
  p
    small &copy; {{ (new Date()).getFullYear() }} double jump.tokyo
</template>

<script>
export default {
  props: {
    isFixedButtonShown: { type: Boolean, default: false }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      await this.$router.push('/')
      window.location.reload()
    }
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
