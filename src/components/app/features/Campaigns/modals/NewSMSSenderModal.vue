<template>
  <div class="email-email-sender">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="primary" v-bind="attrs" v-on="on" class="text-capitalize"><v-icon left>mdi-pencil</v-icon> Edit</v-btn>
      </template>

      <v-card class="rounded-lg elevated-light"> 
        <v-card-title class="d-flex headline primary white--text">
          Edit SMS Sender
          <v-spacer></v-spacer>
          <v-btn :disabled="loading" icon @click="dialog = false"><v-icon color="white">mdi-window-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['emailSender'],
  data(){
    return {
      dialog: false, 
      loading: false,
    }
  }
}
</script>

<style>

</style>