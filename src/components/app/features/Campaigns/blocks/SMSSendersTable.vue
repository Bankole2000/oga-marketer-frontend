<template>
  <div class="sms-senders-table">
    <v-layout row :wrap="false" align-center>
      <v-flex xs1 class="d-flex justify-center">
        <v-checkbox />
      </v-flex>
      <v-flex xs4 class="d-flex">
        <p class="mb-0 font-weight-bold">Sender ID</p>
      </v-flex>
      <v-flex md3 class="d-flex">
        <p class="mb-0 font-weight-bold">Status</p>
      </v-flex>
      <v-flex md4 class="d-flex pl-8">
        <p class="mb-0 font-weight-bold">Action</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-progress-linear indeterminate :active="loading"></v-progress-linear>
    <v-container v-if="!smsSenders.length" fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <div
            class="
              light
              primary--text
              pa-4
              d-flex
              align-center
              justify-space-between
            "
          >
            <p class="mb-0 headline">You haven't registered any SMS Senders</p>
            <div>
              <v-btn
                :to="{ name: 'app.targeting.targeting.new' }"
                class="gradient white--text curved px-6 text-capitalize mx-2"
              >
                <v-icon left>mdi-plus</v-icon>
                Add a new SMS Sender
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
    <SMSSendersList v-else :smsSenders="smsSenders" />
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
            <v-btn text color="primary" class="text-capitalize"
              >Action on all selected</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "@/api/";
import SMSSendersList from "./SMSSendersList.vue";
export default {
  components: {
    SMSSendersList,
  },
  data() {
    return {
      loading: false,
      smsSenders: [],
      page: 1,
      limit: 5,
      totalCount: 0,
    };
  },
  watch: {
    page(newValue) {
      // console.log({newValue})
      this.getSMSSenders(newValue);
    },
  },
  methods: {
    async getSMSSenders(page = 1, limit = 5) {
      this.loading = true;
      try {
        const { data, headers } = await API.Campaigns.SMSSenders.getSMSSenders(
          `?_page=${page}&_limit=${limit}`
        );
        console.log({ data, headers });
        this.smsSenders = data;
        this.totalCount = headers["x-total-count"];
        this.loading = false;
      } catch (error) {
        console.log({ error });
        this.loading = false;
      }
    },
  },
  async mounted() {
    await this.getSMSSenders(this.page, this.limit);
  },
};
</script>

<style>
</style>
