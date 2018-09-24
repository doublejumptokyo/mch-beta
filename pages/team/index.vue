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
      template(v-for="(unit, index) in units")
        unit-list-item(
          v-if="unit"
          :to="`/team/${index + 1}`"
          :unit="getUnit(unit)"
          :skillOrder="getSkillOrder(unit)"
        )
      //- nuxt-link(
      //-   :to="`/team/${index + 1}`"
      //-   tag="li"
      //-   v-for="(unit, index) in units"
      //-   :key="index"
      //- )
        template(v-if="unit")
          .team__heroItems
            .team__orderIcon
            .team__hero
              img(:src="require(`~/assets/images/heroes/${unit.hero.fileName}`)")
            .team__items
              .team__item(v-for="extension in unit.extensions")
                img(:src="require(`~/assets/images/extensions/${extension.fileName}`)")
          .team__statuses
            .team__status
              img(:src="require('~/assets/images/icons/status/hp.png')")
              p {{ unit.hp }}
            .team__status
              img(:src="require('~/assets/images/icons/status/agi.png')")
              p {{ unit.agi }}
            .team__status
              img(:src="require('~/assets/images/icons/status/atk.png')")
              p {{ unit.phy }}
            .team__status
              img(:src="require('~/assets/images/icons/status/int.png')")
              p {{ unit.intl }}
          .team__skills
            ol
              li(v-for="skill in unit.skills.active")
                img(:src="require(`~/assets/images/icons/skill/${skill.iconFileName}`)")
                span {{ skill.name[$i18n.locale] }}
            p
              img(:src="require(`~/assets/images/icons/skill/${unit.skills.passive.iconFileName}`)")
              span {{ unit.skills.passive.name[$i18n.locale] }}
          .partyItem__handle(v-if="isChangingOrder[`team${team.id}`]")
            fa-icon.partyItem__bars(icon="bars")
          .partyItem__handle(v-else)
            fa-icon.partyItem__arrow(icon="angle-right")
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import UnitListItem from '~/components/UnitListItem'
export default {
  components: { draggable, UnitListItem },
  computed: mapGetters({
    units: 'team/newUnits'
  }),
  methods: {
    getUnit(unit) {
      return unit.filter((num, index) => index < 3)
    },
    getSkillOrder(unit) {
      return unit.filter((num, index) => index > 2)
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
