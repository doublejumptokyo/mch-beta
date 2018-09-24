<template lang="pug">
nuxt-link.team(
  :to="to"
  tag="li"
)
  .team__heroItems
    .team__orderIcon
    .team__hero
      img(:src="require(`~/assets/images/heroes/${hero.fileName}`)")
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
  //- .partyItem__handle(v-if="isChangingOrder[`team${team.id}`]")
    fa-icon.partyItem__bars(icon="bars")
  //- .partyItem__handle(v-else)
    fa-icon.partyItem__arrow(icon="angle-right")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    unit: {
      type: Array,
      require: true,
      default() {
        return []
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
      require: true,
      default() {
        return ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getHero: 'heroes/get',
      getExtension: 'extensions/get',
      getSkill: 'team/getSkill'
    }),
    hero() {
      return this.getHero(this.unit[0])
    },
    extension1() {
      return this.getExtension(this.unit[1])
    },
    extension2() {
      return this.getExtension(this.unit[2])
    },
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
  }
}
</script>

<style lang="scss" scoped>
.team {
  &__orderIcon {
    border: 1px solid #eee;
    border-radius: 1rem;
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.9);
    font-family: Oswald;
    height: 1.75rem;
    margin-bottom: 0.5rem;

    &::before {
      background: no-repeat 0.5rem center / auto 70%;
      color: #999;
      display: block;
      font-size: 0.7rem;
      height: 100%;
      line-height: 1.25rem;
      padding: 0.25rem 0.5rem 0.25rem 2rem;
      width: 100%;
    }
  }

  > ol {
    > li {
      align-items: center;
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      margin: 0 0 1rem;
      padding: 0.75rem;
      position: relative;

      &:nth-of-type(1) {
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
        margin-left: 1rem;

        &:nth-of-type(1),
        &:last-of-type {
          margin-left: 0;
        }
      }
    }
  }

  &__heroItems {
    flex: 1.5;
    position: relative;
    padding-bottom: 0.75rem;
  }

  &__hero {
    img {
      border: 1px solid #fff;
      border-radius: 0.5rem;
      image-rendering: pixelated;
      width: 100%;
    }
  }

  &__items {
    bottom: 0;
    display: flex;
    justify-content: space-between;
    left: 0;
    margin-top: 0.5rem;
    position: absolute;
    width: 100%;
  }

  &__item {
    width: 40%;

    img {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      image-rendering: pixelated;
    }
  }

  &__status {
    align-items: center;
    display: flex;

    img {
      width: 1.5rem;
    }

    p {
      color: #666;
      font-family: Oswald;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  &__skills {
    flex: 3;

    > ol {
      border: 1px solid #eee;
      border-radius: 0.5rem;
      list-style-type: none;
      margin: 0;
      padding: 0.25rem;
    }

    li,
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      border: 1px solid #eee;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.25rem;
    }

    img {
      margin-right: 0.25rem;
      width: 1.25rem;
    }
  }

  &__handle {
    display: none;
    text-align: right;
    width: 1.5rem;
  }

  &__bars,
  &__arrow {
    color: #ccc;
    font-size: 1.5rem;
    margin-left: auto;
  }

  .sortable-ghost {
    visibility: hidden;
  }

  .sortable-drag {
    background: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
    opacity: 1 !important;
  }
}
</style>
