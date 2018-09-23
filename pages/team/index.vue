<template lang="pug">
.teamPage
  .page__title
    h1 {{ $i18n.t('pages.team') }}
  .teamPage__team.team
    header.team__header
      //- div(v-if="isChangingOrder[`team${team.id}`]")
        button.button__cancel(@click="cancelChangingOrder(team)")
          fa-icon(:icon="['fas', 'times']")
        button.button__ok(@click="saveChangingOrder(team)")
          fa-icon(:icon="['fas', 'check']")
      //- button.button__change(@click="startChangingOrder(team)" v-else)
        fa-icon(:icon="['fas', 'sort']")
        span Change Order
    draggable(
      element="ol"
    )
      nuxt-link(
        :to="`/team/unit${index + 1}`"
        tag="li"
        v-for="(unit, index) in units"
        :key="index"
      )
        template(v-if="unit")
          .team__heroItems
            .team__orderIcon
            .team__hero
              img(:src="require(`~/assets/images/heroes/${getHero(unit[0]).fileName}`)")
            .team__items
              .team__item
                img(:src="require(`~/assets/images/extensions/${getExtension(unit[1]).fileName}`)")
              .team__item
                img(:src="require(`~/assets/images/extensions/${getExtension(unit[2]).fileName}`)")
          .team__statuses
            .team__status
              img(:src="require('~/assets/images/icons/status/hp.png')")
              p {{ getStatus(unit, 'hp') }}
            .team__status
              img(:src="require('~/assets/images/icons/status/agi.png')")
              p {{ getStatus(unit, 'agi') }}
            .team__status
              img(:src="require('~/assets/images/icons/status/atk.png')")
              p {{ getStatus(unit, 'phy') }}
            .team__status
              img(:src="require('~/assets/images/icons/status/int.png')")
              p {{ getStatus(unit, 'intl') }}
          //- .partyItem__skills
            ol
              li(v-for="skill in getActiveSkills(position)")
                img(:src="require('~/assets/images/icons/skill/phy.png')")
                img(:src="require('~/assets/images/icons/skill/poison.png')")
                span {{ skill.name }}
            p
              img(:src="require('~/assets/images/icons/skill/int.png')")
              span {{ getHero(position).skill.passive.name }}
          //- .partyItem__handle(v-if="isChangingOrder[`team${team.id}`]")
            fa-icon.partyItem__bars(icon="bars")
          //- .partyItem__handle(v-else)
            fa-icon.partyItem__arrow(icon="angle-right")
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  computed: mapGetters({
    units: 'team/units',
    getHero: 'heroes/get',
    getExtension: 'extensions/get'
  }),
  methods: {
    getStatus(unit, type) {
      const hero = this.getHero(unit[0])
      const ext1 = this.getExtension(unit[1])
      const ext2 = this.getExtension(unit[2])
      return hero[type] + ext1[type] + ext2[type]
    }
    //   onDragStart(e) {
    //     // なぜかゴーストの位置がずれるため
    //     const dragItem = this.$el.querySelector('.sortable-drag')
    //     const slide = this.$el.querySelector('.swiper-slide-active')
    //     dragItem.style.top = `${e.item.offsetTop}px`
    //     dragItem.style.left = `${slide ? slide.offsetLeft : 0}px`
    //   }
  }
}
</script>

<style lang="scss" scoped>
.teamPage {
  &__team {
    margin: 1rem -1rem;
  }
}

.team {
  background: #fff;
  font-size: 0.8rem;

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 1rem;
    padding: 0 1rem;

    button {
      border: 1px solid map-get($colors, primary);
      border-radius: 1rem;
      color: map-get($colors, primary);
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;

      &.button__ok {
        background: map-get($colors, primary);
        color: #fff;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }

  > ol {
    background: #f9f9f9;
    list-style-type: none;
    margin: 0;
    padding: 1rem;

    * {
      user-select: none;
    }

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
      filter: invert(90%);
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

.swiper-container {
  -webkit-tap-highlight-color: transparent;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: auto;
  top: 0;

  /deep/ .swiper-pagination-bullet-active {
    background: map-get($colors, primary);
  }
}
</style>
