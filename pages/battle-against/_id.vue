<template lang="pug">
.battlePage
  header.header(:class="{ 'header--opening': !isReady }")
    template(v-if="!isReady")
      .username.username1
        span {{ $store.state.user.name }}
      .versus vs
      .username.username2
        span {{ opponentName }}
      p.startButton
        span(v-if="isLoading") Loading ...
        button(v-else @click="battleStart") Ready!
    template(v-else)
      img.header__logo(:src="require('~/assets/images/logo.png')")
      .header__battleUsers
        span {{ $store.state.user.name }}
        span vs
        span {{ opponentName }}
      button.header__play(@click="toggleBgmPause")
        img(:src="require('~/assets/images/volume-mute.svg')" v-if="isBgmMuted")
        img(:src="require('~/assets/images/volume.svg')" v-else)
      nuxt-link.header__close(to="/battle-against" tag="button")
        fa-icon(icon="times")

  .statuses
    transition(enter-active-class="animated bounceInLeft")
      .team.myTeam(v-if="isReady")
        template(v-for="(unit, index) in statuses.myTeam")
          .hero__image(:class="`hero__${getPosition(index)}`" @click="openStatusModal(unit)")
            .hero__state
              img(:src="require(`~/assets/images/icons/skill/poison.png`)" v-if="unit.state === 1")
              img(:src="require(`~/assets/images/icons/skill/sleep.png`)" v-else-if="unit.state === 2")
              img(:src="require(`~/assets/images/icons/skill/confused.png`)" v-else-if="unit.state === 3")
            img(:src="require(`~/assets/images/heroes/${unit.hero.fileName}`)")
          .hero__status.hero__hp(:class="`hero__${getPosition(index)}`")
            span(:class="{ 'hero__hp--zero': !unit.hp }")
              ICountUp(:startVal="unit.hp" :endVal="unit.hp" @ready="onCountUpReady")
            span /
            span {{ unit.maxHp }}
    transition(enter-active-class="animated bounceInRight")
      .team.opponentTeam(v-if="isReady")
        template(v-for="(unit, index) in statuses.opponentTeam")
          .hero__image(:class="`hero__${getPosition(index)}`" @click="openStatusModal(unit)")
            .hero__state
              img(:src="require(`~/assets/images/icons/skill/poison.png`)" v-if="unit.state === 1")
              img(:src="require(`~/assets/images/icons/skill/sleep.png`)" v-else-if="unit.state === 2")
              img(:src="require(`~/assets/images/icons/skill/confused.png`)" v-else-if="unit.state === 3")
            img(:src="require(`~/assets/images/heroes/${unit.hero.fileName}`)")
          .hero__status.hero__hp(:class="`hero__${getPosition(index)}`")
            span(:class="{ 'hero__hp--zero': !unit.hp }")
              ICountUp(:startVal="unit.hp" :endVal="unit.hp" @ready="onCountUpReady")
            span /
            span {{ unit.maxHp }}
    transition(enter-active-class="animated jackInTheBox")
      .resultLabel(v-if="isFinished")
        p {{ result }}

  .actions
    transition(enter-active-class="animated flash")
      .action.action--start(v-show="isReady" @click="goNextAction")
        span {{ isTouchDevice ? 'scroll' : 'tap' }} to fight!!

    template(v-for="(action, index) in actions")
      .action(
        :data-action-id="action.actionCounts"
        :class="[action.actionPosition < 3 ? 'action--myTeam' : 'action--opponentTeam', { 'action--still': finishedAction + 1 < action.actionCounts }]"
        @click="goNextAction"
      )
        .action__label
          h3 Action {{ action.actionCounts }}
          p {{ getSkill(action.skillId).name[$i18n.locale] }}
        .action__actor(:class="`action__actor--${getTeamName(action.actionPosition)}`")
          img(:src="require(`~/assets/images/heroes/${getUnit(action.actionPosition).hero.fileName}`)")
        .action__type
          img(:src="require(`~/assets/images/icons/skill/${getSkill(action.skillId).iconFileName}`)")
        .action__reactor(
          v-for="effectPosition in action.effectPositions"
          :class="`action__reactor--${getTeamName(effectPosition)}`"
        )
          img(:src="require(`~/assets/images/heroes/${getUnit(effectPosition).hero.fileName}`)")
          .action__effect(:class="`effect-${getSkill(action.skillId).effectId}`")
          .damage(
            :class="{ 'damage--minus': getDamage(action, effectPosition) >= 0, 'damage--plus': getDamage(action, effectPosition) < 0 }"
          ) {{ getDamageStr(action, effectPosition) }}

    .action.action--end(v-if="result")
      ul.end
        li.end__share
          button(@click="openShareModal")
            fa-icon(:icon="['far', 'share-square']" size="2x")
            span Share
        li.end__next
          nuxt-link(to="/battle-against")
            fa-icon(:icon="['fas', 'arrow-right']" size="2x")
            span Next

  modal.statusModal(v-if="isStatusModalShown" type="bottom" @modal-close="closeStatusModal")
    h2.statusModal__header(slot="header") {{ currentUnitStatus.hero.name[$i18n.locale] }}
    .statusModal__body.unit(slot="body")
      p.unit__image
        img(:src="require(`~/assets/images/heroes/${currentUnitStatus.hero.fileName}`)")
      ul.unit__statuses
        li
          h4 HP
          p {{ currentUnitStatus.hp }} / {{ currentUnitStatus.maxHp }}
        li
          h4 PHY
          p {{ currentUnitStatus.phy }}
        li
          h4 INT
          p {{ currentUnitStatus.int }}
        li
          h4 AGI
          p {{ currentUnitStatus.agi }}
      .unit__skills
        h3 Active
        ol
          li(v-for="num in [1, 2, 3]")
            img(:src="require(`~/assets/images/icons/skill/${getSkill(currentUnitStatus['active' + num]).iconFileName}`)")
            div
              h4 {{ getSkill(currentUnitStatus[`active${num}`]).name[$i18n.locale] }}
              p {{ getSkill(currentUnitStatus[`active${num}`]).description[$i18n.locale] }}
        h3 Passive
        div
          img(:src="require(`~/assets/images/icons/skill/${getSkill(currentUnitStatus.passive).iconFileName}`)")
          div
            h4 {{ getSkill(currentUnitStatus.passive).name[$i18n.locale] }}
            p {{ getSkill(currentUnitStatus.passive).description[$i18n.locale] }}

  modal.shareModal(v-if="isShareModalShown" type="bottom" @modal-close="closeShareModal")
    h2.shareModal__header(slot="header") Share
    .shareModal__body(slot="body")
      ul
        li
          button(v-clipboard:copy="currentUrl" v-clipboard:success="onCopySucceeded")
            fa-icon(:icon="['far', 'copy']" size="2x")
            span Copy URL
        no-ssr
          li
            a(:href="`https://twitter.com/share?url=${currentUrl}&hashtags=MCH,MyCryptoHeroes`")
              fa-icon(:icon="['fab', 'twitter']" size="2x")
              span Twitter

  audio.bgm(src="/sounds/MCH-1min_0821.mp3" loop muted)
