<template lang="pug">
.assetPage
  .assetPage__image
    img(:src="require(`~/assets/images/${item.imageFileName}`)")
  .assetPage__name
    h1 {{ item.name }}
  .assetPage__statuses
    .assetPage__status
      h3
        img(:src="require('~/assets/images/icons/status/agi.png')")
        | AGI
      p {{ item.status.agi }}
    .assetPage__status
      h3
        img(:src="require('~/assets/images/icons/status/atk.png')")
        | PHY
      p {{ item.status.phy }}
    .assetPage__status
      h3
        img(:src="require('~/assets/images/icons/status/int.png')")
        | INT
      p {{ item.status.int }}
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.items.find(
        item => item.id === Number(this.$route.params.id)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.assetPage {
  &__image {
    height: 0;
    margin: -1rem -1rem 1rem;
    padding-top: calc(100% + 2rem);
    position: relative;

    img {
      height: 100%;
      image-rendering: pixelated;
      left: 0;
      object-fit: contain;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &__name {
    margin: 1rem 0;
    text-align: center;
  }

  &__statuses {
    background: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem -1rem 1rem;
    padding: 1rem 1rem 2rem 0;

    @media (min-width: $breakpoint) {
      margin: 1rem 0;
    }
  }

  &__status {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    text-align: center;
    width: calc((100% - 3rem) / 3);

    h3 {
      align-items: center;
      display: flex;
      font-size: 1rem;
      justify-content: center;
      margin-left: -0.5rem;
      white-space: nowrap;
    }

    img {
      margin-right: 0.25rem;
      opacity: 0.5;
      width: 1.2rem;

      @media (min-width: $breakpoint) {
        width: 2rem;
      }
    }

    p {
      font-size: 5vw;
      font-family: Oswald;
      white-space: nowrap;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
