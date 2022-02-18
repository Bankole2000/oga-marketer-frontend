<template>
  <div class="campaigns-page">
    <transition name="router-anim">
      <router-view />
    </transition>
    <v-overlay :value="overlay" absolute :opacity="0.8" style="padding-left: 0px;">
      <v-row>
        <div class="d-flex flex-column justify-center">
        <p class="font-weight-bold display-1 text-center">Campaings Coming Soon...!</p>
        <div style="max-width: 50vw;">
          <video :src="require('@/assets/video/demo.mp4')" style="width: 40vw;" controls></video>
        </div>
        </div>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subroutes: [
        { title: "Campaigns", route: "app.campaigns.my-campaigns" },
        {
          title: "Email Templates & IDs",
          route: "app.campaigns.email-templates",
        },
      ],
      overlay: false,
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