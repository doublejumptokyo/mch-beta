<template lang="pug">
.dungeonsPage
  .page__title
    h1 {{ $i18n.t('pages.dungeons') }}
  .dungeonsPage__dungeonList
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="1" append)
      .dungeon__inner
        h2.dungeon__name Easy Dungeon
        .dungeon__info
          .dungeon__floor 10
          .dungeon__requireTime 20
          .dungeon__difficulty Easy
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="2" append)
      .dungeon__inner
        h2.dungeon__name Hard Dungeon
        .dungeon__info
          .dungeon__floor 20
          .dungeon__requireTime 40
          .dungeon__difficulty Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="3" append)
      .dungeon__inner
        h2.dungeon__name Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 30
          .dungeon__requireTime 60
          .dungeon__difficulty Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="4" append)
      .dungeon__inner
        h2.dungeon__name Super Awesome Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 3000
          .dungeon__requireTime 6000
          .dungeon__difficulty Super Awesome Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="1" append)
      .dungeon__inner
        h2.dungeon__name Easy Dungeon
        .dungeon__info
          .dungeon__floor 10
          .dungeon__requireTime 20
          .dungeon__difficulty Easy
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="2" append)
      .dungeon__inner
        h2.dungeon__name Hard Dungeon
        .dungeon__info
          .dungeon__floor 20
          .dungeon__requireTime 40
          .dungeon__difficulty Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="3" append)
      .dungeon__inner
        h2.dungeon__name Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 30
          .dungeon__requireTime 60
          .dungeon__difficulty Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="4" append)
      .dungeon__inner
        h2.dungeon__name Super Awesome Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 3000
          .dungeon__requireTime 6000
          .dungeon__difficulty Super Awesome Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="1" append)
      .dungeon__inner
        h2.dungeon__name Easy Dungeon
        .dungeon__info
          .dungeon__floor 10
          .dungeon__requireTime 20
          .dungeon__difficulty Easy
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="2" append)
      .dungeon__inner
        h2.dungeon__name Hard Dungeon
        .dungeon__info
          .dungeon__floor 20
          .dungeon__requireTime 40
          .dungeon__difficulty Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="3" append)
      .dungeon__inner
        h2.dungeon__name Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 30
          .dungeon__requireTime 60
          .dungeon__difficulty Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="4" append)
      .dungeon__inner
        h2.dungeon__name Super Awesome Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 3000
          .dungeon__requireTime 6000
          .dungeon__difficulty Super Awesome Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="1" append)
      .dungeon__inner
        h2.dungeon__name Easy Dungeon
        .dungeon__info
          .dungeon__floor 10
          .dungeon__requireTime 20
          .dungeon__difficulty Easy
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="2" append)
      .dungeon__inner
        h2.dungeon__name Hard Dungeon
        .dungeon__info
          .dungeon__floor 20
          .dungeon__requireTime 40
          .dungeon__difficulty Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="3" append)
      .dungeon__inner
        h2.dungeon__name Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 30
          .dungeon__requireTime 60
          .dungeon__difficulty Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="4" append)
      .dungeon__inner
        h2.dungeon__name Super Awesome Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 3000
          .dungeon__requireTime 6000
          .dungeon__difficulty Super Awesome Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="1" append)
      .dungeon__inner
        h2.dungeon__name Easy Dungeon
        .dungeon__info
          .dungeon__floor 10
          .dungeon__requireTime 20
          .dungeon__difficulty Easy
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="2" append)
      .dungeon__inner
        h2.dungeon__name Hard Dungeon
        .dungeon__info
          .dungeon__floor 20
          .dungeon__requireTime 40
          .dungeon__difficulty Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="3" append)
      .dungeon__inner
        h2.dungeon__name Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 30
          .dungeon__requireTime 60
          .dungeon__difficulty Extra Hard
      fa-icon(icon="angle-right")
    nuxt-link.dungeonsPage__dungeonItem.dungeon(to="4" append)
      .dungeon__inner
        h2.dungeon__name Super Awesome Extra Hard Dungeon
        .dungeon__info
          .dungeon__floor 3000
          .dungeon__requireTime 6000
          .dungeon__difficulty Super Awesome Extra Hard
      fa-icon(icon="angle-right")
  ul
    li
      nuxt-link(to="battle") PvE画面サンプル
</template>

<style lang="scss" scoped>
.dungeonsPage {
  &__dungeonList {
    background: #f9f9f9;
    margin: 1rem -1rem;
    padding: 1rem;

    @media (min-width: $breakpoint) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  &__dungeonItem {
    margin: 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (min-width: $breakpoint) {
      margin: 1rem 0 0 1rem;
      width: calc((100% - 1rem) / 2);

      &:nth-of-type(-n + 2) {
        margin-top: 0;
      }

      &:nth-of-type(odd) {
        margin-left: 0;
      }
    }
  }
}

.dungeon {
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)),
    url('~/assets/images/dungeon_back.png') no-repeat center center / cover;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  padding: 3rem 1rem 1rem;
  text-align: right;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

  svg {
    color: #fff;
    font-size: 1.5rem;
    margin-left: auto;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9rem;
    line-height: 1;
    margin: 1rem 0 0 -1rem;

    > * {
      border: 1px solid;
      border-radius: 1rem;
      margin-left: 1rem;
      padding: 0.25rem 1rem;
      white-space: nowrap;
    }
  }

  &__name {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    text-align: left;
  }

  &__floor {
    &::after {
      content: 'F';
      font-size: 0.9rem;
      margin-left: 0.25rem;
    }
  }

  &__requireTime {
    &::after {
      content: 'Hours';
      font-size: 0.9rem;
      margin-left: 0.25rem;
    }
  }
}
</style>
