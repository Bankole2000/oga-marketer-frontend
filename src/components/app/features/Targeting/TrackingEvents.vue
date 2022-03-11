<template>
  <div class="tracking-events">
    <TrackingEventsHeader />
    <v-container class="my-4">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4 elevated-light rounded-lg">
            <v-card-title class="d-flex pt-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-radar </v-icon>
                Tracker Events
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                @click="onCreateNewTrackingEvent"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24">
                    mdi-plus
                  </v-icon>
                </v-avatar>
                New Tracker Event
              </v-chip>
            </v-card-title>
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
                <v-flex md3>
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
                <!-- <v-flex md1>
                  <p class="mb-0 font-weight-bold">
                    Score
                  </p>
                </v-flex> -->
                <v-flex
                  md3
                  class="d-flex font-weight-bold pl-4"
                >
                  <p class="mb-0">Actions</p>
                </v-flex>
              </v-layout>
            <v-divider class="my-0" />
            <v-progress-linear indeterminate :active='loading'></v-progress-linear>
            <TrackingEventsList :trackerEvents="trackerEvents"/>
            <v-container>
      <v-row>
        <v-col cols="3" class="pt-4">
          <v-btn text color="error" class="text-capitalize">Delete All</v-btn>
        </v-col>
        <v-col cols="6">
          <v-pagination v-model="page" :length="Math.ceil(totalCount / limit)"
              :total-visible="7"></v-pagination>
        </v-col>
        <v-col cols="3" class="pt-4">
          <div class="d-flex">
            <v-spacer></v-spacer>
          <v-btn text color="primary" class="text-capitalize">Action on all selected</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <NewTrackingEventModal ref="newTrackingEventModal" />
  </div>
</template>

<script>
import API from '@/api/'
import TrackingEventsHeader from "./blocks/tracking-events/TrackingEventsHeader.vue";
import NewTrackingEventModal from './modals/NewTrackingEventModal.vue';
import TrackingEventsList from "./blocks/tracking-events/TrackingEventsList.vue";
export default {
  components: {
    TrackingEventsList,
    TrackingEventsHeader,
    NewTrackingEventModal
  },
  data(){
    return {
      loading: false,
      trackerEvents: [],
      page: 1, 
      limit: 10,
      totalCount: 0,
    }
  },
    watch: {
    page(newValue){
      // console.log({newValue})
      this.getTrackerEvents(newValue)
    }
  },
  methods: {
    async getTrackerEvents(page = 1, limit = 10){
      this.loading = true;
      try {
        const {data, headers} = await API.Trackers.Events.getTrackerEvents(`?_page=${page}&_limit=${limit}`)
        console.log({data})
        this.trackerEvents = data;
        this.totalCount = headers['x-total-count'];
        this.loading = false;
      } catch (error) {
        console.log("🚀 ~ file: TrackingEvents.vue ~ line 102 ~ getTrackerEvents ~ error", error)
        this.loading = false;
      }
    },
    onCreateNewTrackingEvent() {
      this.$refs["newTrackingEventModal"].show(true);
      console.log({ refs: this.$refs });
    },
  }, 
  async mounted(){
    await this.getTrackerEvents()
  }
};
</script>

<style>
</style>