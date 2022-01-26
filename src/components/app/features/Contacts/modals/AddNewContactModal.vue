<template>
  <div class="add-new-contact-modal">
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="rounded-lg">
        <v-card-title class="headline">
          <span>Add Contact</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pb-0">
          <add-new-contact-form />
        </v-card-text>

        <v-card-actions class="justify-center py-6">
          <v-btn
            class="light curved text-capitalize px-8 mx-2"
            @click="dialog = false"
          >
            Back
          </v-btn>

          <v-btn
            class="gradient curved white--text text-capitalize px-8 mx-2"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddNewContactForm from "../forms/AddNewContactForm.vue";
export default {
  components: { AddNewContactForm },
  data() {
    return {
      dialog: false,
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