<template>
  <div class="new-tracking-goal-modal">
    <v-dialog
      v-model="dialog"
      min-width="350"
      max-width="500"
    >
      <v-card class="rounded-xl">
        <v-card-title class="headline">
          New Tracking Goal
        </v-card-title>

        <v-card-text>
          <NewTrackingGoalForm />
        </v-card-text>

        <v-card-actions class="justify-center pb-8">
          <v-btn
            large
            class="px-16 mx-4 curved light text-capitalize primary--text"
          >
            Back
          </v-btn>
          <v-btn
            large
            class="px-16 mx-4 curved gradient text-capitalize white--text"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NewTrackingGoalForm from "../forms/NewTrackingGoalForm.vue";
export default {
  components: { NewTrackingGoalForm },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
  },
};
</script>

<style>
</style>