<template>
  <div class="tracking-goals-table">
    <v-layout row :wrap="false" align-center>
      <v-flex xs1 class="d-flex justify-center">
        <v-checkbox/>
      </v-flex>
      <v-flex xs2 class="d-flex">
        <p class="mb-0 font-weight-bold">Name</p>
      </v-flex>
      <v-flex md5>
        <p class="mb-0 font-weight-bold">Message</p>
      </v-flex>
      <v-flex md2 class="d-flex">
        <p class="mb-0 font-weight-bold">Events</p>
      </v-flex>
      <v-flex md2 class="d-flex pl-8">
        <p class="mb-0 font-weight-bold">Actions</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-progress-linear indeterminate :active='loading'></v-progress-linear>
    <v-container fluid v-if="!trackerGoals.length">
      <v-row>
        <v-col cols="12" class="px-0">
          <div class="light primary--text pa-4 d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon color="primary" class="pb-1 mr-2">mdi-information-outline</v-icon>
              <p class="mb-0 headline">
                You haven't set any Tracker Goals
              </p>
            </div>
            <div>
              <v-btn :to="{ name: 'app.targeting.targeting.new' }" class="gradient white--text curved px-6 text-capitalize mx-2">
                <v-icon left>mdi-plus</v-icon>
                Set a new Tracker Goal
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <TrackingGoalsList v-else :trackerGoals="trackerGoals" />
    <v-container>
      <v-row>
        <v-col cols="3" class="pt-4">
          <v-btn text color="error" class="text-capitalize">Delete All</v-btn>
        </v-col>
        <v-col cols="6">
          <v-pagination v-model="page" :length="Math.ceil(totalCount / limit)"
              :total-visible="6"></v-pagination>
        </v-col>
        <v-col cols="3" class="pt-4">
          <div class="d-flex">
            <v-spacer></v-spacer>
          <v-btn text color="primary" class="text-capitalize">Action on all selected</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "@/api/";
import TrackingGoalsList from './TrackingGoalsList.vue'
export default {
  components: { TrackingGoalsList },
  data(){
    return {
      loading: true,
      trackerGoals: [],
      page: 1, 
      limit: 2,
      totalCount: 0
    }
  },
  watch: {
    page(newValue){
      // console.log({newValue})
      this.getTrackerGoals(newValue)
    }
  },
  methods: {
    async getTrackerGoals(page = 1, limit = 2){
      try {
        const {data, headers } = await API.Trackers.Goals.getTrackerGoals(`?_page=${page}&_limit=${limit}`);
        console.log({data, headers});
        this.trackerGoals = data;
        this.totalCount = headers['x-total-count'];
        this.loading = false;
      } catch (error) {
        console.log("🚀 ~ file: TrackingGoalsTable.vue ~ line 62 ~ getTrackerGoals ~ error", error)
      }
    }
  }, 
  async mounted(){
    await this.getTrackerGoals();
  }
}
</script>

<style>

</style>