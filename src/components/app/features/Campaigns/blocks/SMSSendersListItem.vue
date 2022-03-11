<template>
  <div class="sms-senders-list-item">
    <v-hover v-slot:default="{ hover }" >
      <v-layout row :wrap="false" class="my-0 py-1" align-center :class="hover ? 'elevated-light grey lighten-3': ''">
        <v-flex xs1 class="d-flex justify-center">
          <v-checkbox hide-details class="mb-2 mt-0"/>
        </v-flex>
        <v-flex xs4 class="d-flex">
          <p class="mb-0">{{sender.name}}</p>
        </v-flex>
        <v-flex md3>
          <v-chip v-if="sender.active" class="success lighten-1 mr-2" small>active</v-chip>
          <v-chip v-else class="error lighten-2 mr-2" small>inactive</v-chip>
        </v-flex>
        <v-flex md4 class="d-flex pl-4">
          <div>
            <DeleteSMSSenderModal :smsSender="sender" />
            <!-- <v-btn text color="primary" class="text-capitalize">Edit</v-btn>
            <v-btn text color="error" class="text-capitalize">Delete</v-btn>
            <v-btn text color="secondary" class="text-capitalize">Resend</v-btn> -->
          </div>
        </v-flex>
      </v-layout>
    </v-hover>
    <v-divider></v-divider>
  </div>
</template>

<script>
import DeleteSMSSenderModal from '../modals/DeleteSMSSenderModal.vue'
export default {

  components: { DeleteSMSSenderModal },
  props: ['sender'],
  data(){
    return {

    }
  }

}
</script>

<style>

</style>