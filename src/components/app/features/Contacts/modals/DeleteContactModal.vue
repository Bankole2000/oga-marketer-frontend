<template>
  <div class="edit-contact-modal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn icon class="accent mx-2" v-bind="attrs" v-on="on" small><v-icon small color="white">mdi-pencil</v-icon></v-btn> -->
        <v-btn icon class="error" v-bind="attrs" v-on="on" small><v-icon small color="white">mdi-trash-can</v-icon></v-btn>
        <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn> -->
      </template>

      <v-card class="rounded-lg elevated-light">
        <v-card-title class="d-flex headline primary white--text">
          Delete Contact
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false"><v-icon color="white">mdi-window-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          {{contact}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
         <v-btn @click="dialog = false" class="light primary--text text-capitalize px-6 curved mx-2">
            <v-icon left>mdi-window-close</v-icon>
             Cancel
          </v-btn>
          <v-btn @click="dialog = false" class="error white--text text-capitalize px-6 mx-2 curved">
            <v-icon left>mdi-trash-can</v-icon>
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['contact'],
  data(){
    return {
      dialog: false,
    }
  }, 
  methods: {
    show(value){
      this.dialog = value;
    }
  }
}
</script>

<style>

</style>