<template lang="pug">
.assetPage
  .assetPage__left
    .assetPage__image
      img(:src="require(`~/assets/images/${hero.imageFileName}`)")
      button(v-if="isSellable")
        fa-icon(:icon="['far', 'edit']")
    .assetPage__name
      div
        p {{ hero.anotherName }}
        button(v-if="isSellable")
          fa-icon(:icon="['far', 'edit']")
      h1 {{ hero.name }}
      p {{ id }}

  .assetPage__right

    .assetPage__actionButton(v-if="isSellable")
      button(@click="isActionsShown = true")
        fa-icon(:icon="['far', 'edit']")

    modal(v-if="isActionsShown" @modal-close="isActionsShown = false")
      .assetPage__actions(slot="body")
        button.assetPage__sellButton
          span Sell
        button.assetPage__sellButton
          span Send to ETH Main Network

    .assetPage__statuses(:style="{ 'padding-top': isSellable ? '2rem' : '1rem' }")
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/hp.png')")
          | HP
        p {{ hero.status.hp }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/agi.png')")
          | AGI
        p {{ hero.status.agi }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/atk.png')")
          | PHY
        p {{ hero.status.phy }}
      .assetPage__status
        h3
          img(:src="require('~/assets/images/icons/status/int.png')")
          | INT
        p {{ hero.status.int }}

    template(v-if="isBuyable")
      .assetPage__chart
        no-ssr
          vue-highcharts(:options="chartOptions" :highcharts="highcharts" ref="chart" v-observe-visibility="loadChart")
      .assetPage__chartSummary
        .assetPage__chartSummaryOpening
          h4 Start
          span 0.8594
        .assetPage__chartSummaryClosing
          h4 Final
          span 0.8339
        .assetPage__chartSummaryRemain
          h4 Time Remaining
          span 00:30:00
      button.assetPage__buyButton(@click="isModalShown = true")
        span Buy for
        span 0.8339
        span NovCoin

    button(@click="isWikiModalShown = true") Wikipedia

    modal.wikiModal(type="bottom" v-if="isWikiModalShown" @modal-close="isWikiModalShown = false")
      h2(slot="header") Wikipedia
      .wikiModal__body(slot="body")
        iframe(:src="hero.wikipediaUrl")

    modal.buyModal(v-if="isModalShown" @modal-close="isModalShown = false")
      h2(slot="header") Buy Hero
      .buyModal__body(slot="body")
        table
          tbody
            tr
              th In Hand
              td 999,999,999
            tr
              th Consume
              td -9,999
            tr
              td(colspan="2") 999,990,000
      .buyModal__footer(slot="footer")
        button.buyModal__cancelButton(@click="isModalShown = false") Cancel
        button.buyModal__buyButton(@click="isModalShown = false") Buy
</template>

<script>
import Modal from '~/components/Modal'
import Highcharts from 'highcharts'
export default {
  components: { Modal },
  data() {
    return {
      isModalShown: false,
      isActionsShown: false,
      isWikiModalShown: false,
      highcharts: Highcharts,
      chartOptions: {
        title: { text: '' },
        xAxis: { type: 'datetime' },
        yAxis: {
          title: { text: 'Price' },
          labels: {
            formatter: function() {
              return this.value + ' NovCoin'
            }
          }
        },
        legend: { enabled: false },
        plotOptions: {
          series: { color: 'rgb(64, 189, 118)' },
          area: { lineWidth: 1, threshold: null }
        },
        series: []
      },
      asyncData: {
        name: 'Price',
        type: 'area',
        fillOpacity: 0.25,
        data: [
          [1509408000000, 0.8594],
          [1509494400000, 0.8613],
          [1509580800000, 0.8588],
          [1509667200000, 0.858],
          [1509926400000, 0.8629],
          [1510012800000, 0.865],
          [1510099200000, 0.8629],
          [1510185600000, 0.8599],
          [1510272000000, 0.8582],
          [1510531200000, 0.858],
          [1510617600000, 0.8515],
          [1510704000000, 0.8447],
          [1510790400000, 0.8496],
          [1510876800000, 0.8479],
          [1511136000000, 0.8489],
          [1511222400000, 0.8535],
          [1511308800000, 0.8512],
          [1511395200000, 0.8441],
          [1511481600000, 0.8421],
          [1511740800000, 0.8368],
          [1511827200000, 0.8413],
          [1511913600000, 0.8456],
          [1512000000000, 0.8441],
          [1512086400000, 0.8415],
          [1512345600000, 0.8429],
          [1512432000000, 0.8442],
          [1512518400000, 0.8463],
          [1512604800000, 0.8486],
          [1512691200000, 0.8517],
          [1512950400000, 0.8478],
          [1513036800000, 0.85],
          [1513123200000, 0.8522],
          [1513209600000, 0.8443],
          [1513296000000, 0.8471],
          [1513555200000, 0.8479],
          [1513641600000, 0.8459],
          [1513728000000, 0.8443],
          [1513814400000, 0.8433],
          [1513900800000, 0.8438],
          [1514332800000, 0.8408],
          [1514419200000, 0.838],
          [1514505600000, 0.8339]
        ]
      }
    }
  },
  computed: {
    hero() {
      return this.$store.state.heroes.find(
        hero => hero.id === Number(this.$route.params.id)
      )
    },
    id() {
      return `#${this.zeroPadding(this.$route.params.id, 4)}`
    },
    isSellable() {
      return this.$route.params.id < 6
    },
    isBuyable() {
      return this.$route.params.id > 5
    }
  },
  methods: {
    zeroPadding(num, length) {
      return ('0000000000' + num).slice(-length)
    },
    loadChart(isVisible) {
      if (!isVisible) {
        return
      }
      const chart = this.$refs.chart
      if (chart.$data.chart.series.length >= 1) {
        return
      }
      chart.addSeries(this.asyncData)
    }
  }
}
</script>

<style lang="scss" scoped>
.assetPage {
  @media (min-width: $breakpoint) {
    // align-items: flex-end;
    display: flex;

    &__left {
      flex: 2;
      margin: 1rem;
    }

    &__right {
      flex: 3;
      margin: 1rem;
    }
  }

  &__image {
    height: 0;
    margin: -1rem -1rem 1rem;
    padding-top: calc(100% + 2rem);
    position: relative;

    img {
      height: 100%;
      image-rendering: pixelated;
      left: 0;
      object-fit: contain;
      position: absolute;
      top: 0;
      width: 100%;
    }

    button {
      background: #eee;
      border-radius: 9999px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      padding: 0.5rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  &__name {
    text-align: center;

    div {
      align-items: center;
      display: flex;
      justify-content: center;

      button {
        margin-left: 1rem;
        background: #eee;
        border-radius: 9999px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
      }
    }

    p {
      color: #999;
      font-weight: 100;
    }
  }

  &__actionButton {
    position: relative;

    button {
      appearance: none;
      background: map-get($colors, primary);
      border: none;
      border-radius: 50%;
      bottom: -2rem;
      color: map-get($colors, white);
      font-size: 1.2rem;
      height: 4rem;
      line-height: 4rem;
      padding: 0;
      position: absolute;
      right: 0;
      width: 4rem;

      @media (min-width: $breakpoint) {
        bottom: -3rem;
        right: -1rem;
      }
    }
  }

  &__statuses {
    background: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem -1rem 1rem;
    padding: 1rem 1rem 2rem 0;

    @media (min-width: $breakpoint) {
      margin: 1rem 0;
    }
  }

  &__status {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    text-align: center;
    width: calc((100% - 4rem) / 4);

    h3 {
      align-items: center;
      display: flex;
      font-size: 1rem;
      justify-content: center;
      margin-left: -0.5rem;
      white-space: nowrap;
    }

    img {
      margin-right: 0.25rem;
      opacity: 0.5;
      width: 1.2rem;

      @media (min-width: $breakpoint) {
        width: 2rem;
      }
    }

    p {
      font-size: 5vw;
      font-family: Oswald;
      white-space: nowrap;

      @media (min-width: $breakpoint) {
        font-size: 1.5rem;
      }
    }
  }

  &__chart {
    height: 0;
    margin: 1rem 0;
    padding-top: calc(100% * 9 / 16);
    position: relative;

    .vue-highcharts {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &__chartSummary {
    display: flex;
    margin: 1rem 0;

    > * {
      text-align: center;
      width: calc(100% / 3);
    }

    h4 {
      font-size: 0.9rem;
    }

    span {
      font-size: 1.2rem;
      font-family: Oswald;
    }

    > *:not(:last-of-type) {
      span {
        &::after {
          content: 'NovCoin';
          font-size: 0.9rem;
          font-family: inherit;
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__buyButton {
    appearance: none;
    background: map-get($colors, primary);
    border: none;
    border-radius: 1rem;
    color: map-get($colors, white);
    cursor: pointer;
    font-size: inherit;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;

    span:nth-of-type(1) {
      margin-right: 0.5rem;
    }

    span:nth-of-type(2) {
      font-size: 1.5rem;
      font-weight: bold;
    }

    span:nth-of-type(3) {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }

  &__sellButton {
    appearance: none;
    background: map-get($colors, white);
    border: 1px solid map-get($colors, primary);
    border-radius: 1rem;
    color: map-get($colors, primary);
    cursor: pointer;
    font-size: inherit;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
  }
}

.buyModal {
  &__body {
    table {
      background: #f9f9f9;
      border-collapse: collapse;
      border-radius: 1rem;
      text-align: right;
      width: 100%;

      tr:last-of-type {
        border-top: 1px solid #eee;
      }

      th,
      td {
        padding: 1rem;
      }

      th {
        font-weight: normal;
      }

      td {
        font-weight: bold;

        &::after {
          content: 'NovCoin';
          font-size: 0.8rem;
          font-weight: normal;
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__footer {
    display: flex;
    padding: 1rem;
  }

  &__buyButton,
  &__cancelButton {
    appearance: none;
    background: inherit;
    border: none;
    border-radius: 1rem;
    color: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0.5rem 1rem;
    width: 100%;
  }

  &__buyButton {
    background: map-get($colors, primary);
    color: map-get($colors, white);
  }
}

.wikiModal {
  &__body {
    height: 0;
    margin: -1rem;
    padding-top: 80vh;
    position: relative;
    width: calc(100% + 2rem);
  }

  iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
