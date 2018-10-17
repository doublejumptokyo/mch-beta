<template lang="pug">
header.pageHeader
  .pageHeader__left
    slot
  .pageHeader__right
    slot(name="right")
</template>

<style lang="scss" scoped>
.pageHeader {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: -1rem -1rem 0;
  padding: 1rem;

  @media (min-width: $breakpoint) {
    padding: 2rem;
  }

  h1 {
    font-size: 1.2rem;

    @media (min-width: $breakpoint) {
      font-size: 1.8rem;
    }
  }

  &__right {
    margin-left: 1rem;
  }
}
</style>
