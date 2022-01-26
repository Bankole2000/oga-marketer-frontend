<template>
  <div class="top-bar">
    <v-app-bar app height="71" class="pa-0 ma-0" elevate-on-scroll>
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
              @click="$router.push({ name: route.route }).catch(() => {})"
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
            <v-btn v-if="subroutes.length" icon class="mx-2">
              <v-icon size="24"> mdi-magnify </v-icon>
            </v-btn>
            <v-btn icon class="mx-1">
              <v-icon size="24"> mdi-information </v-icon>
            </v-btn>
            <v-btn icon class="mx-2">
              <v-icon size="24"> mdi-bell </v-icon>
            </v-btn>
          </div>

          <v-divider vertical class="ma-3" />

          <div class="profile d-flex align-center">
            <v-menu
              min-width="220"
              rounded="lg"
              content-class="elevated-light"
              bottom
              offset-y
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  tile
                  v-bind="attrs"
                  v-on="on"
                  class="text-capitalize mx-4"
                >
                  Timothy Adams<v-icon right> mdi-chevron-down </v-icon>
                </v-btn>
              </template>
              <v-card class="px-4">
                <div class="d-flex px-4 pt-4 pb-2">
                  <p class="mb-0">
                    <strong> Status: </strong>
                    Online
                  </p>
                  <v-icon size="12" color="success" class="mx-4"
                    >mdi-circle</v-icon
                  >
                </div>
                <v-divider></v-divider>
                <v-list dense>
                  <div v-for="(item, i) in profileNavItems" :key="i">
                    <v-list-item>
                      <v-list-item-icon
                        ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
                      >
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                  </div>
                </v-list>
              </v-card>
            </v-menu>

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
      profileNavItems: [
        {
          text: "Account Settings",
          icon: "mdi-cog",
        },
        {
          text: "Feedback",
          icon: "mdi-chat",
        },
        {
          text: "Logout",
          icon: "mdi-power",
        },
      ],
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