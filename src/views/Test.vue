<template>
  <div class="test-page">
    <v-container>
      <v-row>
        <v-col cols="6">
          <LoginForm />
        </v-col>
        <v-col cols="6">
          <UserDetailsStepForm />
        </v-col>
        <v-col cols="6">
          <BusinessInfoStepForm />
        </v-col>
        <v-col cols="6">
          <UserGoalsStepForm />
        </v-col>
        <v-col cols="6">
          <DefaultEmailIdStepForm />
        </v-col>
        <v-col cols="2">
          <MetricCard />
        </v-col>
      </v-row>
    </v-container>
    <h1>Test Page</h1>
  </div>
</template>

<script>
import MetricCard from '../components/app/blocks/MetricCard.vue';
import LoginForm from "../components/forms/LoginForm.vue";
import BusinessInfoStepForm from '../components/forms/register/BusinessInfoStepForm.vue';
import DefaultEmailIdStepForm from '../components/forms/register/DefaultEmailIdStepForm.vue';
import UserDetailsStepForm from '../components/forms/register/UserDetailsStepForm.vue';
import UserGoalsStepForm from '../components/forms/register/UserGoalsStepForm.vue';
export default {
  components: {
    LoginForm,
    UserDetailsStepForm,
    BusinessInfoStepForm,
    UserGoalsStepForm,
    DefaultEmailIdStepForm,
    MetricCard
  },
};
</script>

<style>
</style>