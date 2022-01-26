<template>
  <div class="import-contacts-modal">
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="rounded-lg">
        <v-card-title class="headline d-flex align-start">
          <div>
            <p class="mb-0">Import Contacts</p>
            <p class="mb-0 subtitle-2">
              Match Columns to respective Contact Fields
            </p>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false"
            ><v-icon>mdi-window-close</v-icon></v-btn
          >
        </v-card-title>

        <v-card-text>
          <v-layout row :wrap="false" align-center class="px-3 pt-6">
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0"><strong>Column to import</strong></p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Matching Contact Field</p></v-flex
            >
          </v-layout>
          <v-divider class="mt-4"></v-divider>
          <v-layout row :wrap="false" align-center class="px-3 pt-6">
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Name</p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start">
              <v-select
                label="Contact Field"
                hide-details
                class="py-0"
                :items="contactFields"
              ></v-select>
            </v-flex>
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Surname</p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start">
              <v-select
                label="Contact Field"
                hide-details
                class="py-0"
                :items="contactFields"
              ></v-select>
            </v-flex>
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Date of Birth</p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start">
              <v-select
                label="Contact Field"
                hide-details
                class="py-0"
                :items="contactFields"
              ></v-select>
            </v-flex>
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Personal Address</p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start">
              <v-select
                label="Contact Field"
                hide-details
                class="py-0"
                :items="contactFields"
              ></v-select>
            </v-flex>
            <v-flex xs6 class="d-flex justify-start"
              ><p class="mb-0">Business Name</p></v-flex
            >
            <v-flex xs6 class="d-flex justify-start">
              <v-select
                label="Contact Field"
                hide-details
                class="py-0"
                :items="contactFields"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions class="justify-center pb-6">
          <v-btn class="light primary--text curved text-capitalize px-6 mx-2">
            Back
          </v-btn>

          <v-btn class="gradient white--text curved text-capitalize px-6 mx-2">
            Test Import
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      fileColumns: [
        "Name",
        "Surname",
        "Date of Birth",
        "Personal Address",
        "Business Name",
      ],
      contactFields: [
        "First Name",
        "Last Name",
        "Do not import",
        "Address",
        "Company",
      ],
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
  },
};
</script>

<style>
</style>