<template>
    <v-hover v-slot:default="{ hover }" >
  <div class="targets-list-item">
    <v-divider></v-divider>
    <v-layout row :wrap="false" align-center class="py-1 px-2 mx-0 my-auto" :class="hover ? 'elevated-light grey lighten-3': ''">
      <v-flex xs2 class="d-flex">
       <p class="mb-0">First time visitors</p>
      </v-flex>
      <v-flex xs2 class="d-flex">
        <p class="mb-0">www.domain.com</p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">Target URL</p>
      </v-flex>
      <v-flex md3 class="d-flex">
        <v-chip small class="mr-2">first time visitor</v-chip>
        <v-chip small>page view</v-chip>
      </v-flex>
      <v-flex md2>
        <div class="d-flex">
          <v-btn text color="primary" class="text-capitalize"> Edit </v-btn>
          <v-btn text color="error" class="text-capitalize"> Delete </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
    </v-hover>
</template>

<script>
export default {};
</script>

<style>
</style>