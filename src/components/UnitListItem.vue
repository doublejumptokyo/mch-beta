<template lang="pug">
nuxt-link.team(
  :to="to || ''"
  tag="li"
  v-if="hero && extension1 && extension2"
)
  .team__heroItems
    .team__orderIcon
    .team__hero
      img(:src="hero.imageUrl")
    .team__items
      .team__item
        img(:src="require(`~/assets/images/extensions/${extension1.fileName}`)")
      .team__item
        img(:src="require(`~/assets/images/extensions/${extension2.fileName}`)")
  .team__statuses
    .team__status
      img(:src="require('~/assets/images/icons/status/hp.png')")
      p {{ hp }}
    .team__status
      img(:src="require('~/assets/images/icons/status/agi.png')")
      p {{ agi }}
    .team__status
      img(:src="require('~/assets/images/icons/status/atk.png')")
      p {{ phy }}
    .team__status
      img(:src="require('~/assets/images/icons/status/int.png')")
      p {{ int }}
  .team__skills
    ol
      li(v-for="skill in activeSkills")
        img(:src="require(`~/assets/images/icons/skill/${skill.iconFileName}`)")
        span {{ skill.name[$i18n.locale] }}
    p
      img(:src="require(`~/assets/images/icons/skill/${hero.passiveSkill.iconFileName}`)")
      span {{ hero.passiveSkill.name[$i18n.locale] }}
  .team__handle(v-if="to")
    fa-icon.team__arrow(icon="angle-right")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    unit: {
      type: Promise,
      require: true,
      default() {
        return null
      }
    },
    skillOrder: {
      type: Array,
      require: true,
      default() {
        return []
      }
    },
    to: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      hero: null,
      extension1: null,
      extension2: null
    }
  },
  computed: {
    ...mapGetters({
      getSkill: 'team/getSkill'
    }),
    hp() {
      return this.hero.hp + this.extension1.hp + this.extension2.hp
    },
    phy() {
      return this.hero.phy + this.extension1.phy + this.extension2.phy
    },
    int() {
      return this.hero.intl + this.extension1.intl + this.extension2.intl
    },
    agi() {
      return this.hero.agi + this.extension1.agi + this.extension2.agi
    },
    activeSkills() {
      return this.skillOrder.map(i => {
        if (i === 0) {
          return this.hero.activeSkill
        }
        if (i === 1) {
          return this.extension1.activeSkill
        }
        if (i === 2) {
          return this.extension2.activeSkill
        }
      })
    }
  },
  async mounted() {
    ;[this.hero, this.extension1, this.extension2] = await this.unit
  }
}
</script>

<style lang="scss" scoped>
.team {
  &__orderIcon {
    border: 1px solid #999;
    border-radius: 1rem;
    color: #999;
    font-family: Oswald;
    height: 1.75rem;
    margin-bottom: 0.5rem;
    min-width: 5rem;
    white-space: nowrap;

    @media (min-width: $breakpoint) {
      height: auto;
      margin-bottom: 1rem;
    }

    &::before {
      background: no-repeat 0.5rem center / auto 70%;
      color: #999;
      display: block;
      font-size: 0.7rem;
      height: 100%;
      line-height: 1.25rem;
      padding: 0.25rem 0.5rem 0.25rem 2rem;
      width: 100%;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
        padding: 0.5rem 1rem 0.5rem 3rem;
      }
    }
  }

  > ol {
    > li {
      align-items: center;
      background: #555;
      border-top: 1px solid #666;
      display: flex;
      justify-content: space-between;
      padding: 0.75rem;
      position: relative;

      @media (min-width: $breakpoint) {
        padding: 2rem;
      }

      &:nth-of-type(1) {
        border-top: none;

        .team__orderIcon {
          &::before {
            background-image: url('~/assets/images/icons/order/front.png');
            content: 'FRONT';
          }
        }
      }

      &:nth-of-type(2) {
        .team__orderIcon {
          &::before {
            background-image: url('~/assets/images/icons/order/middle.png');
            content: 'MIDDLE';
          }
        }
      }

      &:nth-of-type(3) {
        .team__orderIcon {
          &::before {
            background-image: url('~/assets/images/icons/order/back.png');
            content: 'BACK';
          }
        }
      }

      > * {
        margin-left: 0.75rem;

        @media (min-width: $breakpoint) {
          margin-left: 2rem;
        }

        &:nth-of-type(1) {
          margin-left: 0;
        }
      }
    }
  }

  &__heroItems {
    position: relative;
    padding-bottom: 0.75rem;
  }

  &__hero {
    img {
      border-radius: 0.5rem;
      image-rendering: pixelated;
      width: 100%;

      @media (min-width: $breakpoint) {
        width: 192px;
      }
    }
  }

  &__items {
    bottom: 0;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &__item {
    background: #666;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    width: 40%;

    @media (min-width: $breakpoint) {
      padding: 0.5rem;
    }

    img {
      image-rendering: pixelated;
    }
  }

  &__status {
    align-items: center;
    display: flex;

    img {
      margin-right: 0.25rem;
      width: 1.5rem;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
        margin-right: 1rem;
        width: 2rem;
      }
    }

    p {
      color: #ccc;
      font-family: Oswald;
      font-weight: bold;
      white-space: nowrap;

      @media (min-width: $breakpoint) {
        font-size: 1.8rem;
      }
    }
  }

  &__skills {
    flex: 1;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
    }

    > ol {
      border: 1px solid #777;
      border-radius: 0.5rem;
      list-style-type: none;
      margin: 0;
      padding: 0.25rem;

      @media (min-width: $breakpoint) {
        padding: 0.5rem;
      }
    }

    li,
    p {
      align-items: center;
      display: flex;
      font-size: 0.7rem;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
      }
    }

    p {
      border: 1px solid #777;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.25rem;

      @media (min-width: $breakpoint) {
        margin-top: 1rem;
        padding: 0.5rem;
      }
    }

    img {
      margin-right: 0.25rem;
      width: 1.25rem;

      @media (min-width: $breakpoint) {
        margin-right: 0.5rem;
        width: 2rem;
      }
    }
  }

  &__handle {
    color: #777;
    font-size: 1.2rem;

    @media (min-width: $breakpoint) {
      font-size: 2rem;
    }
  }
}
</style>
