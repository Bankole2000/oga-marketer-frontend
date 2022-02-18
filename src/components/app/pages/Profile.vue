<template>
  <div class="profiler">
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      subroutes: [
        { title: "My Profile", route: "app.profile.my-profile" },
        { title: "Payment Methods", route: "app.profile.cards" },
        { title: "Billing History", route: "app.profile.billing" },
      ],
      overlay: true
    };
  },
    methods: {
    ...mapActions({
      setRoutes: "ui/setSubroutes",
    }),
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