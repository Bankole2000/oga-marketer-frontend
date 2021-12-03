<template>
  <div class="top-bar">
    <v-app-bar
      app
      height="71"
      class="pa-0 ma-0"
      elevate-on-scroll
    >
      <v-card
        width="100%"
        height="72"
        flat
        tile
        :style="{
          borderBottom: `${
            pageLoading ? '0px' : '1px'
          } solid var(--primary-light)`,
        }"
      >
        <div style="min-height: 100%; display: flex; align-items: center">
          <div
            v-if="subroutes.length"
            class="
              page-subitems
              d-flex
              gradient
              align-center
              justify-start
              px-8
              white--text
            "
            style="min-height: 71px; flex-grow: 1"
          >
            <div
              v-for="(route, i) in subroutes"
              :key="i"
              :style="{
                borderBottom: `${
                  $route.name.includes(route.route) ? '2px' : '0px'
                } solid white`,
                cursor: 'pointer',
              }"
              class="mx-4"
              @click="$router.push({ name: route.route })"
            >
              <p class="mb-0 text-capitalize">
                {{ route.title }}
              </p>
            </div>
          </div>
          <div
            v-else
            class="d-flex align-center justify-start px-8"
            style="flex-grow: 1"
          >
            <v-text-field
              solo
              flat
              hide-details
              label="Search"
              prepend-inner-icon="mdi-magnify"
            />
          </div>
          <div class="notifications d-flex">
            <v-btn
              v-if="subroutes.length"
              icon
              class="mx-2"
            >
              <v-icon size="24">
                mdi-magnify
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-1"
            >
              <v-icon size="24">
                mdi-information
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-2"
            >
              <v-icon size="24">
                mdi-bell
              </v-icon>
            </v-btn>
          </div>

          <v-divider
            vertical
            class="ma-3"
          />

          <div class="profile d-flex align-center">
            <v-btn
              text
              tile
              class="text-capitalize mx-4"
            >
              Timothy Adams<v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
            <AvatarImage class="mr-8" />
          </div>
        </div>
        <v-progress-linear
          :active="false"
          :indeterminate="true"
          absolute
          bottom
          color="primary accent-4"
        />
      </v-card>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarImage from "../blocks/AvatarImage.vue";
export default {
  components: {
    AvatarImage,
  },
  props: {
    // subRoutes: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      pageLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      subroutes: "ui/subroutes",
    }),
  },
};
</script>

<style>
.v-application .v-toolbar__content,
.v-application .v-toolbar {
  padding: 0px !important;
}
</style>