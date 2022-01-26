<template>
  <div class="campaigns-page">
    <transition name="router-anim">
      <router-view />
    </transition>
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