<template>
  <div class="billing-history-table">
    <v-layout row :wrap="false" align-center class="my-0">
      <v-flex xs1 class="d-flex justify-center">
        <!--   -->
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
    <v-container fluid v-if="!transactions.length">
      <v-row>
        <v-col cols="12" class="px-0">
          <div class="light primary--text pa-4 d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon color="primary" class="pb-1 mr-2">mdi-information-outline</v-icon>
              <p class="mb-0 headline">
                You don't have any payment history
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
  </div>
</template>

<script>
import API from '@/api/'
export default {
  data(){
    return {
      loading: true,
      transactions: [],
      page: 1, 
      limit: 10, 
      totalCount: 0
    }
  }, 
  watch: {
    async page(newValue){
      // console.log({newValue})
      await this.getTransactions(newValue)
    }
  },
  methods: {
    async getTransactions(page =1, limit = 10){
      this.loading = true;
      try {
        const {data, headers} = await API.Payments.Transactions.getTransactions(`?_page=${page}&_limit=${limit}`)
        console.log({data})
        this.totalCount = headers['x-total-count'];
        this.loading = false;
      } catch (error) {
        console.log("🚀 ~ file: BillingHistoryTable.vue ~ line 59 ~ getTransactions ~ error", error)
        this.loading = false;
      }
    },
  },
  async mounted(){
    await this.getTransactions()
  }
}
</script>

<style>

</style>