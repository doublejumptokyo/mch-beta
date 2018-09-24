<template lang="pug">
.indexPage
  .indexPage__keyVisual
    img(:src="require('~/assets/images/keyvisual.png')")
  section.indexPage__section
    .update
      p {{ $t('home.update') }}
      p
        a(href="https://medium.com/mycryptoheroes/betabattle-update-schedule-7ca7db7600af" target="_blank") Update schedule
  section.indexPage__section
    h2 How to play "Beta Battle"
    section(v-for="(section, index) in $i18n.messages[$i18n.locale].home.howTo")
      h3 {{ index + 1 }}. {{ section.title }}
      section(v-for="body in section.body")
        h4 {{ body.title }}
        p {{ body.body }}
  section.indexPage__section
    h2 Notice
    ul
      li(v-for="notice in $i18n.messages[$i18n.locale].home.notice") {{ notice }}
</template>

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

    h2 {
      border-bottom: 2px solid map-get($colors, primary);
    }

    h4 {
      margin-bottom: 0.5rem;
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
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
