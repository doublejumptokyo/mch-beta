<template lang="pug">
.battleRankedPage
  user-list(:users="users")
</template>

<script>
import { mapState } from 'vuex'
import UserList from '~/components/UserList'

export default {
  components: { UserList },
  middleware: 'walletCheck',
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    },
    myRank: {
      type: Number,
      default() {
        return null
      }
    },
    willChangeRank: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: mapState(['loomAddress']),
  watch: {
    myRank() {
      if (!this.myRank) return
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      let addresses = await this.$rank.list(this.myRank - this.willChangeRank)
      addresses = addresses.filter((address, i) => i < 10)
      this.$emit('init', { addresses })
    }
  }
}
</script>
