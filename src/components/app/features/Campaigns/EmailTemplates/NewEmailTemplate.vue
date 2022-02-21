<template>
  <div class="new-email-template">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">New Email Template</p>
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
        <!-- <div class="text-editor-container"> -->
          <div id="bar">
            <h1>Vue Email Editor (Demo)</h1>

            <button class="gradient curved white--text text-capitalize v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default" v-on:click="saveDesign">Save Design</button>
            <button class="gradient curved white--text text-capitalize v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default" v-on:click="exportHtml">Export HTML</button>
          </div>
          <!-- New Email Template Area -->
          <EmailEditor
            ref="emailEditor"
            v-on:load="editorLoaded"
            v-on:ready="editorReady"
          />
        <!-- </div> -->
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