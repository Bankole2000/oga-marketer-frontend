<template>
  <div class="date-picker">
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          dense
          label="Date"
          prepend-inner-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      modal: false,
    };
  },
};
</script>

<style>
</style>