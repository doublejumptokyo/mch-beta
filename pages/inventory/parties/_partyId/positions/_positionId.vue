<template lang="pug">
.positionPage
  .positionPage__editArea

    .hero(v-if="hero.name && hero.imageFileName" @click="heroModalOpen")
      .hero__image
        img(:src="require(`~/assets/images/${hero.imageFileName}`)")
      .hero__name
        span {{ hero.name }}
    .hero.hero--empty(v-else @click="heroModalOpen")
      .hero__image.hero__image--empty
        fa-icon(icon="plus")
      .hero__name.hero__name--empty
        span No Hero

    .item.item1(v-if="item1.name && item1.imageFileName" @click="itemModalOpen('item1')")
      .item__image
        img(:src="require(`~/assets/images/${item1.imageFileName}`)")
      .item__name
        span {{ item1.name }}
    .item.item1.item--empty(v-else @click="itemModalOpen('item1')")
      .item__image.item__image--empty
        fa-icon(icon="plus")
      .item__name.item__name--empty
        span No Item

    .item.item2(v-if="item2.name && item2.imageFileName" @click="itemModalOpen('item2')")
      .item__image
        img(:src="require(`~/assets/images/${item2.imageFileName}`)")
      .item__name
        span {{ item2.name }}
    .item.item2.item--empty(v-else @click="itemModalOpen('item2')")
      .item__image.item__image--empty
        fa-icon(icon="plus")
      .item__name.item__name--empty
        span No Item

  .positionPage__resultArea
    .statuses
      .status
        img(:src="require('~/assets/images/icons/status/hp.png')")
        p {{ computedStatus.hp }}
      .status
        img(:src="require('~/assets/images/icons/status/agi.png')")
        p {{ computedStatus.agi }}
      .status
        img(:src="require('~/assets/images/icons/status/atk.png')")
        p {{ computedStatus.phy }}
      .status
        img(:src="require('~/assets/images/icons/status/int.png')")
        p {{ computedStatus.int }}
    .skills
      draggable(
        v-model="activeSkillOrder",
        element="ol",
        :options="{ animation: 300, handle: '.activeSkill__handle' }"
      )
        li.skill.activeSkill(v-for="type in activeSkillOrder")
          span {{ getActiveSkill(type).name }}
          .activeSkill__handle
            fa-icon(icon="bars")
      p.skill.passiveSkill {{ hero.skill.passive.name }}

  footer.positionPage__footer
    button(@click="submit") OK

  modal.heroModal(type="bottom" v-if="isHeroModalShown" @modal-close="heroModalCancel")
    h2.heroModal__header(slot="header") Change Hero
    .heroModal__body(slot="body")
      .heroSelector
        .heroSelector__hero(v-for="hero in $store.state.heroes")
          label
            input(type="radio" name="heroSelector" :value="hero" v-model="selectedHero")
            .heroSelector__heroInner
              img(:src="require(`~/assets/images/${hero.imageFileName}`)")
        .detailViewer(v-if="selectedHero")
          img(:src="require(`~/assets/images/${selectedHero.imageFileName}`)")
          .detailViewer__data
            h3 {{ selectedHero.name }}
            h4 {{ selectedHero.anotherName }}
            .detailViewer__statuses
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/hp.png')")
                span {{ selectedHero.status.hp }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/agi.png')")
                span {{ selectedHero.status.agi }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/atk.png')")
                span {{ selectedHero.status.phy }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/int.png')")
                span {{ selectedHero.status.int }}
            .detailViewer__skills
              .detailViewer__skill.detailViewer__activeSkill
                span {{ selectedHero.skill.active.name }}
              .detailViewer__skill.detailViewer__passiveSkill
                span {{ selectedHero.skill.passive.name }}
    .heroModal__footer(slot="footer")
      button.heroModal__cancelButton(@click="heroModalCancel") Cancel
      button.heroModal__submitButton(@click="heroModalSubmit") OK

  modal.itemModal(type="bottom" v-if="isItemModalShown" @modal-close="itemModalCancel(isItemModalShown)")
    h2.itemModal__header(slot="header") Change Item
    .itemModal__body(slot="body")
      .itemSelector
        .itemSelector__item(v-for="item in $store.state.items")
          label
            input(type="radio" name="itemSelector" :value="item" v-model="selectedItem[isItemModalShown]")
            .itemSelector__itemInner
              img(:src="require(`~/assets/images/${item.imageFileName}`)")
        .detailViewer(v-if="selectedItem[isItemModalShown]")
          img(:src="require(`~/assets/images/${selectedItem[isItemModalShown].imageFileName}`)")
          .detailViewer__data
            h3 {{ selectedItem[isItemModalShown].name }}
            .detailViewer__statuses
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/agi.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].status.agi > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].status.agi < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].status.agi === 0 }") {{ selectedItem[isItemModalShown].status.agi }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/atk.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].status.phy > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].status.phy < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].status.phy === 0 }") {{ selectedItem[isItemModalShown].status.phy }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/int.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].status.int > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].status.int < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].status.int === 0 }") {{ selectedItem[isItemModalShown].status.int }}
            .detailViewer__skills
              .detailViewer__skill.detailViewer__activeSkill
                span {{ selectedItem[isItemModalShown].skill.name }}
    .itemModal__footer(slot="footer")
      button.itemModal__cancelButton(@click="itemModalCancel(isItemModalShown)") Cancel
      button.itemModal__submitButton(@click="itemModalSubmit(isItemModalShown)") OK
