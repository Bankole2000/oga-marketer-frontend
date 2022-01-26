<template>
  <div class="targetting-page">
    <transition name="router-anim">
      <router-view />
    </transition>
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