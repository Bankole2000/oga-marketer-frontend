<template>
  <div class="message-page">
    <div
      class="d-flex align-center justify-center rgradient"
      style="width: 100vw; height: 100vh"
    >
      <div class="d-flex flex-column align-center justify-center">
        <v-img
          min-width="100"
          class="pa-0"
          :src="require('@/assets/Ogamarketer-logo-final-icon-only.svg')"
        />
        <p class="white--text text-h4 mt-2 mb-4">
          <strong>Oga</strong>Marketer
        </p>
        <div>
          <v-btn large class="light curved text-capitalize mb-8 mt-4"
            >Setup Assistant</v-btn
          >
        </div>
        <router-link :to="{ name: 'app.dashboard' }">
          <p class="white--text headline text-center mt-16 pt-16 mb-0">
            Go to dashbaord
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>