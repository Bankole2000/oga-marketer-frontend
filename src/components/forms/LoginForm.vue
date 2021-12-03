<template>
  <div class="login-form">
    <v-row>
      <v-col cols="12">
        <v-text-field
          type="email"
          label="Email"
        />
        <v-text-field
          type="password"
          label="Password"
        />
        <div class="d-flex align-center">
          <router-link to="/">
            <p class="mb-0">
              Forgot Password?
            </p>
          </router-link>
          <v-spacer />
          <v-checkbox label="Remember me" />
        </div>
        <div class="d-flex px-auto">
          <v-btn
            large
            class="mx-auto gradient white--text text-capitalize px-10 curved"
          >
            Login
          </v-btn>
        </div>
        <div class="d-flex align-center my-8">
          <v-divider />
          <p class="mb-0 mx-4">
            Or
          </p>
          <v-divider />
        </div>
        <div class="d-flex px-auto">
          <v-btn
            large
            class="mx-auto light primary--text text-capitalize px-10 curved"
          >
            <v-img
              :aspect-ratio="1"
              width="20"
              class="mr-1"
              :src="require('@/assets/imgs/logos/google-icon.png')"
            />
            Login With Google
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>