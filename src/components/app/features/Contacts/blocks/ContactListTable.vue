<template>
  <div class="contact-list-table">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-layout row :wrap="false" align-center>
            <v-flex xs1 class="d-flex justify-center">
              <v-checkbox @change="toggleSelectAllContacts" :indeterminate="multiple" input-value="allContactsSelected"/>
            </v-flex>
            <v-flex xs2 class="d-flex">
              <p class="mb-0 font-weight-bold">Name</p>
            </v-flex>
            <v-flex md2>
              <p class="mb-0 font-weight-bold">Email</p>
            </v-flex>
            <v-flex md2 class="d-flex">
              <p class="mb-0 font-weight-bold">Telephone</p>
            </v-flex>
            <v-flex md2>
              <p class="mb-0 font-weight-bold">Address</p>
            </v-flex>
            <v-flex md3 class="d-flex pl-2 font-weight-bold"> Tags </v-flex>
            <!-- <v-flex md2 class="d-flex pl-0"> Actions </v-flex> -->
          </v-layout>
          <ContactListTableList @indeterminate="setIndeterminate" ref="contactListTableList" :contacts="contacts" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactListTableList from "./ContactListTableList.vue";
export default { 
  components: { ContactListTableList }, 
  props: ["contacts"],
  data(){
    return {
      allContactsSelected: false,
      multiple: true,
    }
  }, 
  methods: {
    toggleSelectAllContacts(e){
      console.log({e, act: "Select All Contacts"})
      this.$refs['contactListTableList'].selectAllContacts(e)
    }, 
    setIndeterminate(e){
      this.multiple = e;
      e ? console.log('indeterminate') : console.log("Not indeterminate")
    }
  }
};
</script>

<style>
</style>