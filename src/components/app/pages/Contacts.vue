<template>
  <div class="contacts-page">
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
import { mapActions, mapGetters } from "vuex";
// import ContactCard from "../blocks/ContactCard.vue";

export default {
  components: {
    // ContactCard,
  },
  data() {
    return {
      subroutes: [
        { title: "My Contacts", route: "app.contacts.my-contacts" },
        { title: "Contact Lists", route: "app.contacts.lists" },
        { title: "Segments & Labels", route: "app.contacts.segments" },
      ],
      overlay: false,
    };
  },
  computed: {
    ...mapGetters({
      featureFlags: 'ui/featureFlags'
    }), 
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
  mounted(){
    console.log({route: this.$route});
    const {name} = this.$route;
    const routeFeature = name.split('.')[1];
    console.log({routeFeature, featureFlags: this.featureFlags, featureAvailable: this.featureFlags[routeFeature]})
    this.overlay = !this.featureFlags[routeFeature]
  }
};
</script>

<style>
</style>