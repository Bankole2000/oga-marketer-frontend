<template>
  <div class="contacts-page">
    <transition name="router-anim">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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