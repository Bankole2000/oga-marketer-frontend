<template>
  <div class="tracking-goals-list">
    <v-scroll-y-transition group leave-absolute>
    <TrackingGoalsListItem v-for="(goal, i) in trackerGoals" :goal="goal" :key="i" />
    </v-scroll-y-transition>
  </div>
</template>

<script>
import TrackingGoalsListItem from './TrackingGoalsListItem.vue'
export default {
  components: { TrackingGoalsListItem },
  props: ['trackerGoals']

}
</script>

<style>

</style>