<template>
  <div class="targets-list">
    <TargetsListItem
      v-for="i in 5"
      :key="i"
    />
  </div>
</template>

<script>
import TargetsListItem from "./TargetsListItem.vue";
export default {
  components: { TargetsListItem },
};
</script>

<style>
</style>