<template>
  <div class="import-contacts-from-file-modal">
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="rounded-lg">
        <v-card-title class="headline">
          <span>Import Contacts</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-0">
          <p class="mt-4 mb-0">
            Already have your contacts in a SpreadSheet? Do a quick import from
            a <strong>.csv</strong> or <strong>xls</strong> file.
          </p>
        </v-card-text>
        <v-card-actions class="justify-center py-6">
          <v-btn
            class="gradient curved white--text text-capitalize px-8 mx-2"
            @click="showModal('importContactsModal', true)"
          >
            Import From File
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ImportContactsModal ref="importContactsModal" />
  </div>
</template>

<script>
import ImportContactsModal from "./ImportContactsModal.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
    showModal(ref, value) {
      const modal = this.$refs[ref];
      modal.show(value);
    },
  },
  components: { ImportContactsModal },
};
</script>

<style>
</style>