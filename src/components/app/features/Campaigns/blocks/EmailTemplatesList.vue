<template>
  
    <v-col cols="2" class="pb-0">
      <v-hover v-slot:default="{ hover }">
        <div>
        <v-card>
          <v-img :src="`https://ogamarketer.com${template.image_url}`" contain :aspect-ratio="5/6">
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
          <v-scroll-y-reverse-transition>
            <v-overlay :opacity="0.4" absolute v-if="hover">
              <div class="px-4">
              <v-btn v-if="!isSample" @click="$router.push({name: 'app.campaigns.email-templates.edit', params: {id: template.id}})" block class="mb-2 text-capitalize primary"><v-icon left>mdi-pencil</v-icon> Edit</v-btn>
              <v-btn block v-if="isSample" class="mb-2 text-capitalize success"><v-icon left>mdi-plus</v-icon> Add</v-btn>
              <v-btn block class="mb-2 text-capitalize secondary"><v-icon left>mdi-eye</v-icon> Preview</v-btn>
              <v-btn v-if="!isSample" block class="mb-2 text-capitalize accent"><v-icon left>mdi-content-copy</v-icon> Copy</v-btn>
              <v-btn v-if="!isSample" block class="mb-0 text-capitalize error"><v-icon left>mdi-trash-can</v-icon> Delete</v-btn>
              </div>
            </v-overlay>
          </v-scroll-y-reverse-transition>
          </v-img>
        </v-card>
        <p class="text-center mt-1 mb-0">{{template.name}}</p>
        </div>
      </v-hover>
    </v-col>
  
</template>

<script>
export default {
  props: ['isSample', 'template'], 
  
}
</script>

<style>

</style>