<template lang="pug">
nuxt
</template>

<script>
import { mapState } from 'vuex'
export default {
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
