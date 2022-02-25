<template>
<v-hover v-slot:default="{ hover }" >
  <div class="campaign-list-item">
    <v-divider></v-divider>
    <v-layout row :wrap="false" align-center class="my-0 py-1 mx-1" :class="hover ? 'elevated-light grey lighten-3': ''">
      <v-flex xs2 class="d-flex">
        <router-link class="text-decoration-none" to="/">
        <p class="mb-0 ml-4">Survey Campaign</p>
        </router-link>
      </v-flex>
      <v-flex xs3 class="d-flex">
        <p class="mb-0">Set ut perspiciatis</p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">First Time Visitors</p>
      </v-flex>
      <v-flex md2 class="d-flex">
        <p class="mb-0">08/03/2002</p>
      </v-flex>
      <v-flex md1>
        <v-chip
          v-if="[0, 1, 3, 7, 8].includes(index)"
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
          v-if="![0, 1, 3, 7, 8].includes(index)"
          style="padding-top: 1px"
          class="mr-1"
          ><v-icon color="success">mdi-play</v-icon></v-btn
        >
        <v-btn outlined class="mr-1" small icon v-else style="padding-top: 1px"
          ><v-icon color="error">mdi-stop</v-icon></v-btn
        >
        <v-btn text class="text-capitalize" color="primary"> Edit </v-btn>
        <v-btn text class="text-capitalize ml-2" color="error"> Delete </v-btn>
      </v-flex>
    </v-layout>
  </div>
</v-hover>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
</style>