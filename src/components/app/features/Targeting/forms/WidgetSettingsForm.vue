<template>
  <div class="widget-settings-form">
    <p>Widget Position</p>
    <div>
      <v-radio-group @change="changeWidgetPosition" v-model="widgetPosition">
        <div class="d-flex align-center">
          <v-radio value="top_left" class="my-0 ml-2"></v-radio>
          <p class="mb-0">Top Left</p>
          <v-spacer></v-spacer>
          <p class="mb-0">Top Right</p>
          <v-radio value="top_right" class="my-0 ml-2"></v-radio>
        </div>
        <br />
        <div class="d-flex align-center">
          <v-radio value="bottom_left" class="my-0 ml-2"></v-radio>
          <p class="mb-0">Bottom Left</p>
          <v-spacer></v-spacer>
          <p class="mb-0">Bottom Right</p>
          <v-radio value="bottom_right" class="my-0 ml-2"></v-radio>
        </div>
      </v-radio-group>
    </div>
    <p class="mb-1">Background Color</p>
    <v-row align="center">
      <v-col cols="6">
        <div class="d-flex" style="min-height: 30px; border: 1px solid grey; border-radius: 15px;">
        <div @click="backgroundColorMenu = !backgroundColorMenu" style="min-width: 70%; max-height: 28px; margin-top: 4px; border-radius: 13px; margin-left: 4px;" :style="{backgroundColor: widgetBackgroundColor}"></div>
        <v-menu
        content-class="elevated-light"
      v-model="backgroundColorMenu"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-card class="rounded-lg">
        <v-color-picker mode="hexa" @update:color="changeWidgetStyle($event, 'backgroundColor')" v-model="widgetBackgroundColor"></v-color-picker>
      </v-card>
        </v-menu>
      </div>
      </v-col>
      <v-col cols="6" class="pt-0">
        <v-text-field hide-details v-model="widgetBackgroundColor"></v-text-field>
      </v-col>
    </v-row>
      
    <v-row>
      <v-col cols="8">
        <v-select label="Font" :items="fontFamilies" @change="changeWidgetStyle($event, 'fontFamily')"></v-select>
      </v-col>
      <v-col cols="4">
        <v-select :items="fontSizes" @change="changeWidgetStyle($event, 'fontSize')" label="Font size"></v-select>
      </v-col>
    </v-row>
    <p class="mb-1">Font Color</p>
    <v-row align="center">
      <v-col cols="6">
        <div class="d-flex" style="min-height: 30px; border: 1px solid grey; border-radius: 15px;">
        <div @click="fontColorMenu = !fontColorMenu" style="min-width: 70%; max-height: 28px; margin-top: 4px; border-radius: 13px; margin-left: 4px;" :style="{backgroundColor: widgetFontColor}"></div>
        <v-menu
        content-class="elevated-light"
      v-model="fontColorMenu"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-card class="rounded-lg">
        <v-color-picker mode="hexa" @update:color="changeWidgetStyle($event, 'fontColor')" v-model="widgetFontColor"></v-color-picker>
      </v-card>
        </v-menu>
      </div>
      </v-col>
      <v-col cols="6" class="pt-0">
        <v-text-field hide-details v-model="widgetFontColor"></v-text-field>
      </v-col>
    </v-row>
    <v-divider class="mt-6"></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widgetPosition: "bottom_right",
      widgetBackgroundColor: "#EEEEEE",
      widgetFontColor: "#282828",
      backgroundColorMenu: false,
      fontColorMenu: false,
      fontFamilies: [
        {
          text: 'Times New Roman',
          value: '"Times New Roman", Times, serif',
        },
        {
          text: 'Arial',
          value: 'Arial, Helvetica, sans-serif',
        },
        {
          text: 'Lucida Console',
          value: '"Lucida Console", "Courier New", monospace',
        },
      ], 
    };
  },
  computed: {
    fontSizes(){
      let sizes = [];
      for (let i = 12; i < 100; i++) {
        if(i % 2 === 0 ) sizes.push(i)
      }
      return sizes
    }
  },
  methods: {
    changeWidgetPosition(e){
      console.log({e})
      this.$emit('updateWidgetSettings', {key: 'position', value: e})
    }, 
    changeWidgetStyle(e, key){
      console.log({e, key})
      this.$emit('updateWidgetSettings', {key, value: e})
    }, 
  },
};
</script>

<style>
</style>