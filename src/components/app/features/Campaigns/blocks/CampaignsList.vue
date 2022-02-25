<template>
  <div class="campaigns-list my-0">
    <CampaignListItem v-for="i in 9" :index="i" :key="i" />
  </div>
</template>

<script>
import CampaignListItem from "./CampaignListItem.vue";
export default { components: { CampaignListItem } };
</script>

<style>
</style>