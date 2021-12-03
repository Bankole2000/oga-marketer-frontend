<template>
  <div class="user-details-step-form my-2">
    <v-row class="d-flex flex-column">
      <v-col
        col="12"
        style="min-height: 50vh"
      >
        <v-text-field
          value="Timothy"
          label="First Name"
        />
        <v-text-field
          value="Adams"
          label="Last Name"
        />
        <v-text-field
          value="timothy.adams@gmail.com"
          hide-details
          label="Email"
        />
        <div class="d-flex">
          <v-spacer />
          <v-checkbox
            :value="true"
            hide-details
            class="mt-1"
            label="Use as default Email Sender ID"
          />
        </div>
        <v-text-field
          label="Phone Number"
          value="08012345678"
        >
          <template #prepend>
            <v-chip
              class="primary--text"
              label
            >
              +234 <v-icon>mdi-chevron-down</v-icon>
            </v-chip>
          </template>
        </v-text-field>
        <v-text-field
          value="12345678"
          :type="showPassword ? 'text': 'password'"
          label="Password"
          :append-icon="showPassword ? 'mdi-eye-off': 'mdi-eye'"
          @click:append="showPassword = !showPassword"
        />
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <div class="d-flex justify-center">
          <v-btn
            large
            class="light text-capitalize primary--text px-14 curved mx-4"
            @click="$emit('back')"
          >
            Back
          </v-btn>
          <v-btn
            :disabled="isLoading"
            :loading="isLoading"
            large
            :class="!isLoading ? 'gradient' : ''"
            class="text-capitalize white--text px-14 curved mx-4"
            @click="next"
          >
            Next
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showPassword: false,
      isLoading: false,
    }
  }, 
  methods: {
    next(){
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$emit('next')
      }, 1500);
    }
  }
}
</script>

<style>

</style>