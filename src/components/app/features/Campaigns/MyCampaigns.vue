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
          <v-card class="pa-4 elevated-light rounded-lg">
            <v-card-title class="pa-0">
              <v-layout row :wrap="false" align-center>
                <v-flex xs2 class="d-flex justify-center">
                  <p class="mb-4">Campaign</p>
                </v-flex>
                <v-flex xs3 class="d-flex">
                  <p class="mb-4">Description</p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-4">Associated Lists</p>
                </v-flex>
                <v-flex md2 class="d-flex">
                  <p class="mb-4">Date Created</p>
                </v-flex>
                <v-flex md1>
                  <p class="mb-4">Status</p>
                </v-flex>
                <v-flex md2 class="d-flex pl-4">
                  <p class="mb-4">Action</p>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <CampaignsList />
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