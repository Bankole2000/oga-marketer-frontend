
<template>
  <div class="step-two">
    <v-row>
      <v-col cols="4">
        <v-card class="elevated-light rounded-lg">
          <v-card-title>Widget Type</v-card-title>
          <v-divider />
          <v-card-text>
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-item-group @change="setSelectedWidgetType" v-model="selectedWidgetType">
                <div v-for="(type, i) in widgetTypes" :key="i">
                  <v-item :value="type" v-slot:default="{ active, toggle }">
                    <div
                     v-if="type.value === 'custom'"
                    :class="active ? 'bg-success-lt':'bg-primary-lt'"
                    class="rounded-lg py-2 mt-4 mb-0"
                    style="cursor: pointer"
                    @click="toggle"
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
                    <div
                      v-else
                      :class="active ? 'bg-success-lt':'bg-primary-lt'"
                      class="rounded-lg py-2 mb-4"
                      style="cursor: pointer"
                      @click="toggle"
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
                    
                  </v-item>
                  <v-divider v-if="i == widgetTypes.length - 2"></v-divider>
                </div>
                </v-item-group>
              </v-window-item>
              <v-window-item :value="2">
                <WidgetSettingsForm @updateWidgetSettings="updateWidgetSettings" />
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
              :class="selectedWidgetType ? 'gradient':''"
              :disabled="!selectedWidgetType"
              class="curved px-16 white--text ml-2 text-capitalize"
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
            <div class="bg-primary-lt" style="height: 60vh; min-width: 100%; position: relative;">
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
              <div style="position: absolute; width: 200px; min-height: 80px; border-radius: 10px; margin-bottom: 20px; margin-right: 10px;" :style="{ ...widgetSettings, color: widgetSettings.fontColor }" class="pa-4 elevated-light">
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi labore sequi</p>
              </div>
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
        {
          text: 'Custom',
          value: 'custom',
          icon: 'plus',
          desc: 'Create a Custom Widget',
        }
      ],
      selectedWidgetType: "",
      widgetSettings: {
        top: '',
        left: '',
        bottom: '0px',
        right: '0px',
        backgroundColor: '#FEFEFE',
        fontColor: '#282828',
        fontSize: '12',
        fontFamily: '',
      },
    };
  },
  methods: {
    updateWidgetSettings(e){
      console.log("🚀  line 183 ~ updateWidgetSettings ~ e", e)
      let positionValues = null;
      if (e.key == 'position') positionValues = e.value.split('_') ;
      console.log({positionValues})
      switch (e.key) {
        case 'position':
          this.widgetSettings.top = positionValues.includes('top') ? '0px': ''
          this.widgetSettings.bottom = positionValues.includes('bottom') ? '0px': ''
          this.widgetSettings.left = positionValues.includes('left') ? '0px': ''
          this.widgetSettings.right = positionValues.includes('right') ? '0px': ''
          break;
        case 'backgroundColor':
          this.widgetSettings.backgroundColor = e.value.hexa
          break;
        case 'fontColor':
          this.widgetSettings.fontColor = e.value.hexa;
          break;
        case 'fontSize':
          this.widgetSettings.fontSize = `${e.value}px`;
          break;
        case 'fontFamily':
          this.widgetSettings.fontFamily =`${e.value} !important`;
          break;
        default:
          break;
      }
    },
    setSelectedWidgetType(e){
      console.log({selectedWidgetType: this.selectedWidgetType})
      console.log({e});
    },
    handleNext() {
      this.step++;
    },
    handleBack() {
      if(this.step === 1){
        this.$emit('back');
        return
      }
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