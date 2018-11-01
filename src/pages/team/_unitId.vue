<template lang="pug">
.positionPage
  no-ssr
    .positionPage__editArea(v-if="hero")

      .hero(v-if="hero.name && hero.fileName" @click="heroModalOpen")
        fa-icon(icon="sync")
        .hero__image
          img(:src="hero.imageUrl")

      .item.item1(v-if="item1.name && item1.fileName" @click="itemModalOpen('item1')")
        fa-icon(icon="sync")
        .item__image
          img(:src="require(`~/assets/images/extensions/${item1.fileName}`)")

      .item.item2(v-if="item2.name && item2.fileName" @click="itemModalOpen('item2')")
        fa-icon(icon="sync")
        .item__image
          img(:src="require(`~/assets/images/extensions/${item2.fileName}`)")

  no-ssr
    .positionPage__resultArea
      .statuses(v-if="hero")
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
      .skills(v-if="hero")
        .skills__title
          h3 Active
        draggable(
          v-model="activeSkillOrder",
          element="ol",
          :options="{ animation: 300, handle: '.activeSkill__handle' }"
          @choose="onDragStart"
          @end="onDragEnd"
        )
          li.skill.activeSkill(v-for="index in activeSkillOrder")
            img(:src="getSkillTypeImage(index)")
            div
              h4
                img(:src="require(`~/assets/images/icons/skill/${getActiveSkill(index).iconFileName}`)")
                span {{ getActiveSkill(index).name[$i18n.locale] }}
              p {{ getActiveSkill(index).description[$i18n.locale] }}
            .activeSkill__handle
              fa-icon(icon="bars")
        .skills__title
          h3 Passive
        div.skill.passiveSkill(v-if="hero.passiveSkill")
          img(:src="getSkillTypeImage(0)")
          div
            h4
              img(:src="require(`~/assets/images/icons/skill/${hero.passiveSkill.iconFileName}`)")
              span {{ hero.passiveSkill.name[$i18n.locale] }}
            p {{ hero.passiveSkill.description[$i18n.locale] }}

  footer.positionPage__footer
    button(@click="submit")
      fa-icon(icon="check")
      span OK

  modal.heroModal(type="bottom" v-if="isHeroModalShown" @modal-close="heroModalCancel")
    h2.heroModal__header(slot="header") Change Hero
    .heroModal__body(slot="body")
      .heroSelector
        .heroSelector__hero(v-for="hero in myOwnHeroes" :class="{ 'heroSelector__hero--disabled': isDisabled(hero.id, 'hero') }")
          label
            input(type="radio" name="heroSelector" :value="hero" v-model="selectedHero")
            .heroSelector__heroInner
              img(:src="hero.imageUrl")
        .detailViewer(v-if="selectedHero")
          img(:src="selectedHero.imageUrl")
          .detailViewer__data
            h3 {{ selectedHero.name[$i18n.locale] }}
            p {{ selectedHero.anotherName }}
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
                div
                  h4 Active
                  img(:src="require(`~/assets/images/icons/skill/${selectedHero.activeSkill.iconFileName}`)")
                div
                  h5 {{ selectedHero.activeSkill.name[$i18n.locale] }}
                  p {{ selectedHero.activeSkill.description[$i18n.locale] }}
              .detailViewer__skill.detailViewer__passiveSkill
                div
                  h4 Passive
                  img(:src="require(`~/assets/images/icons/skill/${selectedHero.passiveSkill.iconFileName}`)")
                div
                  h5 {{ selectedHero.passiveSkill.name[$i18n.locale] }}
                  p {{ selectedHero.passiveSkill.description[$i18n.locale] }}
    .heroModal__footer(slot="footer")
      button.heroModal__cancelButton(@click="heroModalCancel") Cancel
      button.heroModal__submitButton(@click="heroModalSubmit") OK

  modal.itemModal(type="bottom" v-if="isItemModalShown" @modal-close="itemModalCancel(isItemModalShown)")
    h2.itemModal__header(slot="header") Change Item
    .itemModal__body(slot="body")
      .itemSelector
        .itemSelector__item(v-for="item in $store.state.extensions" :class="{ 'itemSelector__item--disabled': isDisabled(item.id, 'item', isItemModalShown) }")
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
                div
                  h4 Active
                  img(:src="require(`~/assets/images/icons/skill/${selectedItem[isItemModalShown].activeSkill.iconFileName}`)")
                div
                  h5 {{ selectedItem[isItemModalShown].activeSkill.name[$i18n.locale] }}
                  p {{ selectedItem[isItemModalShown].activeSkill.description[$i18n.locale]}}
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
  validate({ params }) {
    return /^[1-3]{1}$/.test(params.unitId)
  },
  data() {
    return {
      isHeroModalShown: false,
      isItemModalShown: false,
      activeSkillOrder: [],
      selectedHero: null,
      selectedItem: { item1: null, item2: null },
      myOwnHeroes: []
    }
  },
  computed: {
    ...mapState(['team', 'loomAddress']),
    ...mapGetters({
      units: 'team/newUnits',
      getHero: 'heroes/get',
      getExtension: 'extensions/get',
      getSkill: 'team/getSkill'
    }),
    position() {
      return this.units[this.positionIndex]
    },
    hero() {
      if (!this.position) return
      return this.myOwnHeroes.find(hero => hero.id === this.position[0])
    },
    item1() {
      if (!this.position) return {}
      return this.getExtension(this.position[1])
    },
    item2() {
      if (!this.position) return {}
      return this.getExtension(this.position[2])
    },
    computedStatus() {
      return {
        hp: this.getStatus('hp'),
        agi: this.getStatus('agi'),
        phy: this.getStatus('phy'),
        int: this.getStatus('intl')
      }
    }
  },
  beforeMount() {
    this.positionIndex = Number(this.$route.params.unitId) - 1
    this.activeSkillOrder = this.position.filter((num, index) => index > 2)
    this.getMyOwnHeroes()
  },
  methods: {
    async getMyOwnHeroes() {
      const address = this.loomAddress
      const heroCount = await this.$hero.asset.getHeroCount(address)
      const indexes = Array.from(Array(heroCount).keys())
      const heroIds = await Promise.all(
        indexes.map(index => this.$hero.asset.getHeroId(address, index))
      )
      this.myOwnHeroes = await Promise.all(
        heroIds.map(heroId => this.$hero.get(heroId))
      )
    },
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
    getSkillTypeImage(index) {
      if (index === 0) {
        return this.hero.imageUrl
      }
      if (index === 1) {
        return require(`~/assets/images/extensions/${this.item1.fileName}`)
      }
      if (index === 2) {
        return require(`~/assets/images/extensions/${this.item2.fileName}`)
      }
    },
    onDragStart() {
      const skillsElem = this.$el.querySelector('.skills > ol')
      skillsElem.classList.add('skills__dragging')
    },
    onDragEnd() {
      const skillsElem = this.$el.querySelector('.skills > ol')
      skillsElem.classList.remove('skills__dragging')
    },
    isDisabled(id, type, extensionType = false) {
      if (type === 'hero') {
        const isAlreadyAdded = this.units.some(unit => unit[0] === id)
        const isCurrentHero = this.units[this.positionIndex][0] === id
        return isAlreadyAdded && !isCurrentHero
      } else if (type === 'item') {
        const isAlreadyAdded = this.units.some(unit => {
          return unit[1] === id || unit[2] === id
        })
        const extIndex = extensionType === 'item1' ? 1 : 2
        const isCurrentExt = this.units[this.positionIndex][extIndex] === id
        return isAlreadyAdded && !isCurrentExt
      }
    },
    heroModalOpen() {
      this.selectedHero = this.hero
      this.isHeroModalShown = true
    },
    heroModalSubmit() {
      this.$set(this.position, 0, this.selectedHero.id)
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
      this.$set(
        this.position,
        type === 'item1' ? 1 : 2,
        this.selectedItem[type].id
      )
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

      try {
        await this.$team.set(this.$store.state.team.units)
        const newTeam = await this.$team.get(this.$store.state.loomAddress)
        this.$store.commit('team/SET_TEAM', newTeam)

        this.$toast.show('Success.')
        this.$router.push('/team')
      } catch (e) {
        const newTeam = await this.$team.get(this.$store.state.loomAddress)
        this.$store.commit('team/SET_TEAM', newTeam)
        this.$toast.error('Error.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.positionPage {
  color: #ccc;

  @media (min-width: $breakpoint) {
    padding: 2rem;
  }

  &__editArea {
    align-items: center;
    background: #555;
    display: flex;
    font-size: 0.8rem;
    justify-content: center;
    margin: -1rem -1rem 1rem;
    padding: 1rem;

    @media (min-width: $breakpoint) {
      margin: -2rem -2rem 2rem;
      padding: 2rem;
    }
  }

  &__resultArea {
    margin: 1rem 0;
  }

  &__footer {
    background: #444;
    bottom: 0;
    left: 0;
    margin: 0 -1rem;
    padding: 1rem;
    position: sticky;
    width: calc(100% + 2rem);

    button {
      background: #f1c40f;
      border-radius: 1rem;
      color: #444;
      display: block;
      margin: 0 auto;
      max-width: 640px;
      padding: 1rem;
      width: 100%;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
}

.hero,
.item {
  background: #666;
  border-radius: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  padding: 2.5rem 1rem 1rem;

  @media (min-width: $breakpoint) {
    margin-left: 2rem;
    padding: 2.5rem 2rem 2rem;
  }

  &:hover {
    opacity: 0.75;
  }

  svg {
    display: block;
    float: right;
    font-size: 1.2rem;
    margin: -1.75rem -0.25rem 0 0;
    opacity: 0.25;

    @media (min-width: $breakpoint) {
      margin: -1.75rem -1.25rem 0 0;
    }
  }

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
  max-width: 256px;
  order: 2;
  width: 60%;
}

.item {
  flex: 1;
  max-width: 128px;
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

  @media (min-width: $breakpoint) {
    margin: 2rem 0;
  }
}

.status {
  flex: 1;
  font-family: Oswald;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: $breakpoint) {
    align-items: center;
    display: flex;
    font-size: 1.8rem;
    justify-content: center;
  }

  img {
    width: 2.5rem;

    @media (min-width: $breakpoint) {
      margin-right: 1rem;
      width: 3rem;
    }
  }
}

.skills {
  margin: 1rem 0;

  &__title {
    align-items: center;
    display: flex;
    justify-content: space-between;

    > h3 {
      color: #666;
      margin: 1rem 0 0.5rem;
    }

    > button {
      border: 1px solid map-get($colors, primary);
      border-radius: 0.5rem;
      color: map-get($colors, primary);
      font-size: 0.8rem;
      line-height: 1;
      padding: 0.5rem;

      svg {
        margin-right: 0.25rem;
      }
    }
  }

  > ol {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 2rem;
      position: relative;

      &::before {
        color: #fff;
        display: block;
        font-family: Oswald;
        left: -2rem;
        line-height: 1;
        position: absolute;
        transform: translateY(-50%) rotate(-90deg);
        top: 50%;

        @media (min-width: $breakpoint) {
          font-size: 1.5rem;
          left: -2.5rem;
        }
      }

      &:first-of-type {
        margin-top: 0;

        &::before {
          content: '1st';
        }
      }

      &:nth-of-type(2) {
        &::before {
          content: '2nd';
        }
      }

      &:nth-of-type(3) {
        &::before {
          content: '3rd';
        }
      }
    }
  }

  &__dragging {
    li {
      &::before {
        display: none !important;
      }
    }
  }

  .sortable-ghost {
    visibility: hidden;
  }

  .sortable-drag {
    background: #444;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
    opacity: 1 !important;
  }
}

.skill {
  align-items: center;
  border: 1px solid #666;
  border-radius: 0.5rem;
  display: flex;
  margin-top: 0.5rem;
  padding: 0.5rem;

  @media (min-width: $breakpoint) {
    padding: 1rem;
  }

  > img {
    margin-right: 0.5rem;
    width: 1.8rem;

    @media (min-width: $breakpoint) {
      margin-right: 1rem;
      width: 3.6rem;
    }
  }

  > div:first-of-type {
    flex: 1;

    h4 {
      align-items: center;
      display: flex;

      img {
        margin-right: 0.25rem;
        width: 1.5rem;
      }
    }
  }

  p {
    color: #999;
    font-size: 0.8rem;

    @media (min-width: $breakpoint) {
      font-size: 1rem;
    }
  }
}

.activeSkill {
  &__handle {
    color: #ccc;
    cursor: grab;
    margin: 0 0.5rem;

    @media (min-width: $breakpoint) {
      font-size: 1.8rem;
    }
  }

  &.sortable-chosen .activeSkill__handle {
    cursor: grabbing;
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

    &--disabled {
      pointer-events: none;
      opacity: 0.15;
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
      image-rendering: pixelated;
      width: 100%;
    }
  }
}

.detailViewer {
  background: #555;
  bottom: -1px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  left: 0;
  margin: 1rem -1rem 0;
  max-height: 30vh;
  overflow: auto;
  padding: 1rem;
  position: sticky;
  width: calc(100% + 2rem);

  > img {
    align-self: center;
    border-radius: 0.5rem;
    margin-right: 1rem;

    @media (min-width: $breakpoint) {
      image-rendering: pixelated;
      width: 128px;
    }
  }

  &__data {
    flex: 1;
    min-width: 0;

    h3 {
      font-size: 1rem;
      line-height: 1;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }
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

    @media (min-width: $breakpoint) {
      margin-top: 1rem;
    }
  }

  &__status {
    align-items: center;
    display: flex;
    font-family: Oswald;
    font-size: 0.9rem;
    font-weight: bold;
    line-height: 1;

    @media (min-width: $breakpoint) {
      font-size: 1.5rem;
    }

    img {
      margin-right: 0.25rem;
      width: 1.2rem;

      @media (min-width: $breakpoint) {
        margin-right: 0.5rem;
        width: 2.4rem;
      }
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
    margin-top: 0.5rem;

    @media (min-width: $breakpoint) {
      margin-top: 1rem;
    }
  }

  &__skill {
    align-items: center;
    border-radius: 1rem;
    display: flex;
    flex: 1;
    padding: 0.25rem 0.5rem;

    @media (min-width: $breakpoint) {
      padding: 1rem;
    }

    div:first-of-type {
      margin-right: 0.5rem;
      min-width: 4rem;
      text-align: center;
    }

    h4 {
      border: 1px solid #666;
      border-radius: 0.5rem;
      color: #999;
      display: inline-block;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      padding: 0.25rem 0.5rem;
    }

    img {
      display: block;
      margin: 0 auto;
      width: 1.2rem;
    }

    p {
      color: #999;
      font-size: 0.8rem;

      @media (min-width: $breakpoint) {
        font-size: 1rem;
      }
    }
  }
}
</style>
