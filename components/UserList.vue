<template lang="pug">
.userList
  nuxt-link.userList__item.user(
    v-for="(user, index) in users"
    :to="`/users/${user.address}`"
    :key="index"
    :class="{ 'user--me': user.isMe, 'user--ranked': user.isRanked }"
  )
    .user__header
      .user__rank(v-if="user.rank")
        span {{ `#${user.rank}` }}
      .user__type
        span.user__type--ranked(v-if="user.isRanked") Ranked
        span.user__type--exhibition(v-else) Exhibition
    .user__images
      img(v-for="unit in user.team" :src="unit.imageUrl" width="64" height="64")
    .user__name
      h2 {{ user.name || 'No Name' }}
    .user__button
      span Show Detail
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
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;

  &__item {
    border-top: 1px solid #666;
    border-left: 1px solid #666;
    width: calc((100% - 1px) / 2);

    @media (min-width: $breakpoint) {
      width: calc((100% - 4px) / 5);
    }

    &:nth-of-type(2n + 1) {
      border-left: none;
    }

    @media (min-width: $breakpoint) {
      &:nth-of-type(2n + 1) {
        border-left: 1px solid #666;
      }

      &:nth-of-type(5n + 1) {
        border-left: none;
      }
    }
  }
}

.user {
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  opacity: 1;
  padding: 1rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &__header {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  &__rank {
    span {
      color: #999;
      font-family: Oswald;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1rem;
    }
  }

  &__type {
    span {
      border-radius: 0.25rem;
      display: inline-block;
      font-family: Oswald;
      font-size: 0.8rem;
      font-weight: bold;
      line-height: 1;
      padding: 0.25rem 0.5rem;
    }

    &--ranked {
      background: map-get($colors, primary);
    }

    &--exhibition {
      background: #999;
    }
  }

  &__images {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      border-radius: 0.5rem;
      height: auto;
      image-rendering: pixelated;
      margin: 0.5rem 0 0 0.5rem;
      width: calc((100% - 0.5rem) / 2);

      @media (min-width: $breakpoint) {
        margin: 1rem 0 0 1rem;
        width: calc((100% - 1rem) / 2);
      }

      &:first-of-type {
        margin: 0 1rem;
      }

      &:nth-of-type(2) {
        margin-left: 0;
      }
    }
  }

  &__name {
    flex: 1;
    margin-top: 1rem;

    h2 {
      color: #fff;
      font-size: 1.2rem;
      margin: 0;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }
    }

    p {
      color: #999;
      font-size: 0.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
      }
    }
  }

  &__button {
    border: 1px solid map-get($colors, primary);
    border-radius: 1rem;
    color: map-get($colors, primary);
    font-size: 0.8rem;
    line-height: 1;
    margin-top: 1rem;
    padding: 0.5rem;
    text-align: center;
    width: 100%;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
    }

    svg {
      margin-left: 0.5rem;
    }
  }

  &--me {
    background: rgba(241, 196, 15, 0.15);
  }
}
</style>
