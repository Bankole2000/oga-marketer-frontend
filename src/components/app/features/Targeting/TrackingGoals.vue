<template>
  <div class="tracking-goals">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Tracking Goals</p>
      <v-divider vertical class="ma-4" />
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
      >
        <!-- @click="$router.push({ name: 'app.campaigns.new' })" -->
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-plus </v-icon>
        </v-avatar>
        New Tracking Goal
      </v-chip>
      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
      <v-btn class="gradient curved white--text text-capitalize">
        <v-icon left> mdi-help-circle-outline </v-icon>Help
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>