<template>
  <div class="contact-card">
    <v-card elevation="0" class="bg-primary-lt rounded-lg px-4 pt-3">
      <div class="d-flex align-start mb-4">
        <div style="width: 20%" class="mr-4">
          <v-avatar
            size="64"
            color="primary lighten-4"
            class="mt-2"
            style="border: 2px solid"
          >
            <v-img
              :aspect-ratio="1"
              :src="require('@/assets/imgs/avatarfemale2.png')"
            ></v-img>
          </v-avatar>
        </div>
        <div style="width: 80%">
          <div class="d-flex align-center">
            <p class="mb-0 p-18 p-color font-weight-bold">Dennis Hoffman</p>
            <v-spacer></v-spacer>
            <v-btn small icon class="mx-2"
              ><v-icon color="success">mdi-pencil</v-icon></v-btn
            >
            <v-btn small icon><v-icon color="error">mdi-delete</v-icon></v-btn>
          </div>
          <p class="mb-0 p-16 p-color">+2348069166906</p>
          <p class="mb-0 p-16 p-color">techybanky@gmail.com</p>
          <p class="mb-0 p-16 p-color">+2348069166906</p>
        </div>
      </div>
      <!-- <v-list three-line class="transparent py-0">
        <v-list-item>
          <v-list-item-avatar size="62">
            <v-avatar size="62" color="primary lighten-4" style="border: 2px solid;">
              <v-img
                :aspect-ratio="1"
                :src="require('@/assets/imgs/avatarfemale2.png')"
              ></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <div class="d-flex">
                <span>Dennis Hoffman</span>
                <v-divider vertical></v-divider>
                <v-sheet>
                <v-chip-group multiple active-class="primary--text">
                  <v-chip x-small v-for="tag in ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label6']" :key="tag">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
                </v-sheet>
                <v-btn icon color="success"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn icon color="error"><v-icon>mdi-delete</v-icon></v-btn>
              </div>
            </v-list-item-title>
            <v-list-item-subtitle
              >+234 (0) 8097282211 <br />
              dennis.hoffman@mail.com <br />
              Lagos, Nigeria.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-row align="center" style="max-width: 85%">
          <v-col cols="10" :class="labels.length > 2 ? 'ml-n8': ''">
            <v-slide-group>
              <!-- <template #prev="{active}">
                <v-icon v-if="active">mdi-chevron-left-box-outline</v-icon>
              </template> -->
              <v-slide-item
                v-for="(n, i) in labels"
                :key="i"
                class="mt-1"
              >
                <!-- active-class="purple white--text" -->
                <v-chip
                  class="mx-1"
                  x-small
                  :class="`${colors[i]}`"
                  depressed
                  rounded
                > 
                  {{ n }}
                </v-chip>
              </v-slide-item>
            </v-slide-group>
          </v-col>

          <v-col cols="2" class="px-0">
            <v-btn text class="text-capitalize" color="primary"
              >Add to List</v-btn
            >
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import AvatarImage from "./AvatarImage.vue";
export default {
  // components: { AvatarImage },
  data() {
    return {
      colors: ["primary", "secondary", "accent", "info", "warning", "error"],
      labels: [
                  'Label 1',
                  'Label 2',
                  // 'Label 3',
                  // 'Label 4',
                  // 'Label 5',
                  // 'Label 6',
                ]
    };
  },
};
</script>

<style>
</style>