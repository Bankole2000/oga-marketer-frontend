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

* {
  scrollbar-width: thin;
  /* scrollbar-color: rgba(155, 155, 155, 0.5) transparent; */
  scrollbar-color: transparent;
  transition: all 0.2s;
}

*:hover {
  /* scrollbar-color: rgba(155, 155, 155, 0.5) transparent; */
  scrollbar-color: #4ea7d0;
}

*::-webkit-scrollbar {
  width: 0px;
  opacity: 0;
  transition: all 0.3s ease;
}

*:hover::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  /* background-color: #28282833; */
  background-color: transparent;
  /* background-color: #4ea7d0; */
  border-radius: 10px;
  border: transparent;
}

*:hover::-webkit-scrollbar-thumb {
  background-color: #4ea7d0;
}
</style>