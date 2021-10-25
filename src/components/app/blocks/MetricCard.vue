<template>
  <div class="metric-card">
    <v-card elevation="0" class="bg-primary-lt">
      <v-responsive aspect-ratio="1">
        
        <div class="d-flex align-center flex-column justify-center" style="width: 100%; height: 100%;">
          <p class="display-2 primary--text mb-0">{{value}}</p>
          <p class="text-h6 mb-0">{{metric}}</p>
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
      defaul: 'primay'
    }, 
    majFZ: {
      type: String, 
      default: 'display-2'
    }, 
    minFZ: {
      type: String, 
      default: ''
    }, 
    metric: {
      type: String, 
      default: 'metric'
    }, 
    value: {
      type: [Number, String],
      default: `+4`,
    }
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>