</template>

<script>
import _ from 'lodash'
import ICountUp from 'vue-countup-v2'
import scrollSnapPolyfill from '~/assets/scripts/scrollSnapPolyfill'
import { mapState } from 'vuex'
import ProgressRing from '~/components/ProgressRing'
import Modal from '~/components/Modal'
export default {
  layout: 'battle',
  components: { ICountUp, ProgressRing, Modal },
  middleware: 'walletCheck',

  data() {
    return {
      isReady: false,
      opponentLoomAddress: '',
      opponentName: '',
      setCount: 0,
      currentAction: 0,
      prevAction: -1,
      finishedAction: -1,
      currentFinishedAction: -1,
      actionStartTime: 0,
      emitLine: 0,
      initialUnits: [],
      actions: [],
      end: null,
      statuses: { myTeam: [], opponentTeam: [] },
      counters: {},
      currentUnitStatus: {},
      isFinished: false,
      isShareModalShown: false,
      bgm: null,
      isBgmMuted: true
    }
  },

  computed: {
    ...mapState('battle', ['myTeam', 'opponentTeam']),

    isLoading() {
      return !this.actions.length
    },

    result() {
      if (!this.end) {
        return ''
      }
      if (this.end.result === 4) {
        return 'time up!'
      } else if (this.end.result === 3) {
        return 'lose...'
      } else if (this.end.result === 2) {
        return 'win!!'
      } else {
        return ''
      }
    },

    isStatusModalShown() {
      return !!Object.keys(this.currentUnitStatus).length
    },

    currentUrl() {
      if (process.server) return
      return window.location.href
    },

    isTouchDevice() {
      if (process.server) return
      return 'ontouchstart' in window
    }
  },

  watch: {
    async initialUnits(units) {
      console.log('4. ユニットの初期状態を整形してthis.statusに格納')
      this.setStatuses(units)

      console.log('5. アクション取得開始')
      this.fetchActions()
    },

    isReady(isReady) {
      if (!isReady) return
      console.log('6. オープニング画面を開ける')
      setTimeout(() => this.initAction(), 1000) // initActionを非同期でやらないとなぜかうまく動かないので
    }
  },

  created() {
    console.log('1. URLから相手のLoom Address取得')
    this.opponentLoomAddress = this.$route.params.id
  },

  async beforeMount() {
    this.opponentName = (await this.$user.get(this.opponentLoomAddress)).name

    console.log('2. バトル開始をLoomに伝える')
    const battleStart = await this.$battleManager.start(
      this.opponentLoomAddress
    )

    console.log('3. ユニットの初期状態をthis.initialUnitsに格納')
    this.initialUnits = await Promise.all(
      battleStart.units.map(async (unit, index) => {
        if (index < 3) {
          return unit
        }
        let hero = await this.$hero.get(unit.heroId)
        hero = Object.assign(
          hero,
          this.$hero.getHeroType(Number(hero.heroType))
        )
        unit.hero = hero
        this.$store.commit('heroes/SET_HERO', hero)
        return unit
      })
    )
  },

  async mounted() {
    if (!this.isNativeSupportScrollSnap()) {
      this.setScrollSnap()
    }

    this.bgm = this.$el.querySelector('.bgm')
  },

  destroyed() {
    // 緊急対応
    // ユーザーAがユーザーBのこのページを見たあとインベントリに行くと、ユーザーBのヒーローも見えてしまうため
    // [TODO] storeに入れるヒーローの管理方法検討
    location.reload()
  },

  methods: {
    async fetchActions() {
      let isFetchFinished = false
      do {
        const { actions, hasNext } = await this.$battleManager.next()
        actions.forEach(action => this.actions.push(action))
        isFetchFinished = !hasNext
      } while (!isFetchFinished)
      this.end = await this.$battleManager.end()

      window.actions = this.actions
    },

    battleStart() {
      this.bgm.muted = true
      this.bgm.play()
      this.isReady = true
    },

    toggleBgmPause() {
      if (this.bgm.muted) {
        this.bgm.muted = false
        this.isBgmMuted = false
      } else {
        this.bgm.muted = true
        this.isBgmMuted = true
      }
    },

    onCountUpReady(instance) {
      const hpElem = instance.d.parentElement.parentElement
      const teamElem = hpElem.parentElement
      const positionStr = ['front', 'middle', 'back'].find(str =>
        hpElem.classList.contains(`hero__${str}`)
      )
      const teamStr = ['myTeam', 'opponentTeam'].find(str =>
        teamElem.classList.contains(str)
      )
      this.counters[teamStr] = this.counters[teamStr] || []
      if (positionStr === 'front') {
        this.counters[teamStr][0] = instance
      } else if (positionStr === 'middle') {
        this.counters[teamStr][1] = instance
      } else {
        this.counters[teamStr][2] = instance
      }
      console.log('countUpの準備完了')
    },

    setStatuses(units) {
      units.forEach(async unit => {
        if (!unit.heroId) return
        unit.hero = this.getHero(unit.heroId)
      })
      this.$set(this, 'statuses', {
        myTeam: _.merge(
          this.statuses.myTeam,
          units.filter(unit => unit.position < 3)
        ),
        opponentTeam: _.merge(
          this.statuses.opponentTeam,
          units.filter(unit => unit.position > 2)
        )
      })
      Object.keys(this.counters).forEach(team => {
        this.counters[team].forEach((counter, index) =>
          counter.update(this.statuses[team][index].hp)
        )
      })
    },

    isNativeSupportScrollSnap() {
      return 'scrollSnapAlign' in document.documentElement.style
    },

    setScrollSnap() {
      scrollSnapPolyfill('.actions', '.action')
    },

    getPosition(index) {
      switch (index) {
        case 0:
          return 'front'
        case 1:
          return 'middle'
        case 2:
          return 'back'
      }
    },

    initAction() {
      console.log('7. スクロールエリアを設定してスクロール監視')
      const actionsArea = this.$el.querySelector('.actions')
      this.emitLine = actionsArea.firstChild.getBoundingClientRect().top
      actionsArea.addEventListener('scroll', this.onScroll)
    },

    goNextAction(e) {
      if (this.isTouchDevice) return
      e.target.nextSibling.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    },

    onScroll(e) {
      const actionsArea = e.target
      const currentActionElem = this.getCurrentAction(actionsArea)
      if (!currentActionElem) return
      console.log('8. スクロール検知')
      this.executeAction(currentActionElem)
    },

    executeAction(currentActionElem) {
      this.isFinished = currentActionElem.classList.contains('action--end')
      this.currentAction = Number(currentActionElem.dataset.actionId)
      if (this.prevAction !== this.currentAction) {
        this.currentFinishedAction = this.currentAction - 1
        if (this.currentFinishedAction > this.finishedAction) {
          for (
            let i = this.finishedAction + 1;
            i <= this.currentFinishedAction;
            i++
          ) {
            const actionsArea = this.$el.querySelector('.actions')
            this.endAction(actionsArea.querySelector(`[data-action-id="${i}"]`))
          }

          this.finishedAction = this.currentFinishedAction
        }

        if (this.currentAction > this.finishedAction) {
          this.actionStartTime = +new Date()
          console.log('アクションエフェクト開始')
          this.startActionAnimation(currentActionElem).then(() => {
            const currentAction = this.actions[this.currentAction - 1]
            console.log('アクション後のステータスをセット')
            this.setStatuses(currentAction.units)
          })
        }

        this.prevAction = this.currentAction
      }
    },

    getCurrentAction(scrollArea) {
      return Array.from(scrollArea.querySelectorAll('.action')).find(
        actionElem => {
          const fromTop = actionElem.getBoundingClientRect().top
          return this.emitLine - 1 < fromTop && fromTop < this.emitLine + 1
        }
      )
    },

    startActionAnimation(actionElem) {
      return new Promise(resolve => {
        actionElem
          .querySelector('.action__label > p')
          .classList.add('animated', 'fadeIn')
        actionElem
          .querySelector('.action__actor')
          .classList.add('animated', 'fadeInLeftBig')
        actionElem
          .querySelector('.action__type')
          .classList.add('animated', 'bounceIn')
        actionElem
          .querySelectorAll('.action__reactor')
          .forEach((reactorElem, index) => {
            reactorElem.classList.add('animated', 'fadeInRightBig')
            setTimeout(() => {
              const effectElem = reactorElem.querySelector('.action__effect')
              const rate = reactorElem.clientHeight / effectElem.clientHeight
              const transform = `translate(-50%, -50%) scale(${rate * 2})`
              effectElem.style.transform = transform
              setTimeout(() => this.animateEffect(effectElem), index * 200)
              const damageElem = reactorElem.querySelector('.damage')
              setTimeout(() => {
                damageElem.classList.add('animated', 'bounce', 'damaged')
                resolve()
              }, index * 200 + 500)
            }, 500)
          })
      })
    },

    endAction(actionElem) {
      if (!actionElem) {
        return
      }
      actionElem
        .querySelector('.action__actor')
        .classList.remove('animated', 'fadeInLeftBig')
      actionElem
        .querySelector('.action__type')
        .classList.remove('animated', 'bounceIn')
      actionElem.querySelectorAll('.action__reactor').forEach(reactorElem => {
        reactorElem.classList.remove('animated', 'fadeInRightBig')
        reactorElem
          .querySelector('.damage')
          .classList.remove('animated', 'bounce')
        reactorElem.querySelector('.damage').classList.add('damaged')
      })
    },

    animateEffect(elem) {
      let index = 0
      let limit = 61
      elem.classList.add('active')
      const tick = () => {
        if (index === limit - 1) {
          elem.classList.remove('active')
        } else {
          setTimeout(tick, 16)
        }
        index++
        index %= limit
        const left = (index % 8) * -100
        const top = (Math.floor(index / 8) % 8) * -100
        elem.style.backgroundPosition = left + 'px ' + top + 'px'
      }
      tick()
    },

    getUnit(position) {
      return this.initialUnits.find(unit => unit.position === Number(position))
    },

    getHero(heroId) {
      return this.$store.state.heroes.find(hero => hero.id === Number(heroId))
    },

    getSkill(skillId) {
      if (!this.$store.getters['team/getSkill'](Number(skillId))) {
        console.log('スキルがない', skillId)
      }
      return this.$store.getters['team/getSkill'](Number(skillId))
    },

    getDamageStr(action, effectPosition) {
      const iconName = this.getSkill(action.skillId).iconFileName
      if (iconName.indexOf('BUF') !== -1) {
        return ''
      }
      const damage = this.getDamage(action, effectPosition)
      return damage === 0 ? 'Miss' : Math.abs(damage)
    },

    getDamage(action, position) {
      if (!this.initialUnits.length) {
        return 0
      }
      const prevUnits =
        action.actionCounts === 1
          ? this.initialUnits
          : this.actions.find(a => a.actionCounts === action.actionCounts - 1)
              .units
      const prevHp = prevUnits[position].hp
      const currentHp = action.units[position].hp
      return prevHp - currentHp
    },

    getTeamName(position) {
      return position < 3 ? 'myTeam' : 'opponentTeam'
    },

    openStatusModal(unit) {
      this.currentUnitStatus = unit
    },

    closeStatusModal() {
      this.currentUnitStatus = {}
    },

    openShareModal() {
      this.isShareModalShown = true
    },

    closeShareModal() {
      this.isShareModalShown = false
    },

    onCopySucceeded() {
      window.alert(`Copied!\nURL: ${window.location.href}`)
    }
  }
}
</script>

