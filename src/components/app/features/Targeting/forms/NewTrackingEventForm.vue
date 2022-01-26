<template>
  <div class="new-tracking-event-form">
    <v-text-field cols="12" label="Event Name"></v-text-field>
    <v-text-field cols="12" label="Alias"></v-text-field>
    <v-row>
      <v-col cols="6">
        <v-text-field hide-details label="Type"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field hide-details label="Score"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field hide-details label="Page"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>