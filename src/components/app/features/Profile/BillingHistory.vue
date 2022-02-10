<template>
  <div class="billing-history">
      <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Billing History</p>
      <v-divider vertical class="ma-4" />

      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="gradient curved white--text text-capitalize"
          >
            <v-icon left> mdi-information-outline </v-icon>Info
          </v-btn>
        </template>
        <span>Learn more about Billing History and Subscriptions</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>