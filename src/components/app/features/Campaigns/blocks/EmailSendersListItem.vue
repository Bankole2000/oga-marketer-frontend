<template>
  <div class="email-senders-list-item">
    <v-hover v-slot:default="{ hover }" >
      <v-layout row :wrap="false" class="my-0 py-1" align-center :class="hover ? 'elevated-light grey lighten-3': ''">
        <v-flex xs1 class="d-flex justify-center">
          <v-checkbox hide-details class="mb-2 mt-0"/>
        </v-flex>
        <v-flex xs3 class="d-flex">
          <p class="mb-0">{{sender.name}}</p>
        </v-flex>
        <v-flex md3>
          <p class="mb-0">{{sender.email}}</p>
        </v-flex>
        <v-flex md1 class="d-flex">
          <v-chip v-if="sender.active" class="success lighten-1 mr-2" small>active</v-chip>
          <v-chip v-else class="error lighten-2 mr-2" small>inactive</v-chip>
        </v-flex>
        <v-flex md4 class="d-flex pl-4">
          <div class='d-flex'>
            <EditEmailSenderModal :emailSender="sender" />
            <DeleteEmailSenderModal :emailSender="sender" />
            <ResendConfirmationLinkModal v-if="!sender.active" :emailSender="sender" />
          </div>
        </v-flex>
      </v-layout>
    </v-hover>
    <v-divider></v-divider>
  </div>
</template>

<script>
import DeleteEmailSenderModal from '../modals/DeleteEmailSenderModal.vue'
import EditEmailSenderModal from '../modals/EditEmailSenderModal.vue'
import ResendConfirmationLinkModal from '../modals/ResendConfirmationLinkModal.vue'
export default {
  components: { EditEmailSenderModal, DeleteEmailSenderModal, ResendConfirmationLinkModal },
  props: ['sender']
}
</script>

<style>

</style>