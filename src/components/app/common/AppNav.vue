<template>
  <div class="app-nav">
    <v-navigation-drawer permanent app class="gradient">
      <div
        style="
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        class="primary"
      >
        <DynamicIcon />
      </div>
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>
      <div>
        <div>
          <div style="display: flex; flex-direction: column" class="white">
            <div
              style="flex: 1; transition: all 0.2s ease"
              :class="{ 'rounded-br-xl': isActiveRoute('app.dashboard') }"
              class="gradient"
            >
              &nbsp;
            </div>
            <div style="flex: 4" class="gradient pl-4">
              <div
                @click="$router.push({ name: 'app.dashboard' })"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  cursor: pointer;
                  transition: all 0.2s ease;
                "
                class="px-4 py-2"
                :class="
                  isActiveRoute('app.dashboard')
                    ? 'rounded-tl-xl rounded-bl-xl white primary--text'
                    : 'white--text'
                "
              >
                <v-icon
                  :color="isActiveRoute('app.dashboard') ? 'primary' : 'white'"
                  class="mr-4 mb-1"
                  size="20"
                  >mdi-view-dashboard</v-icon
                >
                Dashboard
              </div>
            </div>
            <div
              style="flex: 1; transition: all 0.2s ease"
              :class="{ 'rounded-tr-xl': isActiveRoute('app.dashboard') }"
              class="gradient"
            >
              &nbsp;
            </div>
          </div>
          <div class="px-4">
            <v-divider
              class="primary lighten-1"
              :class="isActiveRoute('app.contacts') ? 'mb-5' : 'mb-5'"
            ></v-divider>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              transition: all 0.2s ease;
            "
            class="white"
            v-for="(item, i) in appNavItems"
            :key="i"
          >
            <div
              v-show="isActiveRoute(item.route)"
              style="flex: 1; transition: all 0.2s ease"
              :class="{ 'rounded-br-xl': isActiveRoute(item.route) }"
              class="gradient"
            >
              &nbsp;
            </div>

            <div
              style="flex: 4; cursor: pointer; transition: all 0.2s ease"
              @click="$router.push({ name: item.route })"
              class="gradient pl-4"
              :class="isActiveRoute(item.route) ? 'py-0' : 'py-2'"
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  transition: all 0.2s ease;
                "
                class="px-4 py-2"
                :class="
                  isActiveRoute(item.route)
                    ? 'rounded-tl-xl rounded-bl-xl white primary--text elevated-light'
                    : 'white--text'
                "
              >
                <v-icon
                  :color="isActiveRoute(item.route) ? 'primary' : 'white'"
                  class="mr-4 mb-1"
                  size="20"
                  >{{ item.icon }}</v-icon
                >
                {{ item.title }}
              </div>
            </div>

            <div
              v-show="isActiveRoute(item.route)"
              style="flex: 1; transition: all 0.2s ease"
              :class="{ 'rounded-tr-xl': isActiveRoute(item.route) }"
              class="gradient"
            >
              &nbsp;
            </div>
          </div>
          <div class="px-4">
            <v-divider
              class="primary lighten-1"
              :class="isActiveRoute('app.targeting') ? 'my-5' : 'my-5'"
            ></v-divider>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              transition: all 0.2s ease;
            "
            class="white"
            v-for="(item, i) in otherNavItems"
            :key="i"
          >
            <v-expand-transition>
              <div
                v-show="isActiveRoute(item.route)"
                style="flex: 1; transition: all 0.2s ease"
                :class="{ 'rounded-br-xl': isActiveRoute(item.route) }"
                class="gradient"
              >
                &nbsp;
              </div>
            </v-expand-transition>
            <div
              style="flex: 4; cursor: pointer; transition: all 0.2s ease"
              @click="$router.push({ name: item.route })"
              class="gradient pl-4"
              :class="isActiveRoute(item.route) ? 'py-0' : 'py-2'"
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  transition: all 0.2s ease;
                "
                class="px-4 py-2"
                :class="
                  isActiveRoute(item.route)
                    ? 'rounded-tl-xl rounded-bl-xl white primary--text'
                    : 'white--text'
                "
              >
                <v-icon
                  :color="isActiveRoute(item.route) ? 'primary' : 'white'"
                  class="mr-4 mb-1"
                  size="20"
                  >{{ item.icon }}</v-icon
                >
                {{ item.title }}
              </div>
            </div>
            <v-expand-transition>
              <div
                v-show="isActiveRoute(item.route)"
                style="flex: 1; transition: all 0.2s ease"
                :class="{ 'rounded-tr-xl': isActiveRoute(item.route) }"
                class="gradient"
              >
                &nbsp;
              </div>
            </v-expand-transition>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DynamicIcon from "../blocks/DynamicIcon.vue";
export default {
  components: {
    DynamicIcon,
  },
  data() {
    return {
      otherNavItems: [
        {
          title: "Profile",
          icon: "mdi-account-circle-outline",
          route: "app.profile",
        },
        {
          title: "Settings",
          icon: "mdi-cog",
          route: "app.settings",
        },
      ],
      appNavItems: [
        {
          title: "Contacts",
          icon: "mdi-account-box",
          route: "app.contacts",
        },
        {
          title: "Teams",
          icon: "mdi-account-group",
          route: "app.teams",
        },
        {
          title: "Campaign",
          icon: "mdi-bullhorn",
          route: "app.campaign",
        },
        {
          title: "Targeting",
          icon: "mdi-bullseye",
          route: "app.targeting",
        },
      ],
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
  methods: {
    isActiveRoute(route) {
      console.log(this.$route);
      if (this.$route.name.includes(route)) return true;
      return false;
    },
  },
};
</script>

<style>
</style>