<template>
  <div class="metric-card">
    <v-card elevation="0" :class="`bg-${color}-lt`" :max-height="maxHeight">
      <v-responsive aspect-ratio="1">
        <div
          class="d-flex align-center flex-column justify-center"
          style="width: 100%; height: 100%"
        >
          <p class="primary--text mb-0" :class="majFZ">
            {{ value }}
          </p>
          <p class="mb-0" :class="minFZ">
            {{ metric }}
          </p>
        </div>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    majFZ: {
      type: String,
      default: "display-2",
    },
    minFZ: {
      type: String,
      default: "text-h6",
    },
    metric: {
      type: String,
      default: "metric",
    },
    value: {
      type: [Number, String],
      default: `+4`,
    },
    maxHeight: {
      type: [Number, String],
      default: `auto`,
    },
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>