<template>
  <div class="contact-list-table">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-layout row :wrap="false" align-center>
            <v-flex xs1 class="d-flex justify-center">
              <v-checkbox />
            </v-flex>
            <v-flex xs2 class="d-flex">
              <p class="mb-0">Name</p>
            </v-flex>
            <v-flex md2>
              <p class="mb-0">Email</p>
            </v-flex>
            <v-flex md2 class="d-flex">
              <p class="mb-0">Telephone</p>
            </v-flex>
            <v-flex md2>
              <p class="mb-0">Address</p>
            </v-flex>
            <v-flex md3 class="d-flex pl-2"> Tags </v-flex>
            <!-- <v-flex md2 class="d-flex pl-0"> Actions </v-flex> -->
          </v-layout>
          <ContactListTableList :contacts="contacts" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactListTableList from "./ContactListTableList.vue";
export default { components: { ContactListTableList }, props: ["contacts"] };
</script>

<style>
</style>