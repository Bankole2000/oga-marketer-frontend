<template>
  <div class="new-contact-list-form">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Name"
            v-model="newContactListName"
          ></v-text-field>
          <div class="d-flex align-center">
            <p class="font-weight-bold title mb-0">Add Contacts</p>
            <v-spacer></v-spacer>
            <v-btn icon class="light">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContactListName: "Students",
    };
  },
};
</script>

<style>
</style>