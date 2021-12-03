<template>
  <div class="business-info-step-form my-2">
    <v-row class="d-flex flex-column">
      <v-col
        col="12"
        style="min-height: 50vh"
      >
        <v-text-field
          value="ABC Retail Company"
          label="Business Name"
        />
        <v-select
          value="Retail"
          :items="['Retail']"
          label="What industry is your business in?"
        />
        <v-select
          value="50-100"
          :items="['50-100']"
          label="How big is your contact list?"
        />
        <v-text-field
          value="Pretoria, South Africa"
          label="Where is your business Located"
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
            large
            class="gradient text-capitalize white--text px-14 curved mx-4"
            @click="$emit('next')"
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

}
</script>

<style>

</style>