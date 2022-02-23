<template>
  <div class="startup-assistant-page">
    <transition name="router-anim">
      <router-view />
    </transition>
    <v-overlay :value="overlay" :opacity="0.8" style="padding-left: 256px;">
      <v-row>
        <v-slide-x-transition>
        <div v-show="overlayContent">
        <p class="font-weight-bold display-1 text-center">Startup Assistant Coming Soon!</p>
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
import { mapActions, mapGetters } from "vuex";
// import ContactCard from "../blocks/ContactCard.vue";

export default {
  components: {
    // ContactCard,
  },
  data() {
    return {
      // subroutes: [
      //   { title: "My Contacts", route: "app.contacts.my-contacts" },
      //   { title: "Lists", route: "app.contacts.lists" },
      // ],
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