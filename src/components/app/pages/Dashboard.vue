<template>
  <div class="dashboard">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">
        Good morning, Timothy
      </p>
      <v-spacer />
      <v-btn
        class="gradient curved white--text text-capitalize"
      >
        <v-icon left>
          mdi-help-circle-outline
        </v-icon>Help
      </v-btn>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-tabs v-model="tab">
            <v-tabs-slider color="accent" />
            <v-tab class="text-capitalize text-h6">
              Overview
            </v-tab>
            <v-tab class="text-capitalize text-h6">
              Activities
            </v-tab>
          </v-tabs>
          <v-divider />
          <v-tabs-items
            v-model="tab"
            style="min-height: calc(100vh - 200px)"
          >
            <v-tab-item>
              <v-container class="px-1">
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-card
                      flat
                      class="rounded-lg elevated-light px-2 py-1"
                    >
                      <v-card-title class="d-flex pb-0">
                        <div
                          style="flex-grow: 1"
                          class="pr-16"
                        >
                          <v-icon class="mr-4">
                            mdi-bullseye
                          </v-icon> Targetting
                          <v-divider class="bg-primary-lt mt-1" />
                        </div>

                        <v-chip
                          class="primary--text"
                          style="background-color: var(--primary-light)"
                        >
                          <v-avatar left>
                            <v-icon
                              color="primary"
                              size="24"
                            >
                              mdi-plus
                            </v-icon>
                          </v-avatar>
                          New Target
                        </v-chip>
                      </v-card-title>
                      <v-row class="ma-0 pa-0">
                        <v-col cols="4">
                          <v-card
                            elevation="0"
                            fill-height
                            class="
                              d-flex
                              flex-column
                              align-start
                              pa-4
                              bg-primary-lt
                            "
                          >
                            <v-progress-circular
                              :rotate="-90"
                              :size="125"
                              :width="15"
                              :value="32"
                              class="dual-progress"
                              color="accent"
                            >
                              <p class="mb-0 caption text-center">
                                32% <br>
                                Conversions
                              </p>
                            </v-progress-circular>
                            <div class="mt-4 d-flex align-center">
                              <v-icon
                                color="accent"
                                size="12"
                                class="mr-1 ml-n1"
                                style="margin-bottom: 2px"
                              >
                                mdi-circle
                              </v-icon>
                              <p class="mb-0 caption mr-1">
                                Conversions
                              </p>
                              <v-spacer />
                              <p
                                class="mb-n1"
                                style="font-size: 8px"
                              >
                                32 Visitors
                              </p>
                            </div>
                            <div class="mt-0 d-flex align-center">
                              <v-icon
                                color="secondary"
                                size="12"
                                class="mr-1 ml-n1"
                                style="margin-bottom: 2px"
                              >
                                mdi-circle
                              </v-icon>
                              <p class="mb-0 caption mr-1">
                                Impressions
                              </p>
                              <v-spacer />
                              <p
                                class="mb-n1"
                                style="font-size: 8px"
                              >
                                142 Visitors
                              </p>
                            </div>

                            <!-- <v-responsive aspect-ratio="1">

                            </v-responsive> -->
                          </v-card>
                        </v-col>
                        <v-col cols="6">
                          <div
                            v-for="i in 6"
                            :key="i"
                          >
                            <div class="d-flex align-end">
                              <p class="mb-0">
                                First time visitors
                              </p>
                              <v-spacer />
                              <small class="mb-0 caption">domain.co.uk</small>
                            </div>
                            <v-divider class="mb-3" />
                          </div>
                        </v-col>
                        <v-col cols="2">
                          <MetricCard
                            title="Active Targets"
                            :maj-f-z="'text-h5'"
                            :min-f-z="'caption text-center primary--text'"
                            :value="19"
                            :metric="'Targets'"
                            :color="'success'"
                            class="mb-2"
                          />
                          <MetricCard
                            title="Total Clicks"
                            :maj-f-z="'text-h5'"
                            :min-f-z="'caption text-center primary--text'"
                            :value="276"
                            :metric="'Clicks'"
                            :color="'primary'"
                            class="mb-2"
                          />
                          <MetricCard
                            title="Active Targets"
                            :maj-f-z="'text-h5'"
                            :min-f-z="'caption text-center primary--text'"
                            :value="43"
                            :metric="'Submits'"
                            :color="'primary'"
                          />
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-card
                      flat
                      class="elevated-light rounded-lg px-2 py-1"
                    >
                      <v-card-title class="d-flex pb-0">
                        <div
                          style="flex-grow: 1"
                          class="pr-16"
                        >
                          <v-icon class="mr-4">
                            mdi-bullhorn
                          </v-icon> Campaigns
                          <v-divider class="bg-primary-lt mt-1" />
                        </div>

                        <v-chip
                          class="primary--text"
                          style="background-color: var(--primary-light)"
                        >
                          <v-avatar left>
                            <v-icon
                              color="primary"
                              size="24"
                            >
                              mdi-plus
                            </v-icon>
                          </v-avatar>
                          New Campaign
                        </v-chip>
                      </v-card-title>
                      <v-row class="ma-0 pa-0">
                        <v-col cols="12">
                          <div
                            v-for="(item, i) in campaignStatuses"
                            :key="i"
                          >
                            <div class="d-flex align-end">
                              <p class="mb-0 truncate">
                                {{ campaignNames[i] }}
                              </p>
                              <v-spacer />
                              <p class="mb-0 caption">
                                Since: 09 Sep, 2019 - 13:04:28
                              </p>
                              <v-chip
                                style="min-width: 70px"
                                :color="campaignStatuColors[item]"
                                small
                                class="mx-3 d-flex justify-center"
                              >
                                {{ item }}
                              </v-chip>
                            </div>
                            <v-divider class="mt-1 mb-2" />
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="8">
                    <v-card>
                      <v-card-title class="d-flex pb-0">
                        <div
                          style="flex-grow: 1"
                          class="pr-16"
                        >
                          <v-icon class="mr-4">
                            mdi-gesture-double-tap
                          </v-icon>
                          Engagements
                          <v-divider class="bg-primary-lt mt-1" />
                        </div>

                        <v-select
                          dense
                          hide-details
                          :items="['Last 6 months']"
                          value="Last 6 months"
                          outlined
                        />
                        <!-- <v-chip
                          class="primary--text"
                          style="background-color: var(--primary-light)"
                        >
                          <v-avatar left>
                            <v-icon color="primary" size="24">mdi-plus</v-icon>
                          </v-avatar>
                          New Campaign
                        </v-chip> -->
                      </v-card-title>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card>
                      <v-card-title class="d-flex pb-0">
                        <div style="flex-grow: 1">
                          <v-icon class="mr-1">
                            mdi-account-box
                          </v-icon>
                          Contacts(21)
                          <v-divider class="bg-primary-lt mt-1" />
                        </div>

                        <v-chip
                          class="primary--text"
                          style="background-color: var(--primary-light)"
                        >
                          <v-avatar left>
                            <v-icon
                              color="primary"
                              size="24"
                            >
                              mdi-plus
                            </v-icon>
                          </v-avatar>
                          New Contact
                        </v-chip>
                      </v-card-title>
                      <v-container>
                        <v-row>
                          <v-col cols="4">
                            <MetricCard
                              :metric="'New Contacts'"
                              :min-f-z="'caption text-center'"
                              :maj-f-z="'text-h4'"
                              :value="+4"
                            />
                          </v-col>
                          <v-col cols="4">
                            <MetricCard
                              :metric="'Avg Customer Value'"
                              :min-f-z="'caption text-center'"
                              :maj-f-z="'text-h4'"
                              :value="23"
                            />
                          </v-col>
                          <v-col cols="4">
                            <MetricCard
                              :metric="'Avg Response Value'"
                              :min-f-z="'caption text-center'"
                              :maj-f-z="'text-h4'"
                              :value="42"
                            />
                          </v-col>
                        </v-row>
                        <p class="subtitle-1 mb-0 mt-4">
                          New Contacts (14)
                        </p>
                        <v-row>
                          <v-col cols="12">
                            <div
                              v-for="i in 2"
                              :key="i"
                              class="d-flex align-center my-2"
                            >
                              <AvatarImage />
                              <p class="mb-0 ml-4">
                                Patrick porter
                              </p>
                              <v-spacer />
                              <v-btn
                                icon
                              >
                                <v-icon
                                  color="success"
                                >
                                  mdi-pencil
                                </v-icon>
                              </v-btn>
                              <v-btn
                                icon
                              >
                                <v-icon
                                  color="error"
                                >
                                  mdi-trash-can
                                </v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item>
              <p>Activities Tab</p>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AvatarImage from "../blocks/AvatarImage.vue";
import MetricCard from "../blocks/MetricCard.vue";
export default {
  components: {
    MetricCard,
    AvatarImage,
  },
  data() {
    return {
      tab: null,
      campaignStatuses: [
        "active",
        "draft",
        "active",
        "inactive",
        "draft",
        "inactive",
      ],
      campaignNames: [
        "New Product on Sale",
        "Discount Campaign",
        "Customer Retainer-ship campaign",
        "Renewal Campaign",
        "April Mega Sales Campaign",
        "First Quarter Analysis",
      ],
      campaignStatuColors: {
        active: "success",
        draft: "",
        inactive: "accent",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    // console.log({ to, from, next });
    // this.setRoutes({ subroutes: [{ title: "test", route: "test" }] });
    next((vm) => {
      vm.$store.dispatch("ui/setSubroutes", {
        subroutes: [],
      });
      console.log({ vm });
    });
  },
};
</script>

<style>
.dual-progress .v-progress-circular__underlay {
  stroke: var(--secondary) !important;
}
</style>