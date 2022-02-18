<template>
  <div class="targetting-page">
    <transition name="router-anim">
      <router-view />
    </transition>
    <v-overlay :value="overlay" :opacity="0.8" style="padding-left: 256px;">
      <v-row>
        <p class="font-weight-bold display-1">Coming Soon...!</p>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
// import TrackingEventsList from "../features/Targeting/blocks/TrackingEventsList.vue";
export default {
  // components: { TrackingEventsList },
  data() {
    return {
      subroutes: [
        { title: "Targetting", route: "app.targeting.targeting" },
        { title: "Tracking Events", route: "app.targeting.events" },
        { title: "Tracking Goals", route: "app.targeting.goals" },
        { title: "Targetting Rules", route: "app.targeting.rules" },
      ],
      overlay: true,
    };
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