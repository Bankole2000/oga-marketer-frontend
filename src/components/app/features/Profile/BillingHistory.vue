<template>
  <div class="billing-history">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Billing History</p>
      <v-divider vertical class="ma-4" />

      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />

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
        <span>Learn more about Billing History and Subscriptions</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="0" class="pa-4 elevated-light rounded-lg mb-8">
            <v-card-title class="d-flex pt-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-send </v-icon>
                Billing History
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                @click="$router.push({ name: 'app.targeting.targeting.new'})"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24">
                    mdi-plus
                  </v-icon>
                </v-avatar>
                New Payment
              </v-chip>
            </v-card-title>
            <BillingHistoryTable />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BillingHistoryTable from './blocks/BillingHistoryTable.vue'
export default {
  components: { BillingHistoryTable },

}
</script>

<style>

</style>