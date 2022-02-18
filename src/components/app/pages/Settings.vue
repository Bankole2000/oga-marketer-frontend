<template>
  <div class="settings">
    <transition name="router-anim">
      <router-view />
    </transition>
    <v-overlay :value="overlay" absolute :opacity="0.8" style="padding-left: 256px;">
      <v-row>
        <p class="font-weight-bold display-1">Coming Soon...!</p>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subroutes: [
        { title: "Notification Settings", route: "app.settings.notifications" },
        { title: "Code Installation", route: "app.settings.codeInstallation" },
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