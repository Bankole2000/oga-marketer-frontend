<template>
  <div class="contact-list-table-item">
    <v-divider></v-divider>
    <v-layout row :wrap="false" align-center>
      <v-flex xs1 class="d-flex justify-center">
        <v-checkbox />
      </v-flex>
      <v-flex xs2 class="d-flex">
        <p class="mb-0 text-truncate">
          {{ contact.first_name }} {{ contact.last_name }}
        </p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0 text-truncate">{{ contact.email }}</p>
      </v-flex>
      <v-flex md2 class="d-flex">
        <p class="mb-0">{{ contact.phone }}</p>
      </v-flex>
      <v-flex md2>
        <p class="mb-0 text-truncate">
          {{ contact.location }} {{ contact.city }}
        </p>
      </v-flex>
      <v-flex md1 class="d-flex pl-0">
        <v-chip class="bg-primary-lt mr-2" small>tag I</v-chip>
        <v-chip class="bg-primary-lt" small>tag II</v-chip>
      </v-flex>
      <v-flex md2 class="d-flex pl-0">
        <v-divider vertical class="mx-4"></v-divider>
        <p class="mb-0 mr-3 primary--text">Edit</p>
        <p class="mb-0 error--text">Delete</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["contact"],
  // props: {
  //   contact: {
  //     type: Object,
  //     default: () => ({
  //       id: 999,
  //       name: "Jane Doe",
  //       phone: "+123(0)8012345678",
  //       email: "contact@email.com",
  //       profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
  //       labels: ["Label 1", "Label 2"],
  //       address: {
  //         street: "Maple Street",
  //         city: "Gotham City",
  //       },
  //     }),
  //   },
  // },
};
</script>

<style>
</style>