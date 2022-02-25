<template>
<v-hover v-slot:default="{ hover }" >
  <div>
    <v-divider></v-divider>
    <v-layout
      row
      :wrap="false"
      align-center
      class="my-0 py-1"
      :class="hover ? 'elevated-light grey lighten-3': ''"
    >
      <v-flex
        xs1
        class="d-flex justify-center"
      >
        <v-checkbox
          hide-details
          class="mb-2 mt-0"
        />
      </v-flex>
      <v-flex
        xs3
        class="d-flex"
      >
        <p class="mb-0">
          Click on button
        </p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">
          button-click
        </p>
      </v-flex>
      <v-flex
        md2
        class="d-flex"
      >
        <p class="mb-0">
          Button Click
        </p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">
          0
        </p>
      </v-flex>
      <v-flex
        md2
        class="d-flex"
      >
        <v-btn
          text
          class="text-capitalize"
          color="primary"
        >
          Edit
        </v-btn>
        <v-btn
          text
          class="text-capitalize ml-2"
          color="error"
        >
          Delete
        </v-btn>
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