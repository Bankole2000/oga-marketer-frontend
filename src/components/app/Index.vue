<template>
  <div class="app-pages">
    <AppNav />
    <TopBar />

    <v-slide-x-transition leave-absolute>
      <router-view />
    </v-slide-x-transition>
  </div>
</template>

<script>
import AppNav from "./common/AppNav.vue";
import TopBar from "./common/TopBar.vue";
export default {
  components: { AppNav, TopBar },
};
</script>

<style>
</style>