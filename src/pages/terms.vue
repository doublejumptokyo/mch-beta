<template lang="pug">
.termsPage
  page-header
    h1 {{ $i18n.t('pages.terms') }}
  ul
    li(v-if="$i18n.locale === 'ja'")
      a(href="/documents/terms_ja.pdf") 利用規約 (PDF)
    li(v-else)
      a(href="/documents/terms_en.pdf") Terms of service (PDF)
</template>

<script>
import PageHeader from '~/components/PageHeader'
export default {
  components: { PageHeader }
}
</script>
