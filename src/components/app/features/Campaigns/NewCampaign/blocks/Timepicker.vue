<template>
  <div class="time-picker">
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="time"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          dense
          v-model="time"
          :label="label"
          prepend-inner-icon="mdi-clock"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker v-if="modal" v-model="time" full-width>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Time",
    },
  },
  data() {
    return {
      time: null,
      modal: false,
    };
  },
};
</script>

<style>
</style>