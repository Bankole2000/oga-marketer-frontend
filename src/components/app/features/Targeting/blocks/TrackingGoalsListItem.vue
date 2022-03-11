<template>
  <div class="tracking-goals-list-item">
    <v-hover v-slot:default="{ hover }" >
      
      <v-layout row :wrap="false" class="my-0 py-1" align-center :class="hover ? 'elevated-light grey lighten-3': ''">
        <v-flex xs1 class="d-flex justify-center">
          <v-checkbox hide-details class="mb-2 mt-0"/>
        </v-flex>
        <v-flex xs2 class="d-flex">
          <p class="mb-0">{{goal.name}}</p>
        </v-flex>
        <v-flex md5>
          <p class="my-0 pt-4" v-html="goal.text"></p>
        </v-flex>
        <v-flex md2 class="d-flex flex-column">
         <div class="mb-0" v-for="(event, i) in goal.events" :key="i">
           <p class="mb-0">{{event.name}}</p>
         </div>
        </v-flex>
        <v-flex md2 class="d-flex pl-4">
          <div class='d-flex flex-column'>
            <v-btn text color="primary" class="text-capitalize mb-1"><v-icon left>mdi-pencil</v-icon> Edit</v-btn>
            <v-btn text color="error" class="text-capitalize"><v-icon left>mdi-trash-can</v-icon> Delete</v-btn>
            <!-- <EditEmailSenderModal :emailSender="sender" />
            <DeleteEmailSenderModal :emailSender="sender" />
            <ResendConfirmationLinkModal v-if="!sender.active" :emailSender="sender" /> -->
          </div>
        </v-flex>
      </v-layout>
      
    </v-hover>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['goal']
}
</script>

<style>

</style>