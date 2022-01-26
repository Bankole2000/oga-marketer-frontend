<template>
  <div class="new-campaign">
    <div class="d-flex page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Campaign</p>
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
        :to="{ name: 'app.campaigns.my-campaigns' }"
        outlined
        color="error"
      >
        <v-icon left> mdi-chevron-left </v-icon> Back
      </v-btn>
    </div>
    <v-container class="my-4 px-0">
      <v-window v-model="currentStep">
        <v-window-item :value="1">
          <CampaignType />
        </v-window-item>
        <v-window-item :value="2">
          <SelectList />
        </v-window-item>
        <v-window-item :value="3">
          <EmailSetup />
        </v-window-item>
        <v-window-item :value="4">
          <ScheduleSummary />
        </v-window-item>
        <v-window-item :value="5">
          <Automation />
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script>
import CampaignType from "./Steps/CampaignType.vue";
import SelectList from "./Steps/SelectList.vue";
import EmailSetup from "./Steps/EmailSetup.vue";
import ScheduleSummary from "./Steps/ScheduleSummary.vue";
import Automation from "./Steps/Automation.vue";
export default {
  data() {
    return {
      currentStep: 1,
      steps: [
        { text: "Campaign Type", value: 1 },
        { text: "Select List", value: 2 },
        { text: "Email Setup", value: 3 },
        { text: "Schedule", value: 4 },
        { text: "Automation", value: 5 },
      ],
    };
  },
  components: {
    CampaignType,
    SelectList,
    EmailSetup,
    ScheduleSummary,
    Automation,
  },
};
</script>

<style>
</style>