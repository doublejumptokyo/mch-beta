<template lang="pug">
.teamPage
  .page__title
    h1 {{ $i18n.t('pages.team') }}
  .teamPage__team.team
    //- header.team__header
      //- div(v-if="isChangingOrder[`team${team.id}`]")
        button.button__cancel(@click="cancelChangingOrder(team)")
          fa-icon(:icon="['fas', 'times']")
        button.button__ok(@click="saveChangingOrder(team)")
          fa-icon(:icon="['fas', 'check']")
      //- button.button__change(@click="startChangingOrder(team)" v-else)
        fa-icon(:icon="['fas', 'sort']")
        span Change Order
    no-ssr
      ol
        template(v-for="(unit, index) in units")
          unit-list-item(
            v-if="unit"
            :to="`/team/${index + 1}`"
            :unit="getUnit(unit)"
            :skillOrder="getSkillOrder(unit)"
          )
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import UnitListItem from '~/components/UnitListItem'
export default {
  middleware: 'walletCheck',
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
  font-size: 0.8rem;

  @media (min-width: $breakpoint) {
    font-size: 1rem;
  }

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
    background: #555;
    list-style-type: none;
    margin: 0;
    padding: 0;

    * {
      user-select: none;
    }
  }
}

// .swiper-container {
//   -webkit-tap-highlight-color: transparent;
// }

// .swiper-container-horizontal > .swiper-pagination-bullets {
//   bottom: auto;
//   top: 0;

//   /deep/ .swiper-pagination-bullet-active {
//     background: map-get($colors, primary);
//   }
// }
</style>
