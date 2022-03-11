<template>
  <div class="campaigns-list my-0">
    <v-scroll-y-transition group leave-absolute>
      <CampaignListItem v-for="(campaign, i) in campaigns" :campaign="campaign" :key="i" />
    </v-scroll-y-transition>
  </div>
</template>

<script>
import CampaignListItem from "./CampaignListItem.vue";
export default { 
  components: { CampaignListItem }, 
  props: ['campaigns']
};
</script>

<style>
</style>