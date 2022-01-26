<template>
  <div class="widget-settings-form">
    <p>Widget Position</p>
    <div>
      <v-radio-group v-model="widgetPosition" row>
        <v-radio label="Top Left" value="radio-1"></v-radio>
        <v-spacer></v-spacer>
        <v-radio label="Top Right" value="radio-2"></v-radio>
        <br />
        <v-radio label="Bottom Left" value="radio-2"></v-radio>
        <v-spacer></v-spacer>
        <v-radio label="Bottom Right" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <p>Background Color</p>
    <v-row>
      <v-col cols="8">
        <v-text-field label="Font"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Font size"></v-text-field>
      </v-col>
    </v-row>
    <p>Font Color</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widgetPosition: "",
    };
  },
};
</script>

<style>
</style>