<template>
  <div class="schedule-summary-step">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="elevated-light rounded-lg mb-4 px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4">mdi-text</v-icon>
                Summary
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <div>
                <p class="caption mb-0">Campaign Name</p>
                <p class="subtitle-1 mb-1">Christmas Sales</p>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <p class="caption mb-0">Campaign Type</p>
                <p class="subtitle-1 mb-1">Email Campaign</p>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <p class="caption mb-0">Selected List</p>
                <p class="subtitle-1 mb-1">Marketers List</p>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <p class="caption mb-0">Email Sender ID</p>
                <p class="subtitle-1 mb-1">timothy.adams@email.com</p>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <p class="caption mb-0">Email Template</p>
                <p class="subtitle-1 mb-1">Modern Advertisement Campaign</p>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-card-text>
          </v-card>
          <v-card class="elevated-light rounded-lg mb-4 px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4">mdi-send</v-icon>
                Test Email
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <div class="d-flex align-center">
                <div>
                  <p class="caption mb-0">Email Sender ID</p>
                  <p class="subtitle-1 mb-1">timothy.adams@email.com</p>
                </div>
                <v-spacer></v-spacer>
                <v-chip small class="bg-primary-lt">Send Test Email</v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="elevated-light rounded-lg mb-4 px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4">mdi-calendar-multiple</v-icon>
                Campaign Schedule
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <v-checkbox hide-details class="mt-0 mb-2">
                <template v-slot:label>
                  <div class="font-weight-bold">
                    <p class="mb-0">Begin Campaign Immediately</p>
                    <!-- <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="http://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Vuetify
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip> -->
                  </div>
                </template>
              </v-checkbox>
              <div class="d-flex align-center mb-2">
                <p class="mb-0 font-weight-bold">
                  Schedule Campaign Start Date and Time
                </p>
                <v-btn icon><v-icon>mdi-information-outline</v-icon></v-btn>
              </div>
              <v-row>
                <v-col cols="6">
                  <Datepicker />
                </v-col>
                <v-col cols="6">
                  <Timepicker />
                </v-col>
              </v-row>
              <div class="d-flex align-center mb-2">
                <p class="mb-0 font-weight-bold">Active Hours</p>
                <v-btn icon><v-icon>mdi-information-outline</v-icon></v-btn>
              </div>
              <v-row>
                <v-col cols="6">
                  <Timepicker label="From" />
                </v-col>
                <v-col cols="6">
                  <Timepicker label="To" />
                </v-col>
              </v-row>
              <v-checkbox hide-details class="mt-0 mb-2">
                <template v-slot:label>
                  <div class="font-weight-bold">
                    <p class="mb-0">Exempt Weekends</p>
                    <!-- <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="http://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Vuetify
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip> -->
                  </div>
                </template>
              </v-checkbox>
            </v-card-text>
          </v-card>
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4">mdi-tune</v-icon>
                Options
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <div>
                <p class="caption mb-0">Report to Team (optional)</p>
                <p class="subtitle-1 mb-1">Management Team</p>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex align-center">
                <p class="mb-0 font-weight-bold">Open / Read Tracking</p>
                <v-btn icon><v-icon>mdi-information-outline</v-icon></v-btn>
                <v-spacer></v-spacer>
                <div class="d-flex align-center justify-center">
                  <v-switch :value="true" hide-details class="my-0"></v-switch>
                </div>
              </div>
              <div class="d-flex align-center">
                <p class="mb-0 font-weight-bold">Link Tracking</p>
                <v-btn icon><v-icon>mdi-information-outline</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-switch hide-details class="my-0"></v-switch>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-center">
            <v-btn class="curved px-6 light text-capitalize mx-2">Back</v-btn>
            <v-btn class="curved px-6 gradient white--text text-capitalize mx-2"
              >Automation</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Datepicker from "../blocks/Datepicker.vue";
import Timepicker from "../blocks/Timepicker.vue";
// import Timepicker1 from "../blocks/Timepicker.vue";
// import Timepicker2 from "../blocks/Timepicker.vue";
export default { components: { Datepicker, Timepicker } };
</script>

<style>
</style>