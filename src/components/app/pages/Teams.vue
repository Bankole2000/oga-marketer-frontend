<template>
  <div class="teams-page">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Users & Teams</p>

      <v-spacer></v-spacer>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="gradient curved white--text text-capitalize"
          >
            <v-icon left> mdi-information-outline </v-icon>Info
          </v-btn>
        </template>
        <span>Learn more about Teams</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg elevated-light px-4">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-account-circle-outline </v-icon>
                Users
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New User
              </v-chip>
            </v-card-title>
            <v-card-text class="pa-4">
              <div v-for="(user, i) in users" :key="i">
                <div class="d-flex align-center">
                  <v-avatar
                    size="48"
                    color="primary lighten-4"
                    class="my-2 mr-4"
                    style="border: 2px solid"
                  >
                    <v-img
                      :aspect-ratio="1"
                      :src="require(`@/assets/imgs/${user.avatarImage}`)"
                    />
                  </v-avatar>
                  <div>
                    <p class="mb-n1 subtitle-1">
                      {{ user.fullName }}
                    </p>
                    <div class="d-flex">
                      <p class="mb-0 caption">{{ user.email }}</p>
                      <v-divider vertical class="mx-2"></v-divider>
                      <p
                        class="mb-0 caption"
                        :class="`${user.roleColor}--text`"
                      >
                        {{ user.role }}
                      </p>
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <v-chip
                    small
                    v-for="(team, j) in user.teamsJoined"
                    class="bg-primary-lt mx-2"
                    :key="j"
                    >{{ team }}</v-chip
                  >
                  <div
                    class="ml-2"
                    style="
                      border-right: 1px solid lightgrey;
                      padding-bottom: 20px;
                    "
                  ></div>
                  <a href="" class="mx-4">Add to Team</a>
                  <a href="" class="mx-4">Edit</a>
                  <a href="" class="error--text mx-4">Delete</a>
                </div>
                <v-divider></v-divider>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="rounded-lg elevated-light my-4 px-4">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-account-group </v-icon>
                Teams
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New Team
              </v-chip>
            </v-card-title>
            <v-card-text class="pb-2">
              <div
                class="d-flex align-center my-4"
                v-for="(team, i) in teams"
                :key="i"
              >
                <div>
                  <p class="mb-0 subtitle-1">
                    {{ team.title }} ({{ team.memberCount }})
                  </p>
                  <p class="caption mb-0">
                    {{ team.description }}
                  </p>
                </div>
                <v-spacer></v-spacer>
                <a href="" class="mx-4">Add Member</a>
                <a href="" class="mx-4">Edit</a>
                <a href="" class="error--text mx-4">Delete</a>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay :value="overlay" :opacity="0.8" style="padding-left: 256px;">
      <v-row>
        <v-slide-x-transition>
        <div v-show="overlayContent">
        <p class="font-weight-bold display-1 text-center">Teams Coming Soon!</p>
        <div style="max-width: 50vw;">
          <video :src="require('@/assets/video/demo.mp4')" style="width: 40vw;" controls></video>
        </div>
        </div>
        </v-slide-x-transition>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [
        {
          fullName: "Timothy Adams",
          email: "timothy.adams@gmail.com",
          role: "manager",
          roleColor: "accent",
          isYou: true,
          teamsJoined: ["Management", "Marketing Team"],
          avatarImage: "avatarmale1.png",
        },
        {
          fullName: "Chijioka Amari",
          email: "chijioke.amari@gmail.com",
          role: "observer",
          roleColor: "info",
          isYou: false,
          teamsJoined: ["Marketing Team"],
          avatarImage: "avatarmale2.png",
        },
        {
          fullName: "Aisha Mohammed",
          email: "aisha.mohammed@gmail.com",
          role: "observer",
          roleColor: "info",
          isYou: false,
          teamsJoined: ["Software Team", "Marketing Team"],
          avatarImage: "avatarfemale.png",
        },
        {
          fullName: "Jennifer Abbey",
          email: "jennifer.abbey@gmail.com",
          role: "observer",
          roleColor: "info",
          isYou: false,
          teamsJoined: ["Marketing Team"],
          avatarImage: "avatarfemale2.png",
        },
      ],
      teams: [
        {
          title: "Management Team",
          memberCount: 6,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, libero.",
        },
        {
          title: "Marketing Team",
          memberCount: 12,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, libero.",
        },
        {
          title: "Software Team",
          memberCount: 7,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, libero.",
        },
      ],
      overlay: true,
      overlayContent: false,
    };
  },
  computed: {
    ...mapGetters({
      featureFlags: 'ui/featureFlags'
    })
  },
  mounted(){
    const {name} = this.$route;
    const routeFeature = name.split('.')[1];
    this.overlay = !this.featureFlags[routeFeature]
    setTimeout(() => {
      this.overlayContent = true;
    }, 500);
  },
  beforeRouteEnter(to, from, next) {
    // console.log({ to, from, next });
    // this.setRoutes({ subroutes: [{ title: "test", route: "test" }] });
    next((vm) => {
      vm.$store.dispatch("ui/setSubroutes", {
        subroutes: vm._data.subroutes || [],
      });
      console.log({ data: vm._data });
    });
  },
};
</script>

<style>
</style>