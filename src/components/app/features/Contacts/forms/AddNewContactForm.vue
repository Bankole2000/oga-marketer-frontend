<template>
  <div class="add-new-contact-form">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field label="First Name"></v-text-field>
          <v-text-field label="Last Name"></v-text-field>
          <v-text-field label="Email"></v-text-field>
          <v-text-field label="Telephone"></v-text-field>
          <v-select label="Add Contact to List"></v-select>
          <v-select chips label="Tags"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>