<template>
  <div class="targeting">
    <TargetingHeader />
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="0"
            fill-height
            class="d-flex flex-column align-center pa-4 bg-primary-lt"
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
                32% <br />
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
              <p class="mb-0 caption mr-1">Conversions</p>
              <v-spacer />
              <p class="mb-n1" style="font-size: 8px">32 Visitors</p>
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
              <p class="mb-0 caption mr-1">Impressions</p>
              <v-spacer />
              <p class="mb-n1" style="font-size: 8px">142 Visitors</p>
            </div>

            <!-- <v-responsive aspect-ratio="1">

                            </v-responsive> -->
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card class="elevated-light rounded-lg">
            <v-card-title class="pb-0 pt-2">
              Impressions & Conversions
            </v-card-title>
            <v-card-text style="height: 24vh">
              <!-- <v-chart
                ref="chart"
                :options="options"
                :series="series"
                :type="type"
                :labels="labels"
                :colors="colors"
                :height="350"
              ></v-chart> -->
              <!-- :height="180" -->
              <AreaChart :chartData="chart" :aspectRatio="2.2" />
              <!-- :chartOptions="chart.chartOptions" -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="1">
          <v-card class="elevated-light pa-2">
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
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="px-6 pb-6 pt-8 rounded-lg elevated-light">
              <v-layout row :wrap="false" align-center>
                <v-flex xs2 class="d-flex">
                  <p class="font-weight-bold pl-4">Targets</p>
                </v-flex>
                <v-flex xs2 class="d-flex">
                  <p class="font-weight-bold pl-4">Domain</p>
                </v-flex>
                <v-flex md2>
                  <p class="font-weight-bold pl-4">Goal</p>
                </v-flex>
                <v-flex md3 class="d-flex">
                  <p class="font-weight-bold pl-4">Tracking Events</p>
                </v-flex>
                <v-flex md1>
                  <p class="font-weight-bold pl-4">Actions</p>
                </v-flex>
              </v-layout>
            <v-divider></v-divider>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="px-0">
                  <div class="light primary--text pa-4 d-flex align-center justify-space-between">
                    <p class="mb-0 headline">
                      You don't have any registered Targets 
                    </p>
                    <div>
                      <v-btn :to="{ name: 'app.targeting.targeting.new' }" class="gradient white--text curved px-6 text-capitalize mx-2">
                        <v-icon left>mdi-plus</v-icon>
                        Create A New Target
                      </v-btn>
                      <!-- <v-btn @click="() => {}" class="light primary--text curved px-6 text-capitalize">
                        <v-icon left>mdi-download</v-icon>
                        Import Contacts 
                      </v-btn> -->
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <TargetsList :targets="targets" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TargetingHeader from "./blocks/TargetingHeader.vue";
import TargetsList from "./blocks/targets/TargetsList.vue";
import MetricCard from "../../blocks/MetricCard.vue";
import AreaChart from "../../blocks/charts/AreaChart.vue";
import chart from "@/data/chartData.js";
export default {
  components: { TargetingHeader, TargetsList, MetricCard, AreaChart },
  data() {
    return {
      chart,
      targets: [],
    };
  },
  mounted() {
    console.log({ chart: this.chart, chartImport: chart() });
  },
};
</script>

<style>
</style>