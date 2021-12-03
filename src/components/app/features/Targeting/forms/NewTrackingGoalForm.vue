<template>
  <div class="new-tracking-goal-form">
    <v-text-field
      v-model="trackingGoal.name"
      label="Goal Name"
      required
    />
    <v-select
      v-model="trackingGoal.type"
      label="Goal Type"
      :items="goalTypes"
      required
    />
    <v-select
      v-model="trackingGoal.segmentLabel"
      label="Segment Label"
      :items="segmentLabels"
    />
    <div class="d-flex">
      <p class="title">
        Add Tracking Events
      </p>
      <v-spacer />
      <v-btn
        icon
        class="light"
        elevation="2"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div
      v-for="i in 3"
      :key="i"
    >
      <div
        class="d-flex pt-2 pb-1 mb-1 rounded-lg px-4 align-center"
        style="transition: all 0.3s ease"
      >
        <p class="mb-0 primary--text">
          Click on Button
        </p>
        <v-spacer />
        <p class="error--text mb-0 caption">
          Remove
        </p>
      </div>
      <v-divider />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trackingGoal: {
        name: "Anniversary Sales",
        type: "Form",
        segmentLabel: "Buyer",
      },
      goalTypes: ["Form"],
      segmentLabels: ["Buyer"],
    };
  },
};
</script>

<style>
</style>