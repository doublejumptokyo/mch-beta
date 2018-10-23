<template>
  <svg
    :height="radius * 2"
    :width="radius * 2"
  >
    <circle
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      stroke="white"
      fill="transparent"
    />
  </svg>
</template>

<script>
export default {
  props: {
    radius: { type: Number, default: 80 },
    progress: { type: Number, default: 100 },
    stroke: { type: Number, default: 1 }
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI

    return {
      normalizedRadius,
      circumference
    }
  },
  computed: {
    strokeDashoffset() {
      return this._circumference - (this.progress / 100) * this.circumference
    }
  }
}
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
