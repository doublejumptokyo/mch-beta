<template lang="pug">
.partiesPage
  .page__title
    h1 Parties
  .partiesPage__partyList
    div(v-swiper:mySwiper="swiperOption")
      .swiper-wrapper
        .swiper-slide.partyItem(v-for="team in teams")
          header.partyItem__header
            h2 {{ team.name }}
            div(v-if="isChangingOrder[`team${team.id}`]")
              button.button__cancel(@click="cancelChangingOrder(team)")
                fa-icon(:icon="['fas', 'times']")
              button.button__ok(@click="saveChangingOrder(team)")
                fa-icon(:icon="['fas', 'check']")
            button.button__change(@click="startChangingOrder(team)" v-else)
              fa-icon(:icon="['fas', 'sort']")
              span Change Order
          draggable(
            v-model="positionOrders[`team${team.id}`]"
            element="ol"
            :options="{ disabled: !isChangingOrder[`team${team.id}`], animation: 300, delay: 200 }"
            @start="onDragStart"
          )
            nuxt-link(
              :to="`/inventory/parties/${team.id}/positions/${position.id}`"
              tag="li"
              v-for="(position, index) in positionOrders[`team${team.id}`]"
              :key="index"
            )
              .partyItem__heroItems
                .partyItem__orderIcon
                .partyItem__hero
                  img(:src="require(`~/assets/images/${getHero(position).imageFileName}`)")
                .partyItem__items
                  .partyItem__item(v-for="item in getItems(position)")
                    img(:src="require(`~/assets/images/${item.imageFileName}`)")
              .partyItem__statuses
                .partyItem__status
                  img(:src="require('~/assets/images/icons/status/hp.png')")
                  p {{ getStatus(position).hp }}
                .partyItem__status
                  img(:src="require('~/assets/images/icons/status/agi.png')")
                  p {{ getStatus(position).agi }}
                .partyItem__status
                  img(:src="require('~/assets/images/icons/status/atk.png')")
                  p {{ getStatus(position).phy }}
                .partyItem__status
                  img(:src="require('~/assets/images/icons/status/int.png')")
                  p {{ getStatus(position).int }}
              .partyItem__skills
                ol
                  li(v-for="skill in getActiveSkills(position)")
                    img(:src="require('~/assets/images/icons/skill/phy.png')")
                    img(:src="require('~/assets/images/icons/skill/poison.png')")
                    span {{ skill.name }}
                p
                  img(:src="require('~/assets/images/icons/skill/int.png')")
                  span {{ getHero(position).skill.passive.name }}
              .partyItem__handle(v-if="isChangingOrder[`team${team.id}`]")
                fa-icon.partyItem__bars(icon="bars")
              .partyItem__handle(v-else)
                fa-icon.partyItem__arrow(icon="angle-right")
      .swiper-pagination.swiper-pagination-bullets
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      positionOrders: {},
      isChangingOrder: {},
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  asyncData({ route }) {
    const teamId = Number(route.query.team || '1')
    return { teamId }
  },
  computed: {
    ...mapState(['teams', 'heroes', 'items'])
  },
  created() {
    this.teams.forEach(team => {
      this.$set(this.positionOrders, `team${team.id}`, team.positions)
      this.$set(this.isChangingOrder, `team${team.id}`, false)
    })
  },
  mounted() {
    this.mySwiper.slideTo(this.teams.findIndex(team => team.id === this.teamId))
  },
  methods: {
    getHero(position) {
      const heroId = position.hero
      return this.heroes.find(hero => hero.id === heroId)
    },
    getItems(position, type = null) {
      const item1Id = position.item1
      const item2Id = position.item2
      if (type === 'item1') {
        return [this.items.find(item => item.id === item1Id)]
      }
      if (type === 'item2') {
        return [this.items.find(item => item.id === item2Id)]
      }
      return [
        this.items.find(item => item.id === item1Id),
        this.items.find(item => item.id === item2Id)
      ]
    },
    getStatus(position) {
      const hero = this.getHero(position)
      const [item1, item2] = this.getItems(position)
      return {
        hp: hero.status.hp,
        agi: hero.status.agi + item1.status.agi + item2.status.agi,
        phy: hero.status.phy + item1.status.phy + item2.status.phy,
        int: hero.status.int + item1.status.int + item2.status.int
      }
    },
    getActiveSkills(position) {
      return position.activeSkillOrder.map(type => {
        if (type === 'hero') {
          return this.getHero(position).skill.active
        }
        return this.getItems(position, type)[0].skill
      })
    },
    startChangingOrder(team) {
      this.isChangingOrder[`team${team.id}`] = true
      this.$el
        .querySelector('.swiper-slide-active')
        .classList.add('swiper-no-swiping')
    },
    saveChangingOrder(team) {
      this.$store.commit('teams/CHANGE_POSITION', {
        id: team.id,
        positions: this.positionOrders[`team${team.id}`]
      })
      this.isChangingOrder[`team${team.id}`] = false
      this.$el
        .querySelector('.swiper-slide-active')
        .classList.remove('swiper-no-swiping')
    },
    cancelChangingOrder(team) {
      this.$set(this.positionOrders, `team${team.id}`, team.positions)
      this.isChangingOrder[`team${team.id}`] = false
    },
    onDragStart(e) {
      // なぜかゴーストの位置がずれるため
      const dragItem = this.$el.querySelector('.sortable-drag')
      const slide = this.$el.querySelector('.swiper-slide-active')
      dragItem.style.top = `${e.item.offsetTop}px`
      dragItem.style.left = `${slide ? slide.offsetLeft : 0}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.partiesPage {
  &__partyList {
    margin: 1rem -1rem;
  }
}

.partyItem {
  background: #fff;
  font-size: 0.8rem;

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 1rem;
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
        .partyItem__orderIcon {
          &::before {
            background-image: url('~/assets/images/icons/order/front.png');
            content: 'FRONT';
          }
        }
      }

      &:nth-of-type(2) {
        .partyItem__orderIcon {
          &::before {
            background-image: url('~/assets/images/icons/order/middle.png');
            content: 'MIDDLE';
          }
        }
      }

      &:nth-of-type(3) {
        .partyItem__orderIcon {
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
