<template>
  <div class="contact-card">
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click="$emit('click')"
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
              <v-img :aspect-ratio="1" :src="contact.profileImage" />
            </v-avatar>
          </div>
          <div style="width: 80%">
            <div class="d-flex align-center">
              <p
                class="mb-0 p-18 p-color font-weight-bold text-truncate"
                :title="contact.name"
              >
                {{ contact.name }}
              </p>
              <v-spacer />
              <v-btn small icon class="mx-2" @click.stop="editContact">
                <v-icon color="success"> mdi-pencil </v-icon>
              </v-btn>
              <v-btn small icon @click.stop="deleteContact">
                <v-icon color="error"> mdi-delete </v-icon>
              </v-btn>
            </div>
            <p class="mb-0 p-16 p-color">{{ contact.phone }}</p>
            <p class="mb-0 p-16 p-color">{{ contact.email }}</p>
            <p class="mb-0 p-16 p-color">
              {{ contact.address.street }} {{ contact.address.city }}
            </p>
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
              <v-btn
                text
                class="text-capitalize"
                color="primary"
                @click.stop="addToList"
              >
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
  props: {
    contact: {
      type: Object,
      required: true,
      default: () => ({
        id: 999,
        name: "Jane Doe",
        phone: "+123(0)8012345678",
        email: "contact@email.com",
        profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
        labels: ["Label 1", "Label 2"],
        address: {
          street: "Maple Street",
          city: "Gotham City",
        },
      }),
    },
  },
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
  methods: {
    addToList() {
      console.log("add to list");
    },
    editContact() {
      console.log("edit contact");
    },
    deleteContact() {
      console.log("delete contact");
    },
  },
};
</script>

<style>
</style>