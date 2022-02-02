<template>
  <div class="segments-and-labels">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Segments & Labels</p>
      <v-divider vertical class="ma-4" />

      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="gradient curved white--text text-capitalize"
          >
            <v-icon left> mdi-information-outline </v-icon>Info
          </v-btn>
        </template>
        <span>Learn more about Segments and Labels</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <!-- Segments and Labels page Content -->
        <v-col cols="8">
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-2"> mdi-tag-outline </v-icon>
                Segments and Labels
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <v-chip
                class="primary--text"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New Segment
              </v-chip>

              <!-- <v-chip
                class="primary--text"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New User
              </v-chip> -->
            </v-card-title>
            <v-card-text class="pt-4">
              <p>
                You can create your segments and labels below, with labels you
                can group your lists and contacts with this tags and group them
                based on appropriate labels under defined segments.
              </p>
              <div v-for="(segment, i) in segments" :key="i" class="mb-4">
                <v-divider class="mb-2"></v-divider>
                <div class="d-flex align-center">
                  <p class="title font-weight-bold mb-0">
                    {{ segment.name }}
                  </p>
                  <v-spacer></v-spacer>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        small
                        class="mr-2"
                        color="success"
                        ><v-icon>mdi-plus-thick</v-icon></v-btn
                      >
                    </template>
                    <span>Add Label to Segment</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        small
                        class="mr-2"
                        color="primary"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                      >
                    </template>
                    <span>Edit Segment</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" icon small color="error"
                        ><v-icon>mdi-trash-can</v-icon></v-btn
                      >
                    </template>
                    <span>Delete Segment</span>
                  </v-tooltip>
                </div>
                <div>
                  <v-hover
                    v-for="(label, j) in segment.labels"
                    :key="j"
                    v-slot:default="{ hover }"
                  >
                    <v-chip class="ma-1 info white--text" label>
                      <v-avatar @click="deleteLabel(segment, label)" left>
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" icon>
                              <v-icon color="white">mdi-close</v-icon>
                            </v-btn>
                          </template>
                          <span>Delete</span>
                        </v-tooltip>
                      </v-avatar>
                      {{ label }}
                      <v-slide-x-transition leave-absolute>
                        <v-avatar @click="editLabel" v-show="hover" right>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn v-bind="attrs" v-on="on" icon>
                                <v-icon color="accent">mdi-pencil</v-icon>
                              </v-btn>
                            </template>
                            <span>Edit</span>
                          </v-tooltip>
                        </v-avatar>
                      </v-slide-x-transition>
                      <!-- <v-avatar right>
                      <v-icon color="error">mdi-window-close</v-icon>
                    </v-avatar> -->
                    </v-chip>
                  </v-hover>
                </div>
                <!-- <v-row align="start">
                  <v-col cols="3"> </v-col>
                  <v-col cols="8"></v-col>
                  <v-col cols="1"></v-col>
                </v-row>
                {{ segment }} -->
              </div>
              <v-divider class="mt-1"></v-divider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-2"> mdi-form-select </v-icon>
                Quick Form
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <!-- <v-chip
                class="primary--text"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New User
              </v-chip> -->
            </v-card-title>
            <v-card-text>
              <v-window v-model="segmentFormStep">
                <v-window-item :value="1">
                  <NewSegmentForm />
                </v-window-item>
                <v-window-item :value="2">
                  <NewLabelForm />
                </v-window-item>
                <v-window-item :value="3">
                  <EditSegmentForm />
                </v-window-item>
                <v-window-item :value="4">
                  <EditLabelForm />
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import segmentData from "@/data/Segments.json";
import NewSegmentForm from "./forms/NewSegmentForm.vue";
import EditSegmentForm from "./forms/EditSegmentForm.vue";
import NewLabelForm from "./forms/NewLabelForm.vue";
import EditLabelForm from "./forms/EditLabelForm.vue";

export default {
  data() {
    return {
      segments: segmentData,
      segmentFormStep: 1,
    };
  },
  methods: {
    deleteLabel(segment, label) {
      console.log({ segment, label });
      // const index = segment.labels.indexOf(label);
      // if (index > -1) {
      //   segment.labels.splice(index, 1);
      // }
    },
    editLabel() {
      console.log("edit label");
    },
  },
  components: { NewSegmentForm, EditSegmentForm, NewLabelForm, EditLabelForm },
};
</script>

<style>
</style>