<style lang="scss" scope>
.battlePage {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.header {
  align-items: center;
  background: #444;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  height: 2rem;
  left: 0;
  line-height: 1;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  transition: all 0.5s;
  width: 100%;
  z-index: 3;

  &--opening {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0;

    .username {
      background: #444;
      font-size: 3rem;
      font-weight: bold;
      padding: 1rem;
      width: 100%;

      span {
        animation-name: marquee;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &1 span {
        animation-delay: -2s;
      }

      &2 span {
        animation-delay: -1s;
      }
    }

    .versus {
      color: #999;
      font-size: 2rem;
      margin: 2rem 0;
    }

    .startButton {
      align-self: stretch;
      margin-top: 6rem;
      padding: 1rem;
      text-align: center;

      span,
      button {
        font-size: 1rem;
      }

      button {
        background: map-get($colors, primary);
        border-radius: 1rem;
        color: #444;
        font-size: 1.3rem;
        max-width: 640px;
        padding: 1rem;
        width: 100%;
      }
    }
  }

  &__logo {
    height: auto;
    width: 2rem;
  }

  &__battleUsers {
    flex: 1;
    display: flex;
    margin: 0 1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      flex: 1;
      font-weight: bold;

      &:nth-of-type(2) {
        display: inline-block;
        flex: 0;
        font-weight: normal;
        margin: 0 0.5rem;
      }
    }
  }

  &__play,
  &__close {
    margin-left: 1rem;
  }

  &__play {
    display: flex;

    img {
      width: 1.2rem;
    }
  }
}

.statuses {
  background: url('~assets/images/Battle_BG.png') no-repeat center center /
    cover;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  height: calc((100vh - 2rem) / 3 * 2);
  justify-content: space-around;
  padding: 0 1rem;
  position: absolute;
  top: 2rem;
  width: 100%;
  z-index: 1;

  .hero__hp {
    span:first-of-type {
      font-size: 2rem;

      @media (min-width: $breakpoint) {
        font-size: 3rem;
      }
    }

    &--zero {
      color: #e74c3c;
    }
  }

  .resultLabel {
    align-items: center;
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    p {
      background: #444;
      flex: 1 0 auto;
      font-size: 3rem;
      font-weight: bold;
      left: 50%;
      margin: 0;
      padding: 1rem;
      position: absolute;
      text-align: center;
      text-transform: capitalize;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-10deg);
      width: 150%;
    }
  }
}

