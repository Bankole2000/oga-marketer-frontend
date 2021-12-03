<template>
  <div class="login-page">
    <div style="height: 100vh; width: 100vw; display: flex">
      <div
        style="height: 100vh; flex: 3; display: flex; align-items: center"
        class="rgradient pl-8"
      >
        <v-img
          max-width="400"
          class="pl-1"
          :src="require('@/assets/Ogamarketer-logo-final.svg')"
        />
      </div>
      <div
        style="
          height: 100vh;
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center flex-column justify-center">
                <DynamicIcon
                  :primary="primary"
                  :width="100"
                  :height="100"
                />
                <p class="text-h4 primary--text">
                  <span class="font-weight-bold">Oga</span>marketer
                </p>
              </div>
              <div class="px-16">
                <LoginForm />
              </div>
              <p class="text-center pt-12">
                Are you new around here? <router-link :to="{name: 'pages.register'}">
                  <a>Sign up</a>
                </router-link>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicIcon from "../app/blocks/DynamicIcon.vue";
import LoginForm from "../forms/LoginForm.vue";
export default {
  components: {
    LoginForm,
    DynamicIcon,
  },
  data() {
    return {
      primary: this.$vuetify.theme.themes.light.primary,
    };
  },
};
</script>

<style>
</style>