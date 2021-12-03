<template>
  <div class="targeting">
    <TargetingHeader />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4">
            <v-card-title class="pa-0 mb-4">
              <v-layout
                row
                :wrap="false"
                align-center
              >
                <v-flex
                  xs2
                  class="d-flex"
                >
                  <p class="mb-0 pl-4">
                    Targets
                  </p>
                </v-flex>
                <v-flex
                  xs2
                  class="d-flex"
                >
                  <p class="mb-0">
                    Domain
                  </p>
                </v-flex>
                <v-flex md2>
                  <p class="mb-0">
                    Goal
                  </p>
                </v-flex>
                <v-flex
                  md3
                  class="d-flex"
                >
                  <p class="mb-0 pl-4">
                    Tracking Events
                  </p>
                </v-flex>
                <v-flex md1>
                  <p class="mb-0 pl-4">
                    Actions
                  </p>
                </v-flex>
              </v-layout>
            </v-card-title>
            <TargetsList />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TargetingHeader from "./blocks/TargetingHeader.vue";
import TargetsList from "./blocks/targets/TargetsList.vue";
export default {
  components: { TargetingHeader, TargetsList },
};
</script>

<style>
</style>