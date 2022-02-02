<template>
  <div class="code-installation-settings">
    <div class="page-header px-8" style="max-height: 88px">
      <p class="display-1 mb-0 grey--text text--darken-2">Code Installation</p>

      <v-spacer></v-spacer>

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
        <span>Learn more about Code Installation</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>
            This is a quick and easy way to get you all setup! All you have to
            do is copy the <strong>code snippet</strong> below and paste into
            our site's source code. If you know your way around or a re feeling
            brave, go for it! Else, simply email the code snippet to your site's
            developer by inputing their email and clicking the
            <strong>'Email Developer'</strong> button.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="7">
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title class="font-weight-bold">Do it Yourself</v-card-title>
            <v-card-text>
              <p>
                Might seem daunting, but we promise it really is a walk in the
                park! - just follow the simple steps below:
              </p>
              <p class="font-weight-bold">A. Copy the code snippet below:</p>
              <p class="mb-4">*** SPACE FOR CODE ***</p>
              <p class="font-weight-bold mb-1">
                B. Paste code snippet into site source code:
              </p>
              <p class="font-weight-light">
                i. Open your site code and paste code snippet immediately before
                the closing
                <kbd class="font-weight-bold">&lt;/head&gt;</kbd> tag. <br />
                ii. Close site code and return to this page.
              </p>
              <div class="d-flex align-center">
                <p class="font-weight-bold mb-0">C. Add domain:</p>
                <v-btn icon><v-icon>mdi-information-outline</v-icon></v-btn>
              </div>
              <p class="mb-0">
                Add the domain where the tracking code was pasted into the form
                field below. Note that, tracking will NOT work unless you add
                the doman
                <span class="grey--text text--lighten-1"
                  >(see <strong>doman whitelist</strong> for all registered
                  domains)</span
                >
              </p>
              <div class="d-flex align-center">
                <v-text-field placeholder="sampledomain.com"></v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                  small
                  class="light primary--text curved text-capitalize px-6"
                >
                  Add
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card class="elevated-light rounded-lg px-4 mb-4">
            <v-card-text>
              <p class="font-weight-bold">
                D. Verify Tracking Code Installation:
              </p>
              <p>
                That's all! Wasn't so difficult you see. All you have to do now
                is click to verify code installation.
              </p>
              <div>
                <v-btn
                  small
                  class="light curved px-4 primary--text text-capitalize"
                >
                  Verify Installation
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title class="font-weight-bold"
              >Email a Developer</v-card-title
            >
            <v-card-text>
              <p>
                It's okay to be on the safe side too. Let the developers handle
                this, else, why do we pay them?
              </p>
              <div class="d-flex align-center">
                <v-text-field placeholder="developer@email.com"> </v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                  small
                  class="light curved px-6 primary--text text-capitalize"
                >
                  Email Developer
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>