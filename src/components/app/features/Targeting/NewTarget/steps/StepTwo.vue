
<template>
  <div class="step-two">
    <v-row>
      <v-col cols="4">
        <v-card class="elevated-light">
          <v-card-title>Widget Type</v-card-title>
          <v-divider />
          <v-card-text>
            <VueEditor v-model="editorContent" />
            <WidgetSettingsForm />
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
                  <p class="text-h6 font-weight-bold primary--text mb-1 ml-2">
                    {{ type.text }}
                  </p>
                </div>
                <p class="caption text-center mb-0">
                  {{ type.desc }}
                </p>
              </div>
            </div>
          </v-card-text>
          <v-card-actions />
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="elevated-light">
          <v-card-title> Preview </v-card-title>
          <v-divider />
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
};
</script>

<style>
</style>