</template>

<script>
import draggable from 'vuedraggable'
import Modal from '~/components/Modal'
export default {
  components: { draggable, Modal },
  data() {
    return {
      isHeroModalShown: false,
      isItemModalShown: false,
      hero: {},
      item1: {},
      item2: {},
      activeSkillOrder: [],
      selectedHero: null,
      selectedItem: { item1: null, item2: null }
    }
  },
  computed: {
    computedStatus() {
      return {
        hp: this.hero.status.hp,
        agi:
          this.hero.status.agi + this.item1.status.agi + this.item2.status.agi,
        phy:
          this.hero.status.phy + this.item1.status.phy + this.item2.status.phy,
        int:
          this.hero.status.int + this.item1.status.int + this.item2.status.int
      }
    }
  },
  created() {
    const partyId = Number(this.$route.params.partyId)
    const positionId = Number(this.$route.params.positionId)
    this.team = this.$store.state.teams.find(team => team.id === partyId)
    this.position = this.team.positions.find(
      position => position.id === positionId
    )
    this.hero = this.$store.state.heroes.find(
      hero => hero.id === this.position.hero
    )
    this.item1 = this.$store.state.items.find(
      item => item.id === this.position.item1
    )
    this.item2 = this.$store.state.items.find(
      item => item.id === this.position.item2
    )
    this.activeSkillOrder = this.position.activeSkillOrder
  },
  methods: {
    getActiveSkill(type) {
      switch (type) {
        case 'hero': {
          return this.hero.skill.active
        }
        case 'item1': {
          return this.item1.skill
        }
        case 'item2': {
          return this.item2.skill
        }
        default: {
          return { name: '' }
        }
      }
    },
    heroModalOpen() {
      this.selectedHero = this.hero
      this.isHeroModalShown = true
    },
    heroModalSubmit() {
      this.hero = this.selectedHero
      this.selectedHero = null
      this.isHeroModalShown = false
    },
    heroModalCancel() {
      this.selectedHero = null
      this.isHeroModalShown = false
    },
    itemModalOpen(type) {
      this.selectedItem[type] = this[type]
      this.isItemModalShown = type
    },
    itemModalSubmit(type) {
      this[type] = this.selectedItem[type]
      this.selectedItem[type] = null
      this.isItemModalShown = false
    },
    itemModalCancel(type) {
      this.selectedItem[type] = null
      this.isItemModalShown = false
    },
    submit() {
      this.$store.commit('teams/CHANGE_POSITION_CONTENT', {
        team: this.team,
        position: this.position,
        hero: this.hero,
        item1: this.item1,
        item2: this.item2,
        activeSkillOrder: this.activeSkillOrder
      })
      this.$router.push({
        path: '/inventory/parties',
        query: { team: this.team.id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.positionPage {
  &__editArea {
    align-items: center;
    background: #f9f9f9;
    display: flex;
    font-size: 0.8rem;
    margin: -1rem -1rem 1rem;
    padding: 1rem;
  }

  &__resultArea {
    margin: 1rem 0;
  }

  &__footer {
    margin: 1rem 0;

    button {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #fff;
      display: block;
      padding: 1rem;
      width: 100%;
    }
  }
}

.hero,
.item {
  background: #fff;
  border: 2px dashed #eee;
  border-radius: 1rem;
  margin-left: 1rem;
  padding: 1rem;

  &__image {
    height: 0;
    padding-top: 100%;
    position: relative;

    img {
      border-radius: 0.5rem;
      height: 100%;
      image-rendering: pixelated;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &--empty {
      align-items: center;
      background: #f9f9f9;
      color: #eee;
      display: flex;
      font-size: 2rem;
      justify-content: center;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__name {
    margin-top: 0.5rem;
    text-align: center;

    &--empty {
      color: #ccc;
    }
  }
}

.hero {
  flex: 3;
  order: 2;
  width: 60%;
}

.item {
  flex: 1;
  width: 20%;
}

.item1 {
  margin-left: 0;
  order: 1;
}

.item2 {
  order: 3;
}

.hero__name,
.item__name {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.statuses {
  display: flex;
  margin: 1rem 0;
}

.status {
  font-family: Oswald;
  text-align: center;
  width: 50%;

  img {
    width: 50%;
  }
}

.skills {
  margin: 1rem 0;

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      align-items: center;
      display: flex;
      justify-content: space-between;

      &:first-of-type {
        margin-top: 0;
      }

      .svg-inline--fa {
        color: #ccc;
      }
    }
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

.skill {
  border: 1px solid #eee;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.activeSkill {
    border-color: map-get($colors, primary);
  }

  &.passiveSkill {
    border-color: map-get($colors, brand4);
  }
}

.heroModal,
.itemModal {
  /deep/ .modal__bodyInner {
    padding-bottom: 0;
  }

  &__footer {
    display: flex;
    padding: 1rem;

    > * {
      flex: 1;
    }

    button {
      border-radius: 1rem;
      padding: 1rem;
    }
  }

  &__submitButton {
    background: map-get($colors, primary);
    color: #fff;
  }
}

.heroSelector,
.itemSelector {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &__hero,
  &__item {
    margin: 0.5rem 0 0 0.5rem;
    width: calc((100% - 1.5rem) / 4);

    &:nth-of-type(-n + 4) {
      margin-top: 0;
    }

    &:nth-of-type(4n + 1) {
      margin-left: 0;
    }

    label {
      display: block;
    }

    input {
      display: none;

      &:checked + .heroSelector__heroInner,
      &:checked + .itemSelector__itemInner {
        border-color: map-get($colors, primary);
      }
    }
  }

  &__heroInner,
  &__itemInner {
    align-items: center;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    justify-content: center;
    padding: 0.5rem;

    img {
      border-radius: 0.5rem;
    }
  }
}

.detailViewer {
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  bottom: -1px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  left: 0;
  margin: 0 -1rem;
  padding: 1rem;
  position: sticky;
  width: calc(100% + 2rem);

  > img {
    border-radius: 0.5rem;
    margin-right: 1rem;
  }

  &__data {
    flex: 1;
    min-width: 0;

    h3 {
      font-size: 1rem;
      line-height: 1;
    }

    h4 {
      color: #999;
      font-size: 0.9rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 0.25rem;
    }
  }

  &__statuses {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  &__status {
    align-items: center;
    display: flex;
    font-family: Oswald;
    font-size: 4vw;
    font-weight: bold;
    line-height: 1;

    img {
      margin-right: 1vw;
      width: 6vw;
    }

    &--plus {
      color: #2ecc71;
    }

    &--minus {
      color: #e74c3c;
    }

    &--zero {
      color: #999;
    }
  }

  &__skills {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  &__skill {
    border: 1px solid;
    border-radius: 1rem;
    flex: 1;
    margin-left: 1rem;
    min-width: 0;
    padding: 0.25rem 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    span {
      font-size: 0.8rem;
      line-height: 1;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &__activeSkill {
    border-color: map-get($colors, primary);
  }

  &__passiveSkill {
    border-color: map-get($colors, brand4);
  }
}
</style>
