<template>
  <div class="user-goals-step-form my-2">
    <v-row class="d-flex flex-column">
      <v-col
        cols="12"
        style="min-height: 50vh"
      >
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Build and send more targeted emails"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Target specific user groups"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Build and send more targeted emails"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Build and send more targeted emails"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Build and send more targeted emails"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="d-flex align-center">
          <v-checkbox
            class="mb-3"
            hide-details
            label="Other..."
          />
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <div class="d-flex justify-center">
          <v-btn
            large
            class="light text-capitalize primary--text px-14 curved mx-4"
            @click="$emit('back')"
          >
            Back
          </v-btn>
          <v-btn
            large
            class="gradient text-capitalize white--text px-14 curved mx-4"
            @click="$emit('next')"
          >
            Next
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>