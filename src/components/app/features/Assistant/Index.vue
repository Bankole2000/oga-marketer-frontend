<template>
  <div class="startup-assistant-steps">
    <div class="d-flex page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Startup Assistant</p>
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
                <p class="mb-0 text-center">{{ step.text }}</p>
              </v-stepper-step>
              <v-divider v-if="i < steps.length - 1" :key="`${i}-divider`" />
            </template>
          </v-stepper-header>
        </v-stepper>
      </div>
      <v-divider vertical class="ma-4" />
      <v-btn exact-path @click="$router.go(-1)" outlined color="error">
        <v-icon left> mdi-chevron-left </v-icon> Back
      </v-btn>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-center">
            Hello there! Welcome to <strong>OgaMarketer.</strong> We are glad
            you've chosen us as your marketing automation sidekick. <br />
            We though it'll be nice to show you around a bit and get you all
            setup with a couple of simple steps. (Remember, you can
            <strong class="text-decoration-underline"
              >always ask for help!</strong
            >)
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-window v-model="currentStep">
        <v-window-item :value="1">
          <GDPR />
        </v-window-item>
        <v-window-item :value="2">
          <DataUpload />
        </v-window-item>
        <v-window-item :value="3">
          <CodeInstallation />
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script>
import GDPR from "./Steps/GDPR.vue";
import DataUpload from "./Steps/DataUpload.vue";
import CodeInstallation from "./Steps/CodeInstallationStep.vue";
export default {
  data() {
    return {
      currentStep: 1,
      steps: [
        { text: "GDPR Compliance", value: 1 },
        { text: "Data Upload", value: 2 },
        { text: "Code Installation", value: 3 },
      ],
    };
  },
  components: { GDPR, DataUpload, CodeInstallation },
};
</script>

<style>
</style>