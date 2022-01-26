<template>
  <div class="campaign-type-step">
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-card class="elevated-light rounded-lg">
            <v-card-title> New Campaign </v-card-title>
            <v-card-text>
              <v-text-field
                label="Campaign Name*"
                v-model="campaignName"
              ></v-text-field>
              <p class="mb-0 px-4">Type of Campaign*</p>
              <v-item-group>
                <v-container>
                  <v-row>
                    <v-col
                      v-for="(campaignType, n) in campaignTypes"
                      :key="n"
                      cols="12"
                      md="12"
                      class="py-2"
                    >
                      <v-item v-slot:default="{ active, toggle }">
                        <v-card
                          :disabled="!campaignType.isAvailable"
                          @click="toggle"
                          flat
                          class="py-4"
                          :class="{
                            'primary white--text': active,
                            'bg-primary-lt':
                              !active && campaignType.isAvailable,
                            'grey lighten-3': !campaignType.isAvailable,
                          }"
                        >
                          <div class="d-flex align-center justify-center">
                            <v-icon
                              :color="active ? 'white' : ''"
                              class="mr-2"
                              >{{ campaignType.icon }}</v-icon
                            >
                            <p class="mb-0">
                              {{ campaignType.title }}
                              {{
                                campaignType.isAvailable ? "" : "(coming soon)"
                              }}
                            </p>
                          </div>
                        </v-card>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-card-text>
            <v-card-actions class="justify-center pb-8 pt-2">
              <v-btn
                class="light curved text-capitalize px-8 mx-2"
                @click="dialog = false"
              >
                Cancel
              </v-btn>

              <v-btn
                class="gradient curved white--text text-capitalize px-8 mx-2"
                @click="dialog = false"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campaignName: "Christmas Sales",
      campaignTypes: [
        {
          title: "Email Campaign",
          icon: "mdi-email",
          isAvailable: true,
        },
        {
          title: "SMS Campaign",
          icon: "mdi-cellphone-message",
          isAvailable: true,
        },
        {
          title: "Push Notifications",
          icon: "mdi-bell",
          isAvailable: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>