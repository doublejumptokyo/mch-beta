<template lang="pug">
.adminPage
  h1 Admin Page
  section
    h2 Force Unset Ipfs
    form(@submit.prevent="forceUnset")
      input(placeholder="00000000" v-model="heroId")
      button(type="submit") Submit
</template>

<script>
export default {
  layout: 'battle',
  data() {
    return {
      heroId: ''
    }
  },
  methods: {
    async forceUnset() {
      try {
        await this.$heroManager.forceUnset(Number(this.heroId))
        this.$toast.show('Success.')
        this.heroId = ''
      } catch (e) {
        console.error(e)
        this.$toast.error('Error.')
      }
    }
  }
}
</script>