.team {
  display: grid;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 70vh;
  width: 100%;
  z-index: 2;

  @media (min-width: $breakpoint) {
    max-width: 60vh;
  }

  &::after {
    content: '';
    display: block;
    left: 0;
    padding-top: calc(100% * 239 / 750);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: -1;
  }

  &.myTeam {
    animation-delay: 0.5s;
    grid:
      'heroBackImage heroMiddleImage heroFrontImage blank         ' auto
      'heroBackHp    heroMiddleHp    heroFrontHp    statusLabelHp ' auto
      'heroBackPhy   heroMiddlePhy   heroFrontPhy   statusLabelPhy' auto
      'heroBackInt   heroMiddleInt   heroFrontInt   statusLabelInt' auto
      'heroBackAgi   heroMiddleAgi   heroFrontAgi   statusLabelAgi' auto
      / 1fr 1fr 1fr auto;

    &::after {
      background: url('~assets/images/Battle_BG_arrow_right.png') no-repeat
        center center / contain;
    }

    .statusLabel {
      text-align: left;
    }

    .svg-inline--fa {
      color: #fff;
    }
  }

  &.opponentTeam {
    animation-delay: 1s;
    grid:
      'blank          heroFrontImage heroMiddleImage heroBackImage' auto
      'statusLabelHp  heroFrontHp    heroMiddleHp    heroBackHp' auto
      'statusLabelPhy heroFrontPhy   heroMiddlePhy   heroBackPhy' auto
      'statusLabelInt heroFrontInt   heroMiddleInt   heroBackInt' auto
      'statusLabelAgi heroFrontAgi   heroMiddleAgi   heroBackAgi' auto
      / auto 1fr 1fr 1fr;

    &::after {
      background: url('~assets/images/Battle_BG_arrow_left.png') no-repeat
        center center / contain;
    }

    .statusLabel {
      text-align: right;
    }

    .svg-inline--fa {
      color: #fff;
    }
  }

  .svg-inline--fa {
    position: absolute;
    font-size: 20rem;
    opacity: 0.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(2);
    z-index: -1;
  }
}

