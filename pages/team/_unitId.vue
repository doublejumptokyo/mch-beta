<template lang="pug">
.positionPage
  .positionPage__editArea

    .hero(v-if="hero.name && hero.fileName" @click="heroModalOpen")
      .hero__image
        img(:src="require(`~/assets/images/heroes/${hero.fileName}`)")
      .hero__name
        span {{ hero.name[$i18n.locale] }}
    .hero.hero--empty(v-else @click="heroModalOpen")
      .hero__image.hero__image--empty
        fa-icon(icon="plus")
      .hero__name.hero__name--empty
        span No Hero

    .item.item1(v-if="item1.name && item1.fileName" @click="itemModalOpen('item1')")
      .item__image
        img(:src="require(`~/assets/images/extensions/${item1.fileName}`)")
      .item__name
        span {{ item1.name[$i18n.locale] }}
    .item.item1.item--empty(v-else @click="itemModalOpen('item1')")
      .item__image.item__image--empty
        fa-icon(icon="plus")
      .item__name.item__name--empty
        span No Item

    .item.item2(v-if="item2.name && item2.fileName" @click="itemModalOpen('item2')")
      .item__image
        img(:src="require(`~/assets/images/extensions/${item2.fileName}`)")
      .item__name
        span {{ item2.name[$i18n.locale] }}
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
        li.skill.activeSkill(v-for="index in activeSkillOrder")
          span {{ getActiveSkill(index).name[$i18n.locale] }}
          .activeSkill__handle
            fa-icon(icon="bars")
      p.skill.passiveSkill(v-if="hero.passiveSkill") {{ hero.passiveSkill.name[$i18n.locale] }}

  footer.positionPage__footer
    button(@click="submit") OK

  modal.heroModal(type="bottom" v-if="isHeroModalShown" @modal-close="heroModalCancel")
    h2.heroModal__header(slot="header") Change Hero
    .heroModal__body(slot="body")
      .heroSelector
        .heroSelector__hero(v-for="hero in $store.state.heroes" :class="{ 'heroSelector__hero--disabled': isDisabled(hero, 'hero') }")
          label
            input(type="radio" name="heroSelector" :value="hero" v-model="selectedHero")
            .heroSelector__heroInner
              img(:src="require(`~/assets/images/heroes/${hero.fileName}`)")
        .detailViewer(v-if="selectedHero")
          img(:src="require(`~/assets/images/heroes/${selectedHero.fileName}`)")
          .detailViewer__data
            h3 {{ selectedHero.name[$i18n.locale] }}
            h4 {{ selectedHero.anotherName }}
            .detailViewer__statuses
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/hp.png')")
                span {{ selectedHero.hp }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/agi.png')")
                span {{ selectedHero.agi }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/atk.png')")
                span {{ selectedHero.phy }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/int.png')")
                span {{ selectedHero.intl }}
            .detailViewer__skills
              .detailViewer__skill.detailViewer__activeSkill
                span {{ selectedHero.activeSkill.name[$i18n.locale] }}
              .detailViewer__skill.detailViewer__passiveSkill
                span {{ selectedHero.passiveSkill.name[$i18n.locale] }}
    .heroModal__footer(slot="footer")
      button.heroModal__cancelButton(@click="heroModalCancel") Cancel
      button.heroModal__submitButton(@click="heroModalSubmit") OK

  modal.itemModal(type="bottom" v-if="isItemModalShown" @modal-close="itemModalCancel(isItemModalShown)")
    h2.itemModal__header(slot="header") Change Item
    .itemModal__body(slot="body")
      .itemSelector
        .itemSelector__item(v-for="item in $store.state.extensions")
          label
            input(type="radio" name="itemSelector" :value="item" v-model="selectedItem[isItemModalShown]")
            .itemSelector__itemInner
              img(:src="require(`~/assets/images/extensions/${item.fileName}`)")
        .detailViewer(v-if="selectedItem[isItemModalShown]")
          img(:src="require(`~/assets/images/extensions/${selectedItem[isItemModalShown].fileName}`)")
          .detailViewer__data
            h3 {{ selectedItem[isItemModalShown].name[$i18n.locale] }}
            .detailViewer__statuses
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/hp.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].hp > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].hp < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].hp === 0 }") {{ selectedItem[isItemModalShown].hp }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/agi.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].agi > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].agi < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].agi === 0 }") {{ selectedItem[isItemModalShown].agi }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/atk.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].phy > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].phy < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].phy === 0 }") {{ selectedItem[isItemModalShown].phy }}
              .detailViewer__status
                img(:src="require('~/assets/images/icons/status/int.png')")
                span(:class="{ 'detailViewer__status--plus': selectedItem[isItemModalShown].intl > 0, 'detailViewer__status--minus': selectedItem[isItemModalShown].intl < 0, 'detailViewer__status--zero': selectedItem[isItemModalShown].intl === 0 }") {{ selectedItem[isItemModalShown].intl }}
            .detailViewer__skills
              .detailViewer__skill.detailViewer__activeSkill
                span {{ selectedItem[isItemModalShown].activeSkill.name[$i18n.locale] }}
    .itemModal__footer(slot="footer")
      button.itemModal__cancelButton(@click="itemModalCancel(isItemModalShown)") Cancel
      button.itemModal__submitButton(@click="itemModalSubmit(isItemModalShown)") OK
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
    ...mapState(['team']),
    ...mapGetters({
      units: 'team/newUnits',
      getHero: 'heroes/get',
      getExtension: 'extensions/get',
      getSkill: 'team/getSkill'
    }),
    computedStatus() {
      return {
        hp: this.getStatus('hp'),
        agi: this.getStatus('agi'),
        phy: this.getStatus('phy'),
        int: this.getStatus('intl')
      }
    }
  },
  mounted() {
    this.positionIndex = Number(this.$route.params.unitId) - 1
    this.position = this.units[this.positionIndex]
    this.hero = this.getHero(this.position[0])
    this.item1 = this.getExtension(this.position[1])
    this.item2 = this.getExtension(this.position[2])
    this.activeSkillOrder = this.position.filter((num, index) => index > 2)
  },
  methods: {
    getStatus(type) {
      return this.hero[type] + this.item1[type] + this.item2[type]
    },
    getActiveSkill(index) {
      if (index === 0) {
        return this.hero.activeSkill
      }
      if (index === 1) {
        return this.item1.activeSkill
      }
      if (index === 2) {
        return this.item2.activeSkill
      }
    },
    isDisabled() {
      // return !!Object.values(this.team).find(unit => {
      //   if (type === 'hero') {
      //     return unit[0] === obj.id
      //   } else if (type === 'item') {
      //     return unit[1] === obj.id || unit[2] === obj.id
      //   }
      // })
      return false
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
    async submit() {
      const heroId = this.hero.id
      const extension1Id = this.item1.id
      const extension2Id = this.item2.id
      const activeSkillIds = this.activeSkillOrder
      const newIds = [heroId, extension1Id, extension2Id, ...activeSkillIds]

      this.$store.commit('team/SET_IDS', { index: this.positionIndex, newIds })

      await this.$team.set(this.$store.state.team)
      const newTeam = await this.$team.get(this.$store.state.loomAddress)
      this.$store.commit('team/SET_TEAM', newTeam)

      this.$toast.show('Success.')
      this.$router.push('/team')
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
