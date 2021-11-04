<template>
  <div class="app-pages">
    <AppNav />
    <TopBar />
    <h1>App Pages</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './common/AppNav.vue'
import TopBar from './common/TopBar.vue'
export default {
  components: { AppNav, TopBar },

}
</script>

<style>

</style>