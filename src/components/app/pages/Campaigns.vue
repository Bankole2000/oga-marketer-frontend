<template>
  <div class="campaigns-page">
    <transition name="router-anim">
      <router-view />
    </transition>
    <v-overlay :value="overlay" :opacity="0.8" style="padding-left: 256px;">
      <v-row>
        <v-slide-x-transition>
        <div v-show="overlayContent">
        <p class="font-weight-bold display-1 text-center">Campaings Coming Soon!</p>
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
      subroutes: [
        { title: "Campaigns", route: "app.campaigns.my-campaigns" },
        {
          title: "Email Templates & IDs",
          route: "app.campaigns.email-templates",
        },
         {
          title: "Email Senders",
          route: "app.campaigns.email-senders",
        },
      ],
      overlay: false,
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