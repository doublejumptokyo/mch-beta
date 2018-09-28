<template lang="pug">
.userList
  nuxt-link.userList__item.user(
    v-for="(user, index) in users"
    :to="`/users/${user.address}`"
    :key="index"
  )
    .user__name
      h2 {{ user.name || 'No Name' }}
      p {{ user.address }}
    fa-icon.user__arrow(icon="angle-right")
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.userList {
  background: #555;
  border-bottom: 1px solid #666;
  margin: 1rem -1rem;

  &__item {
    border-top: 1px solid #666;
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
    margin-right: auto;

    h2 {
      color: #fff;
      font-size: 1.2rem;
      margin: 0;
    }

    p {
      color: #999;
      font-size: 0.8rem;
    }
  }

  &__arrow {
    color: #999;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
}
</style>
