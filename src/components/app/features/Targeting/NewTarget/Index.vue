<template>
  <div class="new-target">
    <div class="d-flex page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Targeting</p>
      <v-divider vertical class="ma-4" />
      <div style="min-width: 50vw; flex-grow: 1" class="pb-4">
        <v-stepper v-model="currentStep" alt-labels elevation="0">
          <v-stepper-header class="pa-0">
            <template v-for="(step, i) in steps">
              <v-stepper-step
                :key="i"
                :complete="currentStep > step.value"
                class="pb-0"
                :step="step.value"
                editable
              >
                {{ step.text }}
              </v-stepper-step>
              <v-divider v-if="i < steps.length - 1" :key="`${i}-divider`" />
            </template>
          </v-stepper-header>
        </v-stepper>
      </div>
      <v-divider vertical class="ma-4" />
      <v-btn
        exact-path
        :to="{ name: 'app.targeting.targeting' }"
        outlined
        color="error"
      >
        <v-icon left> mdi-chevron-left </v-icon> Back
      </v-btn>
    </div>

    <v-container class="px-0">
      <v-window v-model="currentStep">
        <v-window-item :value="1">
          <StepOne class="my-4 mx-2" @next="next" />
        </v-window-item>
        <v-window-item :value="2">
          <StepTwo class="my-4 mx-2" />
        </v-window-item>
        <v-window-item :value="3">
          <StepThree class="my-4 mx-2" />
        </v-window-item>
        <v-window-item :value="4">
          <StepFour class="my-4 mx-2" />
        </v-window-item>
      </v-window>
    </v-container>
    <!-- <h1>New Target Steps</h1> -->
  </div>
</template>

<script>
import StepOne from "./steps/StepOne.vue";
import StepTwo from "./steps/StepTwo.vue";
import StepThree from "./steps/StepThree.vue";
import StepFour from "./steps/StepFour.vue";
export default {
  components: { StepOne, StepTwo, StepThree, StepFour },
  data() {
    return {
      currentStep: 1,
      steps: [
        { text: "New Target", value: 1 },
        { text: "Widget", value: 2 },
        { text: "Tracking Events", value: 3 },
        { text: "Schedule", value: 4 },
      ],
    };
  },
  methods: {
    next() {
      this.currentStep++;
    },
  },
};
</script>

<style>
</style>