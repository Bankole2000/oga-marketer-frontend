<template>
  <div class="data-upload-step">
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title
              class="font-weight-bold d-flex flex-column align-start"
            >
              <p class="mb-0">Data Upload</p>
              <p class="mb-0 subtitle-2">
                Let's get you all setup, shall we? First step, if you've got
                your contacts on a <strong>.csv</strong> or
                <strong>.xls</strong> file, do a quick import.
              </p>
            </v-card-title>
            <v-card-actions class="justify-center pb-6">
              <v-btn
                class="light primary--text curved px-8 mx-2 text-capitalize"
                >Back</v-btn
              >
              <v-btn
                @click="showModal('importContactsFromFileModal', true)"
                class="gradient white--text curved px-8 mx-2 text-capitalize"
                >Import Contacts</v-btn
              >
            </v-card-actions>
          </v-card>
          <a
            ><p class="text-right text-decoration-underline my-4">
              Skip step to Code Installation
            </p></a
          >
        </v-col>
      </v-row>
    </v-container>
    <ImportContactsFromFileModal ref="importContactsFromFileModal" />
  </div>
</template>

<script>
import ImportContactsFromFileModal from "../../Contacts/modals/ImportContactsFromFileModal.vue";
export default {
  components: { ImportContactsFromFileModal },
  methods: {
    showModal(ref, value) {
      const modal = this.$refs[ref];
      modal.show(value);
    },
  },
};
</script>

<style>
</style>