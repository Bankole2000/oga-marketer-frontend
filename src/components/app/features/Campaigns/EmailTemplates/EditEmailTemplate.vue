<template>
  <div class="edit-email-template">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Edit Template - {template Name}</p>
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
        <span>Learn more about Email Templates</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <!-- Edit Email Templates Section -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>