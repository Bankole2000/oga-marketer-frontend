<template>
  <div class="tracking-events">
    <TrackingEventsHeader />
    <v-container class="my-4">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4 elevated-light rounded-lg">
            <v-card-title class="pa-0">
              <v-layout
                row
                :wrap="false"
                align-center
              >
                <v-flex
                  xs1
                  class="d-flex justify-center"
                >
                  <v-checkbox />
                </v-flex>
                <v-flex
                  xs3
                  class="d-flex"
                >
                  <p class="mb-0">
                    Tracking Events
                  </p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0">
                    Alias
                  </p>
                </v-flex>
                <v-flex
                  md2
                  class="d-flex"
                >
                  <p class="mb-0">
                    Type
                  </p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0">
                    Score
                  </p>
                </v-flex>
                <v-flex
                  md2
                  class="d-flex pl-4"
                >
                  Actions
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider class="mb-4 mt-2" />
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