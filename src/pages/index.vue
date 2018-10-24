<template lang="pug">
.indexPage
  .indexPage__keyVisual
    img(:src="require('~/assets/images/keyvisual.png')")
  section.indexPage__section
    .update
      nl2br(tag="p" :text="$t('battle.info.afterAggregatingTerm')")
      p
        a(href="https://medium.com/mycryptoheroes/beta-battle-ranked-match-result-e1deeada31db") [beta battle]バトルβランキング戦結果発表 / Beta Battle Ranked Match result
  section.indexPage__section
    .update
      p {{ $t('home.update') }}
      p
        a(href="https://medium.com/mycryptoheroes/betabattle-update-schedule-7ca7db7600af") Update schedule
  section.indexPage__section
    .update
      p {{ $t('home.login') }}
      p
        a(href="https://medium.com/mycryptoheroes/betabattle-loomnetwork-e0c170927b64") Details
  section.indexPage__section
    h2
      fa-icon(icon="info" size="sm" fixed-width)
      span Information
    template(v-if="informationList.length")
      ul.links
        li(v-for="item in informationList")
          a.links__item(:href="item.link")
            div
              h4 {{ item.title[0] }}
              time {{ (new Date(item['atom:updated'])).toLocaleString() }}
            fa-icon(icon="external-link-alt" size="sm")
      p.links__more
        a(:href="informationLink") More
    template(v-else)
      .links__empty
        fa-icon(icon="spinner" spin size="2x")
  section.indexPage__section
    h2
      fa-icon(icon="question" size="sm" fixed-width)
      span How to play "Beta Battle"
    section(v-for="(section, index) in $i18n.messages[$i18n.locale].home.howTo")
      h3 {{ index + 1 }}. {{ section.title }}
      section(v-for="body in section.body")
        h4 {{ body.title }}
        p {{ body.body }}
  section.indexPage__section
    h2
      fa-icon(icon="exclamation-circle" size="sm" fixed-width)
      span Notice
    ul
      li(v-for="notice in $i18n.messages[$i18n.locale].home.notice") {{ notice }}
</template>

<script>
import Nl2br from 'vue-nl2br'
import { mapState } from 'vuex'
export default {
  components: { Nl2br },
  computed: mapState('information', {
    informationList: 'list',
    informationLink: 'link'
  }),
  beforeMount() {
    if (this.$store.state.information.list.length) return
    this.$store.dispatch('information/fetch')
  }
}
</script>

<style lang="scss" scoped>
.indexPage {
  &__keyVisual {
    margin: -1rem -1rem 1rem;

    img {
      width: 100%;
    }
  }

  &__section {
    margin-bottom: 1rem;

    @media (min-width: $breakpoint) {
      margin: 2rem;
    }

    h2 {
      align-items: center;
      border-bottom: 2px solid #ccc;
      display: flex;

      svg {
        margin-right: 0.5rem;
      }

      span {
        flex: 1;
      }
    }

    h4 {
      color: #eee;
      margin-bottom: 0.5rem;
    }

    p,
    ul {
      color: #ccc;
    }

    section {
      margin: 1rem 0 2rem;
    }
  }

  &__features {
  }

  &__feature {
    margin: 3rem 1rem;
    text-align: center;

    svg {
      color: rgba(64, 189, 118, 0.25);
    }

    h3 {
      color: #fff;
      font-family: Oswald;
      font-size: 2.5rem;
      margin-top: -2.5rem;
      -webkit-text-stroke: 1px rgba(64, 189, 118, 1);
      // text-shadow: 0 1px 2px rgba(64, 189, 118, .5);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    p {
      margin: 1rem 0;
    }
  }
}

h1,
ul {
  margin: 1rem 0;
}

.update {
  background: #555;
  border-radius: 1rem;
  padding: 1rem;
}

.links {
  margin: 1rem -1rem;

  @media (min-width: $breakpoint) {
    margin: 1rem 0;
  }

  &__item {
    justify-content: space-between;

    h4 {
      margin: 0;
    }

    time {
      color: #999;
      font-size: 0.8rem;
    }

    svg {
      color: #999;
      margin-left: 0.5rem;
    }
  }

  &__more {
    text-align: right;
  }

  &__empty {
    color: #999;
    padding: 3rem;
    text-align: center;
  }
}
</style>
