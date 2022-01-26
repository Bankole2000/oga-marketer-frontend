<template>
  <div class="step-four">
    <v-row>
      <v-col cols="6">
        <v-card class="elevated-light rounded-lg px-4">
          <v-card-title>
            <div style="flex-grow: 1" class="pr-16">
              <v-icon class="mr-4">mdi-text</v-icon>
              Summary
              <v-divider class="bg-primary-lt mt-1" />
            </div>
            <v-spacer></v-spacer>
            <p class="mb-0 primary--text subtitle-2 text-decoration-underline">
              Edit
            </p>
          </v-card-title>
          <v-card-text>
            <div>
              <p class="caption mb-0">Goal Name</p>
              <p class="subtitle-1 mb-1">ABC Retail Anniversary Sales</p>
            </div>
            <v-divider class="mb-4"></v-divider>
            <div>
              <p class="caption mb-0">Category</p>
              <p class="subtitle-1 mb-1">Sales</p>
            </div>
            <v-divider class="mb-4"></v-divider>
            <div>
              <p class="caption mb-0">Widget Type</p>
              <p class="subtitle-1 mb-1">Message</p>
            </div>
            <v-divider class="mb-4"></v-divider>
            <div>
              <p class="caption mb-0">Associated Events</p>
              <p class="subtitle-1 mb-1">
                Click on Button, Click on Link, Input Field
              </p>
            </div>
            <v-divider class="mb-4"></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card height="100%" class="elevated-light rounded-lg px-4">
          <v-card-title>
            <div style="flex-grow: 1" class="pr-16">
              <v-icon class="mr-4">mdi-target</v-icon>
              Target Schedule
              <v-divider class="bg-primary-lt mt-1" />
            </div>
            <v-spacer></v-spacer>
            <!-- <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p> -->
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
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-center py-4">
          <v-btn class="curved px-6 light text-capitalize mx-2">Back</v-btn>
          <v-btn
            @click="$router.push({ name: 'app.targeting' }).catch(() => {})"
            class="curved px-6 gradient white--text text-capitalize mx-2"
            >Complete</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Datepicker from "../blocks/Datepicker.vue";
import Timepicker from "../blocks/Timepicker.vue";
export default { components: { Datepicker, Timepicker } };
</script>

<style>
</style>