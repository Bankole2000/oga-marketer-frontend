<template>
  <div class="edit-contact-modal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="accent mx-2" v-bind="attrs" v-on="on" small><v-icon small color="white">mdi-pencil</v-icon></v-btn>
        <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn> -->
      </template>

      <v-card class="rounded-lg elevated-light">
        <v-card-title class="d-flex headline primary white--text">
          Edit Contact
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false"><v-icon color="white">mdi-window-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center" style="width: 100%;">
              <div class="flex-grow" style="flex: 4;">
              <p class="title mb-0 mt-4 font-weight-bold">Main</p>
              <v-divider ></v-divider>
                </div>
                <v-spacer></v-spacer>
                <v-btn @click="expandMain = !expandMain" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-expand-transition>
            <div v-show="expandMain">
            <v-row>
            <v-col cols="6" class="pb-0">
              <v-text-field label="First Name" v-model="update.first_name"></v-text-field>
            </v-col>
            <v-col cols="6" class="pb-0">
              <v-text-field label="Last Name" v-model="update.last_name"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-text-field label="Email" v-model="update.email"></v-text-field>
              <v-text-field label="Phone Number" v-model="update.phone"></v-text-field>
            </v-col>
          </v-row>
            </div>
          </v-expand-transition>
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center" style="width: 100%;">
              <div class="flex-grow" style="flex: 4;">
              <p class="title mb-0 mt-4 font-weight-bold">Segments and Labels</p>
              <v-divider ></v-divider>
                </div>
                <v-spacer></v-spacer>
                <v-btn @click="expandSegments = !expandSegments" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-expand-transition>
            <div v-show="expandSegments">
              <v-row>
                {{contact}}
              </v-row>
            </div>
          </v-expand-transition>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-center py-4">
          <v-btn @click="dialog = false" class="light primary--text text-capitalize px-6 curved mx-2">
            <v-icon left>mdi-window-close</v-icon>
            Cancel
          </v-btn>
          <v-btn @click="dialog = false" class="gradient white--text text-capitalize px-6 mx-2 curved">
            <v-icon left>mdi-check</v-icon>
            Save
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
      expandMain: true,
      expandLocation: false,
      expandSegments: false,
      update: {

        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        location: "",
        country: "",
        city:"",
        birthdate: "",
      }
      
    }
  }, 
  methods: {
    show(value){
      this.dialog = value;
    }
  }, 
  mounted(){
    console.log(this.$data, this.contact)
    
      for (const prop in this.contact) {
        if(Object.hasOwnProperty.call(this.update, prop)){
          this.update[prop] = this.contact[prop]
          console.log({prop})
        }
      }
    
  }
}
</script>

<style>

</style>