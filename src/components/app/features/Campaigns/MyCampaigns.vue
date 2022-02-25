<template>
  <div class="my-campaigns">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Campaigns</p>
      <v-divider vertical class="ma-4" />
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
        @click="$router.push({ name: 'app.campaigns.new' }).catch(() => {})"
      >
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-plus </v-icon>
        </v-avatar>
        New Campaign
      </v-chip>
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
        <span>Learn more about Campaigns</span>
      </v-tooltip>
    </div>
    <v-container class="my-4">
      <v-row>
        <v-col cols="12">
          <v-card class="px-4 pt-4 pb-4 elevated-light rounded-lg">
              <v-layout row :wrap="false" class="mb-n2 mt-0 py-0" align-center>
                <v-flex xs2 class="d-flex">
                  <p class="mb-0 font-weight-bold ml-8">Campaign</p>
                </v-flex>
                <v-flex xs3 class="d-flex">
                  <p class="mb-0 font-weight-bold">Description</p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0 font-weight-bold">Associated Lists</p>
                </v-flex>
                <v-flex md2 class="d-flex">
                  <p class="mb-0 font-weight-bold">Date Created</p>
                </v-flex>
                <v-flex md1>
                  <p class="mb-0 font-weight-bold">Status</p>
                </v-flex>
                <v-flex md2 class="d-flex pl-4">
                  <p class="mb-0 font-weight-bold">Action</p>
                </v-flex>
              </v-layout>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" class="px-0">
                    <v-divider class="mb-2"></v-divider>
                    <div class="light primary--text pa-4 d-flex align-center justify-space-between">
                      <p class="mb-0 headline">
                        You haven't created any Campaigns
                      </p>
                      <div>
                        <v-btn :to="{ name: 'app.campaigns.new' }" class="gradient white--text curved px-6 text-capitalize mx-2">
                          <v-icon left>mdi-plus</v-icon>
                          Create A New Campaign
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
              <CampaignsList />
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CampaignsList from "./blocks/CampaignsList.vue";
export default { components: { CampaignsList } };
</script>

<style>
</style>