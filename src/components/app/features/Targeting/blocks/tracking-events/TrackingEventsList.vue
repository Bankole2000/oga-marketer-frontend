<template>
  <div class="tracking-events-list">
    <TrackingEventListItem
      v-for="i in 5"
      :key="i"
    />
  </div>
</template>

<script>
import TrackingEventListItem from "./TrackingEventListItem.vue";
export default {
  components: { TrackingEventListItem },
};
</script>

<style>
</style>