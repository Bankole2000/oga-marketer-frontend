<template>
  <div class="new-tracking-event-modal">
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="rounded-xl">
        <v-card-title class="headline">
          <span>New Tracking Event</span>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false" icon>
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="py-4">
          <NewTrackingEventForm />
        </v-card-text>
        <v-card-actions class="justify-center py-6">
          <v-btn
            class="light curved text-capitalize px-8 mx-2"
            @click="dialog = false"
            >Back</v-btn
          >
          <v-btn
            class="gradient curved white--text text-capitalize px-8 mx-2"
            @click="dialog = false"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NewTrackingEventForm from "../forms/NewTrackingEventForm.vue";
export default {
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
  components: { NewTrackingEventForm },
};
</script>

<style>
</style>