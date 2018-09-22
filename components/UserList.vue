<template lang="pug">
.userList
  nuxt-link.userList__item.user(:to="`/users/${userId}`" v-for="userId in [1, 2, 3, 4, 5]" :key="userId")
    img.user__image(:src="require('~/assets/images/NAPOLEON05_BL.png')")
    h2.user__name User{{ userId }}
    fa-icon.user__arrow(icon="angle-right")
</template>

<style lang="scss" scoped>
.userList {
  border-bottom: 1px solid #eee;
  margin: 1rem -1rem;

  &__item {
    border-top: 1px solid #eee;
  }
}

.user {
  align-items: center;
  color: inherit;
  display: flex;
  text-decoration: none;
  padding: 1rem;

  &__image {
    border-radius: 0.5rem;
    margin-right: 1rem;
  }

  &__name {
    font-size: 1.2rem;
  }

  &__arrow {
    color: #ccc;
    font-size: 1.5rem;
    margin-left: auto;
  }
}
</style>
