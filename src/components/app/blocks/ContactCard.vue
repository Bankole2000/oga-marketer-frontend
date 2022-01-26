<template>
  <div class="contact-card">
    <v-hover v-slot:default="{ hover }">
      <v-card
        elevation="0"
        style="transition: all 0.3s ease"
        :class="hover ? 'elevated' : 'elevated-light'"
        class="rounded-lg px-4 pt-3"
      >
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
              />
            </v-avatar>
          </div>
          <div style="width: 80%">
            <div class="d-flex align-center">
              <p class="mb-0 p-18 p-color font-weight-bold">Dennis Hoffman</p>
              <v-spacer />
              <v-btn small icon class="mx-2">
                <v-icon color="success"> mdi-pencil </v-icon>
              </v-btn>
              <v-btn small icon>
                <v-icon color="error"> mdi-delete </v-icon>
              </v-btn>
            </div>
            <p class="mb-0 p-16 p-color">+2348069166906</p>
            <p class="mb-0 p-16 p-color">techybanky@gmail.com</p>
            <p class="mb-0 p-16 p-color">+2348069166906</p>
          </div>
        </div>
        <v-divider />
        <v-card-actions>
          <v-row align="center" style="max-width: 85%">
            <v-col cols="10" :class="labels.length > 2 ? 'ml-n8' : ''">
              <v-slide-group>
                <v-slide-item v-for="(n, i) in labels" :key="i" class="mt-1">
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
              <v-btn text class="text-capitalize" color="primary">
                Add to List
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-hover>
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
        "Label 1",
        "Label 2",
        // 'Label 3',
        // 'Label 4',
        // 'Label 5',
        // 'Label 6',
      ],
    };
  },
};
</script>

<style>
</style>