<template>
  <div class="new-email-template">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">New Email Template</p>
      <v-divider vertical class="ma-4" />
      <v-spacer></v-spacer>
      <!-- <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
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
      </v-tooltip> -->
      <v-btn
        @click="$router.go(-1)"
        outlined
        color="error"
        class="text-capitalize"
      >
        <v-icon left>mdi-chevron-left</v-icon>
        Back</v-btn
      >
    </div>
    <v-progress-linear indeterminate :active='loading' color="secondary"></v-progress-linear>
    <v-container>
      <v-row class="px-6">
        <v-col cols="6" class="mb-0 pb-0">
          <v-text-field v-model="templateName" placeholder="New email template name" append-icon="mdi-pencil" style="font-size: 2rem;"></v-text-field>
        </v-col>
          <EmailEditor
            ref="emailEditor"
            style="margin: 0 auto;"
            v-on:load="editorLoaded"
            v-on:ready="editorReady"
          />
        <v-col cols="12">

          <div class="d-flex align-center justify-center">
            <v-btn @click="saveDesign" class="text-capitalize gradient white--text curved mx-2">
              <v-icon left>mdi-content-save</v-icon>
              Save Design
            </v-btn>
            <v-btn @click="exportHtml" class="text-capitalize light primary--text curved mx-2">
              <v-icon left>mdi-export</v-icon>
              Export HTML
            </v-btn>
            <v-btn class="text-capitalize accent white--text curved mx-2">
              <v-icon left>mdi-eye</v-icon>
              Preview
            </v-btn>
            <v-btn @click="$router.go(-1)" outlined color="error" class="text-capitalize white--text curved mx-2">
              <v-icon left>mdi-close</v-icon>
              Cancel
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { EmailEditor } from 'vue-email-editor';

export default {
  components: {
    EmailEditor,
  },
  data(){
    return {
      loading: true,
      templateName: ''
    }
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    // called when the editor is created
    editorLoaded() {
      console.log('editorLoaded');
      // Pass the template JSON here
      // this.$refs.emailEditor.editor.loadDesign({});
    },
    // called when the editor has finished loading
    editorReady() {
      console.log('editorReady');
      this.loading = false;
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log('saveDesign', design);
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log('exportHtml', data);
      });
    },
  }
}
</script>

<style>
.text-editor-container {
  padding: 10px;
}
</style>