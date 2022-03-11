<template>
  <div class="page-header px-8">
    <p class="display-1 mb-0 grey--text text--darken-2">Tracking Events</p>
    <v-divider vertical class="ma-4" />
    <v-chip
      class="primary--text"
      @click="onCreateNewTrackingEvent"
      style="background-color: var(--primary-light)"
    >
      <v-avatar left>
        <v-icon color="primary" size="24"> mdi-plus </v-icon>
      </v-avatar>
      New Tracking Event
    </v-chip>
    <v-spacer />
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="gradient curved white--text text-capitalize"
        >
          <v-icon left> mdi-information-outline </v-icon>Info
        </v-btn>
      </template>
      <span>Learn more about Tracking Events</span>
    </v-tooltip>
    <NewTrackingEventModal ref="newTrackingEventModal" />
  </div>
</template>

<script>
import NewTrackingEventModal from '../../modals/NewTrackingEventModal.vue';
export default {
  components: { NewTrackingEventModal },
  data(){
    return {

    }
  }, 
  methods: {
    onCreateNewTrackingEvent() {
      this.$refs["newTrackingEventModal"].show(true);
      console.log({ refs: this.$refs });
    },
  }
};
</script>

<style>
</style>