<template>
  <div class="tracking-events-list">
    <v-container v-if="!trackerEvents.length" fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <div class="light primary--text pa-4 d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon color="primary" class="pb-1 mr-2">mdi-information-outline</v-icon>
            <p class="mb-0 headline">
              You haven't set any Tracker Events
            </p>
            </div>
            <div>
              <v-btn class="gradient white--text curved px-6 text-capitalize mx-2">
                <v-icon left>mdi-plus</v-icon>
                Add a new Event Tracker
              </v-btn>
              <!-- <v-btn @click="() => {}" class="light primary--text curved px-6 text-capitalize">
                <v-icon left>mdi-download</v-icon>
                Import Contacts 
              </v-btn> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div v-else>
      <v-scroll-y-transition group leave-absolute>

      <TrackingEventListItem
        v-for="(event, i) in trackerEvents"
        :key="i"
        :event='event'
      />
      </v-scroll-y-transition>
    </div>
  </div>
</template>

<script>
import TrackingEventListItem from "./TrackingEventListItem.vue";
export default {
  components: { TrackingEventListItem },
  props: ['trackerEvents']
};
</script>

<style>
</style>