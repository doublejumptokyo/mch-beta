<template lang="pug">
.indexPage
  .indexPage__keyVisual
    img(:src="require('~/assets/images/keyvisual.png')")
  section.indexPage__section
    template
      div
        ul
          li(v-for="item in data")
            a(v-bind:href="item.link") {{ item.title }}
    //- .update
    //-   nl2br(tag="p" :text="$t('home.news')")
    //-   p
    //-     a(href="https://medium.com/mycryptoheroes/how-to-art-edit-b3701b2ecf9b") [battle beta]アートエディット/ How to “Art Edit”
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
import axios from 'axios'

export default {
  components: { Nl2br },
  async asyncData() {
    await axios
      .get(`https://medium.com/feed/mycryptoheroes`)
      .then(res => {
        var parseString = require('xml2js').parseString
        var xml = res.data
        const a = parseString(xml, (message, xmlres) => {
          return { data: xmlres.rss.channel[0].item }
        })
        console.log(a instanceof Promise)
      })
      // .catch(e => {
      //   return { statusCode: 404, message: 'ページが見つかりません' }
      // })
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
</style>
