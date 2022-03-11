<template>
<v-hover v-slot:default="{ hover }" >
  <div class="campaign-list-item">
    <v-divider></v-divider>
    <v-layout row :wrap="false" align-center class="my-0 py-1 mx-1" :class="hover ? 'elevated-light grey lighten-3': ''">
      <v-flex xs2 class="d-flex">
        <router-link class="text-decoration-none" to="/">
        <p class="mb-0 ml-4">{{campaign.name}}</p>
        </router-link>
      </v-flex>
      <v-flex xs3 class="d-flex">
        <p class="mb-0">{{campaign.description}}</p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">{{campaign.contact_list_name}}</p>
      </v-flex>
      <v-flex md2 class="d-flex">
        <p class="mb-0">{{campaign.created_at.split(' ')[0]}}</p>
      </v-flex>
      <v-flex md1>
        <v-chip
          v-if="campaign.active"
          small
          style='cursor: pointer'
          class="bg-success-lt primary--text"
          >active</v-chip
        >
        <v-chip v-else small class="error lighten-2 white--text" style='cursor: pointer'
          >inactive</v-chip
        >
      </v-flex>
      <v-flex md2 class="d-flex align-center">
        <v-btn
          outlined
          small
          icon
          v-if="!campaign.active"
          style="padding-top: 1px"
          class="mr-1"
          ><v-icon color="success">mdi-play</v-icon></v-btn
        >
        <v-btn outlined class="mr-1" small icon v-else style="padding-top: 1px"
          ><v-icon color="error">mdi-stop</v-icon></v-btn
        >
        <v-btn text class="text-capitalize" color="primary"><v-icon left>mdi-pencil</v-icon> Edit </v-btn>
        <v-btn text class="text-capitalize ml-2" color="error"><v-icon left>mdi-trash-can</v-icon> Delete </v-btn>
      </v-flex>
    </v-layout>
  </div>
</v-hover>
</template>

<script>
export default {
  props: ['campaign']
};
</script>

<style>
</style>