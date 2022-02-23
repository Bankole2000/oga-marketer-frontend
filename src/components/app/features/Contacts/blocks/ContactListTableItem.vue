<template>
    <v-hover v-slot:default="{ hover }" >
  <div class="contact-list-table-item">
    <v-divider></v-divider>
    <v-layout row :wrap="false" class="my-auto" :class="hover ? 'elevated-light grey lighten-3': ''" align-center >
      <v-flex xs1 class="d-flex justify-center">
        <v-checkbox @change="toggleSelected" v-model="isSelected"/>
      </v-flex>
      <v-flex xs2 class="d-flex">
        <router-link class="text-decoration-none" :to="{ name: 'app.contacts.contact-details', params: { id: contact.id }}">

        <p class="mb-0 text-truncate primary--text">
          {{ contact.first_name }} {{ contact.last_name }}
        </p>
        </router-link>
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
        <EditContactModal :contact="contact"/>
        <DeleteContactModal :contact="contact" />
        <!-- <p class="mb-0 mr-3 primary--text">Edit</p>
        <p class="mb-0 error--text">Delete</p> -->
      </v-flex>
    </v-layout>
  </div>
    </v-hover>
</template>

<script>
import DeleteContactModal from '../modals/DeleteContactModal.vue';
import EditContactModal from '../modals/EditContactModal.vue';
export default {
  components: { EditContactModal, DeleteContactModal },
  props: ["contact", "selected"],
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
  watch: {
    selected: function(newValue, oldValue) {
      this.isSelected = newValue;
      console.log({oldValue, newValue})
    }
  },
  data(){
    return {
      isSelected: false
    }
  }, 
  methods: {
    toggleSelected(e){
      console.log("🚀 ContactListTableItem.vue ~ line 76 ~ toggleSelected ~ e", e.target, `${e ? 'add': 'remove'}`)
      if(e){
        this.$emit('add', this.contact.id)
      } else {
        this.$emit('remove', this.contact.id)
      }
    }
  }
};
</script>

<style>
</style>