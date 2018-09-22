<template lang="pug">
.battlePage
  .page__title
    h1 {{ $i18n.t('pages.battles') }}
  p 対戦するユーザーを選択してください
  user-list
</template>

<script>
import UserList from '~/components/UserList'
export default {
  components: { UserList }
}
</script>
