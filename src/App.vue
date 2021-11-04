<template>
  <v-app>
    <v-main>
      <transition name="router-anim">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  height: 50vh;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>