<template lang="pug">
.dungeonPage
  .page__title
    h1 Easy Dungeon
  .dungeonInfo
    section.dungeonInfo__basic
      .dungeonInfo__floor
        h2 Floor
        p 10
      .dungeonInfo__requireTime
        h2 Require Time
        p 20
      .dungeonInfo__difficulty
        h2 Difficulty
        p Easy
    button.dungeonPage__startButton(@click="isModalShown = true") Departure
    section.dungeonInfo__treasureList
      h2 Treasure List
      .treasures
        .treasure
          img.treasure__image(:src="require('~/assets/images/ItemIcon.png')")
          .treasure__data
            .treasure__name Excalibur
            .treasure__remain 100
        .treasure
          img.treasure__image(:src="require('~/assets/images/ItemIcon.png')")
          .treasure__data
            .treasure__name Excalibur
            .treasure__remain 100
        .treasure
          img.treasure__image(:src="require('~/assets/images/ItemIcon.png')")
          .treasure__data
            .treasure__name Excalibur
            .treasure__remain 100

  modal.dungeonPage__departureModal.departureModal(
    v-if="isModalShown"
    type="bottom"
    @modal-close="isModalShown = false"
  )
    h3.departureModal__header(slot="header") Team Organization
    .departureModal__body(slot="body")
      .departure__team
        h4 Main
        .departure__heroes
          .departure__hero
            img(:src="require('~/assets/images/ryofu_sample64.gif')")
            .departure__heroItems
              img(:src="require('~/assets/images/ItemIcon.png')")
              img(:src="require('~/assets/images/ItemIcon.png')")
          .departure__hero
            img(:src="require('~/assets/images/beethoven.png')")
            .departure__heroItems
              img(:src="require('~/assets/images/ItemIcon.png')")
              img(:src="require('~/assets/images/ItemIcon.png')")
          .departure__hero
            img(:src="require('~/assets/images/mary.png')")
            .departure__heroItems
              img(:src="require('~/assets/images/ItemIcon.png')")
              img(:src="require('~/assets/images/ItemIcon.png')")
        h4 Rent
        .departure__rentalHero
          .departure__hero
            img(:src="require('~/assets/images/character-1.png')")
            .departure__heroItems
              img(:src="require('~/assets/images/ItemIcon.png')")
              img(:src="require('~/assets/images/ItemIcon.png')")
    .departureModal__footer(slot="footer")
      button.departureModal__cancelButton(@click="isModalShown = false") Cancel
      button.departureModal__submitButton(@click="isModalShown = false") Go
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      isModalShown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dungeonPage {
  .page__title {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.25)
      ),
      url('~/assets/images/dungeon_back.png') no-repeat center center / cover;
    color: #fff;
    margin: -1rem -1rem 1rem;
    padding: 6rem 1rem 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

    @media (min-width: $breakpoint) {
      padding: 12rem 1rem 1rem;

      h1 {
        font-size: 2.4rem;
      }
    }
  }

  &__startButton {
    appearance: none;
    background: map-get($colors, primary);
    border: none;
    border-radius: 1rem;
    color: #fff;
    display: block;
    font-size: inherit;
    margin: 1rem auto;
    max-width: 640px;
    padding: 1rem;
    width: 100%;

    @media (min-width: $breakpoint) {
      margin: 2rem auto;
    }
  }
}

.dungeonInfo {
  &__basic {
    display: flex;
    margin: 1rem 0;

    > * {
      width: calc(100% / 3);
    }

    h2 {
      font-size: 0.8rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  &__floor {
    p::after {
      content: 'F';
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }

  &__requireTime {
    p::after {
      content: 'Hours';
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
}

.treasures {
  background: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;
  padding: 1rem;
}

.treasure {
  align-items: center;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1rem;
  margin: 1rem 0 0 1rem;
  width: calc((100% - 1rem) / 2);

  &:nth-of-type(-n + 2) {
    margin-top: 0;
  }

  &:nth-of-type(odd) {
    margin-left: 0;
  }

  &__image {
    height: auto;
    margin-right: 1rem;
    width: 30%;
  }

  &__name {
    font-weight: bold;
  }

  &__remain {
    &::after {
      content: 'left';
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }
}

.departureModal {
  &__body {
    margin: -1rem 0;
  }

  &__footer {
    padding: 1rem;

    button {
      border-radius: 1rem;
      padding: 1rem;
      width: 50%;
    }
  }

  &__submitButton {
    background: map-get($colors, primary);
    color: map-get($colors, white);
  }
}

.departure {
  &__team {
    margin: 0 -1rem;

    h4 {
      padding: 1rem 1rem 0.5rem;
    }
  }

  &__heroes {
    background: #f9f9f9;
    display: flex;
    margin-left: -1rem;
    padding: 1rem;
  }

  &__hero {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-left: 1rem;
    padding: 1rem;
    width: calc((100% - 3rem) / 3);

    img {
      image-rendering: pixelated;
      width: 100%;
    }
  }

  &__heroItems {
    align-items: center;
    display: flex;
    margin: 0.5rem 0 0 -1rem;

    img {
      height: auto;
      image-rendering: pixelated;
      margin-left: 1rem;
      width: calc((100% - 2rem) / 2);
    }
  }

  &__rentalHero {
    background: #f9f9f9;
    margin: 0 0 0 -1rem;
    padding: 1rem;
  }
}
</style>
