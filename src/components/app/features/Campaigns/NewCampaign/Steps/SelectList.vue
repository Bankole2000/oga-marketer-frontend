<template>
  <div class="select-list-step">
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-card class="rounded-lg elevated-light px-4 mb-8">
            <v-card-title>
              <div>
                <p class="mb-0 font-weight-bold">Select List</p>
                <p class="caption mb-0">
                  Select Lists to be associated with the New Campaign
                </p>
              </div>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-row class="d-flex flex-column">
                <v-col cols="12">
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="All lists (72)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Sample List (15)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Software Dev List (8)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Web Developers List (12)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Management List (5)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Business Development List (10)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex align-center">
                    <v-checkbox
                      class="mb-3"
                      hide-details
                      label="Marketers List (20)"
                    />
                    <v-spacer />
                    <!-- <v-btn icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn> -->
                  </div>
                  <v-divider />
                </v-col>
                <v-spacer />
                <v-col cols="12">
                  <div class="d-flex justify-center pb-4">
                    <v-btn
                      large
                      class="
                        light
                        text-capitalize
                        primary--text
                        px-14
                        curved
                        mx-4
                      "
                      @click="$emit('back')"
                    >
                      Back
                    </v-btn>
                    <v-btn
                      large
                      class="
                        gradient
                        text-capitalize
                        white--text
                        px-14
                        curved
                        mx-4
                      "
                      @click="$emit('next')"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>