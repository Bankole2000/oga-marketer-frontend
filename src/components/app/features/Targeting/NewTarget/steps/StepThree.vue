<template>
  <div class="step-three">
    <v-row>
      <v-col cols="6" offset="3">
        <v-card class="elevated-light pa-4 rounded-xl">
          <v-card-title> Add Tracking Events </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-4 px-4">
            <TrackingEventItem
              v-for="(event, i) in targetTrackingEvents"
              :key="i"
              class="mb-1 mt-1"
              :text="event.text"
              :value="event.value"
              :is-selected="selectedTrackingEvents.includes(event.value)"
              @remove="changeEvents($event, 'remove')"
              @add="changeEvents($event, 'add')"
            />
            <div class="d-flex align-center mt-4">
              <v-spacer />
              <v-hover v-slot:default="{ hover }">
                <p
                  style="cursor: pointer"
                  class="mb-0 primary--text"
                  @click="onCreateNewTrackingEvent"
                >
                  <v-icon color="primary"> mdi-plus </v-icon>
                  <span
                    style="font-size: 1rem"
                    :class="{ 'text-decoration-underline': hover }"
                  >
                    Create New Tracking Event
                  </span>
                </p>
              </v-hover>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn class="curved px-10 mx-2 light text-capitalize">
              Back
            </v-btn>
            <v-btn
              class="curved px-10 mx-2 gradient white--text text-capitalize"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <NewTrackingEventModal ref="newTrackingEventModal" />
  </div>
</template>

<script>
import TrackingEventItem from "../../forms/TrackingEventItem.vue";
import NewTrackingEventModal from "../../modals/NewTrackingEventModal.vue";
export default {
  components: { TrackingEventItem, NewTrackingEventModal },
  data() {
    return {
      selectedTrackingEvents: [],
      targetTrackingEvents: [
        {
          text: "Click on Button",
          value: "clickOnButton",
        },
        {
          text: "Click on Link",
          value: "clickOnLink",
        },
        {
          text: "Input Field",
          value: "inputField",
        },
      ],
    };
  },
  methods: {
    changeEvents(event, action) {
      if (action === "add") {
        this.selectedTrackingEvents.push(event);
      } else {
        this.selectedTrackingEvents.splice(
          this.selectedTrackingEvents.indexOf(event),
          1
        );
      }
    },
    onCreateNewTrackingEvent() {
      this.$refs["newTrackingEventModal"].show(true);
      console.log({ refs: this.$refs });
    },
  },
};
</script>

<style>
</style>