.hero {
  &__front {
    &.hero__image {
      grid-area: heroFrontImage;
    }

    &.hero__hp {
      grid-area: heroFrontHp;
    }

    &.hero__phy {
      grid-area: heroFrontPhy;
    }

    &.hero__int {
      grid-area: heroFrontInt;
    }

    &.hero__agi {
      grid-area: heroFrontAgi;
    }
  }

  &__middle {
    &.hero__image {
      grid-area: heroMiddleImage;
    }

    &.hero__hp {
      grid-area: heroMiddleHp;
    }

    &.hero__phy {
      grid-area: heroMiddlePhy;
    }

    &.hero__int {
      grid-area: heroMiddleInt;
    }

    &.hero__agi {
      grid-area: heroMiddleAgi;
    }
  }

  &__back {
    &.hero__image {
      grid-area: heroBackImage;
    }

    &.hero__hp {
      grid-area: heroBackHp;
    }

    &.hero__phy {
      grid-area: heroBackPhy;
    }

    &.hero__int {
      grid-area: heroBackInt;
    }

    &.hero__agi {
      grid-area: heroBackAgi;
    }
  }

  &__image {
    padding: 0.5rem;
    position: relative;

    > img {
      border-radius: 0.5rem;
      height: auto;
      image-rendering: pixelated;
      object-fit: cover;
      vertical-align: middle;
      width: 100%;
    }
  }

  &__state {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    img {
      width: 2rem;
    }
  }

  &__status {
    font-family: Oswald;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    @media (min-width: $breakpoint) {
      font-size: 1.2rem;
    }
  }
}

