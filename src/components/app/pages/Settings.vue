<template>
  <div class="settings">
    <h1>Settings</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      subroutes: [
        {title: 'Notification Settings', route: 'app.settings.notifications'}, 
        {title: "Code Installation", route: 'app.settings.codeInstallation'}
      ]
    }
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
}
</script>

<style>

</style>