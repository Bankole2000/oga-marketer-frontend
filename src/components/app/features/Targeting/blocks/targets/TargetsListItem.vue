<template>
  <div class="targets-list-item">
    <v-layout
      row
      :wrap="false"
      align-center
      class="pa-2"
    >
      <v-flex
        xs2
        class="d-flex"
      >
        <p class="mb-0">
          First time visitors
        </p>
      </v-flex>
      <v-flex
        xs2
        class="d-flex"
      >
        <p class="mb-0">
          www.domain.com
        </p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0">
          Target URL
        </p>
      </v-flex>
      <v-flex
        md3
        class="d-flex"
      >
        <v-chip>first time visitor</v-chip>
        <v-chip>page view</v-chip>
      </v-flex>
      <v-flex md2>
        <div class="d-flex">
          <v-btn
            text
            class="text-capitalize"
          >
            Edit
          </v-btn>
          <v-btn
            text
            class="text-capitalize"
          >
            Delete
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>