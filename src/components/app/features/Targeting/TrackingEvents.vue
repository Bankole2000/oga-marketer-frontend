<template>
  <div class="tracking-events">
    <TrackingEventsHeader />
    <v-container class="my-4">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4 elevated-light rounded-lg">
              <v-layout
                row
                :wrap="false"
                align-center
                class="my-0 py-1"
              >
                <v-flex
                  xs1
                  class="d-flex font-weight-bold justify-center"
                >
                  <v-checkbox hide-details class="mb-2 mt-0" />
                </v-flex>
                <v-flex
                  xs3
                  class="d-flex font-weight-bold"
                >
                  <p class="mb-0 font-weight-bold">
                    Tracking Events
                  </p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0 font-weight-bold">
                    Alias
                  </p>
                </v-flex>
                <v-flex
                  md2
                  class="d-flex font-weight-bold"
                >
                  <p class="mb-0 font-weight-bold">
                    Type
                  </p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0 font-weight-bold">
                    Score
                  </p>
                </v-flex>
                <v-flex
                  md2
                  class="d-flex font-weight-bold pl-4"
                >
                  <p class="mb-0">Actions</p>
                </v-flex>
              </v-layout>
            <v-divider class="my-0" />
            <TrackingEventsList />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TrackingEventsHeader from "./blocks/tracking-events/TrackingEventsHeader.vue";
import TrackingEventsList from "./blocks/tracking-events/TrackingEventsList.vue";
export default {
  components: {
    TrackingEventsList,
    TrackingEventsHeader,
  },
};
</script>

<style>
</style>