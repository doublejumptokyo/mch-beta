<template lang="pug">
.container
  app-header.appHeader
  main.appMain
    nuxt.page
  app-footer.appFooter(:isFixedButtonShown="isFixedButtonShown")
  fixed-button.fixedButton(v-if="isFixedButtonShown")
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
import FixedButton from '~/components/FixedButton'
export default {
  components: { AppHeader, AppFooter, FixedButton },
  data() {
    return {
      isFixedButtonShown: true
    }
  },
  computed: mapState(['env']),
  head() {
    return {
      title: this.$t('common.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('common.meta.description')
        },
        { itemprop: 'name', content: this.$t('common.meta.title') },
        {
          itemprop: 'description',
          content: this.$t('common.meta.description')
        },
        { itemprop: 'image', content: `${this.env.siteUrl}ogp.png` },
        { property: 'og:url', content: this.$t('common.meta.title') },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: this.$t('common.meta.description')
        },
        { property: 'og:image', content: `${this.env.siteUrl}ogp.png` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.$t('common.meta.title') },
        {
          name: 'twitter:description',
          content: this.$t('common.meta.description')
        },
        { name: 'twitter:image', content: `${this.env.siteUrl}ogp.png` }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  background: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 97px;
  position: relative;

  @media (min-width: $breakpoint) {
    align-items: center;
    padding-top: 104px;
  }

  &--modalShown {
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
}

.appHeader {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.appMain {
  display: flex;
  flex: 1;
  max-width: 1024px;
  width: 100%;
}

.page {
  background: #444;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  width: 100%;

  &__title {
    font-size: 1.2rem;

    > * {
      font-size: 1.2rem;
    }
  }
}
</style>
