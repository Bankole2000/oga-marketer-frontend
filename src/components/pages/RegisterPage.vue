<template>
  <div class="register-page">
    <div style="height: 100vh; width: 100vw; display: flex">
      <div
        style="
          height: 100vh;
          flex: 3;
          display: flex;
          flex-direction: column;
          width: 100%;
        "
        class="rgradient pl-16"
      >
        <div style="flex: 1" class="py-8">
          <v-img
            max-width="400"
            class="pl-1"
            :src="require('@/assets/Ogamarketer-logo-final.svg')"
          />
        </div>
        <div style="flex: 10; display: flex; align-items: center" class="pb-16">
          <v-window v-model="step" vertical>
            <v-window-item
              v-for="(item, i) in stepMessages"
              :key="i"
              :value="i"
            >
              <!-- {{ item }} -->
              <p class="white--text headline mb-16" v-html="stepMessage(i)"></p>
            </v-window-item>
          </v-window>
        </div>
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
                <DynamicIcon :primary="primary" :width="100" :height="100" />
                <p class="text-h4 primary--text">
                  <span class="font-weight-bold">Oga</span>marketer
                </p>
              </div>
              <div class="px-10">
                <v-window v-model="step" class="px-4">
                  <v-window-item :value="1">
                    <UserDetailsStepForm
                      @back="$router.go(-1)"
                      @next="step = 2"
                    />
                  </v-window-item>
                  <v-window-item :value="2">
                    <BusinessInfoStepForm @back="step = 1" @next="step = 3" />
                  </v-window-item>
                  <v-window-item :value="3">
                    <UserGoalsStepForm @back="step = 2" @next="step = 4" />
                  </v-window-item>
                  <v-window-item :value="4">
                    <DefaultEmailIdStepForm
                      @back="step = 3"
                      @next="
                        $router.push({ name: 'pages.complete' }).catch(() => {})
                      "
                    />
                  </v-window-item>
                </v-window>
              </div>
              <p class="text-center pt-12">
                Already have an account with us?
                <router-link :to="{ name: 'pages.login' }">
                  <a>Log in</a>
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
import BusinessInfoStepForm from "../forms/register/BusinessInfoStepForm.vue";
import DefaultEmailIdStepForm from "../forms/register/DefaultEmailIdStepForm.vue";
import UserDetailsStepForm from "../forms/register/UserDetailsStepForm.vue";
import UserGoalsStepForm from "../forms/register/UserGoalsStepForm.vue";
export default {
  components: {
    DynamicIcon,
    UserDetailsStepForm,
    UserGoalsStepForm,
    DefaultEmailIdStepForm,
    BusinessInfoStepForm,
  },
  data() {
    return {
      primary: this.$vuetify.theme.themes.light.primary,
      step: 1,
      name: "John",
      stepMessages: ["Hey", "Why", "Who", "What", "Where"],
    };
  },
  computed: {
    // stepMessages(){
    //   return [`Hello ${this.name}`]
    // }
  },
  methods: {
    stepMessage(e) {
      switch (e) {
        case 1:
          return `Let's get you all setup. Tell us a bit about yourself.<br />&nbsp;`;
        case 2:
          return `You're welcome ${this.name}, <br /> Tell us about your business. So we can personalize your experience.`;
        case 3:
          return `Fantastic, <br /> What goals would you like to achieve with <strong>OgaMarketer</strong>?`;
        case 4:
          return `Almost done... just one more thing.<br />&nbsp;`;
        default:
          return "";
      }
    },
  },
};
</script>

<style>
</style>