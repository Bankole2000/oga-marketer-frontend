<template>
  <div class="default-email-id-step-form">
    <v-row class="d-flex flex-column">
      <v-col cls="12" style="min-height: 50vh">
        <v-text-field value="timothy.adams@gmail.com" label="Default Email Sender ID">

        </v-text-field>
      <p>Go ahead and click the verification link in your email.</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12">
        <div class="d-flex justify-center">
          <v-btn large class="light text-capitalize primary--text px-14 curved mx-4">Back</v-btn>
          <v-btn large class="gradient text-capitalize white--text px-14 curved mx-4">Send Verification</v-btn>
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