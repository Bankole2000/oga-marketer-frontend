
<template>
  <div class="step-two">
    <v-row>
      <v-col cols="4">
        <v-card class="elevated-light">
          <v-card-title>Widget Type</v-card-title>
          <v-divider />
          <v-card-text>
            <v-window v-model="step">
              <v-window-item :value="1">
                <div v-for="(type, i) in widgetTypes" :key="i">
                  <div
                    class="bg-primary-lt rounded-lg py-2 mb-4"
                    style="cursor: pointer"
                  >
                    <div class="d-flex justify-center align-center">
                      <DynamicIcon
                        v-if="!type.icon.includes('mdi')"
                        :icon="type.icon"
                        :primary="$vuetify.theme.themes.light.primary"
                        :width="24"
                        :height="22"
                      />
                      <v-icon v-else color="primary" class="mb-1" size="24">
                        {{ type.icon }}
                      </v-icon>
                      <p
                        class="text-h6 font-weight-bold primary--text mb-1 ml-2"
                      >
                        {{ type.text }}
                      </p>
                    </div>
                    <p class="caption text-center mb-0">
                      {{ type.desc }}
                    </p>
                  </div>
                </div>
                <v-divider></v-divider>
                <div
                  class="bg-primary-lt rounded-lg py-2 mt-4 mb-0"
                  style="cursor: pointer"
                >
                  <div class="d-flex justify-center align-center">
                    <v-icon color="primary" class="mb-1" size="24">
                      mdi-plus
                    </v-icon>
                    <p class="text-h6 font-weight-bold primary--text mb-1 ml-2">
                      Create a Custom Widget
                    </p>
                  </div>
                </div>
              </v-window-item>
              <v-window-item :value="2">
                <WidgetSettingsForm />
              </v-window-item>
              <v-window-item :value="3">
                <VueEditor
                  v-model="editorContent"
                  @textChange="editorChanged($event)"
                />
              </v-window-item>
            </v-window>
          </v-card-text>
          <v-card-actions class="d-flex align-center justify-center pb-8">
            <v-btn
              large
              @click="handleBack"
              class="curved light mr-2 px-16 text-capitalize"
            >
              Back
            </v-btn>
            <v-btn
              large
              class="curved gradient px-16 white--text ml-2 text-capitalize"
              @click="handleNext"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="elevated-light" height="100%">
          <v-card-title> Preview </v-card-title>
          <v-divider />
          <v-card-text class="pa-4">
            <div style="height: 60vh; min-width: 100%; background-color: red">
              <iframe
                src="https://ogamarketer.com/"
                style="
                  min-height: 200vh;
                  min-width: 182%;
                  zoom: 0.55;
                  -moz-transform: scale(0.55);
                  -moz-transform-origin: 0 0;
                  -o-transform: scale(0.55);
                  -o-transform-origin: 0 0;
                  -webkit-transform: scale(0.55);
                  -webkit-transform-origin: 0 0;
                "
                frameborder="0"
              ></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DynamicIcon from "../../../../blocks/DynamicIcon.vue";
import WidgetSettingsForm from "../../forms/WidgetSettingsForm.vue";
export default {
  components: { DynamicIcon, WidgetSettingsForm },
  data() {
    return {
      step: 1,
      editorContent: "",
      widgetTypes: [
        {
          text: "Message",
          value: "message",
          icon: "message",
          desc: "Just a simple message for your visitor within the widget",
        },
        {
          text: "Form",
          value: "form",
          icon: "mdi-note-text-outline",
          desc: "Display various types of forms to collect visitor data",
        },
        {
          text: "Code",
          value: "code",
          icon: "code",
          desc: "Embed your Surveymonkey or Google forms",
        },
        {
          text: "Video",
          value: "video",
          icon: "video",
          desc: "Play videos through your widgets.",
        },
      ],
    };
  },
  methods: {
    handleNext() {
      this.step++;
    },
    handleBack() {
      this.step--;
    },
    editorChanged(content) {
      console.log({ content });
    },
  },
};
</script>

<style>
</style>