.statusLabel {
  align-self: center;
  font-size: 0.8rem;

  &__hp {
    grid-area: statusLabelHp;
  }
  &__phy {
    grid-area: statusLabelPhy;
  }
  &__int {
    grid-area: statusLabelInt;
  }
  &__agi {
    grid-area: statusLabelAgi;
  }
}

.actions {
  background: #444;
  bottom: 0;
  height: calc((100vh - 2rem) / 3 * 1);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem 1rem;
  position: absolute;
  scroll-snap-type: y mandatory; /* Safari only */
  width: 100%;
  -webkit-overflow-scrolling: touch;

  @media (min-width: $breakpoint) {
    padding: 3rem 2rem;
  }
}

.action {
  background: #555;
  border-radius: 1rem;
  cursor: pointer;
  height: 100%;
  margin: 1rem auto;
  padding: 0.25rem 1rem;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-around;
  max-width: 640px;
  width: 100%;
  position: relative;
  transition: all 0.3s;

  @media (min-width: $breakpoint) {
    border-radius: 2rem;
    margin: 2rem auto;
  }

  * {
    pointer-events: none;
    user-select: none;
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &--myTeam {
    h3 {
      color: $color-battle-user-1;
    }
  }

  &--opponentTeam {
    h3 {
      color: $color-battle-user-2;
    }
  }

  &__label {
    align-items: center;
    color: #fff;
    display: flex;
    font-weight: bold;
    font-family: Oswald;
    left: 1rem;
    line-height: 1;
    position: absolute;
    top: -0.5rem;

    @media (min-width: $breakpoint) {
      left: 2rem;
      top: -0.7rem;
    }

    h3 {
      font-size: 0.8rem;
      margin-right: 0.5rem;

      @media (min-width: $breakpoint) {
        font-size: 1.2rem;
      }

      &::after {
        content: ':';
      }
    }

    > p {
      animation-duration: 0.3s !important;

      @media (min-width: $breakpoint) {
        font-size: 1.4rem;
      }
    }
  }

  &__actor,
  &__reactor {
    align-items: center;
    animation-duration: 0.3s !important;
    display: flex;
    flex: 1;
    position: relative;
    text-align: center;
    width: 100%;
    margin: -0.5rem 0 0;

    &::after {
      border-radius: 1rem;
      bottom: 1rem;
      content: '';
      display: block;
      height: 0.5rem;
      left: 10%;
      position: absolute;
      width: 80%;

      @media (min-width: $breakpoint) {
        height: 1rem;
      }
    }

    &--myTeam {
      &::after {
        background: $color-battle-user-1;
      }
    }

    &--opponentTeam {
      &::after {
        background: $color-battle-user-2;
      }
    }

    img {
      border-radius: 0.5rem;
      height: 100%;
      image-rendering: pixelated;
      mask-image: url('~assets/images/round-mask.png');
      mask-repeat: no-repeat;
      mask-position: center center;
      mask-size: contain;
      object-fit: contain;
      width: 100%;
    }
  }

  &__reactor {
    position: relative;

    .damage {
      bottom: 0;
      color: #fff;
      font-family: 'Merriweather Sans';
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: -1px;
      line-height: 1;
      position: absolute;
      text-align: center;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      white-space: nowrap;
      width: 100%;
      transition: all 0.3s;
      opacity: 0;
      z-index: 1;

      @media (min-width: $breakpoint) {
        font-size: 3rem;
      }

      &--minus {
        -webkit-text-stroke: 1px #e74c3c;
      }

      &--plus {
        -webkit-text-stroke: 1px #2ecc71;
      }

      &.damaged {
        opacity: 1;
      }
    }
  }

  &__type {
    align-self: center;
    animation-duration: 0.3s !important;
    flex: 1;
    margin: 0 0.5rem;
    text-align: center;
    width: 100%;

    img {
      width: 2.4rem;

      @media (min-width: $breakpoint) {
        width: 3.2rem;
      }
    }
  }

  &__effect {
    @for $i from 1 through 12 {
      &.effect-#{$i} {
        background: url('~assets/images/effects/#{$i}.png') no-repeat 0 0;
        opacity: 0;
        height: 100px;
        image-rendering: pixelated;
        left: 50%;
        position: absolute;
        transition: opacity 0.3s;
        top: 50%;
        width: 100px;
        z-index: 2;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  &--still {
    border-left-color: #999;

    .action__actor,
    .action__reactor,
    .action__type {
      opacity: 0;
    }

    .action__label {
      > h3 {
        color: #999;
      }

      > p {
        opacity: 0;
      }
    }
  }

  &--start {
    animation-delay: 1.5s;
    align-items: center;
    color: #fff;

    span {
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  &--end {
    ul {
      align-items: center;
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;

      li {
        button,
        a {
          align-items: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          text-decoration: none;

          .svg-inline--fa {
            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

.end {
  a {
    pointer-events: auto;
  }

  &__share {
    button {
      opacity: 0.25;
      pointer-events: none;
    }
  }
}

.statusModal {
  &__body {
    .unit {
      &__image {
        text-align: center;

        img {
          border-radius: 0.5rem;
          height: auto;
          image-rendering: pixelated;
          width: 50%;
        }
      }

      &__statuses {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          margin: 0.5rem 0;
          text-align: center;
          width: calc(100% / 3);

          &:first-of-type {
            width: 100%;
          }

          h4 {
            color: #ccc;
          }

          p {
            font-family: Oswald;
            font-size: 1.5rem;
          }
        }
      }

      &__skills {
        h3 {
          color: #999;
        }

        ol {
          list-style-type: none;
          margin: 1rem 0;
          padding: 0;
        }

        li,
        > div {
          align-items: center;
          display: flex;
          margin-top: 1rem;
        }

        img {
          margin-right: 1rem;
          width: 2rem;
        }
      }
    }
  }
}

.shareModal {
  &__body {
    ul {
      align-items: center;
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      margin: 1rem 0;
      padding: 0;
      width: 100%;

      li {
        button,
        a {
          align-items: center;
          color: inherit;
          display: flex;
          flex-direction: column;
          text-decoration: none;

          .svg-inline--fa {
            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
